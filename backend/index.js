import express from "express";


const app = express();



const PORT = process.env.PORT || 3000;




app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})