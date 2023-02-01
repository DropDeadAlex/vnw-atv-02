import { log } from "./consolog"

const exibeDados = ({ nome, idade, genMusical }) => {
  const dados = "".concat(
    `Nome: ${nome}\n`,
    `Idade: ${idade}\n`,
    `Gênero Musical: ${genMusical}`
  )

  log(dados)
}

const pessoa = {
  nome: "Æon",
  idade: "23",
  genMusical: "post-rock"
}

exibeDados(pessoa)
