const http = require(`http`)

const server = http.createServer((req, res) => {
   // console.log(req);

   if (req.url === `/`) {
      res.end(`Welcome to our server`);
   }
   if (req.url === `/about`) {
      res.end(`This the about of this website`);
   }
   res.end(`
   <h1>Oops!</h1>
   <p> we can't find the page that you want </p>
   <a href="/" > back to home page </a>
   `)
   // console.log(`one visit`);
})

server.listen(5000);
