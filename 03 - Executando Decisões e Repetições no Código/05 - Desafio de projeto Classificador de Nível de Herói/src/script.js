
/*

1. const readline = require("readline"). 
Esse módulo serve para capturar entradas do usuário 
pelo terminal (como se fosse um “prompt” no navegador).

2. const rl = readline.createInterface({ ... }).

cria uma interface de leitura chamada rl:
- input: process.stdin → significa que vai ler do teclado (entrada padrão).
- output: process.stdout → significa que vai escrever no terminal (saída padrão)

3. rl.question("Digite o nome do herói: ", function(nomeHeroi) { ... })

- O método rl.question mostra a mensagem "Digite o nome do herói:" no terminal.
- Depois espera o usuário digitar e apertar Enter.
- O valor digitado é passado para a função como parâmetro (nomeHeroi).
- Dentro dessa função, você pode usar esse valor normalmente.

4. Segundo rl.question("Digite a quantidade de XP: ", function(xp) { ... })

- Aqui acontece o mesmo processo, mas para o XP.
- O valor digitado vem como string.
- Por isso você usa parseInt(xp) para transformar em número e poder comparar.

5. rl.close()

- Esse comando fecha a interface de leitura.
- Sem ele, o programa ficaria esperando indefinidamente por mais entradas.
- É como dizer: “acabou, não preciso mais ler nada do usuário”.

🔎 Resumindo

- readline → módulo para ler dados do usuário no terminal.
- createInterface → cria a conexão entre teclado e terminal.
- rl.question → mostra uma pergunta e captura a resposta.
- parseInt → transforma texto em número.
- rl.close → encerra a leitura quando já não precisa mais.



*/



const readline = require("readline") //Importa o módulo readline 

const rl = readline.createInterface({ // interface de leitura
  input: process.stdin,
  output: process.stdout
})

rl.question("Digite o nome do herói: ", function(nomeHeroi) {
  rl.question("Digite a quantidade de XP: ", function(xp) {
    let quantidadeXP = parseInt(xp)

    if (quantidadeXP < 1000) {
      console.log(`O herói ${nomeHeroi} está no nível Ferro com ${quantidadeXP} XP.`)

    } else if (quantidadeXP >= 1001 && quantidadeXP <= 2000) {
      console.log(`O herói ${nomeHeroi} está no nível Bronze com ${quantidadeXP} XP.`)

    }else if (quantidadeXP >= 2001 && quantidadeXP <= 5000 ) {
      console.log(`O herói ${nomeHeroi} está no nível Prata com ${quantidadeXP} XP.`)

    }else if (quantidadeXP >= 5001 && quantidadeXP <= 7000  ) {
      console.log(`O herói ${nomeHeroi} está no nível Ouro com ${quantidadeXP} XP.`)

    }else if (quantidadeXP >= 7001 && quantidadeXP <= 8000 ) {
      console.log(`O herói ${nomeHeroi} está no nível Platina com ${quantidadeXP} XP.`)

    }else if (quantidadeXP >= 8001 && quantidadeXP <= 9000 ) {
      console.log(`O herói ${nomeHeroi} está no nível Ascendente com ${quantidadeXP} XP.`)

    }else if (quantidadeXP >= 9001 && quantidadeXP <= 10000 ) {
      console.log(`O herói ${nomeHeroi} está no nível Imortal com ${quantidadeXP} XP.`)

    }else { 
      console.log(`O herói ${nomeHeroi} está no nível Radiante com ${quantidadeXP} XP.`)
    }

    rl.close()
  })
})