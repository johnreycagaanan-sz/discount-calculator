import { Hono } from 'hono';
import { serve } from 'bun';
import { calculate } from './calculate';

const app = new Hono();

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3002

app.post('/api/char', calculate)

// export const server = serve({fetch: app.fetch, port})

export { app };
