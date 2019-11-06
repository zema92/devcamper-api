import dotenv from 'dotenv';
import express from "express";

dotenv.config({ path: './config/config.env' });

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started in ${process.env.NODE_ENV} mode at http://localhost:${port}`);
});
