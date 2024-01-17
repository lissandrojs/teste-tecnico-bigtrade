import mongoose from 'mongoose';


const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`, {
      auth: {
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD,
      },
    });

    console.log('Conectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('Erro de conexão com o MongoDB:', error);
  }
};

export default connectDB;