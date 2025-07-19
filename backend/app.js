import express from 'express';
import cors from 'cors';
import salesRoutes from './routes/sales-routes.js';
import revenuesRoutes from './routes/revenues-routes.js';
import goalsRoutes from './routes/goals-routes.js';
import authRoutes from './routes/auth-routes.js';
import './auth-config.js';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', salesRoutes);
app.use('/api', revenuesRoutes);
app.use('/api', goalsRoutes);
app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});