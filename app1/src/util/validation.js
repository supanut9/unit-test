export const validateStringNotEmpty = (value) => {
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
};

export const validateNumber = (number) => {
  if (isNaN(number) || typeof number !== 'number') {
    throw new Error('Invalid number input.');
  }
};
