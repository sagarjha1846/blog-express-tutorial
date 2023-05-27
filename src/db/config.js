import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI = process.env.URI; // MongoDB URL from Atlas

// Function to connect to the database
export const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...'); // Log a success message when connected
  } catch (error) {
    console.log(error.message); // Log the error message if connection fails
    process.exit(1); // Exit the process with a non-zero code
  }
};
