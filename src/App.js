import palavras from "./palavras"
import alfabeto from "./alfabeto"
import { useState } from "react"
import Jogo from "./components/Forca"
import Letras from "./components/Letras"

export default function App() {
  const [error, setError] = useState(0)
  const [palavraEscolhida, setPalavraEscolhida] = useState([])
  const [palavraJogo, setPalavraJogo] = useState([])
  const [usedLetters, setUsedLetters] = useState(alfabeto)
  const [corDaPalavra, setCorDaPalavra] = useState("preto")

  function StartGame() {
    setError(0)
    setUsedLetters([])
    setCorDaPalavra("preto")
    sortearPalavra()
  }

  

  

  function ClickLetter(letter) {
    setUsedLetters([...usedLetters, letter])

    if (palavraEscolhida.includes(letter)) {
      acertouLetra(letter)
    } else {
      errouLetra()
    }

  }

  function sortearPalavra() {
    const i = Math.floor(Math.random() * palavras.length)
    const palavra = palavras[i]
    console.log(palavra)

    const palavraArray = palavra.split("")
    setPalavraEscolhida(palavraArray)

    let tracinhos = []
    palavraArray.forEach(() => tracinhos.push(" _"))
    setPalavraJogo(tracinhos)
  }

  function acertouLetra(letraDigitada) {
    const novaPalavraJogo = [...palavraJogo]

    palavraEscolhida.forEach((letra, i) => {
      if (letra === letraDigitada) {
        novaPalavraJogo[i] = letraDigitada
      }
    })

    setPalavraJogo(novaPalavraJogo)

    if (!novaPalavraJogo.includes(" _")) {
      setCorDaPalavra("verde")
      finalizarJogo()
    }
  }

  function errouLetra() {
    const newError = error + 1
    setError(newError)
    if (newError === 6) {
      setCorDaPalavra("vermelho")
      finalizarJogo()
    }
  }

  return (
    <div className="tela">
      <Jogo
        error={error}
        StartGame={StartGame}
        corDaPalavra={corDaPalavra}
        palavraJogo={palavraJogo}
      />

      <Letras
        usedLetters={usedLetters}
        ClickLetter={ClickLetter}
      />
    </div>
  )

  function finalizarJogo() {
    setPalavraJogo(palavraEscolhida)
    setUsedLetters(alfabeto)
  }
}