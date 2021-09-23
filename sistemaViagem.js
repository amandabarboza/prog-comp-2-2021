let sistemaViagem = () =>
{
    let opcao
    let vetViagem = []
    do 
    {
    opcao = Number(prompt(`Informe: \n1. Cadastrar viagem \n2. Consultar e mostrar preço médio das viagens disponíveis \n3. Consultar e mostrar todas as viagens do tipo desejado \n4. Consultar e mostrar viagem mais barata \n5. Sair`))
        switch(opcao)
        {
            case 1: cadastraViagem(vetViagem)
                    break
            case 2: consultaMedia(vetViagem)
                    break
            case 3: let tipo = prompt(`Informe se a viagem é 'A' (aérea) ou 'T' (terrestre):`).toUpperCase()
            consultaTudo(vetViagem, tipo)
                    break
            case 4: let pais = prompt(`Informe o país: `)
            consultaMaisBarata(vetViagem, pais)
                    break
            case 5: alert(`Programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    } while (opcao != 5)
}
let cadastraViagem = (vetViagem) =>
{
    let objeto =
    {
        codigo: Number(prompt(`Informe o código da viagem: `)),
        pais: prompt(`Informe o país: `),
        cidade: prompt(`Informe a cidade: `),
        preco: Number(prompt(`Informe o preço da viagem:`)),
        tipo: prompt(`Informe o tipo de viagem. 'A' para (aérea) ou 'T' para (terrestre)`).toUpperCase()       
    }
    let achou = false
    for (let i=0; i<vetViagem.length; i++)
    {
        if(vetViagem[i].codigo == objeto.codigo)
        {
            achou = true
            alert(`Código já existente`)
        }
    }
    if (!achou)
    {
        vetViagem.push(objeto)
        alert(`Viagem cadastrado com sucesso.`)
    }
    else 
    {
        alert(`Viagem já existe com este código`)
    }
    console.log(vetViagem)
}
let consultaMedia = (vetViagem) =>
{
    let media = 0
    let soma = 0
    for (let i = 0; i < vetViagem.length; i++) 
    {
        soma = soma + vetViagem[i].preco
        media = soma/vetViagem.length
    }
    console.log(media)
}
let consultaTudo = (vetViagem, tipo) =>
{
    for (let i = 0; i < vetViagem.length; i++) 
    {
        if (vetViagem[i].tipo == tipo)
        {
            console.log(vetViagem[i])
        }
    }
}
let consultaMaisBarata = (vetViagem, pais) =>
{
    let barata = 9999999
    let maisbarata = 0
    for (let i = 0; i < vetViagem.length; i++) {
        if (vetViagem[i].pais == pais) {
            if (vetViagem[i].preco < barata) {
                maisbarata = vetViagem[i]
            }
        } 
    }
    console.log(maisbarata)
}