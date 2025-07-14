async function addItemAlmoxarifado(pecas, item){
    pecas.push(item);
}

async function removerPeca(pecas, item) {
    const indexFound = pecas.findIndex((p) => p.nome === item.nome);

    if (indexFound === -1) {
        console.log("Item não encontrado.");
        return;
    }

    const peca = pecas[indexFound];

    if (peca.quantidade > item.quantidade) {
        peca.quantidade -= item.quantidade;
        console.log(`Foram removidas ${item.quantidade} unidade(s) de ${peca.nome}.`);
    } else {
        pecas.splice(indexFound, 1);
        console.log(`Todas as unidades de ${peca.nome} foram removidas.`);
    }
}


async function exibirPecas(pecas){
    console.log("\nAlmoxarifado atual:\n");

    pecas.forEach((item, index) => {
        console.log(`${index + 1}. ${item.nome} - R$ ${item.preco} | ${item.quantidade}x\n`);
    })
}

export {
    addItemAlmoxarifado,
    exibirPecas,
    removerPeca
}

