export interface Home {
  home_name: string;
  image_home: string;
  fasilitas: string;
  ruang_kamar: string;
  price: string;
}

const homes: Home[] = [
  {
    home_name: 'Rumah 1',
    image_home: '/rumah.png',
    fasilitas: 'Kolam Renang',
    ruang_kamar: '3 Kamar',
    price: 'Rp. 500 JT',
  },
  {
    home_name: 'Rumah 2',
    image_home: '/rumah.png',
    fasilitas: 'Taman',
    ruang_kamar: '4 Kamar',
    price: 'Rp. 600 JT',
  },
  {
    home_name: 'Rumah 3',
    image_home: '/rumah.png',
    fasilitas: 'Garasi',
    ruang_kamar: '3 Kamar',
    price: 'Rp. 550 JT',
  },
  {
    home_name: 'Rumah 4',
    image_home: '/rumah.png',
    fasilitas: 'Ruang Tamu Luas',
    ruang_kamar: '5 Kamar',
    price: 'Rp. 700 JT',
  },
  {
    home_name: 'Rumah 5',
    image_home: '/rumah.png',
    fasilitas: 'Taman Belakang',
    ruang_kamar: '4 Kamar',
    price: 'Rp. 650 JT',
  },
  {
    home_name: 'Rumah 6',
    image_home: '/rumah.png',
    fasilitas: 'Ruang Bermain',
    ruang_kamar: '6 Kamar',
    price: 'Rp. 800 JT',
  },
  {
    home_name: 'Rumah 7',
    image_home: '/rumah.png',
    fasilitas: 'Dapur Luas',
    ruang_kamar: '4 Kamar',
    price: 'Rp. 700 JT',
  },
  {
    home_name: 'Rumah 8',
    image_home: '/rumah.png',
    fasilitas: 'Taman Depan',
    ruang_kamar: '3 Kamar',
    price: 'Rp. 550 JT',
  },
];

export default homes;
