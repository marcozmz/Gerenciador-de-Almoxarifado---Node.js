import prompt from "prompt";
import promptEsquemaRemoverPeca from "../../esquemas-prompt/esquema-remover-peca.js";

async function gerenciadorRemover() {
    try {
        const result = await prompt.get(promptEsquemaRemoverPeca);

        const nome = result.nome;
        const quantidade = parseInt(result.quantidade);

        return {
            nome,
            quantidade
        };
    } catch (err) {
        console.log("Erro ao remover item:", err.message);
        return null;
    }
}

export default gerenciadorRemover;
