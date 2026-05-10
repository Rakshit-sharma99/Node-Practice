const ans = (req, res)=>{
    console.log(req+res);
    let body='';
req.on('data',chunk=>{
    body+=chunk;
});

req.on('end',()=>{
    const params = new URLSearchParams(body);
    const result = Number(params.get('number1'))+Number(params.get('number2'));
    res.setHeader('Content-Type','text/html');
res.end(`<h1>Result= ${result}</h1>`);
});
}
exports.ans = ans;