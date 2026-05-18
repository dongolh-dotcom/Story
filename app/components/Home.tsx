

import React from 'react'

const Home = () => {
  return (
    <>
    
    
    {/* <!-- Background Effects --> */}
  <div className="fixed inset-0 stars-bg pointer-events-none z-0"></div>
  <div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>

  {/* <!-- Pink Glow Orbs --> */}
  <div className="fixed top-[-200px] left-[-100px] w-[800px] h-[500px] rounded-full pointer-events-none z-0" style="background: radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 70%); filter: blur(100px);"></div>
  <div className="fixed bottom-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none z-0" style="background: radial-gradient(circle, rgba(244,114,182,0.06) 0%, transparent 70%); filter: blur(120px);"></div>

  {/* <!-- Toast --> */}
  <div id="toast" className="toast">
    <div className="flex items-center gap-3">
      <i data-lucide="check-circle" className="w-5 h-5 text-momento-400"></i>
      <span id="toast-msg" className="text-sm text-neutral-200">Welcome to Momento!</span>
    </div>
  </div>

  {/* <!-- ============ NAVIGATION ============ --> */}
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5" style="backdrop-filter: blur(24px); background: rgba(5,5,5,0.8);">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      {/* <!-- Logo --> */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="relative w-8 h-8">
          <div className="absolute inset-0 bg-momento-500 rounded-lg rotate-45 opacity-80 group-hover:rotate-[55deg] transition-transform duration-500"></div>
          <div className="absolute inset-1 bg-momento-400 rounded-md rotate-45 opacity-60 group-hover:rotate-[35deg] transition-transform duration-700"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <i data-lucide="sparkles" className="w-4 h-4 text-white"></i>
          </div>
        </div>
        <span className="font-bricolage font-semibold text-lg tracking-tight">Momento</span>
      </a>

      {/* <!-- Nav Links (Desktop) --> */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-xs text-neutral-400 hover:text-white transition-colors duration-150 uppercase tracking-widest">Features</a>
        <a href="#showcase" className="text-xs text-neutral-400 hover:text-white transition-colors duration-150 uppercase tracking-widest">Showcase</a>
        <a href="#community" className="text-xs text-neutral-400 hover:text-white transition-colors duration-150 uppercase tracking-widest">Community</a>
        <a href="#download" className="text-xs text-neutral-400 hover:text-white transition-colors duration-150 uppercase tracking-widest">Download</a>
      </div>

      {/* <!-- CTA Buttons --> */}
      <div className="flex items-center gap-3">
        <button onclick="showToast('Sign in coming soon!')" className="hidden sm:block text-sm text-neutral-400 hover:text-white transition-colors duration-150 px-4 py-2">Sign In</button>
        <button onclick="showToast('🎉 Welcome! Download link sent.')" className="text-sm font-medium px-5 py-2 rounded-full bg-momento-500 text-white hover:bg-momento-400 transition-all duration-300" style={{"box-shadow: 0 0 20px rgba(236,72,153,0.3);"}}>
          Get App
        </button>
        {/* <!-- Mobile Menu --> */}
        <button id="mobile-menu-btn" className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors">
          <i data-lucide="menu" className="w-5 h-5"></i>
        </button>
      </div>
    </div>

    {/* <!-- Mobile Menu Dropdown --> */}
    <div id="mobile-menu" className="hidden md:hidden border-t border-white/5 px-6 py-4" style="backdrop-filter: blur(24px); background: rgba(5,5,5,0.95);">
      <div className="flex flex-col gap-4">
        <a href="#features" className="text-sm text-neutral-400 hover:text-white transition-colors">Features</a>
        <a href="#showcase" className="text-sm text-neutral-400 hover:text-white transition-colors">Showcase</a>
        <a href="#community" className="text-sm text-neutral-400 hover:text-white transition-colors">Community</a>
        <a href="#download" className="text-sm text-neutral-400 hover:text-white transition-colors">Download</a>
      </div>
    </div>
  </nav>    
    
    </>
  )
}

export default Home
