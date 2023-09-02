import express from 'express';
import connectDB from './config/db.js';
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
import productRoutes from "./routes/productRoutes.js"

connectDB(); //connect to mongodb

const app = express();

app.get('/', (req, res) => {
    res.send('API IS RUNNING...');
});

app.use('/api/products', productRoutes);



app.listen(port, () => console.log(`Server running on port ${port}`));