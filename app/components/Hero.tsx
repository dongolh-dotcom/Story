

import React from 'react'

const Hero = () => {
  return (
    <>
    
    <section className="relative pt-24 lg:pt-32 pb-20 px-6">
<div className="max-w-7xl mx-auto">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

    {/* <!-- Left: Text Content --> */}
    <div className="lg:col-span-6 flex flex-col gap-6">
      {/* <!-- Badge --> */}
      <div className="anim-in delay-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-momento-500/20 bg-momento-500/5 w-fit">
        {/* <div className="w-1.5 h-1.5 rounded-full bg-momento-400" 
        style={{"box-shadow: 0 0 8px rgba(244,114,182,0.8)"}}>
            
        </div> */}
        <span className="text-[11px] uppercase tracking-widest text-momento-300">Social Platform</span>
      </div>

      {/* <!-- Headline --> */}
      <h1 className="anim-in delay-2 font-bricolage text-[44px] lg:text-[64px] font-light leading-[1.05] tracking-tight">
        Share Moments.<br/>
        <span className="gradient-text-pink">Inspire the World.</span>
      </h1>

      {/* <!-- Description --> */}
      <p className="anim-in delay-3 text-lg text-neutral-400 leading-relaxed max-w-lg">
        Connect with creators, share your stories, and discover trending moments from a vibrant global community. Your next inspiration starts here.
      </p>

      {/* <!-- CTA Buttons --> */}
      <div className="anim-in delay-4 flex flex-wrap gap-4 mt-2">
        <button onclick="showToast('🚀 Download link sent to your device!')" className="group relative px-8 py-3.5 rounded-full bg-momento-500 text-white font-medium text-base hover:bg-momento-400 transition-all duration-300 overflow-hidden" style="box-shadow: 0 0 30px rgba(236,72,153,0.4);">
          <span className="relative z-10 flex items-center gap-2">
            Download Free
            <i data-lucide="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
          </span>
        </button>
        <button onclick="document.getElementById('showcase').scrollIntoView({behavior:'smooth'})" className="px-8 py-3.5 rounded-full border border-white/10 text-neutral-300 font-medium text-base hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 flex items-center gap-2">
          <i data-lucide="play-circle" className="w-5 h-5 text-momento-400"></i>
          Watch Demo
        </button>
      </div>

      {/* <!-- Stats row --> */}
      <div className="anim-in delay-5 flex gap-8 mt-4">
        <div>
          <div className="font-bricolage text-2xl font-light gradient-text-pink">2M+</div>
          <div className="text-xs text-neutral-500 mt-1">Active Users</div>
        </div>
        <div>
          <div className="font-bricolage text-2xl font-light gradient-text-pink">50M+</div>
          <div className="text-xs text-neutral-500 mt-1">Moments Shared</div>
        </div>
        <div>
          <div className="font-bricolage text-2xl font-light gradient-text-pink">190+</div>
          <div className="text-xs text-neutral-500 mt-1">Countries</div>
        </div>
      </div>
    </div>

    {/* <!-- Right: Phone Mockups --> */}
    <div className="lg:col-span-6 flex justify-center items-center gap-4 lg:gap-6">
      {/* <!-- Phone 1: Share & Discover --> */}
      <div className="anim-in delay-3 float-1 phone-mockup hidden sm:block" style="margin-top: 40px;">
        <div className="phone-notch"></div>
        <div className="phone-content h-full pb-10" style="background: linear-gradient(180deg, #1a0a12 0%, #0f0610 100%);">
          <div className="px-4 pt-2">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-momento-300 font-medium">MOMENTO</span>
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                  <i data-lucide="bell" className="w-2.5 h-2.5 text-momento-300"></i>
                </div>
                <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                  <i data-lucide="message-circle" className="w-2.5 h-2.5 text-momento-300"></i>
                </div>
              </div>
            </div>
            {/* <!-- User card --> */}
            <div className="rounded-xl p-3 mb-3" style="background: linear-gradient(135deg, rgba(236,72,153,0.15), rgba(244,114,182,0.05)); border: 1px solid rgba(236,72,153,0.15);">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://picsum.photos/seed/emma-carter/40/40.jpg" className="w-8 h-8 rounded-full border border-momento-500/30" alt="Emma" />
                <div>
                  <div className="text-[10px] font-medium text-white">Emma Carter</div>
                  <div className="text-[8px] text-momento-300">@emmacarter</div>
                </div>
              </div>
              <p className="text-[9px] text-neutral-300 mb-2">Sharing my morning sunrise moment ☀️ #MorningVibes</p>
              <img src="https://picsum.photos/seed/sunrise-momento/200/100.jpg" className="w-full h-16 object-cover rounded-lg mb-2" alt="Post" />
              <div className="flex gap-3">
                <div className="flex items-center gap-1 text-[8px] text-neutral-400"><i data-lucide="heart" className="w-2.5 h-2.5 text-momento-400"></i>2.4k</div>
                <div className="flex items-center gap-1 text-[8px] text-neutral-400"><i data-lucide="message-circle" className="w-2.5 h-2.5"></i>186</div>
                <div className="flex items-center gap-1 text-[8px] text-neutral-400"><i data-lucide="share-2" className="w-2.5 h-2.5"></i>52</div>
              </div>
            </div>
            <p className="text-[10px] text-momento-300 font-medium mb-2">Share And Discover Moments With Your Community</p>
            <button onclick="showToast('Welcome aboard! 🎉')" className="w-full py-2 rounded-lg bg-momento-500 text-white text-[10px] font-medium">Sign Up Now</button>
          </div>
        </div>
      </div>

      {/* <!-- Phone 2: Show Globally (Center, Larger) --> */}
      <div className="anim-in delay-2 float-2 phone-mockup phone-mockup-lg pulse-glow" style="z-index: 10;">
        <div className="phone-notch"></div>
        <div className="phone-content h-full pb-10" style="background: linear-gradient(180deg, #1a0a12 0%, #0f0610 100%);">
          <div className="px-4 pt-2">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-momento-300 font-medium">MOMENTO</span>
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center">
                  <i data-lucide="globe" className="w-2.5 h-2.5 text-momento-300"></i>
                </div>
              </div>
            </div>
            <p className="text-[11px] font-medium text-white mb-3">Show Your Moments Globally</p>
            {/* <!-- Story Card --> */}
            <div className="rounded-xl overflow-hidden mb-3" style="border: 1px solid rgba(236,72,153,0.15);">
              <img src="https://picsum.photos/seed/your-story-glow/260/120.jpg" className="w-full h-24 object-cover" alt="Story" />
              <div className="p-2.5" style="background: rgba(236,72,153,0.08);">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-momento-400 to-momento-600 flex items-center justify-center">
                    <i data-lucide="plus" className="w-3 h-3 text-white"></i>
                  </div>
                  <span className="text-[10px] font-medium text-white">Your Story</span>
                </div>
                <span className="text-[8px] text-neutral-400">Tap to add your moment</span>
              </div>
            </div>
            {/* <!-- Feed --> */}
            <div className="rounded-xl p-2.5 mb-2" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://picsum.photos/seed/alex-chen/40/40.jpg" className="w-6 h-6 rounded-full" alt="Alex" />
                <div>
                  <div className="text-[9px] font-medium">Alex Chen</div>
                  <div className="text-[7px] text-neutral-500">2 min ago</div>
                </div>
              </div>
              <img src="https://picsum.photos/seed/city-night-momento/240/90.jpg" className="w-full h-16 object-cover rounded-lg mb-1.5" alt="Post" />
              <div className="flex gap-3">
                <div className="flex items-center gap-1 text-[8px] text-momento-400"><i data-lucide="heart" className="w-2.5 h-2.5"></i>1.8k</div>
                <div className="flex items-center gap-1 text-[8px] text-neutral-400"><i data-lucide="message-circle" className="w-2.5 h-2.5"></i>94</div>
              </div>
            </div>
            <div className="rounded-xl p-2.5" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05);">
              <div className="flex items-center gap-2 mb-2">
                <img src="https://picsum.photos/seed/mia-rose/40/40.jpg" className="w-6 h-6 rounded-full" alt="Mia" />
                <div>
                  <div className="text-[9px] font-medium">Mia Rose</div>
                  <div className="text-[7px] text-neutral-500">15 min ago</div>
                </div>
              </div>
              <img src="https://picsum.photos/seed/ocean-wave-momento/240/90.jpg" className="w-full h-16 object-cover rounded-lg mb-1.5" alt="Post" />
              <div className="flex gap-3">
                <div className="flex items-center gap-1 text-[8px] text-neutral-400"><i data-lucide="heart" className="w-2.5 h-2.5"></i>956</div>
                <div className="flex items-center gap-1 text-[8px] text-neutral-400"><i data-lucide="message-circle" className="w-2.5 h-2.5"></i>41</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Phone 3: Search & Trending --> */}
      <div className="anim-in delay-4 float-3 phone-mockup hidden sm:block" style="margin-top: 40px;">
        <div className="phone-notch"></div>
        <div className="phone-content h-full pb-10" style="background: linear-gradient(180deg, #1a0a12 0%, #0f0610 100%);">
          <div className="px-4 pt-2">
            <span className="text-[10px] text-momento-300 font-medium">SEARCH</span>
            {/* <!-- Search Bar --> */}
            <div className="flex items-center gap-2 mt-2 mb-3 px-3 py-2 rounded-xl" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);">
              <i data-lucide="search" className="w-3 h-3 text-neutral-500"></i>
              <span className="text-[9px] text-neutral-500">Search creators, trends...</span>
            </div>
            {/* <!-- Trending Now --> */}
            <p className="text-[10px] font-medium text-white mb-2">🔥 Trending Now</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg" style="background: rgba(236,72,153,0.08);">
                <span className="text-[9px] text-momento-400 font-medium">#SunsetVibes</span>
                <span className="text-[7px] text-neutral-500 ml-auto">12.4k posts</span>
              </div>
              <div 
  className="flex items-center gap-2 px-2 py-1.5 rounded-lg" 
  style={{ background: 'rgba(236, 72, 153, 0.05)' }}
>
                <span className="text-[9px] text-momento-300 font-medium">#TravelDiary</span>
                <span className="text-[7px] text-neutral-500 ml-auto">8.2k posts</span>
              </div>
              <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg" style="background: rgba(236,72,153,0.05);">
                <span className="text-[9px] text-momento-300 font-medium">#FoodArt</span>
                <span className="text-[7px] text-neutral-500 ml-auto">6.7k posts</span>
              </div>
            </div>
            {/* <!-- Trending Posts --> */}
            <p className="text-[9px] text-neutral-400 mt-3 mb-2">Popular Posts</p>
            <div className="grid grid-cols-2 gap-1.5">
              <img src="https://picsum.photos/seed/trend1-momento/100/100.jpg" className="w-full h-16 object-cover rounded-lg" alt="Trend" />
              <img src="https://picsum.photos/seed/trend2-momento/100/100.jpg" className="w-full h-16 object-cover rounded-lg" alt="Trend" />
              <img src="https://picsum.photos/seed/trend3-momento/100/100.jpg" className="w-full h-16 object-cover rounded-lg" alt="Trend" />
              <img src="https://picsum.photos/seed/trend4-momento/100/100.jpg" className="w-full h-16 object-cover rounded-lg" alt="Trend" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>    
    
    </>
  )
}

export default Hero