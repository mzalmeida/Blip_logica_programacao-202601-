/*
Desafio
Em uma plataforma de inteligência conversacional, marcas automatizam diálogos com clientes em múltiplos canais digitais, como chatbots, redes sociais e aplicativos de mensagens. Para avaliar o comportamento desses robôs, a equipe de desenvolvimento precisa analisar quantas mensagens de um determinado tipo aparecem em uma conversa simulada.

Seu desafio é implementar um programa que, dado o tipo de mensagem que se deseja analisar, conte quantas mensagens desse tipo foram enviadas em um fluxo de conversa. Ao final, o programa deve exibir apenas a quantidade total de mensagens encontradas daquele tipo, em formato numérico.

Cada mensagem da conversa é identificada por um prefixo no início da linha: "BOT:" para mensagens automáticas do robô ou "USER:" para mensagens enviadas pelo cliente. O tipo de mensagem a ser contado será informado antes da lista de mensagens.

Importante: embora a conversa possa conter mensagens dos dois tipos (BOT: e USER:), o programa deve contar apenas as mensagens cujo prefixo corresponda ao tipo informado na primeira linha da entrada, ignorando as demais.

Utilize estruturas de repetição para processar todas as mensagens até o final da conversa. Não utilize bibliotecas externas.

Entrada
A primeira linha contém o tipo de mensagem a ser contado ("BOT" ou "USER"). As linhas seguintes contêm as mensagens trocadas, cada uma iniciando com "BOT:" ou "USER:". A entrada termina quando for lida a linha "FIM", que indica o fim da conversa e não deve ser considerada na contagem.

Saída
Imprima um único número inteiro representando a quantidade de mensagens do tipo especificado encontradas na conversa. Não imprima mensagens adicionais, apenas o número.

Exemplos
No primeiro exemplo, por exemplo, a conversa possui 3 mensagens (BOT: Hello, USER: Hi e BOT: How can I help?), mas como o tipo a ser contado é BOT, apenas 2 delas são consideradas, resultando na saída 2.

Entrada	                Saída
BOT
BOT: Hello
USER: Hi
BOT: How can I help?
FIM	                        2

USER
USER: Hi
BOT: Welcome
USER: Need help
FIM	                        2

BOT
USER: Hello
USER: Info
FIM	                        0

USER
BOT: Hi
BOT: Anything else?
FIM	                        0

*/     

const readline = require("readline");

// Criar interface para ler do terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let linhas = [];

// Ler todas as linhas digitadas
rl.on("line", (input) => {
  linhas.push(input);

  // Quando o usuário digitar "FIM", encerramos
  if (input === "FIM") {
    rl.close();
  }
});

rl.on("close", () => {
  const tipoMensagem = linhas[0]; // primeira linha define o tipo
  let contador = 0;

  // Percorrer todas as mensagens (menos a primeira e o "FIM")
  for (let i = 1; i < linhas.length; i++) {
    const mensagem = linhas[i];

    if (mensagem === "FIM") break;

    if (tipoMensagem === "BOT" && mensagem.slice(0, 4) === "BOT:") {
      contador++;
    } else if (tipoMensagem === "USER" && mensagem.slice(0, 5) === "USER:") {
      contador++;
    }
  }

  console.log(contador); // saída final
});

/*
Script do desafio

// Lê o tipo de mensagem que será contado (BOT ou USER)
const tipoMensagem = gets(); //- tipoMensagem → guarda se você vai contar "BOT" ou "USER".

// Inicializa o contador
let contador = 0; // começa em 0 e soma cada vez que encontra uma mensagem do tipo escolhido.

// Lê a primeira mensagem da conversa
let mensagem = gets(); //lê cada linha da conversa

// Enquanto a mensagem não for "FIM"
while (mensagem !== "FIM") { //- continua até encontrar "FIM".

  
  // Se o tipo escolhido for BOT e a mensagem começar com "BOT:"
  if (tipoMensagem === "BOT" && mensagem.slice(0, 4) === "BOT:") {
    contador++;
                          //- compara o prefixo da mensagem com o tipo escolhido.
                          //- Usei mensagem.slice(0, 4) para pegar os 4 primeiros caracteres (BOT:).
                          //- Usei mensagem.slice(0, 5) para pegar os 5 primeiros caracteres (USER:).


  // Se o tipo escolhido for USER e a mensagem começar com "USER:"
  } else if (tipoMensagem === "USER" && mensagem.slice(0, 5) === "USER:") {
    contador++;
  }

  // Lê a próxima mensagem
  mensagem = gets();
}

// Imprime apenas o número total de mensagens encontradas
print(contador);
*/



