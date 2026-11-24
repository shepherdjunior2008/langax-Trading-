export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Langax Trading | Shepherd Junior</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
<style>body{font-family:'Inter',sans-serif}</style>
</head>
<body class="bg-black text-white">
<nav class="p-5 flex justify-between items-center border-b border-gray-800">
  <div class="font-black text-xl">LANGAX <span class="text-yellow-400">TRADING</span></div>
  <div class="text-sm text-gray-400">by Shepherd Junior</div>
</nav>

<section class="px-6 py-20 text-center">
  <div class="inline-block px-4 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-xs font-bold mb-6">LIVE MARKETS</div>
  <h1 class="text-5xl md:text-7xl font-black leading-tight">TRADE<br><span class="text-yellow-400">SMARTER</span><br>NOT HARDER</h1>
  <p class="text-gray-400 mt-6 max-w-xl mx-auto">Professional Forex, Crypto & Gold signals from Kericho to the World. Join 500+ traders.</p>
  <div class="mt-10 flex flex-col md:flex-row gap-4 justify-center">
    <a href="https://wa.me/254700000000" class="bg-yellow-400 text-black font-black px-10 py-4 rounded-full">Join WhatsApp VIP</a>
    <a href="#markets" class="border border-white/20 px-10 py-4 rounded-full font-bold">View Markets</a>
  </div>
</section>

<section id="markets" class="px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
  <div class="bg-zinc-900 p-6 rounded-2xl border border-white/10"><div class="text-gray-400 text-xs">BTC/USD</div><div class="text-2xl font-bold mt-2">\$68,420 <span class="text-green-400 text-sm">+2.4%</span></div><div class="mt-3 h-2 bg-yellow-400 rounded w-3/4"></div></div>
  <div class="bg-zinc-900 p-6 rounded-2xl border border-white/10"><div class="text-gray-400 text-xs">XAU/USD GOLD</div><div class="text-2xl font-bold mt-2">\$2,642 <span class="text-green-400 text-sm">+0.8%</span></div><div class="mt-3 h-2 bg-yellow-400 rounded w-2/3"></div></div>
  <div class="bg-zinc-900 p-6 rounded-2xl border border-white/10"><div class="text-gray-400 text-xs">EUR/USD</div><div class="text-2xl font-bold mt-2">1.0842 <span class="text-red-400 text-sm">-0.2%</span></div><div class="mt-3 h-2 bg-red-400 rounded w-1/2"></div></div>
</section>

<section class="py-20 text-center border-t border-white/5 mt-10">
  <h2 class="text-3xl font-black">Ready to start?</h2>
  <p class="text-gray-500 mt-3">Contact Shepherd Junior on WhatsApp</p>
  <a href="https://wa.me/254700000000" class="inline-block mt-6 bg-white text-black font-black px-12 py-4 rounded-full">Chat Now</a>
</section>

<footer class="p-10 text-center text-gray-600 text-xs border-t border-white/5">
  © 2026 Langax Trading - Shepherd Junior 2008 - Kericho, Kenya<br>Not financial advice. Trade at your own risk.
</footer>
</body>
</html>`;

    return new Response(html, {
      headers: { "content-type": "text/html;charset=UTF-8" }
    });
  }
}
`;

    // Paste and click **Commit changes**

After commit, Cloudflare will deploy in 30 sec and your white page will become a GOLD & BLACK professional trading site like Deriv/Binance!

After you paste, tell me and I will check your live link.

Change the WhatsApp number in the code to your real number.
