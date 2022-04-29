import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const db = process.env.DATABASE;
const port = process.env.PORT;

mongoose.connect(db, {
    useNewUrlParser: true,
}).then(() => console.log('database connected successfully')).catch(err => {console.log('Connection to database rejected', err)
process.exit();
});

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => console.log(`app running on port ${port}`));
