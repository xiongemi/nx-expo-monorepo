import '@testing-library/jest-native/extend-expect';

jest.mock('axios', () => jest.requireActual('jest-mock-axios'));