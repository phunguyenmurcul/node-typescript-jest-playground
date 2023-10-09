import constant from './constant.js';
import mock, { methodBar, methodFoo } from './mock.js';

export const useConstant = (): string => {
  return constant;
};

export const useDefault = (): any => {
  return mock;
};

export const useMethodBar = (): unknown => {
  return methodBar();
};

export const useMethodFoo = (): unknown => {
  return methodFoo();
};
