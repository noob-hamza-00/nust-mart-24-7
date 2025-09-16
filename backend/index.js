import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

let items = [];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const { name, category } = req.body;
  if (!name || !category) {
    return res.status(400).json({ error: 'Name and category are required.' });
  }
  const item = { id: Date.now(), name, category };
  items.push(item);
  res.status(201).json(item);
});

app.listen(PORT, () => {
  console.log(`Backend API running on http://localhost:${PORT}`);
});