import React,{Component} from 'react';
import Utill from './utill';

class PokemonApi extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id : '1',
            name : '',
            img : '',
        }
    }

    callApi = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.id}`)
        .then(res => res.json())
        .then(json => {
            this.setState({ 
                key : json.id,
                id : json.id,
                name : json.name,
                img : json.sprites.front_default
            })
        })
    }
    componentDidMount(){
        this.callApi();
    }
    render(){
        return(
        /* <h3>{this.state.name? this.state.name : '데이터를 불러오는 중입니다.'}</h3> */
        <div>
            <Utill />
            <h3>{this.state.name}</h3>
            <img src={this.state.img} alt={this.state.name} />
        </div>
        )
    }
}

export default PokemonApi;
