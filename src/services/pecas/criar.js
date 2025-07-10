import prompt from "prompt";
import promptCriarPeca from "../../esquemas-prompt/esquema-peca.js";
import gerenciador from "./gerenciador.js";

async function criarPeca(){
    prompt.get(promptCriarPeca, gerenciador);

    prompt.start();
}

export default criarPeca;