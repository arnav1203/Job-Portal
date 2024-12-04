import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
    origin: 'http//localhost:3000',
    credentials: true
}
app.use(cors(corsOptions));

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);

})