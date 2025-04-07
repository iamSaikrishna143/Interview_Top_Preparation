const fs = require("fs");
fs.mkdirSync('Sai') 

fs.writeFileSync('Sai/bio.txt',"My name is Saikrishna");

fs.appendFileSync('SAi/bio.txt',"achsrabbaijnns");

const data=fs.readdirSync('Sai/Bio.txt','utf-8');
console.log(data);

fs.renameSync('Sai/bio.txt','Sairishna/bio.txt')

