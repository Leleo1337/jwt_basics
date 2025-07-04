import jwt from "jsonwebtoken";
import { BadRequest } from "../errors/index.js";

export async function login(req, res) {
   const { username, password } = req.body;

   if (!username.trim() || !password.trim()) {
      throw new BadRequest("Please provide email and password");
   }

   //just for demo, normally provided by database
   const id = new Date().getTime();

   //try to keep payload small, better for ux
   const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: "30d" });

   res.status(201).json({ msg: `user created`, token });
}
