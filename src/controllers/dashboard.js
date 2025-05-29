import jwt from "jsonwebtoken";
import CustomApiError from "../errors/custom-error.js";

export async function dashboard(req, res) {
   const luckyNumber = Math.floor(Math.random() * 100);
   const authHeader = req.headers.authorization;

   if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new CustomApiError("No token provided", 401);
   }

   const token = authHeader.split(" ")[1];

   try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      res.status(200).json({
         msg: `hello, ${decoded.username}`,
         secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
      });
   } catch (error) {
      throw new CustomApiError("Not authorized to access this route", 401);
   }

}
