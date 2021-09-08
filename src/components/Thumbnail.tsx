import React, { useCallback } from 'react';

import { IconButton } from './IconButton';

import placeholder from '../images/placeholder-generic.png';

export type ThumbnailProps = {
  handleClose?: (id?: string) => void;
  size?: number;
  image: string;
  id?: string;
};

const svg =
  '<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M465 5c5.53 0 10 4.47 10 10s-4.47 10-10 10-10-4.47-10-10 4.47-10 10-10zm3.59 5L465 13.59 461.41 10 460 11.41l3.59 3.59-3.59 3.59 1.41 1.41 3.59-3.59 3.59 3.59 1.41-1.41-3.59-3.59 3.59-3.59-1.41-1.41z" id="b"/><filter x="-30%" y="-30%" width="160%" height="160%" filterUnits="objectBoundingBox" id="a"><feOffset in="SourceAlpha" result="shadowOffsetOuter1"/><feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" in="shadowBlurOuter1"/></filter></defs><g transform="translate(-451 -1)" fill-rule="nonzero" fill="none"><use fill="#000" filter="url(#a)" xlink:href="#b"/><use fill="#FFF" fill-rule="evenodd" xlink:href="#b"/></g></svg>';

export const Thumbnail: React.FC<ThumbnailProps> = (props) => {
  const { id, image, size = 100, handleClose } = props;

  const onClose = useCallback(() => handleClose?.(id), [id, handleClose]);

  return (
    <div
      className="rfu-thumbnail__wrapper"
      style={{ width: size, height: size }}
    >
      <div className="rfu-thumbnail__overlay">
        {handleClose ? (
          <IconButton onClick={onClose}>
            <div dangerouslySetInnerHTML={{ __html: svg }} />
          </IconButton>
        ) : null}
      </div>
      <img src={image || placeholder} className="rfu-thumbnail__image" alt="" />
    </div>
  );
};
