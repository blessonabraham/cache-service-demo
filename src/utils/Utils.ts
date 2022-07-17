// import { Request, Response } from "express";

// export const requestResponder = (req: Request, res: Response, callable: any) => {
//     if (callable) {
//       try {
//         const result = callable(req, res);
//         res.json(result)
//       } catch (e) {
//         console.log(e)
//         res.json({ error: e })
//       }
//     }
//   }