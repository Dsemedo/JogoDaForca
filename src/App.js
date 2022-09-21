import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import forca0 from "./assets/forca0.png"

export default function App() {

    const alfabetoCompleto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <>
            <GlobalStyle />
            <Cima>
                <ImagemForca src={forca0} />
                <LadoDireito>
                    <BotaoEscolher>
                        Escolher Palavra
                    </BotaoEscolher>

                    <PalavraForca>

                    </PalavraForca>
                </LadoDireito>
            </Cima>

            <Baixo>
                <Alfabeto>

                    {alfabetoCompleto.map((a) => <Letra letraIndividual={a.alfabetoCompleto} />)}
                </Alfabeto>
            </Baixo>



        </>
    )
}

function Letra(props) {
    return (
        <button>
            {props.letraIndividual}
        </button>
    )
}

const Alfabeto = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
flex-wrap:wrap;
width: 500px;
height:100px;
background-color: yellow;

button {
    margin-right: 6px;
    width: 30px;
    height: 30px;
    border-radius: 10%;
    background-color: gray;
    color: white;
    opacity: 50%;

}
`

const Baixo = styled.div`
margin-top: 20px;
margin-left: 300px;
width: 800px;
display: flex;
flex-direction: column;
align-items: center;
background-color:blue;
`

const Cima = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
`

const ImagemForca = styled.img`
width: 400px;
height: 400px;

`

const BotaoEscolher = styled.button`
    margin-top: 20px;
    margin-left: 30%;
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
width: 300px;
`

const PalavraForca = styled.div`
    width: 100%;
    height: 60px;
    background-color: red;

`

