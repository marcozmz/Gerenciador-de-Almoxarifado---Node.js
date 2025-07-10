import chalk from "chalk";

const promptRemoverPeca = [
    {
  name: "nome",
  description: chalk.green("Digite o nome da peça")
},
{
  name: "quantidade",
  description: chalk.black("Digite a quantidade das peças que irão ser removidas")
}

]

export default promptRemoverPeca;