import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST") {
      const {name, email, alumni, gradYr, proofOfGrad, currWorkplace, password}: {name: string, email: string, alumni: boolean, gradYr: string, proofOfGrad: string, currWorkplace: string, password: string} = req.body;
      const prisma = new PrismaClient();
      prisma.user.create({
        data: {
          name,
          email,
          alumni,
          gradYr,
          proofOfGrad,
          currWorkplace,
          password
        }
      });
    }
}