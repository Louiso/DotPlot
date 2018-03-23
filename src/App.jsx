import React, {Component} from 'react'
import './App.css';
import Card from './components/Card';
import Button from './components/Button';
import Resultado from './components/Resultado';
export default class App extends Component {
  render() {
    return (
        <div className='app'>
            <div className="container">
                <div id="principal">
                    <header>
                    <h1> Ella y Yo :'v </h1>
                    </header>
                    <div className='row'>
                        <Card name={'ella'}/>
                        <Card name={'yo'}/>                        
                    </div>
                    <Button/>
                </div>
                <Resultado/>
            </div>
        </div>
    )
  }
}
