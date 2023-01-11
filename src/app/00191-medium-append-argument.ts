type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number

// Answer
type AppendArgument<
  T extends (a: any, b: any) => any,
  Suffix extends any
> = T extends (a: infer A, b: infer B) => infer ReturnType
  ? (a: A, b: B, c: Suffix) => ReturnType
  : never;
