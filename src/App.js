import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    lista: []
  }

  async componentDidMount() {
    var dados = await this.pegarDados();
    this.setState({ lista: dados.data })
  }

  async pegarDados() {
    var requisicao = await axios.get('https://kitsu.io/api/edge/characters')
    return requisicao.data
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {this.state.lista.map(item => (
              <li style={{
                height:75,
                display: 'flex',
                border: '1px solid white',
                padding:10
                }}>
                <div style={{display: 'flex', flex: 3}}>
                  {item.attributes.name}
                  <img height='75' src={item.attributes.image.original}></img>
                </div>
                <div style={{overflow: 'auto', flex: 2}}>
                  {item.attributes.description}
                </div>
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
