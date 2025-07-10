import prompt from "prompt";
import promptEsquemaRemoverPeca from "../../esquemas-prompt/esquema-peca.js";
import gerenciador from "./gerenciar.js";

async function removerPeca(){
    prompt.get(promptEsquemaRemoverPeca, gerenciador);

    prompt.start();
}

export default removerPeca;