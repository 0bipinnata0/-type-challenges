type UnshiftString<
  Str extends string,
  Suffix extends string
> = `${Str}${Suffix}`;

type UnshiftInTupleItem<
  Tuple extends any[],
  Suffix extends string
> = Tuple extends []
  ? []
  : Tuple extends [infer T0 extends string]
  ? [UnshiftString<T0, Suffix>]
  : Tuple extends [infer T0 extends string, ...infer Ts]
  ? [UnshiftString<T0, Suffix>, ...UnshiftInTupleItem<Ts, Suffix>]
  : [Tuple];
function unshiftInTupleItem<Tuple extends string[], Suffix extends string>(
  tuple: Tuple,
  suffix: Suffix
): UnshiftInTupleItem<Tuple, Suffix> {
  return tuple.map((item) => `${item}${suffix}`) as any;
}

export default unshiftInTupleItem;
