let gerenciaRedesociais = () =>
{
    // cadastro das redes sociais
    let vetorRedesSociais = []
    for (let i=0; i<5; i++)
    {
        let objeto = 
        {
            codigo: Number(prompt(`Informe código da rede social`)),
            nome: prompt(`Informe nome da rede social`),
            url: prompt(`Informe url da rede social`)
        }
        // inserir objeto no vetor
        vetorRedesSociais.push(objeto)
    }
    // cadastro dos usuários
    let vetorUsuario = []
    for (let i=0; i<5; i++)
    {
        let objeto =
        {
            login: prompt(`Informe o login`),
            nome: prompt(`Informe o nome`),
            codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
            qtdePosts: Number(prompt(`Informea quantidade de posts da rede social`))
        }
        // só faremos isso se a rede social existir
        let achou = false // assumo que não encontrei a rede social
        let j = 0 // índice do vetor de redes sociais
        while (!achou && j<5) // sai ou porque achou ou porque acabou o vetor
        {
            if(vetorRedesSociais[j].codigo == objeto.codigoRedeSocial)
            {
                vetorUsuario.push(objeto) // inserimos
                achou = true
                alert(`Usuário inserido com sucesso`)
            }
            j++ // prepara para ir ao próximo elemento
        }
        if (!achou)
        {
            alert(`Usuário não inserido, pois a Rede social não foi encontrada`)
        }
    }
    // Exe1) o usuário informa a rede social, e o programa retorna quantos posts foram feitos

    let codigo = Number(prompt(`Informe o código da rede social`))
    // percorre vetor procurando
    let conta = 0
    for(let i=0;i<5;i++) // percorre o vetor VetorUsuario
    {
        if (vetorUsuario[i].codigoRedeSocial == codigo) // encontrei
        {
            conta = conta + vetorUsuarios[i].qtdePosts
        }
    }
    if (conta == 0)
    {
        console.log(`Não houve postagem ou rede social não existe`)
    }
    else
    {
        console.log(`A qtde de post na rede social ${codigo} foi ${conta}`)
    }
  // Exe2) o programa retorna quantos posts foram feitos em todas as redes sociais
  for (let i=0; i<5; i++) // para cada rede social
  {
      let conta = 0
      for(let j=0; j<5; j++) // procura nos usuários
      {
          if (vetorRedesSociais[i].codigo == vetorUsuario[j].codigoRedeSocial)
          conta = conta + vetorUsuario[i].qtdePosts
      }
      // terminou de somar os posts de uma rede social
      console.log(`A qtde de posts da rede social ${vetorRedesSociais.codigo} é ${conta}`)
  }
  // Exe3) o usuário informa informa o login do usuário, e o programa retorna quantos posts ele fez
  // Exe4) o programa retorna quantos posts foram feitos por cada usuário

}
