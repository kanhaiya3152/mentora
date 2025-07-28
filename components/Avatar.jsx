'use client';

import Image from 'next/image';
import { useState } from 'react';

const Avatar = ({ src, alt, width = 40, height = 40, className }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setImgSrc('/avatar.jpeg')}
    />
  );
};

export default Avatar;
