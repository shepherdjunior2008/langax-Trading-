export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Langax Trading</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-black text-white">
<nav class="p-5 flex justify-between border-b border-gray-800">
  <div class="font-black text-xl">LANGAX <span class="text-yellow-400">TRADING</span></div>
  <div class="text-sm text-gray-400">Shepherd Junior</div>
</nav>
<div class="px-6 py-20 text-center">
  <h1 class="text-5xl font-black">TRADE <span class="text-yellow-400">SMARTER</span></h1>
  <p class="text-gray-400 mt-6">Professional Forex, Crypto & Gold signals from Kericho.</p>
  <div class="mt-10">
    <a href="https://wa.me/254700000000" class="bg-yellow-400 text-black font-black px-10 py-4 rounded-full">Join WhatsApp VIP</a>
  </div>
</div>
<div class="px-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
  <div class="bg-zinc-900 p-6 rounded-2xl"><div class="text-xs text-gray-400">BTC/USD</div><div class="text-xl font-bold mt-2">$68,420 +2.4%</div></div>
  <div class="bg-zinc-900 p-6 rounded-2xl"><div class="text-xs text-gray-400">GOLD</div><div class="text-xl font-bold mt-2">$2,642 +0.8%</div></div>
  <div class="bg-zinc-900 p-6 rounded-2xl"><div class="text-xs text-gray-400">EUR/USD</div><div class="text-xl font-bold mt-2">1.0842 -0.2%</div></div>
</div>
<footer class="p-10 text-center text-gray-600 text-xs mt-20">© 2026 Langax Trading - Kericho, Kenya</footer>
</body>
</html>`;
    return new Response(html, { headers: { "content-type": "text/html" } });
  }
}
