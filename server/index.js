import express from "express";
import cookieParser from "cookie-parser";
const app = express;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);

})