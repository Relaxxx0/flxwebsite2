"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface BackgroundMusicPlayerProps {
  audioSrc?: string
  autoPlay?: boolean
  initialVolume?: number
}

export default function BackgroundMusicPlayer({ 
  audioSrc = "/background-music.mp3", 
  autoPlay = true,
  initialVolume = 0.1 
}: BackgroundMusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(initialVolume)
  const [isMuted, setIsMuted] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleCanPlay = () => {
      setIsLoaded(true)
      if (autoPlay) {
        // Try to play with user interaction handling
        const playPromise = audio.play()
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true)
            })
            .catch((error) => {
              console.log("Auto-play prevented:", error)
              // Auto-play was prevented, user will need to click play
            })
        }
      }
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => {
      // Loop the music
      audio.currentTime = 0
      audio.play()
    }

    audio.addEventListener("canplay", handleCanPlay)
    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)
    audio.addEventListener("ended", handleEnded)

    // Set initial volume
    audio.volume = volume

    return () => {
      audio.removeEventListener("canplay", handleCanPlay)
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
      audio.removeEventListener("ended", handleEnded)
    }
  }, [autoPlay, volume])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio || !isLoaded) return

    if (isPlaying) {
      audio.pause()
    } else {
      const playPromise = audio.play()
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Play failed:", error)
        })
      }
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0]
    setVolume(volumeValue)
    setIsMuted(volumeValue === 0)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-background/80 backdrop-blur-md border border-border rounded-lg p-4 shadow-lg">
        <div className="flex items-center gap-3">
          {/* Play/Pause Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={togglePlayPause}
            disabled={!isLoaded}
            className="h-8 w-8 p-0"
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="h-8 w-8 p-0"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="h-4 w-4" />
              ) : (
                <Volume2 className="h-4 w-4" />
              )}
            </Button>
            
            <div className="w-20">
              <Slider
                value={[isMuted ? 0 : volume]}
                onValueChange={handleVolumeChange}
                max={1}
                min={0}
                step={0.1}
                className="cursor-pointer"
              />
            </div>
          </div>

          {/* Music indicator */}
          <div className="flex items-center gap-1">
            <div className={`w-1 h-3 bg-primary rounded-full ${isPlaying ? 'animate-pulse' : ''}`} />
            <div className={`w-1 h-2 bg-primary/70 rounded-full ${isPlaying ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.1s' }} />
            <div className={`w-1 h-4 bg-primary/50 rounded-full ${isPlaying ? 'animate-pulse' : ''}`} style={{ animationDelay: '0.2s' }} />
          </div>
        </div>

        {!isLoaded && (
          <div className="text-xs text-muted-foreground mt-2">
            Loading music...
          </div>
        )}
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        loop
        className="hidden"
      />
    </div>
  )
}
