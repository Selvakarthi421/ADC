const expres = require('express')

const app=expres()

const port=3000

app.use('/add product', (req,res,next)=>{
    console.log('In the middleware!');
    res.send('<h1>The "Add Product" Page</h1>');
});
app.use('/', (req,res,next)=> {
    console.log('In the middleware!');
    res.send('<h1>Hello welcome to the world');
});
app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})