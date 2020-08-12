/* eslint-disable */

// @ts-expect-error
import regeneratorRuntime from 'regenerator-runtime';

declare global {
  namespace NodeJS {
    interface Global {
      fetch: any;
      sessionStorage: any;
      localStorage: any;
      regeneratorRuntime: any;
    }
  }
}

export function setupFetch(response: unknown = [1, 2, 3]) {
  global.regeneratorRuntime = regeneratorRuntime;

  Object.defineProperty(global, 'fetch', {
    configurable: true,
    value: jest.fn(() =>
      Promise.resolve({
        json: () => response,
        ok: true,
      }),
    ),
  });

  Object.defineProperty(global, 'sessionStorage', {
    configurable: true,
    value: {
      getItem: jest.fn(),
      setItem: jest.fn(),
    },
  });

  Object.defineProperty(global, 'localStorage', {
    configurable: true,
    value: {
      getItem: jest.fn(),
      setItem: jest.fn(),
    },
  });
}
