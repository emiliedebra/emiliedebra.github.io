const fs = require('fs');

fs.writeFileSync('index.html', fs.readFileSync('index.html', 'utf8').replace(/\/static\//g, 'dist/static/'));
// fs.writeFileSync('index.html', fs.readFileSync('index.html', 'utf8').replace(/src=\//g, 'src='));
