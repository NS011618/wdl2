const http=require("http");
const fs=require("fs");

//read file from local folder
/*fs.readFile("home.html",(err,home)=>{
    console.log(home.toString());
});*/

/*fs.readFile("home.html",(err,home)=>{
    if(err){
        throw err;
    }
    http
     .createServer((request,response)=>{
        response.writeHeader(200,{"Content-Type":"text/html"});
        response.write(home);
        response.end();
     })
     .listen(3000);
});*/

let homeCxt="";
let projectCxt="";

fs.readFile("projectZZ.html",(err,project)=>{
    if(err){
        throw err;
    }
    homeCxt=project;
});

fs.readFile("registration.html",(err,registration)=>{
    if(err){
        throw err;
    }
    projectCxt=registration;
});

http
 .createServer((request,response)=>{
    let url=request.url;
    response.writeHeader(200,{"Content-Type":"text/html"});
    switch(url){
        case "/project":
            response.write(homeCxt);
            response.end();
            break;
        default:
             response.write(projectCxt);
             response.end();
             break;
    }
 })
 .listen(3000);