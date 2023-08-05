'use client';

import { CSSProperties } from 'react';

export default function YoutubeEmbed({ youtubeURL }: { youtubeURL: string }) {
  const videoId = youtubeURL.split('v=')[1].split('&pp=')[0];

  return (
    <iframe
      style={VideoStyle}
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}

const VideoStyle: CSSProperties = {
  border: '1px solid red',
  marginTop: '25px',
  borderRadius: 15,
  width: '90vw',
  height: '45vw',
  maxWidth: 1150,
};
