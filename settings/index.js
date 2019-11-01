import path from 'path';

const ressources = [
  'src/test.scss'
];

export default resources.map(file => path.resolve(__dirname, file));
