let sistemaImoveis = () =>
{
    let opcao
    let vetImovel = []
    let tipo
    do 
    {
        opcao = Number(prompt(`Informe: \n1. Cadastrar um imóvel \n2. Consultar imóveis por tipo  \n3. Consultar valor total de imóveis \n4. Consultar imóveis com mais de 100 metros quadrados \n5. Sair`))
        switch(opcao)
        {
            case 1: cadastraImovel(vetImovel)
                    break
            case 2: tipo = prompt(`Informe o tipo do imóvel: 'A' ou 'C'`).toUpperCase()
                    consultaImoveis(vetImovel, tipo)
                    break
            case 3: consultaValorTotal(vetImovel)
                    break
            case 4: consultaImoveisGrandes(vetImovel)
                    break
            case 5: alert(`Programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
        
    } while (opcao != 5)
}
let cadastraImovel = (vetImovel) =>
{
    let objeto =
    {
        codigo: Number(prompt(`Informe o código do imóvel:`)),
        tamanho: Number(prompt(`Informe o tamanho do imóvel: `)),
        tipo: prompt(`Informe se o tipo de imóvel é 'A' ou 'C'. (Sendo 'A' para apartamento e 'C' para casa.)`).toUpperCase(),
        valor: Number(prompt(`Informe o valor do imóvel:`))
    }
    let achou = false
    for (let i=0; i<vetImovel.length; i++)
    {
        if(vetImovel[i].codigo == objeto.codigo)
        {
            achou = true
            alert(`Código já existente`)
        }
    }
    if (!achou)
    {
        vetImovel.push(objeto)
        alert(`Imóvel cadastrado com sucesso.`)
    }
    else 
    {
        alert(`Imóvel já existe com este código`)
    }
    console.log(vetImovel)
}

let consultaImoveis = (vetImovel, tipo) =>
{
    let achou = false
    for(let i=0; i<vetImovel.length; i++)
    {
        if (vetImovel[i].tipo == tipo)
        {
            console.log(vetImovel[i])
            achou = true
        }
    }
    if (!achou)
    {
        console.log(`Imóvel não encontrado neste tipo`)
    }
}

let consultaValorTotal = (vetImovel) =>
{
    let soma = 0
    for (let i=0; i<vetImovel.length;i++)
    {
        soma = soma + vetImovel[i].valor
    }
    alert(`O valor total dos imóveis é ${soma}`)
}

let consultaImoveisGrandes = (vetImovel) =>
{
    for (let i=0; i<vetImovel.length;i++)
    {
        if(vetImovel[i].tamanho>100)
        {
            console.log(vetImovel[i])
        }
    }
}