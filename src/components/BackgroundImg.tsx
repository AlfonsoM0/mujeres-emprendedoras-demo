import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export default function BackgroundImg({
  Alt,
  Src,
}: {
  Alt: string;
  Src: string | StaticImport;
}) {
  return (
    <Image
      alt={Alt}
      src={Src}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
        zIndex: -1,
      }}
    />
  );
}
