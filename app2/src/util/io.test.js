import { expect, it, vi } from 'vitest';
import fs from 'fs';

import writeData from './io';

vi.mock('fs');
vi.mock('path');

// can be move to __mocks__ folder to be more clean when mocking the data

// vi.mock('path', () => {
//   return {
//     default: {
//       join: (...args) => {
//         return args[args.length - 1];
//       },
//     },
//   };
// });

it('should execute the writeFile method', () => {
  const testData = 'test';
  const testFileName = 'test.txt';

  writeData(testData, testFileName);

  expect(fs.writeFileSync).toBeCalled();
  expect(fs.writeFileSync).toBeCalledWith(testFileName, testData);
});
