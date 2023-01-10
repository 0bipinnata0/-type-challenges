import removeDelimiterInTuple from "./removeDelimiterInTuple";

import unshiftInTupleItem from "./unshiftInTupleItem";

type TupleToUnion<T extends any[]> = T extends Array<infer P> ? P : never;

function tupleToEntity<Tuple extends string[]>(
  tuple: Tuple
): {
  [key in TupleToUnion<Tuple>]: string;
} {
  return tuple.reduce(function (acc, cur) {
    acc[cur] = "need to be done";
    return acc;
  }, {} as any);
}

const cccc: ["1M-1Y", "1Y-1Y", "2Y-1Y", "1M-2Y", "x-y"] = [
  "1M-1Y",
  "1Y-1Y",
  "2Y-1Y",
  "1M-2Y",
  "x-y",
];
const newTuple = removeDelimiterInTuple(cccc, "-");

const newTuple2 = unshiftInTupleItem(newTuple, ".ATM");

const newEntity = tupleToEntity(newTuple2);

console.info(newEntity);
