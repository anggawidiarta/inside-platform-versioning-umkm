export interface Car {
  image: string;
  carName: string;
  carType: string;
  carPeople: string;
  carFuel: string;
  carSteering: string;
  carPrice: string;
}

const cars: Car[] = [
  {
    image: '/car.png',
    carName: 'Toyota Avanza',
    carType: 'SUV',
    carPeople: '4 Orang',
    carFuel: 'Bensin',
    carSteering: 'Manual',
    carPrice: 'Rp. 300.000.000',
  },
  {
    image: '/car.png',
    carName: 'Honda Civic',
    carType: 'Sedan',
    carPeople: '5 Orang',
    carFuel: 'Bensin',
    carSteering: 'Automatic',
    carPrice: 'Rp. 350.000.000',
  },
  {
    image: '/car.png',
    carName: 'Nissan X-Trail',
    carType: 'SUV',
    carPeople: '5 Orang',
    carFuel: 'Diesel',
    carSteering: 'Automatic',
    carPrice: 'Rp. 450.000.000',
  },
  {
    image: '/car.png',
    carName: 'Mitsubishi Pajero',
    carType: 'SUV',
    carPeople: '7 Orang',
    carFuel: 'Diesel',
    carSteering: 'Manual',
    carPrice: 'Rp. 600.000.000',
  },
  {
    image: '/car.png',
    carName: 'BMW X5',
    carType: 'SUV',
    carPeople: '5 Orang',
    carFuel: 'Bensin',
    carSteering: 'Automatic',
    carPrice: 'Rp. 1.200.000.000',
  },
  {
    image: '/car.png',
    carName: 'Mercedes-Benz E-Class',
    carType: 'Sedan',
    carPeople: '5 Orang',
    carFuel: 'Bensin',
    carSteering: 'Automatic',
    carPrice: 'Rp. 1.000.000.000',
  },
  {
    image: '/car.png',
    carName: 'Audi Q7',
    carType: 'SUV',
    carPeople: '7 Orang',
    carFuel: 'Bensin',
    carSteering: 'Automatic',
    carPrice: 'Rp. 900.000.000',
  },
  {
    image: '/car.png',
    carName: 'Volvo XC90',
    carType: 'SUV',
    carPeople: '7 Orang',
    carFuel: 'Bensin',
    carSteering: 'Automatic',
    carPrice: 'Rp. 800.000.000',
  },
];

export default cars;
