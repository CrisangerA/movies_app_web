import { FC } from 'react';
import useFavorites from '@hooks/useFavorites';
import Slider from '@components/shared/Slider';
import Animation from '@components/shared/Animation';
import { FavoriteItem } from './index';

const FavoriteList: FC = () => {
  const { favorites } = useFavorites();

  if (favorites.length === 0) return <h1>You dont have favorites</h1>;

  return (
    <Animation from='left'>
      <Slider spaceBetween={10} slidesPerView={5}>
        {favorites.map((id) => (
          <FavoriteItem key={`Favorite-${id}`} id={id} />
        ))}
      </Slider>
    </Animation>
  );
};

export default FavoriteList;
