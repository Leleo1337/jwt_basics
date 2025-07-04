import { StatusCodes } from "http-status-codes";
import { CustomApiError } from "../errors/index.js";

const errorHandlerMiddleware = (err, req, res, next) => {
   if (err instanceof CustomApiError) {
      return res.status(err.statusCode).json({ msg: err.message });
   }
   return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Something went wrong try again later");
};

export default errorHandlerMiddleware;
