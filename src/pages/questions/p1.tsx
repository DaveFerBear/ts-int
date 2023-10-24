/**
 * We have an API endpoint that does some work (/api/dowork).
 * This endpoint takes a query parameter, ?input, and returns JSON { output: "..." }.
 * The /dowork endpoint is slow but completely deterministic.
 *
 * We'd like to call this function many times in our app and would like to minimize the amount of work we have to do.
 *
 * How should we proceed?
 */

function dowork(input: string) {
  return fetch(`/api/dowork?input=${input}`)
    .then((res) => res.json())
    .then((json) => json.output)
    .catch((err) => {
      console.log(err);
      return "Error";
    });
}

export default async function p1() {
  const inputs = ["input1", "input2", "input3"];
  const outputs = await Promise.all(inputs.map(dowork));

  console.log(outputs);

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
