import { Hono } from 'hono';
import { serve } from 'bun';
import { calculate } from './src/calculate';

const app = new Hono();

app.post('/api/char', calculate)


export default { port: 3200, fetch: app.fetch}

// const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3002

// app.post('/api/char', calculate)

// app.fetch(port, calculate)

// export { app };
