var http=require('https');

function getAPOD(){
    http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',(resp)=>{
        let data='';
        resp.setEncoding('utf-8');
        resp.on('data', (chunk)=>{
            data+=chunk;
            console.log(data);
        })

        //respuesta completa
        resp.on('end',()=>{
            let body=JSON.parse(data);
            console.log('Titulo',body.title)
            console.log('\nExplanation',body.explanation)
            console.log('\nURL',body.url)
        })
    });
}
getAPOD();