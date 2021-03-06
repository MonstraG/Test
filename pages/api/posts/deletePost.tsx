import { NextApiRequest, NextApiResponse } from "next";
import { deletePost } from "~/lib/postApi";
import { sendOk } from "~/lib/requests";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await deletePost(req.query.slug.toString());
  sendOk(res);
}
