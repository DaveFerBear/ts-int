/**
 * We have an API endpoint that does some work (/api/dowork).
 * This endpoint takes a query parameter, ?input, and returns JSON { output: "..." }.
 * The /dowork endpoint is slow but completely deterministic.
 *
 * We'd like to call this function many times in our app and would like to minimize the amount of work we have to do.
 *
 * How should we proceed?
 */

export const dowork = (input: string) => {
  return fetch(`/api/dowork?input=${input}`)
    .then((res) => res.json())
    .then((json) => json.output)
    .catch((err) => console.error(err));
};
