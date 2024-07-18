export interface Photo {
  itemImageSrc: string;
  thumbnailImageSrc?: string;
  alt?: string;
  title?: string;
}

export interface PicsumPhoto {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}
