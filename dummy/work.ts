export interface Work {
  title: string;
  companyName: string;
  location: string;
  jobType: string;
  description: string;
  timeAgo: string;
  salary: string;
}

const works: Work[] = [
  {
    title: 'Pekerjaan 1',
    companyName: 'CV Jago Ayam',
    location: 'Mataram, NTB',
    jobType: 'FULL-TIME',
    description: 'Mencari pekerja yang jujur amanah dan baik dalam bekerja',
    timeAgo: '30 menit yang lalu',
    salary: 'Rp. 2.500.000',
  },
  {
    title: 'Pekerjaan 2',
    companyName: 'CV Harimau Betina',
    location: 'Jakarta',
    jobType: 'PART-TIME',
    description: 'Dibutuhkan tenaga kerja paruh waktu untuk proyek tertentu',
    timeAgo: '1 jam yang lalu',
    salary: 'Rp. 1.200.000',
  },
  {
    title: 'Pekerjaan 3',
    companyName: 'CV Singa Jantan',
    location: 'Surabaya',
    jobType: 'CONTRACT',
    description: 'Kami sedang mencari pekerja kontrak untuk proyek spesifik',
    timeAgo: '2 hari yang lalu',
    salary: 'Rp. 3.000.000',
  },
];

export default works;
