import './Jogo.css';
import { useState } from 'react';

function Quadrado({quadrado, handleClick}) {
    return <button className="quadrado" 
                    onClick={handleClick}>
                        {quadrado}
            </button>
}

function Tabuleiro() {
    const [vezDoX,setVezDoX] = useState(true);
    const [quadrados,setQuadrados] = useState(Array(9).fill(null));

    function handleClickQuadrado(i) {
        if (quadrados[i] == null) {
            const novosQuadrados = quadrados.slice();
            novosQuadrados[i] = vezDoX ? 'X' : 'O';
            setQuadrados(novosQuadrados);

            //final da jogada
            setVezDoX(!vezDoX);
        }
    }

    function reiniciarJogo() {
        setQuadrados(Array(9).fill(null));
        setVezDoX(true);
    }

    let mensagem = 'Vez do jogador: ' + (vezDoX ? 'X' : 'O')

    return (
        <>
            <h2>{mensagem}</h2>
            <button onClick={reiniciarJogo}>Reiniciar jogo</button>
            <div className="linha">
                <Quadrado quadrado={quadrados[0]} handleClick={() => handleClickQuadrado(0)}/>
                <Quadrado quadrado={quadrados[1]} handleClick={() => handleClickQuadrado(1)}/>
                <Quadrado quadrado={quadrados[2]} handleClick={() => handleClickQuadrado(2)}/>
            </div>
            <div className="linha">
                <Quadrado quadrado={quadrados[3]} handleClick={() => handleClickQuadrado(3)}/>
                <Quadrado quadrado={quadrados[4]} handleClick={() => handleClickQuadrado(4)}/>
                <Quadrado quadrado={quadrados[5]} handleClick={() => handleClickQuadrado(5)}/>
            </div>
            <div className="linha">
                <Quadrado quadrado={quadrados[6]} handleClick={() => handleClickQuadrado(6)}/>
                <Quadrado quadrado={quadrados[7]} handleClick={() => handleClickQuadrado(7)}/>
                <Quadrado quadrado={quadrados[8]} handleClick={() => handleClickQuadrado(8)}/>
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