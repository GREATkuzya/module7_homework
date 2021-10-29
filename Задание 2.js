let objProt={a:1, b:2, h:7};

function func(objProt, a) {
return  (a in objProt);

}
console.log(func(objProt, "h"))