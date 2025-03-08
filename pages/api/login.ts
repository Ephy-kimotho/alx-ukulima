import type { NextApiRequest, NextApiResponse } from "next";
import { BASE_URL } from "@/constants";
import { LoginInitialValues, LoginResponseData } from "@/interfaces";
import axios from "axios"

async function handler(
    req: NextApiRequest, res: NextApiResponse<LoginResponseData | { detail: string }>) {
    if (req.method === "POST") {
        try {
            const formValues: LoginInitialValues = req.body
            const response = await axios.post<LoginResponseData>(`${BASE_URL}/accounts/login-customer/`, formValues,
                {
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
                res.status(400).json({ detail: "An unknown error ocurred." })
            }

        }
    } else {
        res.status(405).json({ detail: `Method ${req.method} is not allowed.` })
    }


}

export default handler
