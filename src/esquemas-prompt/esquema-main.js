import chalk from "chalk";

const promptEsquemaMain = [{
    name: "selecionar",
    description: chalk.blue.bold("\nEscolha: \n[1] para adicionar uma peça\n[2] para remover uma peça\n[3] para vizualizar o almoxarifado\n"),
    pattern: /^[1-3]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 a 3"),
    require: true
}];

export default promptEsquemaMain;