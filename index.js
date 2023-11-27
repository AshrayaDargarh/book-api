const express=require('express');
const dotenv=require('dotenv');
const cors=require('cors');
const connectDB=require('./config/db')
const bookRoutes=require('./routes/bookRoutes');
const {notFound}=require('./middleware/errorMiddleware');
const app=express();
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('API is working');
})

app.use('/api/books',bookRoutes);
app.use(notFound);

const PORT=process.env.PORT|| 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on  port ${PORT}`)
})