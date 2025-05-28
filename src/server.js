import app from "./app.js"
import connectDB from "./db/connect.js"

const PORT = process.env.PORT
const DATABASE_ACCESS = process.env.DATABASE_ACCESS

export default async function start(PORT){
    try{
        await connectDB(DATABASE_ACCESS)
        app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    }catch(e){
        console.log(e)
    }
}

start(PORT)