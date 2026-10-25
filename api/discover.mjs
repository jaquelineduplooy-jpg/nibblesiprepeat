// Vercel Node.js Function. Keeps AI Gateway authentication off the browser.
// Requires an AI Gateway-enabled Vercel project (OIDC) or AI_GATEWAY_API_KEY set server-side.
const MODEL='openai/gpt-5.4-mini'; // Verified against AI Gateway model list on 25 October 2026.
const windowMs=15*60*1000;
const usage=new Map(); // Small, best-effort instance-local throttle. Enforce stronger limits with Vercel WAF in production.
const headers={'Cache-Control':'no-store','Content-Type':'application/json; charset=utf-8'};
const json=(body,status=200)=>new Response(JSON.stringify(body),{status,headers});
export default {
  async fetch(request){
    if(request.method!=='POST')return json({error:'Method not allowed'},405);
    const length=Number(request.headers.get('content-length')||0);
    if(length>2000)return json({error:'Your note is too long'},413);
    const origin=request.headers.get('origin');
    try{if(origin && new URL(origin).host!==new URL(request.url).host)return json({error:'Forbidden'},403)}catch{return json({error:'Forbidden'},403)}
    const ip=(request.headers.get('x-forwarded-for')||'unknown').split(',')[0].trim();
    const now=Date.now();
    if(usage.size>2500){for(const [key,value] of usage)if(value.until<now)usage.delete(key)}
    const entry=usage.get(ip);
    if(entry&&entry.until>now&&entry.count>=7)return json({error:'A few moments between discoveries, please. Try again later.'},429);
    usage.set(ip,{until:entry?.until>now?entry.until:now+windowMs,count:entry?.until>now?entry.count+1:1});
    let input;
    try{input=await request.json()}catch{return json({error:'Invalid request'},400)}
    const wish=typeof input?.wish==='string'?input.wish.trim():'';
    if(wish.length<5||wish.length>360)return json({error:'Please describe your wish in 5–360 characters.'},400);
    const auth=process.env.AI_GATEWAY_API_KEY||process.env.VERCEL_OIDC_TOKEN;
    if(!auth)return json({error:'Our AI discovery notes are being prepared; you can still send us your idea.'},503);
    const system=`You write beautiful, thoughtful, PERSONAL discovery notes for Nibble, Sip, Repeat, a coming-soon South African experience concept. The proposition is people connecting in genuine ways, human conversations, unexpected hosts, an antidote to endless scrolling, unhurried time, and secret, personal discoveries. The visitor describes a kind of experience they long for. Create a POSSIBILITY, not a factual listing or itinerary. Never invent specific existing venues, people, hosts, prices, transport, availability, or booking dates. Do not claim you searched real places or that experiences are currently for sale. Avoid generic luxury travel clichés and overblown adjectives. Make it grounded in the user's wish, South African in sensibility, vivid and intimate. Output ONLY valid JSON with keys: "headline" (4-9 evocative words, not generic), "description" (65-90 words, vivid, original, 1 paragraph), "invitation" (a brief line about how people rather than a screen make it real). Do not reproduce the user's text verbatim and do not ask them for personal data.`;
    const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),19000);
    let resp;
    try{resp=await fetch('https://ai-gateway.vercel.sh/v1/chat/completions',{method:'POST',headers:{Authorization:`Bearer ${auth}`,'Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify({model:MODEL,stream:false,temperature:.8,max_tokens:340,response_format:{type:'json_object'},messages:[{role:'system',content:system},{role:'user',content:wish}]})})}
    catch{return json({error:'The discovery note is temporarily unavailable.'},503)}
    finally{clearTimeout(timeout)}
    if(!resp.ok)return json({error:'The discovery note is temporarily unavailable.'},503);
    try{
      const result=await resp.json();const content=result?.choices?.[0]?.message?.content;
      if(typeof content!=='string')throw new Error('Missing output');
      const response=JSON.parse(content);
      const headline=String(response.headline||'').trim().slice(0,100);
      const description=String(response.description||'').trim().slice(0,950);
      const invitation=String(response.invitation||'').trim().slice(0,240);
      if(!headline||!description)throw new Error('Incomplete output');
      return json({headline,description,invitation});
    }catch{return json({error:'The discovery note was interrupted. Please try again.'},503)}
  }
};
