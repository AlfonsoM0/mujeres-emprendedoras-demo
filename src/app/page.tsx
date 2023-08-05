import Image from 'next/image';
import styles from './page.module.css';
import { Button, Container, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BackgroundImg from '../components/BackgroundImg';
import mujeresEmprendedoras from '@public/img/mujeres-emprendedoras.jpg';
import Link from 'next/link';
import { Metadata } from 'next';

export default function Home() {
  return (
    <>
      <BackgroundImg Alt="Mujeres Emprendedoras" Src={mujeresEmprendedoras} />
      <main>
        <Container>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{
              marginTop: '10vh',
              fontSize: 30,
              color: 'white',
              textShadow: '1px 1px 2px black',
              fontWeight: '600',
            }}
          >
            Yessi Michel
          </Typography>

          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{
              fontSize: 40,
              color: 'white',
              textShadow: '2px 2px 3px black',
              fontWeight: '900',
              marginTop: '20vh',
            }}
          >
            Bienvenidas
            <br />
            mujeres
            <br />
            emprendedoras
          </Typography>

          <Link
            href="/videos"
            style={{
              margin: 0,
              marginTop: '10vh',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Button
              variant="contained"
              size="small"
              sx={{
                textTransform: 'inherit',
                background: '#141416',
                borderRadius: 5,
              }}
            >
              Conecta
              <ArrowForwardIcon />
            </Button>
          </Link>
        </Container>
      </main>
    </>
  );
}
