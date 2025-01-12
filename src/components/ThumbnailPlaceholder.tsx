import React from 'react';

import { ImageUploadButton } from './ImageUploadButton';

export type ThumbnailPlaceholderProps = {
  handleFiles: (files: File[]) => void;
  multiple: boolean;
};

export const ThumbnailPlaceholder: React.FC<ThumbnailPlaceholderProps> = (
  props,
) => {
  const { multiple = false, handleFiles } = props;

  return (
    <ImageUploadButton handleFiles={handleFiles} multiple={multiple}>
      <div className="rfu-thumbnail-placeholder">
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 8.998H8v6H6v-6H0v-2h6v-6h2v6h6z"
            fill="#A0B2B8"
            fillRule="nonzero"
          />
        </svg>
      </div>
    </ImageUploadButton>
  );
};
