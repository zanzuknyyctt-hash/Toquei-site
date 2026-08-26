#!/usr/bin/env node
// Falha (exit 1) se algum .html da raiz do repo tiver um placeholder do tipo
// [RAZÃO SOCIAL], [CIDADE/UF], [DATA] etc visível — texto entre colchetes
// com letras maiúsculas, sinal de rascunho esquecido em produção.
//
// Uso: node scripts/checar-placeholders.js

const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
const padrao = /\[[A-ZÀ-Ú ]{3,}\]/;

const arquivos = fs
  .readdirSync(raiz)
  .filter((nome) => nome.endsWith('.html'));

let encontrouProblema = false;

for (const nome of arquivos) {
  const caminho = path.join(raiz, nome);
  const conteudo = fs.readFileSync(caminho, 'utf8');
  const linhas = conteudo.split('\n');

  linhas.forEach((linha, indice) => {
    const match = linha.match(padrao);
    if (match) {
      encontrouProblema = true;
      console.error(`${nome}:${indice + 1}: placeholder encontrado -> ${match[0]}`);
    }
  });
}

if (encontrouProblema) {
  console.error('\nFalhou: existe placeholder entre colchetes visível em produção.');
  process.exit(1);
}

console.log(`OK: nenhum placeholder encontrado em ${arquivos.length} arquivo(s) HTML.`);
process.exit(0);
