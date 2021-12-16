const https = require('https')

const getData =()=>{
    return new Promise((resolve,reject) => {
        https.get('https://swapi.dev/api/people/', res => {
            let data='';
            res.setEncoding('utf-8');
            res.on('data', chunk => { data += chunk }) 
            res.on('end', () => {
                resolve(JSON.parse(data));
            });
        }).on('err',(err => reject(err))); 
    });
};

(async () => {
    await getData().then((data)=>{
        console.log('\n*********** Sort by Name ************\n');
        data.results.sort((a,b)=>b.name.localeCompare(a.name)).forEach(element => {
            console.log(`Name:${element.name}`)
        });
        console.log('\n************ Sort by Nro Films ***************\n');
        data.results.sort((a, b)=> (a.films.length>b.films.length)).forEach(element => {
            console.log(`Name:${element.name}, # films:${element.films.length}`)
        });
}).catch((err)=> console.log(err));
})();


