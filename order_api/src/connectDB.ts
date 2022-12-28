import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGO_DB }: any = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_DB);
    console.info('DB connected');
  } catch (error) {
    console.log(error);
  }
};
  
export default connectDB;