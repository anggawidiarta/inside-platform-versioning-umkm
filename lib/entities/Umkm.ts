import exp from 'constants';

export type TUmkmItem = {
  namaToko: string;
  slugToko: string;
  kategoriToko: string;
  alamatToko: string;
  instagramToko: string | null;
  facebookToko: string | null;
  twitterToko: string | null;
  tiktokToko: string | null;
  youtubeToko: string | null;
  deskripsiToko: string;
  hashtagToko: string[];
  noToko: string;
  videoToko: string | null;
  mapsToko: string;
  pinToko: string;
  temaToko: string;
  fotoToko: string[];
  produkToko: [
    {
      file: string | null;
      namaProduk: string | null;
    },
  ];
  galleryToko: string[];
  linkToko: {
    label1: string | null;
    link1: string | null;
    label2: string | null;
    link2: string | null;
    label3: string | null;
    link3: string | null;
    label4: string | null;
    link4: string | null;
  };
};
