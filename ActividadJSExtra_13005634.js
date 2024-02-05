function CartaRandom(){
  const Minimo = Math.ceil(1);
  const Maximo = Math.floor(11);
  return Math.floor(Math.random() * (Maximo - Minimo) + Minimo); 
}

var carta1PC = CartaRandom();
var carta2PC = CartaRandom();
var totalPC = carta1PC + carta2PC;
var carta1USER = CartaRandom();
var carta2USER = CartaRandom();
var totalUSER = carta1USER+carta2USER;
var conti = 1
while (conti === 1 && totalUSER<21){
var verif = prompt("Sumanto tus cartas ienes "+totalUSER+" en total. Quieres otra carta? si/no");
if (verif==="si"){
totalUSER= totalUSER+CartaRandom();
conti=1
}else {conti=0}

}
if (totalUSER===21 || (totalUSER>totalPC && totalUSER<21)){alert(totalUSER + " Usuario Ganador, la Computadora saco "+totalPC)}
else if( totalUSER===totalPC){alert(totalUSER + " Empate con PC")}
else{alert(totalPC + " Computadora Ganadora! El usuario saco "+totalUSER)}
