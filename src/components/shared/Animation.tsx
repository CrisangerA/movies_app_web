/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, FC } from 'react';
import styles from './animation.module.css';

interface AnimationProps {
  from: 'left' | 'right';
}

const Animation: FC<AnimationProps> = ({ from, children }) => {
  const [classes, setClasses] = useState([styles.animated, styles[from]]);
  useEffect(() => {
    setClasses((prev) => [...prev, styles[`${from}Animated`]]);
  }, []);

  return (
    <div className={styles.container}>
      <div className={classes.join(' ')}>{children}</div>
    </div>
  );
};

export default Animation;
