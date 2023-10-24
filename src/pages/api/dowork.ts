import { NextApiRequest, NextApiResponse } from "next";

function work(input: string) {
  let hash = 0;
  if (input.length === 0) return hash;

  for (let i = 0; i < input.length; i++) {
    const char = input.charCodeAt(i);
    hash = (hash << 5) - hash + char;
  }

  return hash;
}

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const { str: input } = req.query as { str: string };

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
