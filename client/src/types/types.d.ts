declare const process: {
  env: {
    CONFIG: {
      API_BASEPATH: string;
      IMAGES_BASEPATH: string;
      POLLING_INTERVAL: number;
    };
  };
};

declare module 'use-lodash-debounce' {
  declare function useDebounce(value: any, delay: number);
}
