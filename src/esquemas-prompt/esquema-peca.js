import chalk from "chalk";

const promptCriarPeca = [
    {
        name: "nome",
        description: console.log(chalk.green("Digite o nome da peça"))
    },
    {
        name: "valor",
        description: console.log(chalk.gray("Digite o valor da peça"))
    },
    {
        name: "quantidade",
        description: console.log(chalk.black("Digite a quantidade das peças que irão ser adicionadas"))
    }
]

export default promptCriarPeca;