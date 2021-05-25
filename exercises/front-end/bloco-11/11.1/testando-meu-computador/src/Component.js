import React from 'react';

class Component extends React.Component {
  render() {
    const nome = <h1>Rafael Cavacante</h1>;
    const paragrafo = <p>oi meu nome é Rafael</p>;
    return <div>{nome} {paragrafo}</div>;
  }
}

export default Component;