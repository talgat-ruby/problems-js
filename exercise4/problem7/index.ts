type CheckFunction<T> = (value: T) => boolean;

const is: {
  bool: CheckFunction<boolean>;
  num: CheckFunction<number>;
  str: CheckFunction<string>;
  fun: CheckFunction<Function>;
} = {
  bool: (value) => typeof value === 'boolean',
  num: (value) => typeof value === 'number' && !isNaN(value as any),
  str: (value) => typeof value === 'string',
  fun: (value) => typeof value === 'function',
};

export default is;