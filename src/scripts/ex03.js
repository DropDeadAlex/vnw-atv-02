import { log } from "./consolog"

const exibeDados = ({ nome, idade, genMusical}) => {
  const dados = ""
    .concat(`Nome: ${nome}\n`)
    .concat(`Idade: ${idade}\n`)
    .concat(`Gênero Musical: ${genMusical}`)
  ;

  log(dados)
}

const pessoa = {
  nome: "Æon",
  idade: "23",
  genMusical: "post-rock"
}

exibeDados(pessoa)
