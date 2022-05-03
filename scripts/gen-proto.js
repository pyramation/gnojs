import { join, resolve } from 'path';
import telescope from '@osmonauts/telescope';
import { camel, snake } from 'case';

const protoPath = resolve(join(__dirname, '..', 'out', 'proto'));
const outPath = resolve(__dirname, '..', 'src', 'proto');

telescope({
  protoPath,
  outPath,
  plugins: [
    {
      name: 'aminoCasing',
      plugin: ({ protoPackage }) => {
        return snake;
      }
    }
  ]
});
