const express = require('express');
const app = express();

const badges = {};

app.get('/', (_, res) => res.send(JSON.stringify(Object.keys(badges))));

app.get('/:id', ({ params: { id } }, res) => {
  res.send(id in badges && badges[id] ? 'on' : 'off');
});

app.get('/:id/:onOff', ({ params: { id, onOff } }, res) => {
  badges[id] = onOff === 'on';
  res.send('ok');
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on http://0.0.0.0:${port}`));
