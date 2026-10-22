"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Headphones,
  Pause,
  Play,
  Volume2,
} from "lucide-react";

export default function YouTubeMusicPlayer({
  videoId,
  title = "Now Playing",
  artist = "Nana Amoah",
  artwork = "/images/music/latest-release.png",
  description = "Listen to the latest release.",
}) {
  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  const playTrack = useCallback(() => {
    if (!playerRef.current || !isReady) return;

    try {
      playerRef.current.unMute();
      playerRef.current.playVideo();
      setIsMuted(false);
    } catch {
      // Keep the Play button available if playback cannot start.
      setIsPlaying(false);
    }
  }, [isReady]);

  const toggleMute = useCallback(() => {
    if (!playerRef.current || !isReady) return;

    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  }, [isMuted, isReady]);

  useEffect(() => {
    if (!videoId || !containerRef.current) return;

    let cancelled = false;
    let player;
    let readyHandler;

    const createPlayer = () => {
      if (
        cancelled ||
        !containerRef.current ||
        !window.YT?.Player
      ) {
        return;
      }

      player = new window.YT.Player(containerRef.current, {
        width: "100%",
        height: "100%",
        videoId,
        playerVars: {
          autoplay: 1,
          controls: 1,
          playsinline: 1,
          rel: 0,
          enablejsapi: 1,
        },
        events: {
          onReady: (event) => {
            if (cancelled) return;

            playerRef.current = event.target;
            setIsReady(true);

            // Attempt audible autoplay. Browsers may block it.
            try {
              event.target.playVideo();
            } catch {
              setIsPlaying(false);
            }
          },
          onStateChange: (event) => {
            if (cancelled) return;

            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              setHasError(false);
            } else if (
              event.data === window.YT.PlayerState.PAUSED ||
              event.data === window.YT.PlayerState.ENDED ||
              event.data === window.YT.PlayerState.CUED
            ) {
              setIsPlaying(false);
            }
          },
          onError: () => {
            if (!cancelled) {
              setHasError(true);
              setIsPlaying(false);
            }
          },
          onAutoplayBlocked: () => {
            if (!cancelled) setIsPlaying(false);
          },
        },
      });
    };

    const loadPlayerApi = () => {
      if (window.YT?.Player) {
        createPlayer();
        return;
      }

      readyHandler = window.onYouTubeIframeAPIReady;

      window.onYouTubeIframeAPIReady = () => {
        readyHandler?.();
        createPlayer();
      };

      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        document.head.appendChild(script);
      }
    };

    loadPlayerApi();

    return () => {
      cancelled = true;

      if (player) {
        player.destroy();
      }

      playerRef.current = null;
    };
  }, [videoId]);

  if (!videoId) return null;

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#111] shadow-2xl shadow-black/30">
      <div className="grid md:grid-cols-[0.85fr_1.15fr]">
        {/* Track details */}
        <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden p-6 sm:p-8">
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center opacity-20 blur-2xl"
            style={{ backgroundImage: `url("${artwork}")` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#171717]/75 via-black/80 to-black" />

          <div className="relative z-10">
            <div className="mb-8 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/45">
              <Headphones size={14} />
              Featured listening
            </div>

            <div className="relative mb-5 aspect-square w-36 overflow-hidden rounded-2xl border border-white/10 shadow-xl sm:w-44">
              <Image
                src={artwork}
                alt={`${title} artwork`}
                fill
                sizes="176px"
                className="object-cover"
              />
            </div>

            <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-amber-200/70">
              Now on your playlist
            </p>

            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>

            <p className="mt-2 text-sm text-white/55">{artist}</p>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
              {description}
            </p>
          </div>

          <div className="relative z-10 mt-8 flex items-center gap-2 text-xs text-white/35">
            <span
              className={`h-2 w-2 rounded-full ${
                isPlaying ? "animate-pulse bg-amber-200" : "bg-white/25"
              }`}
            />
            {isPlaying ? "Now playing" : "Ready when you are"}
          </div>
        </div>

        {/* YouTube player */}
        <div className="flex flex-col justify-center border-t border-white/10 bg-black/40 p-4 sm:p-6 md:border-l md:border-t-0">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
            <div
              ref={containerRef}
              className="absolute inset-0 h-full w-full [&>iframe]:h-full [&>iframe]:w-full"
            />

            {!isPlaying && !hasError && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 p-4">
                <button
                  type="button"
                  onClick={playTrack}
                  disabled={!isReady}
                  className="group flex items-center gap-3 rounded-full border border-white/20 bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.03] hover:bg-amber-100 disabled:cursor-wait disabled:opacity-70"
                  aria-label={`Play ${title}`}
                >
                  <Play size={17} fill="currentColor" />
                  {isReady ? "Play track" : "Loading player..."}
                </button>
              </div>
            )}

            {hasError && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[#111] p-6 text-center">
                <p className="text-sm text-white/65">
                  This track could not be loaded. Check the video ID or
                  whether embedding is enabled for this video.
                </p>
                <a
                  href={`https://www.youtube.com/watch?v=${encodeURIComponent(videoId)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-amber-200 underline underline-offset-4"
                >
                  Listen on YouTube
                </a>
              </div>
            )}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-white">{title}</p>
              <p className="mt-1 text-xs text-white/40">
                Official YouTube audio / video
              </p>
            </div>

            <button
              type="button"
              onClick={isPlaying ? () => playerRef.current?.pauseVideo() : playTrack}
              disabled={!isReady || hasError}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 disabled:opacity-40"
              aria-label={isPlaying ? "Pause track" : "Play track"}
            >
              {isPlaying ? (
                <Pause size={18} />
              ) : (
                <Play size={18} fill="currentColor" />
              )}
            </button>
          </div>

          <button
            type="button"
            onClick={toggleMute}
            disabled={!isReady || hasError}
            className="mt-4 inline-flex items-center gap-2 self-start text-xs text-white/40 transition hover:text-white/80 disabled:opacity-40"
          >
            <Volume2 size={14} />
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
      </div>
    </section>
  );
}
