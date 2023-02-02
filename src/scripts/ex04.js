import { log } from "./consolog"

const imprimeMidias = (filme, musica) => {
  log(
    [
      `filme: ${filme}`,
      `musica: ${musica}`
    ]
    .join("\n")
  )
}

imprimeMidias("EnterTheVoid", "Gentle Giant")
