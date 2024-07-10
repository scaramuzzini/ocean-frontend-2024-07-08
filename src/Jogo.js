import './Jogo.css';

function Tabuleiro() {
    return (
        <>
            <h2>Este é um tabuleiro de jogo da velha</h2>
            <div className="linha">
                <button className="quadrado">X</button>
                <button className="quadrado">X</button>
                <button className="quadrado">X</button>
            </div>
            <div className="linha">
                <button>X</button>
                <button>X</button>
                <button>X</button>
            </div>
            <div className="linha">
                <button>X</button>
                <button>X</button>
                <button>X</button>
            </div>
        </>
    )
}

function JogoDaVelha() {
    return (
    <>
        <h1>Jogo da Velha</h1>
        <Tabuleiro />
    </>
    )
}

export default JogoDaVelha;