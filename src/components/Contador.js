import React from 'react'

class Contador extends React.Component {
    
    static defaultProps = {
        tempo: 1000,
        numero: 0
    }

    constructor(props){
        super(props)

        this.state = {
            numero: props.numero
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                numero: this.state.numero + 1
            })
        }, this.props.tempo)
    }

    componentDidUpdate(oldProps, oldState){
        
    }

    componentWillMount(){
        return(
            <p>{this.state.numero}</p>
        )      
    }

    render() {
        return(
            <p>{this.state.numero}</p>
        )
    }
}
export default Contador