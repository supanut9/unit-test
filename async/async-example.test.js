import { expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';

  return new Promise((resolve, reject) => {
    generateToken(testUserEmail, (err, token) => {
      if (err) return reject(err);

      try {
        expect(token).toBeDefined();
        resolve();
      } catch (assertionError) {
        reject(assertionError);
      }
    });
  });
});

it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';

  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it('should generate a token value', async () => {
  const testUserEmail = 'test@test.com';

  const token = await generateTokenPromise(testUserEmail);
  expect(token).toBeDefined();
});
