import { NextApiRequest, NextApiResponse } from "next";

function work(input: string): number {
  let hash: number = 0;

  if (input.length === 0) return hash;

  const iterations = 100000 * ((input.charCodeAt(0) % 10) + 1);

  console.log(iterations);

  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    for (let j = 0; j < iterations; j++) {
      hash = (hash * char + 1) % 123456789;
    }
  }
  return hash;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { input } = req.query as { input: string };

      if (!input) {
        return res
          .status(400)
          .json({ error: "Please provide an input string" });
      }

      const output = work(input);

      res.status(200).json({ output });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
};
