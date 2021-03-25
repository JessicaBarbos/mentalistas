let secretNumber = parseInt(Math.random() * 10);
let trial = 3;

while(trial > 0){
  var guess = parseInt(prompt("Digite um numero entre 0 e 10:"));
  
  if(secretNumber == guess){
    alert("Uhull, você acertou");
    break;
    
  } else if(guess > secretNumber){
    alert("O número secreto é menor");
    trial = trial - 1;
    
  }else if(guess < secretNumber){
    alert("O número secreto é maior");
    trial = trial - 1;
    
  }
  
}

if(guess != secretNumber){
  alert("Poxa, suas tentativas acabaram! O número secreto era " + secretNumber);
}