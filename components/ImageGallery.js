import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const images = [
  {
    url: 'https://api.lorem.space/image/shoes?w=400&h=400&hash=8B7BCDC2',
  },
  {
    url: 'https://api.lorem.space/image/shoes?w=400&h=400&hash=500B67FB',
  },
  {
    url: 'https://api.lorem.space/image/shoes?w=400&h=400&hash=4F32C4CF',
  },
];

const ImageItem = ({ src, setMainImg, mainImg }) => {
  const [srcUrl, setSrcUrl] = useState(src);

  return (
    <Image
      className="opacity-100 hover:opacity-70"
      src={srcUrl}
      alt="new"
      height="250"
      width="250"
      onClick={() => {
        setMainImg(srcUrl);
        setSrcUrl(mainImg);
      }}
    />
  );
};

const ImageGallery = () => {
  const [mainImg, setMainImg] = useState(images[0].url);

  return (
    <main className=" bg-white text-almostBlack px-8 py-10 md:py-20 lg:py-30 lg:px-40 justify-between md:items-start">
      <div>
        <div className="inline-block">
          <h3
            className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
            style={{ lineHeight: '1.5rem' }}>
            <Link href="https://www.instagram.com/latinshinedance/" passHref>Follow us on</Link>
          </h3>
        </div>
        <div className="inline-block ml-1">
          <Link href="https://www.instagram.com/latinshinedance/" passHref>
            <svg
              className="dark:fill-white relative top-[1px] left-0 fill-black transition-colors cursor-pointer"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058ZM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0Zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
            </svg>
          </Link>
        </div>
      </div>
      <div
        style={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <Image src={mainImg} alt="new" height="500" width="500" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ImageItem
            src={images[1].url}
            setMainImg={setMainImg}
            mainImg={mainImg}
          />
          <ImageItem
            src={images[2].url}
            setMainImg={setMainImg}
            mainImg={mainImg}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <ImageItem
            src={images[1].url}
            setMainImg={setMainImg}
            mainImg={mainImg}
          />
          <ImageItem
            src={images[2].url}
            setMainImg={setMainImg}
            mainImg={mainImg}
          />
        </div>
      </div>
    </main>
  );
};

export default ImageGallery;
