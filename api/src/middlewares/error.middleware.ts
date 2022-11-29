// import { NextFunction, Request, Response } from "express";
// import { AppError } from "../errors/appError";

// export const errorMiddleware = (
//   err: Error,
//   res: Response,
// ) => {
//   if (err instanceof AppError) {
//     return res.status(err.statusCode).json({
//       message: err.message,
//     });
//   }

//   return res.status(500).json({
//     message: err.message,
//   });
// };
