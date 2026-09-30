import { useEffect, useRef, useState } from 'react';

type ProjectVideoProps = {
  src?: string;
  poster: string;
  alt: string;
  className?: string;
};

export const ProjectVideo = ({ src, poster, alt, className = '' }: ProjectVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src || videoFailed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src, videoFailed]);

  if (!src || videoFailed) {
    return <img src={poster} alt={alt} className={className} />;
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
      onError={() => setVideoFailed(true)}
      className={className}
    />
  );
};
