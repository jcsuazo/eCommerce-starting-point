import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
// import products from './data/products.js';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Api is running...');
});
// ROTES
//User rotes
app.use('/api/users', userRoutes);
//Products rotes
app.use('/api/products', productRoutes);
//Order rotes
app.use('/api/orders', orderRoutes);

app.use(notFound);

app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server runing in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold,
  ),
);
