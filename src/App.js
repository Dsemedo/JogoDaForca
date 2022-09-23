import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import palavras from "./palavras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";

// colocar imagem em um usestate, toda vez que errar, muda o usestate


export default function App() {

    const alfabetoCompleto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const [inicio, setInicio] = useState(false);
    const [letras, setLetras] = useState(false);
    const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);
    const [palavraSorteada, setPalavraSorteada] = useState("");
    const [letrasErradas, setLetrasErradas] = useState([]);
    const [errosForca, setErrosForca] = useState(forca0);



    function BotaoIniciar() {
        setInicio(!inicio);
        setLetras(!letras);
        setPalavraSorteada(...palavraSorteada.toUpperCase(), palavras[Math.floor(Math.random() * palavras.length)])
        console.log(inicio);
    }

    const palavraSemAcento = palavraSorteada.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    const palavraModificada = palavraSemAcento.toUpperCase().split("");
    console.log(palavraModificada);

    function DesabilitarLetra(letraClicada) {
        setLetrasSelecionadas([...letrasSelecionadas, letraClicada]);

        if (palavraModificada.includes(letraClicada)) {
            alert("letra certa")
        } else {
            setLetrasErradas([...letrasErradas, letraClicada])
        }

        if (letrasErradas.length = 1) {
            setErrosForca(forca1)
        } else if (letrasErradas.length == 2) {
            setErrosForca(forca2)
        } else if (letrasErradas.length == 3) {
            setErrosForca(forca3)
        } else if (letrasErradas.length == 4) {
            setErrosForca(forca4)
        } else if (letrasErradas.length == 5) {
            setErrosForca(forca5)
        }

        switch (setErrosForca) {
            case letrasErradas.length = 1:
                setErrosForca(forca1);
                break;
            case letrasErradas.length = 2:
                setErrosForca(forca2);
                break;
            case letrasErradas.length = 3:
                setErrosForca(forca3);
                break;
            case letrasErradas.length = 4:
                setErrosForca(forca4);
                break;
            case letrasErradas.length = 5:
                setErrosForca(forca5);
                break;
        }

    }

    console.log(errosForca);
    console.log(letrasErradas.length);



    function Letra(props) {

        if (letrasSelecionadas.includes(props.letraIndividual) || letras === false) {
            return (
                <Desabilitado disabled >
                    {props.letraIndividual}
                </Desabilitado>
            )
        } else {
            return (

                <Habilitado onClick={() => DesabilitarLetra(props.letraIndividual)} >
                    {props.letraIndividual}
                </Habilitado>)

        }

    }

    return (
        <>
            <GlobalStyle />
            <Container>

                <Cima>
                    <ImagemForca src={errosForca} />
                    <LadoDireito>
                        <BotaoEscolher onClick={BotaoIniciar}>
                            Escolher Palavra
                        </BotaoEscolher>

                        <PalavraForca>
                            {palavraSorteada.toUpperCase()}
                        </PalavraForca>
                    </LadoDireito>
                </Cima>

                <Baixo>
                    <Alfabeto>
                        {alfabetoCompleto.map((caractere, index) =>
                            <Letra numero={index} letraIndividual={caractere.toUpperCase()} />)}

                    </Alfabeto>
                    <Resposta>
                        <span>Já sei a palavra!</span>
                        <input placeholder="Olá" />
                        <button>
                            Chutar
                        </button>
                    </Resposta>
                </Baixo>

            </Container>


        </>
    )
}




const Container = styled.div`
width: 1000px;
height: 660px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Resposta = styled.div`
width: 500px;
height: 50px;
background-color: red;
display:flex;
justify-content: space-around;
align-items: center;
flex-direction: row;

input{
    width: 230px;
    height: 30px;
    border: 2px solid black;
}

button{
    width: 70px;
    height: 35px;
    border: 2px solid black;
}

`

const Alfabeto = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
flex-wrap:wrap;
width: 100%;
height:100px;
background-color: yellow;
`

const Desabilitado = styled.button`

    margin-right: 6px;
    width: 50px;
    height: 40px;
    border-radius: 10%;
    background-color: grey;
    color: black;
    opacity: 90%;

`

const Habilitado = styled.button`
    margin-right: 6px;
    width: 50px;
    height: 40px;
    border-radius: 10%;
    background-color: #9acddc;
    color: black;
    opacity: 90%;
`


const Baixo = styled.div`
margin-top: 20px;
margin-left: 5%;
width: 750px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:blue;
`

const Cima = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
width: 1000px;
`

const ImagemForca = styled.img`
width: 400px;
height: 400px;

`

const BotaoEscolher = styled.button`
    margin-top: 20px;
    width: 210px;
    height: 60px;
    background-color:  	#3CB371;
    color: white;
    border-radius: 10px;
    font-size: 20px;
    font-weight:bold;

`

const LadoDireito = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 250px;
background-color: gray;
`

const PalavraForca = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 25px;
`