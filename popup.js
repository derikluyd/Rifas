// Define o número total de bilhetes disponíveis para a rifa
const totalTickets = 100;

// Define o array para armazenar os números dos bilhetes vendidos
let soldTickets = [];

// Função para vender bilhetes
function sellTicket() {
  // Verifica se ainda há bilhetes disponíveis
  if (soldTickets.length >= totalTickets) {
    console.log("Desculpe, não há mais bilhetes disponíveis para a venda.");
    return;
  }

  // Gera um número aleatório para o bilhete
  let ticketNumber = Math.floor(Math.random() * totalTickets) + 1;

  // Verifica se o número gerado já foi vendido
  while (soldTickets.includes(ticketNumber)) {
    ticketNumber = Math.floor(Math.random() * totalTickets) + 1;
  }

  // Adiciona o número do bilhete vendido ao array
  soldTickets.push(ticketNumber);

  console.log(`Bilhete vendido: número ${ticketNumber}`);
}
