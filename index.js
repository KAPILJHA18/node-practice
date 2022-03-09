// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const app = express();

const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
  { id: 4, name: 'course4' },
];

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {});
app.get('/api/course', (req, res) => {
  res.sent(courses);
});
app.get('/api/course/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req, params.id));

  if (!course) res.status(404).send('the course of given id not found');

  res.sent(course);
});

app.listen(PORT, () => console.log(`listen on PORT: ${PORT}`));
