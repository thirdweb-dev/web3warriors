interface YoutubeEmbedProps {
  youtubeId: string;
}

export const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ youtubeId }) => {
  const videoSrc = `https://www.youtube.com/embed/${youtubeId}`;

  return (
    <div className="my-10 aspect-w-16 aspect-h-9 h-80">
      <iframe
        src={videoSrc}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
        title="Web3 Warriors trailer"
      />
    </div>
  );
};