import React, { Component } from 'react'

import Artigo from '../components/Artigo'
import Contador from '../components/Contador'

import {
    Alert, Button, Container
} from 'reactstrap';

class HomePage extends Component {
    render() {
        return (
            
            <div>
                <Alert color="info">Testando....</Alert>

                <Alert color="danger">Testando....2</Alert>

                <Button color="dark">Click Aqui!!!</Button>

                <Artigo
                    nome="Douglas"
                    texto="Progamação Web com React JS"
                />

                <Contador tempo={300} />
                <Contador tempo={500} />
               
            </div>
          
        )
    }
}
export default HomePage