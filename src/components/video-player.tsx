// src/components/video-player.tsx

'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Maximize, Volume2, VolumeX } from 'lucide-react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}

// Helper: Get YouTube video ID from any YouTube URL
const getYouTubeId = (url: string): string | null => {
  if (!url) return null;
  
  // Handle: youtu.be/ID, youtube.com/watch?v=ID, youtube.com/shorts/ID, youtube.com/embed/ID
  const patterns = [
    /youtu\.be\/([^?&]+)/,
    /youtube\.com\/watch\?v=([^?&]+)/,
    /youtube\.com\/shorts\/([^?&]+)/,
    /youtube\.com\/embed\/([^?&]+)/,
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) return match[1];
  }
  return null;
};

export const VideoPlayer = ({ src, poster, title }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const youtubeId = getYouTubeId(src);
  const isYouTube = !!youtubeId;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const width = rect.width;
      const percentage = x / width;
      videoRef.current.currentTime = percentage * videoRef.current.duration;
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  // If YouTube URL, render iframe embed
  if (isYouTube) {
    return (
      <div className="relative w-full bg-black rounded-lg overflow-hidden">
        <div className="relative w-full aspect-video">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={title || 'Video'}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {title && (
          <div className="absolute top-4 left-4 text-white text-lg font-semibold drop-shadow-lg pointer-events-none">
            {title}
          </div>
        )}
      </div>
    );
  }

  // Otherwise, use native video player for MP4 files
  return (
    <div className="relative group bg-black rounded-lg overflow-hidden">
      <video
        ref={videoRef}
        className="w-full aspect-video"
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Progress Bar */}
        <div
          className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-3"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="text-white hover:text-primary transition-colors"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <button
              onClick={toggleMute}
              className="text-white hover:text-primary transition-colors"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
            <span className="text-white text-sm">
              {videoRef.current ? formatTime(videoRef.current.currentTime) : '0:00'}
            </span>
          </div>
          <button
            onClick={toggleFullscreen}
            className="text-white hover:text-primary transition-colors"
          >
            <Maximize size={20} />
          </button>
        </div>
      </div>

      {/* Title Overlay (optional) */}
      {title && (
        <div className="absolute top-4 left-4 text-white text-lg font-semibold drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
          {title}
        </div>
      )}
    </div>
  );
};

// Helper function to format time
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};