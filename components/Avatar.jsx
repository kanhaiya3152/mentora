'use client';

import { useState } from 'react';
import Image from 'next/image';

const Avatar = ({
  src,
  alt,
  className = '',
  width = 40,
  height = 40,
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc('/avatar.jpeg'); 
  };

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
    />
  );
};

export default Avatar;
