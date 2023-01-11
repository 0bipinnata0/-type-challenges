type Flipped = FlipArguments<
  (arg0: string, arg1: number, arg2: boolean) => void
>;
// (arg0: boolean, arg1: number, arg2: string) => void

type FlipArguments<Fn extends (arg0: any, arg1: any, arg2: any) => any> =
  Fn extends (
    arg0: infer Arg0,
    arg1: infer Arg1,
    arg2: infer Arg2
  ) => infer ReturnType
    ? (arg0: Arg2, arg1: Arg1, arg2: Arg0) => ReturnType
    : never;
