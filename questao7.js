function palindromo (string){
   const invertida = string.split("").reduce((stringinversa,letra)=>{
    return letra + stringinversa;    
 },"");
 return string === invertida;
}
    console.log(palindromo("banana"));//false
    console.log(palindromo("ovo"));//true
    console.log(palindromo("arara"));//true