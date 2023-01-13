const writeinguser=require('./backend')
const os=require("os")

console.log(writeinguser("bhunma","7","play games"))
const http=require("http")

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end(`<h1> Welcome to Website me </h1> \n Nice to meet you`)
        console.log(os)
        writeinguser()
    }
    if(req.url==='/about'){
        res.end("About me!!")
    }
    if(req.url==='/key'){
        res.end(`<input ></input>`)
    }
    res.end(`<h1> Oopps </h1> <p> we can't find to page looking <a href="/">home</a> `)
})


server.listen(5000)