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
              <li>
                <div>
                  {item.attributes.name}
                  <img height='150' src={item.attributes.image.original}></img>
                </div>
                <div>
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
