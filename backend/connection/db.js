import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {        
        const URL = `mongodb+srv://mk:mk123@cluster0.bvujo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority` 
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;