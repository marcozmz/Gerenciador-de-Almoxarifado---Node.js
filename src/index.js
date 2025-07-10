import * as pecasServicos from "./services/almoxarifado.js";
import prompt from "prompt";
import promptEsquemaMain from "./esquemas-prompt/esquema-main.js";
import gerenciador from "./services/pecas/gerenciador.js";
import gerenciadorRemover from "./services/remover-pecas/gerenciar.js";

const pecas = [];

console.log("\nBem vindo ao Almoxarifado:\n");

async function main() {
    prompt.start();

    while (true) {
        const { selecionar } = await prompt.get(promptEsquemaMain);

        if (selecionar == 1) {
            const itemNovo = await gerenciador();
            if (itemNovo) {
                await pecasServicos.addItemAlmoxarifado(pecas, itemNovo);
                await pecasServicos.exibirPecas(pecas);
            }
        }

        if (selecionar == 2) {
            const item = await gerenciadorRemover();
            if (item) {
                await pecasServicos.removerPeca(pecas, item);
                await pecasServicos.exibirPecas(pecas);
            }
        }

        if (selecionar == 3) {
            await pecasServicos.exibirPecas(pecas);
        }

        if (selecionar == 0) {
            console.log("Saindo...");
            break;
        }
    }
}


main();