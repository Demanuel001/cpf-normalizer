
import readline from 'readline';
import { normalizeCPF } from './utils/normalizeCPF';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query: string ): Promise<string> {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function main() {

  const inputCPF = await askQuestion('Digite seu CPF para prosseguir: ');

  if (inputCPF.trim().toLowerCase() === 'exit') {
    rl.close();
  } else {
    const normalizedCPF = await normalizeCPF(inputCPF.trim());
    console.log(`Normalized CPF: ${normalizedCPF}`);
  }
}

main();
