// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as models from "../../models";

export default function helloAPI(req, res) {
  res.status(200).json({ name: "John Doe" });
}
