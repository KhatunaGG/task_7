//create a function that checks if recieved folder name are in root directoris or not

// const fs = require('fs/promises')

// async function checkFolder(folder) {
//     try {
//         const dir = __dirname;
//         const dirArr = await fs.readdir(dir)
//         if(dirArr.includes(folder)) {
//             console.log(true)
//         } else {
//             console.log(false)
//         }
//     }catch (er) {
//         console.log(er)
//     }
// }
// checkFolder('test')

//create simple http get server and send users data from data.json
//create a http server that return random number between 1 to 100, http://localhost:3000/random
//create a http get server that returns simple html table

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    const users = [
      { name: "Tom", age: 22, email: "tom@gmail.com" },
      { name: "Ann", age: 25, email: "ann@gmail.com" },
      { name: "Bob", age: 32, email: "bob@gmail.com" },
      { name: "John", age: 16, email: "john@gmail.com" },
    ];
    res.getHeader("content-type", "application/json");
    res.write(JSON.stringify(users));
    res.end();

  } else if (req.url === "/random") {
    let randomNumber;
    const getRandomNumber = () => {
      randomNumber = Math.floor(Math.random() * 100);
      return randomNumber;
    };
    getRandomNumber();
    res.getHeader("content-type", "application/json");
    res.write(`Random number: ${JSON.stringify(randomNumber)}`);
    res.end();

  } else if(req.url === '/page') {
    res.setHeader('content-type', 'text/html')
    res.write(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>hello world</h1>
                
            </body>
            </html>
        `);
    res.end()
  } else {
    res.write('404 not found')
  }

});

server.listen(3001, () => {
  console.log("server is running on port http://localhost:3001");
});
