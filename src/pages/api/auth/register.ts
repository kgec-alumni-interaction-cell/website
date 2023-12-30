import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST") {
      const {name, email, alumni, gradYr, proofOfGrad, currWorkplace, password}: {name: string, email: string, alumni: boolean, gradYr: string, proofOfGrad: string, currWorkplace: string, password: string} = req.body;
      const prisma = new PrismaClient();
      await prisma.user.create({
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

      res.json({ok: "Success"})
    } else {
      res.json({
        err: "Not POST req"
      })
    }


}