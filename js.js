alert ('Olá, Mundo');
// prompt ('Digite seu nome:');
// alert ('Seja bem-vinda!')
// var nome = prompt('Digite seu nome:');
// alert('Seja bem-vinda, ' + nome +'!');

var n = parseInt(prompt('Digite um número:'));

// if (n >= 0  && n <=10){
//     alert('O número está dentro do intervalo de 0 a 10')
// }else{
//     alert('O número está fora do intervalo de 0 a 10')
// }

if (n % 2 == 0 && n > 0 && n < 100 ) {
  
    alert ('O número atende aos critérios.');
   
 } else {
 
    alert ('O número não atende aos critérios.')  
 }