expect.extend({
  toBeOneOf(received, argument) {
    const pass = (Array.isArray(argument) && argument.indexOf(received) >= 0);

    if (pass) {
      return {
        message: () => `expected ${received} not to be one of ${argument.join(', ')}`,
        pass: true,
      };
    }

    return {
      message: () => `expected ${received} to be one of ${argument.join(', ')}`,
      pass: false,
    };
  },
});
