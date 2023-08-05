'use client';

import {
  Chip,
  Container,
  Skeleton,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
import { CSSProperties, useState } from 'react';
import db, { VideoCategory } from '@utils/db_fake';
import dynamic from 'next/dynamic';

const YoutubeEmbed = dynamic(() => import('@components/YoutubeEmbed'), {
  ssr: false,
  loading: () => (
    <Skeleton
      variant="rectangular"
      sx={{
        marginTop: '25px',
        borderRadius: 15,
        width: '90vw',
        height: '45vw',
        maxWidth: 1150,
      }}
    />
  ),
});

export default function Videos() {
  const vids = {
    liderazgo: db.videos.filter((v) => v.category == 'liderazgo'),
    carrera: db.videos.filter((v) => v.category == 'carrera'),
    iglesia: db.videos.filter((v) => v.category == 'iglesia'),
    valores: db.videos.filter((v) => v.category == 'valores'),
  };

  const [videoCategory, setVideoCategory] =
    useState<VideoCategory>('liderazgo');

  return (
    <main>
      <Container sx={ContainerChips}>
        <Typography variant="h1">Videos</Typography>
        <Chip
          label={`${vids[videoCategory].length}/${db.videos.length} videos`}
          sx={ChipStyleON}
        />
      </Container>

      <Container>
        <Typography variant="h2">Bienvenida, Mujer!</Typography>
        <Typography variant="body1" sx={{ fontSize: 15 }}>
          Aquí encontrarás el contenido relevante a tus areas
        </Typography>

        <YoutubeEmbed youtubeURL={vids[videoCategory][0].url} />

        <Typography sx={{ marginTop: 5 }} variant="h2">
          Todos los vídeos
        </Typography>
      </Container>

      <Container sx={ContainerChips}>
        <Chip
          onClick={(e) => setVideoCategory('liderazgo')}
          label="Liderazgo"
          sx={videoCategory == 'liderazgo' ? ChipStyleON : ChipStyleOFF}
        />
        <Chip
          onClick={(e) => setVideoCategory('carrera')}
          label="Carrera"
          sx={videoCategory == 'carrera' ? ChipStyleON : ChipStyleOFF}
        />
        <Chip
          onClick={(e) => setVideoCategory('iglesia')}
          label="Iglesia"
          sx={videoCategory == 'iglesia' ? ChipStyleON : ChipStyleOFF}
        />
        <Chip
          onClick={(e) => setVideoCategory('valores')}
          label="Valores"
          sx={videoCategory == 'valores' ? ChipStyleON : ChipStyleOFF}
        />
      </Container>

      {vids[videoCategory].map((vid, i) => {
        if (i !== 0)
          return (
            <Container key={i}>
              <YoutubeEmbed youtubeURL={vid.url} />

              <Typography variant="h2">{vid.title}</Typography>
              <Typography variant="caption">{vid.info}</Typography>
            </Container>
          );
      })}
    </main>
  );
}

// STYLES
const ContainerChips: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 3,
};

const ChipStyleON: SxProps<Theme> = {
  background: '#141416',
  color: '#999999',
  cursor: 'pointer',
};
const ChipStyleOFF: SxProps<Theme> = {
  background: '#f8f8f8',
  color: '#999999',
  cursor: 'pointer',
};
