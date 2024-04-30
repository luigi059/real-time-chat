import dotenv from 'dotenv';
import express from 'express';
import connectToMongoDB from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming request with JSON payloads

app.use('/api/auth', authRoutes);

/* app.get('/', (req, res) => {
	// route route http://localhost:5000/
	res.send('Server Ready');
}); */

app.listen(PORT, () => {
	connectToMongoDB();
	console.log(`listening on port ${PORT}`);
});
