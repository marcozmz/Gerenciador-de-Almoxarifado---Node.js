import prompt from "prompt";
import promptEsquemaPeca from "../../esquemas-prompt/esquema-peca.js";
import criarPeca from "../peca.js";

async function gerenciador() {
    try {
        const result = await prompt.get(promptEsquemaPeca);

        const nome = result.nome;
        const preco = result.valor;
        const quantidade = result.quantidade;

        const item = await criarPeca(nome, preco, quantidade);
        console.log(`Item [${item.nome} - R$ ${item.preco} - ${item.quantidade}x] Adicionado`);
        return item;
    } catch (err) {
        console.log("Erro ao criar item:", err.message);
        return null;
    }
}

export default gerenciador;
