import React from 'react';

class Content extends React.Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      <li>{conteudos.map((conteudo) => 
        `O conteúdo é: ${conteudo.conteudo}
        Status: ${conteudo.status}
        Bloco: ${conteudo.bloco}`)}
      </li>
    )
  }
}

export default Content;
