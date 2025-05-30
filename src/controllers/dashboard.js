export async function dashboard(req, res) {
   console.log(req.user);
   const luckyNumber = Math.floor(Math.random() * 100);

   res.status(200).json({
      msg: `hello, ${req.user.username}`,
      secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
   });
}
