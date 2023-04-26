const http = require('http');
const { exec } = require('child_process');

const server = http.createServer((req, res) => {
  exec('node main.js', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.statusCode = 500;
      res.end(`Server error: ${error}`);
    } else {
      console.log(`stdout: ${stdout}`);
      console.error(`stderr: ${stderr}`);
      res.statusCode = 200;
      res.end(`Server response: ${stdout}`);
    }
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});