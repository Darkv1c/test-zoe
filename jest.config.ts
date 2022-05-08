import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.ts",
      "\\.(css|less)$": "<rootDir>/mocks/fileMock.ts",
    '@/(.*)': '<rootDir>/src/$1',
    'styles/(.*)': '<rootDir>/src/assets/styles/$1',
    'images/(.*)': '<rootDir>/src/assets/images/$1',
    'icons/(.*)': "<rootDir>/src/assets/icons/$1",
    "actions/(.*)": "<rootDir>/src/store/actions/$1"
  },
};
export default config;