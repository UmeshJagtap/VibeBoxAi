import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL_NEW);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(`DataBase Error ${error}`);
  }
};

export default connectDb;
