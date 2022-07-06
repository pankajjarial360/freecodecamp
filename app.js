const express = require('express')
const app = express()

app.get('/', (req, res) => {
   console.log(('user hit the resource'));
   res.send('<h1>Home <a href="">page</a></h1>')
})

app.get('/about', (req, res) => {
   res.json([{ name: 'john'}, { name : 'susan'}])
});
app.listen(5000, () => {
   console.log('server is listening on port: 5000');
})
