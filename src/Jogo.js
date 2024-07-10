import './Jogo.css';
import { useState } from 'react';

function Quadrado() {
    const [quadrado,setQuadrado] = useState('');

    function handleClick() {
        if (quadrado == 'X') {
            setQuadrado('O');
        } else {
            setQuadrado('X');
        }
    }
    return <button className="quadrado" 
                    onClick={handleClick}>
                        {quadrado}
            </button>
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