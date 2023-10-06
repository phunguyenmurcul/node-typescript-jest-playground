import mock, { methodBar, methodFoo } from './mock.js';

export const useDefault = (): any => {
  return mock;
};

export const useMethodBar = (): unknown => {
  return methodBar();
};

export const useMethodFoo = (): unknown => {
  return methodFoo();
};
