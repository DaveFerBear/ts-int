import { dowork } from "@/utils/p1";

/**
 * p2.
 *
 * The below code attempts to test the dowork function, calling it a few times in parallel.
 * Unfortunately, there is an issue(s) with the code.
 *
 * Fix it so that the outputs are rendered to the screen as dowork completes.
 *
 */
export default async function p1() {
  const inputs = [
    "iyDNZmZFEAf87vP3wH5N",
    "cEv41BmZBAvxdKoWk3jJ",
    "ZvHsyJ6HPH1TK4Eod2LT",
    "nRxdgEZyzW1wWTm0hW1D",
    "hLGfzcrQsq67rngRkeiE",
  ];
  const outputs = await Promise.all(inputs.map(dowork));

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
