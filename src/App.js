import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import sorteada from "./palavras";
import forca0 from "./assets/forca0.png";
import forca1 from "./assets/forca1.png";
import forca2 from "./assets/forca2.png";
import forca3 from "./assets/forca3.png";
import forca4 from "./assets/forca4.png";
import forca5 from "./assets/forca5.png";
import forca6 from "./assets/forca6.png";


export default function App() {

    const alfabetoCompleto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const [inicio, setInicio] = useState(false);
    const [letras, setLetras] = useState(false);
    const [letrasSelecionadas, setLetrasSelecionadas] = useState([]);
    const [palavraSorteada, setPalavraSorteada] = useState(``);
    const [letrasErradas, setLetrasErradas] = useState([]);
    const [letrasCertas, setLetrasCertas] = useState([]);
    const [errosForca, setErrosForca] = useState(forca0);
    const [respostaInput, setRespostaInput] = useState("");


    
    function BotaoIniciar() {
        setInicio(!inicio);
        setLetras(true);
       setPalavraSorteada(`${sorteada}`)
    }

    console.log(palavraSorteada)
    const palavraMaiusc = palavraSorteada.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    const palavraModificada = palavraMaiusc.split("");


    //Habilitar e desabilitar letras

    function DesabilitarLetra(letraClicada) {
        const letrinhasErradas = [...letrasErradas, letraClicada]
        // const letrinhasCertas = [...letrasCertas, letraClicada]

        setLetrasSelecionadas([...letrasSelecionadas, letraClicada])



        if (palavraModificada.includes(letraClicada)) {
            for (let i = 0; i < palavraModificada.length; i++) {
                if (letraClicada === palavraModificada[i]) {
                    console.log(`achei a letra ${letraClicada}`);
                    letrasCertas.push(letraClicada);
                }
            } setLetrasCertas(letrasCertas);
        } else {
            setLetrasErradas(letrinhasErradas);
        }




    }

    // Imprimir cada letra

    function Letra(props) {

        if (letrasErradas.length === 1) {
            setErrosForca(forca1)
        } else if (letrasErradas.length === 2) {
            setErrosForca(forca2)
        } else if (letrasErradas.length === 3) {
            setErrosForca(forca3)
        } else if (letrasErradas.length === 4) {
            setErrosForca(forca4)
        } else if (letrasErradas.length === 5) {
            setErrosForca(forca5)
        } else if (letrasErradas.length === 6) {
            setErrosForca(forca6)
            setLetras(false);
        }

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

    // Enviar pelo input

    function EnviarResposta() {
        if (respostaInput.toUpperCase() === palavraMaiusc || respostaInput.toUpperCase() === palavraSorteada.toUpperCase()) {
            alert("Parabéns, vc ganhou!")
            setRespostaInput("")
            setLetras(false)



        } else {
            alert("Voce perdeu");
            setErrosForca(forca6);
            setRespostaInput("")
        }
    }

    function TrocarPalavra() {
        if (errosForca === forca6) {
            return (
                <RespostaVermelho>
                    {palavraMaiusc}
                </RespostaVermelho>
            )
        }
        else if (letrasCertas.length === palavraModificada.length) {
            setLetras(false);
            return (
                <RespostaVerde>
                    {() => alert("Parabéns, voce ganhou!")}
                    {palavraSorteada.toUpperCase()}
                </RespostaVerde>
            )
        }
        else {
            return (
                <PalavraForca>

                    {palavraModificada.map((letra, index) => letrasCertas.includes(letra) ? ` ${letra}` : " _")}

                </PalavraForca>
            )
        }
    }

    return (
        <>
            <GlobalStyle />
            <Container>

                <Cima>
                    <ImagemForca data-identifier="game-image" src={errosForca} />
                    <LadoDireito>
                        <BotaoEscolher data-identifier="choose-word" onClick={BotaoIniciar}>
                            Escolher Palavra
                        </BotaoEscolher>

                        <TrocarPalavra data-identifier="word" />

                    </LadoDireito>
                </Cima>

                <Baixo>
                    <Alfabeto>
                        {alfabetoCompleto.map((caractere, index) =>
                            <Letra data-identifier="letter" numero={index} letraIndividual={caractere.toUpperCase()} />)}

                    </Alfabeto>
                    <Resposta>
                        <span>Já sei a palavra!</span>
                        <input data-identifier="type-guess" onChange={(e) => setRespostaInput(e.target.value)} value={respostaInput} placeholder="Olá" />
                        <button data-identifier="guess-button" onClick={EnviarResposta}>
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

const RespostaVermelho = styled.span`
    color: red;
    font-size: 26px;
`

const RespostaVerde = styled.span`
    color: green;
    font-size: 26px;
`

const Resposta = styled.div`
width: 500px;
height: 50px;
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
`

const PalavraForca = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size: 25px;
`