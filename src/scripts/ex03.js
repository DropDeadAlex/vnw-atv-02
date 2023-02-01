import { log } from "./consolog"

const exibeDados = ({ nome, idade, genMusical }) => {
  const dados = [
    `Nome: ${nome}`,
    `Idade: ${idade}`,
    `Gênero Musical: ${genMusical}`
  ].join("\n")

  log(dados)
}

const pessoa = {
  nome: "Æon",
  idade: "23",
  genMusical: "post-rock"
}

exibeDados(pessoa)
