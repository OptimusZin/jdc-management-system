export interface Course {
  id: string;
  name: string;
  fees: number;
  level: string;
  description: string;
  imageUrl: string;
  startDate: Date;
}

export const COURSES: Course[] = [
  {
    id: 'jdc1',
    name: 'Java Basic',
    fees: 300000,
    level: 'Beginner',
    description: 'lorem30',
    imageUrl:
      'https://ksltechnology.com/wp-content/uploads/2021/11/Java-Logo.png',
    startDate: new Date('2024-10-1'),
  },
  {
    id: 'jdc2',
    name: 'Spring',
    fees: 500000,
    level: 'Intermediate',
    description: 'lorem30',
    imageUrl:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWlwJSeK-UN5NDOjiAywASbd_85nVwwTSZ4p8416Nk2RzVheiZQZRoJ5feUk8aU4hPOqPbLeoQN6jMQxYXE9wZB1Tz_HjYFDEo_gzhIQz0vrVA0tBuh4Plkfo8LRfEkUpX-to0flLTfnMNB0JmxRQsmswCA5bl1WedSRcYO93Vy5C1Y9lZXBeiRxfE/s728-rw-e365/patch.jpg',
    startDate: new Date('2024-11-15'),
  },
  {
    id: 'jdc3',
    name: 'One Stop Batch 11',
    fees: 1000000,
    level: 'Intermediate',
    description: '',
    imageUrl:
      'https://albaniatech.org/wp-content/uploads/2021/12/Java-Bootcamp-01-01-1210x642-1.png',
    startDate: new Date('2024-12-1'),
  },
  {
    id: 'jdc4',
    name: 'Angular',
    fees: 400000,
    level: 'Advanced',
    description: '',
    imageUrl:
      'https://external-preview.redd.it/qW5sXZSe_7w815bbdJh3mwhzBxyEdK13fFyRs3_8ZdQ.jpg?auto=webp&s=6611d9c403cb948d1caf33e595f129bd18d745e3',
    startDate: new Date('2024-10-15'),
  },
];
