import http from 'http'

const port = 8080;
const grades = [
    {
        studentName: 'Calrinhos',
        subject: 'Math',
        grade: 9
    },
]

const server = http.createServer((request, response) =>{
    const {method, url} = request;
    if (url === '/grades' && method === 'GET'){
        response.writeHead(200, {"content-type": "application/json"});
        response.end(JSON.stringify(grades));
    } else{
        response.writeHead(404, {'content-type': 'application/json'});
        response.end(JSON.stringify({message: 'Route not found'}));
    }

})

server.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})