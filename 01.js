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

    //o usuario informa a rede social, e  o programa retorna quantos posts foram feitos
    // o programa retorna quantos posts foram feitos em todas as redes sociais
}
// Exe1) o usuário informa informa a rede social, e o programa retorna quantos posts foram feitos
  // Exe2) o programa retorna quantos posts foram feitos em todas as redes sociais
  // Exe3) o usuário informa informa o login do usuário, e o programa retorna quantos posts ele fez
  // Exe4) o programa retorna quantos posts foram feitos por cada usuário