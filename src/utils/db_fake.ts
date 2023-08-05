import { URLPattern } from 'next/server';

export type VideoCategory = 'liderazgo' | 'carrera' | 'iglesia' | 'valores';

interface Videos {
  title: string;
  info: string;
  category: VideoCategory;
  url: string;
}

const db: {
  videos: Videos[];
} = {
  videos: [
    {
      title: 'Mujeres líderes del emprendimiento | Laura Patiño | TEDxZamorano',
      info: '17:17 Min, hace 5 años',
      category: 'liderazgo',
      url: 'https://www.youtube.com/watch?v=LL7mvukI5ls&pp=ygUfbXVqZXJlcyBlbXByZW5kZWRvcmFzIGxpZGVyYXpnbw%3D%3D',
    },
    {
      title:
        'El poderío del liderazgo femenino | Patrycia Centeno | TEDxTarragona',
      info: '13:25 Min, hace 1 año',
      category: 'liderazgo',
      url: 'https://www.youtube.com/watch?v=eGyNufJ8-Cg&pp=ygUfbXVqZXJlcyBlbXByZW5kZWRvcmFzIGxpZGVyYXpnbw%3D%3D',
    },
    {
      title: '15 Hábitos de las Mujeres Exitosas que debes ADOPTAR',
      info: '8:02 Min, hace 1 año',
      category: 'liderazgo',
      url: 'https://www.youtube.com/watch?v=WEJTRec4xU8&pp=ygUfbXVqZXJlcyBlbXByZW5kZWRvcmFzIGxpZGVyYXpnbw%3D%3D',
    },
    {
      title: 'Ep. 4: El Liderazgo De La Mujer | Hora del Té con Kelly Spyker',
      info: '52:33 Min, hace 1 año',
      category: 'liderazgo',
      url: 'https://www.youtube.com/watch?v=5Aw8ia4NecM&pp=ygUfbXVqZXJlcyBlbXByZW5kZWRvcmFzIGxpZGVyYXpnbw%3D%3D',
    },
    {
      title:
        '¡Grandes mujeres emprendedoras! | Recopilación | Shark Tank México',
      info: '54:34 Min, hace 2 años',
      category: 'carrera',
      url: 'https://www.youtube.com/watch?v=5lwctq3eslw&pp=ygUebXVqZXJlcyBlbXByZW5kZWRvcmFzIGNhcnJlcmFz',
    },
    {
      title:
        'V. Completa: Cuando ser fuerte es la única opción. Irene Villa, periodista y psicóloga',
      info: '42:38 Min, hace 4 años',
      category: 'carrera',
      url: 'https://www.youtube.com/watch?v=FLTRgs3k_Mk&pp=ygVZVi4gQ29tcGxldGE6IEN1YW5kbyBzZXIgZnVlcnRlIGVzIGxhIMO6bmljYSBvcGNpw7NuLiBJcmVuZSBWaWxsYSwgcGVyaW9kaXN0YSB5IHBzaWPDs2xvZ2E%3D',
    },
    {
      title: 'Principios Bíblicos para ser una mujer emprendedora',
      info: '1:29 hs, hace 8 años',
      category: 'iglesia',
      url: 'https://www.youtube.com/watch?v=9h7IvrXBZlA&pp=ygUdbXVqZXJlcyBlbXByZW5kZWRvcmFzIGlnbGVzaWE%3D',
    },
    {
      title:
        'Construye Tu Vida Con Sabiduría - Gloriana Montero | Prédicas Cristianas Para Mujeres',
      info: '55:37 Min, hace 1 año',
      category: 'iglesia',
      url: 'https://www.youtube.com/watch?v=hUDzbsx2INY&pp=ygUdbXVqZXJlcyBlbXByZW5kZWRvcmFzIGlnbGVzaWE%3D',
    },
    {
      title: '4a Edición Mujeres emprendedoras Incubadora Con Valores',
      info: '1:23 Min, hace 1 año',
      category: 'valores',
      url: 'https://www.youtube.com/watch?v=oDRgLZwss40&pp=ygUdbXVqZXJlcyBlbXByZW5kZWRvcmFzIHZhbG9yZXM%3D',
    },
    {
      title:
        'Valores empresariales SERIE cómo ser una mujer exitosa en los negocios',
      info: '6:40 Min, hace 8 años',
      category: 'valores',
      url: 'https://www.youtube.com/watch?v=meeh5fWk1to&pp=ygUdbXVqZXJlcyBlbXByZW5kZWRvcmFzIHZhbG9yZXM%3D',
    },
  ],
};

export default db;
