interface YouTubeShortsProps {
    videoId: string;
    title: string;
}

export function YouTubeShorts({ videoId, title }: YouTubeShortsProps) {
    return (
        <div className="not-prose my-8">
            <div className="flex flex-col items-center">
                <div className="w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    />
                </div>
                <p className="text-xs text-slate-400 mt-3 text-center">{title}</p>
            </div>
        </div>
    );
}
