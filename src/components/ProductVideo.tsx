'use client'

import { useRef, useState } from 'react'
import { Play, Pause, Maximize2, X } from 'lucide-react'

interface ProductVideoProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
}

export default function ProductVideo({
  src,
  poster,
  className = '',
  autoPlay = true,
}: ProductVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    togglePlay()
  }

  return (
    <>
      <div className={`relative group ${className}`}>
        <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden">
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay={autoPlay}
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onClick={handleVideoClick}
          />

          {/* Overlay controls */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            {/* Play/Pause button - shows on hover or when paused */}
            <button
              onClick={handleVideoClick}
              className={`p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all ${
                isPlaying
                  ? 'opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100'
                  : 'opacity-100 scale-100'
              }`}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 text-slate-700" />
              ) : (
                <Play className="h-5 w-5 text-slate-700 ml-0.5" />
              )}
            </button>
          </div>

          {/* Fullscreen button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsFullscreen(true)
            }}
            className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 backdrop-blur-sm text-slate-600 hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-all"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Fullscreen modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            controls
            className="max-w-full max-h-full rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
