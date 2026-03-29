const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

let PORT = 3000;

const MIME_TYPES = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error: ' + err.code);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.log(`⚠️ المنفذ ${PORT} مستخدم بالفعل، جاري تجربة منفذ آخر...`);
        PORT++;
        server.listen(PORT);
    } else {
        console.error(e);
    }
});

server.on('listening', () => {
    const actualPort = server.address().port;
    const url = `http://localhost:${actualPort}`;
    console.log(`\n===========================================`);
    console.log(`🚀 MiRaR Platform is running!`);
    console.log(`👉 Open ${url} in your browser`);
    console.log(`===========================================\n`);
    console.log(`Press Ctrl+C to stop.`);
    
    // Open the default web browser automatically
    exec(`start "" "${url}"`);
});

server.listen(PORT);
