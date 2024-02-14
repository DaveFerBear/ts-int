import { dowork } from "@/utils/p1";
import { useCallback, useEffect, useState } from "react";

const inputs = [
  "iyDNZmZFEAf87vP3wH5N",
  "iyDNZmZFEAf87vP3wH5N",
  "iyDNZmZFEAf87vP3wH5N",
  "iyDNZmZFEAf87vP3wH5N",
  "iyDNZmZFEAf87vP3wH5N",
  "cEv41BmZBAvxdKoWk3jJ",
  "ZvHsyJ6HPH1TK4Eod2LT",
  "nRxdgEZyzW1wWTm0hW1D",
  "hLGfzcrQsq67rngRkeiE",
  "iyDNZmZFEAf87vP3wH5N",
  "iyDNZmZFEAf87vP3wH5N",
];

export default function p1() {
  const [outputs, setOutputs] = useState<string[]>([]);

  const calcOutputs = useCallback(async (inputs: string[]) => {
    const outputs: string[] = await Promise.all(inputs.map(dowork));
    setOutputs(outputs);
  }, []);

  useEffect(() => {
    calcOutputs(inputs);
  }, []);

  return (
    <div>
      <h1>Results:</h1>
      <ul>
        {inputs.map((input, index) => (
          <li key={index}>{`Input: ${input}, Output: ${outputs[index]}`}</li>
        ))}
      </ul>
    </div>
  );
}
