import './Jogo.css';
import { useState } from 'react';

function Quadrado({quadrado, handleClick}) {
    return <button className="quadrado" 
                    onClick={handleClick}>
                        {quadrado}
            </button>
}

function verificarVencedor(quadrados) {

    /*
        0 1 2
        3 4 5
        6 7 8
    */ 
   /*
       00 01 02
       10 11 12
       20 21 22 dp i == j ds i + j == len-1
   */

    const combinacoesVencedoras = [
        // linhas
        [0, 1, 2], //linha1
        [3, 4, 5], //linha2
        [6, 7, 8], //linha3

        //colunas
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        //dp e ds
        [0, 4, 8],
        [6, 4, 2]
    ]

    for (let i=0; i < combinacoesVencedoras.length; i++) {
        const [p1,p2,p3] = combinacoesVencedoras[i];
        if (quadrados[p1] && 
            quadrados[p1] == quadrados[p2] &&
            quadrados[p2] == quadrados[p3]) { //vencedor da primeira linha
    
                return quadrados[p1];
        }
    }
    return null;
}

function Tabuleiro() {
    const [vezDoX,setVezDoX] = useState(true);
    const [quadrados,setQuadrados] = useState(Array(9).fill(null));

    function handleClickQuadrado(i) { //i == 0
        if (verificarVencedor(quadrados) || quadrados[i]) {
            return;
        }
        const novosQuadrados = quadrados.slice(); //copia do array
        novosQuadrados[i] = vezDoX ? 'X' : 'O'; //novosQuadrados[0] = X
        setQuadrados(novosQuadrados); //atualizar o state

        //final da jogada
        setVezDoX(!vezDoX);
    }

    function reiniciarJogo() {
        setQuadrados(Array(9).fill(null));
        setVezDoX(true);
    }

    let vencedor = verificarVencedor(quadrados);
    let mensagem;
    if (vencedor) {
        mensagem = 'Vencedor é: '+vencedor;
    } else {
        mensagem = 'Vez do jogador: ' + (vezDoX ? 'X' : 'O');
    }

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