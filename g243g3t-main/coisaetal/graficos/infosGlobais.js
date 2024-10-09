const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json';

async function  buscarInformacoes(){
    const res =  await fetch(url)
    const dados = await res.json();
   const paragrafo = document.createElement('p')
   paragrafo.classList.add('graficos-container_texto')

   const pessoasConectadas = dados.total_pessoas_conectadas / 1e9;
   const pessoasNoMUndo = dados.total_pessoas_mundo /1e9;
   const horas = parseInt(dados.tempo_medio-horas);
   const minutos = Math.round((dados.tempo_medio-horas)*60);
   const porcentagemConectada = ((pessoasConectadas/pessoasNoMUndo)*100).toFixed(2);

   paragrafo.innerHTML = `Você sabia que o mundo tem <span> ${pessoasNoMUndo}</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas}</span> horas e <span> ${minutos} </span> horas conectadas.
   isso significa que aproximadamente <span> ${porcentagemConectada} </span> % de pessoas estão conectadas em alguma rede social.` ;
   document.getElementById('graficos-container').appendChild(paragrafo);
}
    buscarInformacoes();

