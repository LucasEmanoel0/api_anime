import express, { Response,Request,NextFunction }  from "express";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(router)

app.use((error,req:Request, res:Response, next:NextFunction) => {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})