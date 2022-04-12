import Image from 'next/image';
import { FC } from 'react';
import { Movie } from '@models/index';
import { ButtonFavorites, Animation } from '@components/shared';

const About: FC<Movie> = ({ id, backdrop_path, title }) => (
  <Animation from='right'>
    <Image
      alt={`Image to ${title}`}
      src={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}
      width={1280}
      height={720}
      layout='responsive'
    />
    <ButtonFavorites id={id} />
  </Animation>
);
export default About;
