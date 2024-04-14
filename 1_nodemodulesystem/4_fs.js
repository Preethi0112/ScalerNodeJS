const fs= require('fs');


 /* let readfile = fs.readFileSync('f1.txt');
console.log('content is ' + readfile);

 fs.writeFileSync('f2.txt', 'i used writeFileSync');
console.log('completed'); 


fs.appendFileSync('f3.txt', 'i used appendFileSync  ');
console.log('appended');

fs.unlinkSync('f2.txt');
console.log('f2 is deleted'); 


fs.mkdirSync('mynewdir');
console.log('created'); */ 


let mynewdircontent = fs.readdirSync('C:\\Users\\Akarmaxs Tech Pvt Lt\\Desktop\\ScalerNodeJS\\mynewdir');
console.log('content is', mynewdircontent);


let exists = fs.existsSync('mynewdir');
console.log('exists');

 fs.rmdirSync('mynewdir');
console.log('deleted');

