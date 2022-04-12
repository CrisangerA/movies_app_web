import Image from 'next/image';
import { FC } from 'react';
import Slider from '@components/shared/Slider';
import { Actor } from '@models/index';
import styles from './about.module.css';

const ActorCard: FC<Actor> = ({ name, profile_path }) => (
  <>
    <Image
      alt={`Image to ${name}`}
      className={styles.actorImage}
      src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
      width={150}
      height={150}
      layout='fixed'
    />
    <p>{name}</p>
  </>
);

const Actors: FC<{ actors: Actor[] }> = ({ actors }) => (
  <Slider spaceBetween={10} slidesPerView={8}>
    {actors.map((actor) => (
      <ActorCard key={actor.id} {...actor} />
    ))}
  </Slider>
);

export default Actors;
