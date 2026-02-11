// _worker.js - This runs on Cloudflare's edge
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Example: Log all visits
    console.log(`Visitor from ${request.cf?.country} to ${url.pathname}`);
    
    // Example: Add custom headers
    const response = await env.ASSETS.fetch(request);
    const newResponse = new Response(response.body, response);
    newResponse.headers.set('X-Custom-Header', 'MySite');
    
    return newResponse;
  }
};
