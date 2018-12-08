import React, { Component} from 'react'
import { Link, Route } from 'react-router-dom'

const TAREFAS = [
    {
        id: 1,
        titulo: 'Aprenda ReactJS',
        descricao: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
    },
    {
        id: 2,
        titulo: 'Aprenda JavaScript',
        descricao: 'but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset '
    },
    {
        id: 3,
        titulo: 'Aprenda React-router!!!!!',
        descricao: 'here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. '
    }
]

class TarefasPage extends Component {
    render() {
        return(
            <div>
                <h1>Tarefas</h1>
                <ul>
                    {
                        TAREFAS.map((tarefa, index) => {
                            return(
                                <li key={tarefa.id}>
                                    <Link to={`/tarefas/${tarefa.id}`}>
                                        {tarefa.titulo}
                                    </Link>
                                </li>
                            )                            
                        }) 
                    }
                </ul>
                <Route
                    path="/tarefas/:tarefaId"
                    render={props => {
                        const tarefaId = props.match.params.tarefaId
                        const tarefa = TAREFAS.find(tar => tar.id == tarefaId)
                        return(
                            <div>
                                {tarefa.descricao}
                            </div>
                        )
                    }}

                />
            </div>
        )
    }
}
export default TarefasPage