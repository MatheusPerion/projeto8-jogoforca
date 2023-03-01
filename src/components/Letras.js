import alfabeto from "../alfabeto"

export default function letter({ usedLetters, ClickLetter }) {
    return (
        <div className="container-letters">
            {alfabeto.map((letter) => (
                <button
                    key={letter}
                    disabled={usedLetters.includes(letter)}
                    data-test="letter" onClick={() => ClickLetter(letter)}>
                    {letter}
                </button>
            ))}
        </div>
    ) 
}

