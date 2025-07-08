import React from 'react';
import styles from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleto, setSkeleto] = React.useState(true);
  function handleLoad({ target }) {
    setSkeleto(false);
    target.style.opacity = 1;
  }
  return (
    <div className={styles.wrapper}>
      {skeleto && <div className={styles.skeleton}></div>}
      <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;
