console.log("Hello node js");
const fs = require("fs");
const path = require("path");

//http module
const http = require("http");
const { error } = require("console");
const app = http.createServer((request, response) => {
  // console.log(request.url)
  //    response.writeHead(200,{
  //      'Content-Type':'text/html'
  //     // 'Content-Type':'text/plain'

  //    })

  // if(request.url==="/"){

  //     fs.readFile(path.join(__dirname,'public','index.html')
  //     ,(error,content)=>{

  //         if(error){
  //             throw error
  //         }
  //         response.end(content)

  //     }
  //     )
  // }else if(request.url==="/about"){

  //     fs.readFile(path.join(__dirname,'public','about.html')
  //     ,(error,content)=>{

  //         if(error){
  //             throw error
  //         }
  //         response.end(content)

  //     }
  //     )
  // }

  let filePath = path.join(
    __dirname,
    "public",
    request.url === "/" ? "index.html" : request.url
  );
  let contentType='text/html'
  let ext=path.extname(filePath)
  if(!ext){

    filePath+= '.html'
  }
  switch(ext){
    case '.css':
        contentType='text/css'
        break
    case '.js':
        contentType='text/javascript'
        break
    default:
        contentType='text/html'
  }

  fs.readFile(filePath, (err, content) => {
    // if(err){
    //     response.writeHead(500)
    //     response.end("Error")
    // }

    if (err) {
      fs.readFile(path.join(__dirname, "public", "error.html"), (err, data) => {
        if (err) {
          response.writeHead(500);
          response.end("Error");
        } else {
            response.writeHead(404,{
                // 'Content-Type':'text/html'
                'Content-Type':contentType
            })
          response.end(data);
        }
      });
    }else{
        response.writeHead(200,{
            'Content-Type':contentType
        })
        response.end(content)
    }
  });

  // response.end('welcome')
  //response.end('<h1>Hello from node js</h1>')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
