const http = require('http');

const app = http.createServer((req, res)=>{
    console.log(res);
});

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server is up and running on http://localhost:${PORT}`)
})