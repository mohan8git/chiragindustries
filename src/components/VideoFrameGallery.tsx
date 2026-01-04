'use client'

import { useEffect, useState, useRef } from 'react'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'

interface VideoFrameGalleryProps {
  videoSrc: string
  className?: string
}

export default function VideoFrameGallery({ videoSrc, className = '' }: VideoFrameGalleryProps) {
  const [frames, setFrames] = useState<string[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Extract frames from video
  useEffect(() => {
    const extractFrames = async () => {
      setIsLoading(true)
      setFrames([])

      const video = document.createElement('video')
      video.src = videoSrc
      video.crossOrigin = 'anonymous'
      video.muted = true
      video.preload = 'metadata'

      await new Promise<void>((resolve) => {
        video.onloadedmetadata = () => resolve()
      })

      const duration = video.duration
      const frameCount = Math.floor(duration) // 1 frame per second
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      if (!ctx) {
        setIsLoading(false)
        return
      }

      // Set canvas size
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      const extractedFrames: string[] = []

      for (let i = 0; i < frameCount; i++) {
        video.currentTime = i

        await new Promise<void>((resolve) => {
          video.onseeked = () => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
            extractedFrames.push(canvas.toDataURL('image/jpeg', 0.8))
            resolve()
          }
        })
      }

      setFrames(extractedFrames)
      setIsLoading(false)
    }

    extractFrames()
  }, [videoSrc])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % frames.length)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + frames.length) % frames.length)
  }

  // Touch/Mouse drag handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
    setDragOffset(0)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    const diff = clientX - startX
    setDragOffset(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    const threshold = 50
    if (dragOffset > threshold) {
      goToPrev()
    } else if (dragOffset < -threshold) {
      goToNext()
    }
    setDragOffset(0)
  }

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) handleDragEnd()
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    handleDragEnd()
  }

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 ${className}`}>
        <div className="text-center">
          <Loader2 className="h-8 w-8 text-slate-400 animate-spin mx-auto mb-2" />
          <p className="text-sm text-slate-500">Loading frames...</p>
        </div>
      </div>
    )
  }

  if (frames.length === 0) {
    return (
      <div className={`flex items-center justify-center bg-slate-100 ${className}`}>
        <p className="text-sm text-slate-500">No frames available</p>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {/* Main image container */}
      <div
        ref={containerRef}
        className="relative w-full h-full cursor-grab active:cursor-grabbing select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? dragOffset : 0}px))`,
            transitionDuration: isDragging ? '0ms' : '300ms',
          }}
        >
          {frames.map((frame, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0"
            >
              <img
                src={frame}
                alt={`Product view ${index + 1}`}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          goToPrev()
        }}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-slate-700 hover:text-slate-900 transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          goToNext()
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg text-slate-700 hover:text-slate-900 transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {frames.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation()
              setCurrentIndex(index)
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-white w-4'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Frame counter */}
      <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
        {currentIndex + 1} / {frames.length}
      </div>

      {/* Drag hint */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
        Swipe or drag to browse
      </div>
    </div>
  )
}
