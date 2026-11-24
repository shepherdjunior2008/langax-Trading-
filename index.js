export default {
  async fetch(request) {
    return new Response("Langax Trading is Live - Shepherd Junior!", {
      headers: { "content-type": "text/html" }
    });
  }
}
