import dotenv from 'dotenv';
import express from 'express';
import connectToMongoDB from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	// route route http://localhost:5000/
	res.send('Server Ready');
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`listening on port ${PORT}`);
});
