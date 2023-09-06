import express from 'express';
import connectDB from './config/db.js';
import cookieParser from "cookie-parser"
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import {notFound, errorHandler} from "../backend/middleware/errorMiddleware.js"

await connectDB(); //connect to mongodb

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('API IS RUNNING...');
});



app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));