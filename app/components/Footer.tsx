import React from 'react'

const Footer = () => {
  return (
    <>
    
    <footer className="border-t border-white/5 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {/* <!-- Brand --> */}
        <div className="col-span-2 md:col-span-1">
          <a href="#" className="flex items-center gap-3 mb-4">
            <div className="relative w-6 h-6">
              <div className="absolute inset-0 bg-momento-500 rounded-md rotate-45 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <i data-lucide="sparkles" className="w-3 h-3 text-white"></i>
              </div>
            </div>
            <span className="font-bricolage font-semibold text-base">Momento</span>
          </a>
          <p className="text-xs text-neutral-500 leading-relaxed">Share moments. Inspire the world. Connect with a global community of creators.</p>
        </div>

        {/* <!-- Links --> */}
        <div>
          <h5 className="text-xs font-medium text-neutral-400 mb-4 uppercase tracking-widest">Product</h5>
          <div className="space-y-2.5">
            <a href="#features" className="block text-xs text-neutral-500 hover:text-white transition-colors">Features</a>
            <a href="#" className="block text-xs text-neutral-500 hover:text-white transition-colors">Pricing</a>
            <a href="#" className="block text-xs text-neutral-500 hover:text-white transition-colors">Updates</a>
            <a href="#" className="block text-xs text-neutral-500 hover:text-white transition-colors">Beta</a>
          </div>
        </div>
        <div>
          <h5 className="text-xs font-medium text-neutral-400 mb-4 uppercase tracking-widest">Company</h5>
          <div className="space-y-2.5">
            <a href="#" className="block text-xs text-neutral-500 hover:text-white transition-colors">About</a>
            <a href="#" className="block text-xs text-neutral-500 hover:text-white transition-colors">Blog</a>
            <a href="#" className="block text-xs text-neutral-500 hover:text-white transition-colors">Careers</a>
            <a href="#" className="block text-xs text-neutral-500 hover:text-white transition-colors">Press</a>
          </div>
        </div>
        <div>
          <h5 className="text-xs font-medium text-neutral-400 mb-4 uppercase tracking-widest">Legal</h5>
          <div className="space-y-2.5">
            <a href="#" className="block text-xs text-neutral-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="block text-xs text-neutral-500 hover:text-white transition-colors">Terms</a>
            <a href="#" className="block text-xs text-neutral-500 hover:text-white transition-colors">Security</a>
            <a href="#" className="block text-xs text-neutral-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* <!-- Bottom bar --> */}
      <div className="h-px bg-white/5 mb-6"></div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-600">© 2024 Momento. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-neutral-600 hover:text-momento-400 transition-colors"><i data-lucide="twitter" className="w-4 h-4"></i></a>
          <a href="#" className="text-neutral-600 hover:text-momento-400 transition-colors"><i data-lucide="instagram" className="w-4 h-4"></i></a>
          <a href="#" className="text-neutral-600 hover:text-momento-400 transition-colors"><i data-lucide="youtube" className="w-4 h-4"></i></a>
          <a href="#" className="text-neutral-600 hover:text-momento-400 transition-colors"><i data-lucide="github" className="w-4 h-4"></i></a>
        </div>
      </div>
    </div>
  </footer>    
    
    </>
  )
}

export default Footer