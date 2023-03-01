import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

export default function Jogo({error, StartGame, palavraJogo, corDaPalavra}) {
    return (
        <div className="div-forca">
            <img data-test="game-image" src={imagens[error]} alt="forca"/>
            <button data-test="choose-word" onClick={StartGame}>Escolher Palavra</button>
            <h1 data-test="word" className={corDaPalavra} >{palavraJogo}</h1>
        </div>
    )
}

const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

