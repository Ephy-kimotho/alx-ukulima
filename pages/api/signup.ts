// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { User, SignUpInitialValues } from "@/interfaces";
import { BASE_URL } from "@/constants";
import axios from "axios"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | { detail: string }>,
) {
  if (req.method === "POST") {
    try {
      const formValues: SignUpInitialValues = req.body
      const response = await axios.post(`${BASE_URL}/accounts/register-customer/`, formValues, {
        headers: {
          Accept: "application/json"
        }
      })

      res.status(response.status).json(response.data)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
        res.status(error.response?.status || 400).json(error.response?.data)
      } else {
        console.error(error);
        res.status(400).json({ detail: "An unkown error occurred." })
      }
    }
  } else {
    res.status(405).json({ "detail": `Method ${req.method} is not allowed.` })
  }

}
