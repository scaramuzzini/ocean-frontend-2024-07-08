import './Jogo.css';

function Quadrado() {
    return <button className="quadrado">X</button>
}

function Tabuleiro() {
    return (
        <>
            <h2>Este é um tabuleiro de jogo da velha</h2>
            <div className="linha">
                <Quadrado />
                <Quadrado />
                <Quadrado />
            </div>
            <div className="linha">
                <Quadrado />
                <Quadrado />
                <Quadrado />
            </div>
            <div className="linha">
                <Quadrado />
                <Quadrado />
                <Quadrado />
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