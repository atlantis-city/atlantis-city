require('dotenv').config();
const express=require('express');
const helmet=require('helmet');
const rateLimit=require('express-rate-limit');
const cors=require('cors');

const authRoutes=require('./routes/auth');
const announcementsRoutes=require('./routes/announcements');
const userRoutes=require('./routes/user');

const app=express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(rateLimit({windowMs:15*60*1000,max:200}));

app.use('/api/auth',authRoutes);
app.use('/api/announcements',announcementsRoutes);
app.use('/api/user',userRoutes);

app.get('/',(req,res)=>res.json({ok:true,name:'Atlantis City API'}));
const PORT=process.env.PORT||4000;
app.listen(PORT,()=>console.log('Server running on',PORT));