type RemoveDelimiterInString<
  Str extends any,
  Delimiter extends string
> = Str extends `${infer Front}${Delimiter}${infer Back}`
  ? `${Front}${Back}`
  : never;

type RemoveDelimiterInTuple<
  Tuple extends any[],
  Delimiter extends string
> = Tuple extends []
  ? []
  : Tuple extends [infer T0]
  ? [RemoveDelimiterInString<T0, Delimiter>]
  : Tuple extends [infer T0, ...infer Ts]
  ? [
      RemoveDelimiterInString<T0, Delimiter>,
      ...RemoveDelimiterInTuple<Ts, Delimiter>
    ]
  : [Tuple];

function removeDelimiterInTuple<
  Tuple extends string[],
  Delimiter extends string
>(
  tuple: Tuple,
  delimiter: Delimiter
): RemoveDelimiterInTuple<Tuple, Delimiter> {
  return tuple.map((item) => item.replace(delimiter, "")) as any;
}
export default removeDelimiterInTuple;
