import Container from "../components/Container";
import ImgEstrela from "../components/ImgEstrela";
import Titulo from "../components/Titulo";
import Paragrafo from "../components/Paragrafo";
import Botoes from "../components/Botoes";
import BotaoSub from "../components/BotaoSub";


const App = () => {
    return (
        <Container>
            <ImgEstrela />
            <Titulo texto={"How did we do?"} />
            <Paragrafo texto={"Please let us know we did with your support request. All feedback is appreciated to help us improve our offering!"} />
            <Botoes />
            <BotaoSub texto={"SUBMIT"} />
        </Container>
    )
}

export default App;