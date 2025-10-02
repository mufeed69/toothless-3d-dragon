import { useState, useEffect } from 'react'
import ModelViewer from './components/MainPage'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <ModelViewer 
        modelPath="/models/toothless-dragon.glb"  
        background="studio" // or "sky" or "none"
        scrollY={scrollY}
      />
      
      {/* Content to enable scrolling - Dragon themed with vibrant colors */}
      <div className="h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-800 flex items-center justify-center" style={{ marginTop: '100vh' }}>
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse">
            The Dragon Awakens
          </h1>
          <p className="text-xl text-blue-200 mb-8">Scroll to witness the ancient dragon's majestic journey across the sky</p>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="h-screen bg-gradient-to-b from-indigo-800 via-purple-700 to-pink-600 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-400 bg-clip-text text-transparent animate-bounce">
            Ancient Power
          </h2>
          <p className="text-xl text-purple-200 mb-6">Feel the dragon's presence growing stronger as it soars through the clouds</p>
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div className="bg-gradient-to-br from-red-900/80 to-orange-800/80 p-6 rounded-xl border-2 border-red-400/50 shadow-lg hover:scale-105 transition-transform">
              <div className="text-red-400 text-3xl mb-2 animate-pulse">🔥</div>
              <h3 className="text-lg font-semibold text-red-300">Fire Breath</h3>
              <p className="text-red-200 text-sm">Legendary flames that never extinguish</p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/80 to-cyan-800/80 p-6 rounded-xl border-2 border-blue-400/50 shadow-lg hover:scale-105 transition-transform">
              <div className="text-blue-400 text-3xl mb-2 animate-pulse">⚡</div>
              <h3 className="text-lg font-semibold text-blue-300">Lightning Speed</h3>
              <p className="text-blue-200 text-sm">Swift as the wind, fierce as the storm</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/80 to-emerald-800/80 p-6 rounded-xl border-2 border-green-400/50 shadow-lg hover:scale-105 transition-transform">
              <div className="text-green-400 text-3xl mb-2 animate-pulse">🛡️</div>
              <h3 className="text-lg font-semibold text-green-300">Ancient Wisdom</h3>
              <p className="text-green-200 text-sm">Millennia of knowledge and power</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-screen bg-gradient-to-b from-pink-600 via-rose-500 to-orange-400 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
            The Final Approach
          </h2>
          <p className="text-xl text-orange-200 mb-8">The dragon prepares for its grand finale</p>
          <div className="bg-gradient-to-br from-purple-900/90 to-pink-800/90 text-white p-8 rounded-2xl max-w-2xl mx-auto border-2 border-pink-400/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4 animate-bounce">Dragon's Challenge</h3>
            <p className="text-lg leading-relaxed">
              "Only those brave enough to scroll through the ancient scrolls may witness my true form. 
              Your journey through these lands has brought you to my domain. Are you ready to face the dragon?"
            </p>
          </div>
        </div>
      </div>
      
      <div className="h-screen bg-gradient-to-b from-orange-400 via-yellow-300 to-green-400 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Dragon's Gaze
          </h2>
          <p className="text-xl text-green-200 mb-8">The dragon now hovers above you - the animation is complete!</p>
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl max-w-2xl mx-auto border-2 border-yellow-400/50 shadow-2xl animate-pulse">
            <h3 className="text-3xl font-bold mb-4 animate-bounce">🎉 Animation Complete!</h3>
            <p className="text-lg">
              The dragon has reached its final position above "The End of the Journey" section. 
              It now hovers majestically, watching over the realm below.
            </p>
          </div>
        </div>
      </div>
      
      {/* Additional content sections */}
      <div className="h-screen bg-gradient-to-b from-slate-100 to-white flex items-center justify-center">
        <div className="text-center text-slate-800">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Dragon's Realm</h2>
          <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-slate-800 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Mystical Powers</h3>
              <ul className="text-left space-y-2">
                <li>• Control over fire and lightning</li>
                <li>• Ability to fly at incredible speeds</li>
                <li>• Ancient magical knowledge</li>
                <li>• Immortal lifespan</li>
              </ul>
            </div>
            <div className="bg-slate-800 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Dragon's Domain</h3>
              <ul className="text-left space-y-2">
                <li>• Mountain peaks and valleys</li>
                <li>• Crystal caves and treasures</li>
                <li>• Ancient libraries of magic</li>
                <li>• Sacred groves and forests</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-screen bg-gradient-to-b from-green-400 via-blue-500 to-purple-600 flex items-center justify-center relative">
        {/* Dragon indicator above this section */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-6xl animate-bounce">🐉</div>
          <p className="text-white font-bold text-lg">Dragon hovers above!</p>
        </div>
        
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
            The End of the Journey
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            You have successfully completed the dragon's scroll animation. 
            The ancient creature now hovers majestically above this section!
          </p>
          <div className="bg-gradient-to-br from-purple-900/90 to-blue-800/90 text-white p-8 rounded-2xl max-w-2xl mx-auto border-2 border-yellow-400/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4 animate-bounce">Thank You for Your Journey</h3>
            <p className="text-lg">
              The dragon's animation has reached its conclusion above this very section. 
              This interactive experience showcases the power of scroll-based 3D animations with dynamic camera movement.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
