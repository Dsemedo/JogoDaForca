import {useState} from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import forca0 from "./assets/forca0.png";


export default function App() {

    const alfabetoCompleto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    const [inicio, setInicio] = useState(false);
    const [letras, setLetras] = useState([alfabetoCompleto], true);
    const [letrasSelecionadas, setLetrasSelecionadas] = useState([])


    function BotaoIniciar() {
      setInicio(!inicio);
      setLetras(!letras)
      console.log(inicio);
    }

    function DesabilitarLetra(numero){
       const letraClicada = [...letrasSelecionadas, numero];
       setLetrasSelecionadas(letraClicada);
    }
    console.log(letrasSelecionadas);


    function Letra(props) {
        return (
            letras ?
            <Desabilitado onClick={() => DesabilitarLetra(props.numero)}>
            {props.letraIndividual}
        </Desabilitado>  : 
            <Habilitado >
            {props.letraIndividual}
        </Habilitado>
        )
    }

    return (
        <>
            <GlobalStyle />
            <Container>

            <Cima>
                <ImagemForca src={forca0} />
                <LadoDireito>
                    <BotaoEscolher onClick={BotaoIniciar}>
                        Escolher Palavra
                    </BotaoEscolher>

                    <PalavraForca>
                    
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
                    <button />
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
background-color: yellowgreen;
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
    background-color: red;

`