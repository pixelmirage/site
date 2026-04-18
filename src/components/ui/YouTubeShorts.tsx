"use client";

import { useState } from "react";

interface YouTubeShortsProps {
    videoId: string;
    title: string;
}

export function YouTubeShorts({ videoId, title }: YouTubeShortsProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="not-prose my-8">
            <div className="flex flex-col items-center">
                <div className="w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border border-slate-200 relative">
                    {isLoaded ? (
                        <iframe
                            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
                            title={title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    ) : (
                        <button
                            onClick={() => setIsLoaded(true)}
                            className="w-full h-full relative group cursor-pointer bg-black"
                            aria-label={`${title} videosunu oynat`}
                        >
                            {/* YouTube thumbnail */}
                            <img
                                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                                alt={title}
                                title={title}
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1" aria-hidden="true">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                        </button>
                    )}
                </div>
                <p className="text-xs text-slate-500 mt-3 text-center">{title}</p>
            </div>
        </div>
    );
}
