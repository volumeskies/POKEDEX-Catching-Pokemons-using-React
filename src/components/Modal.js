import React, { Component } from 'react';
import './styles/PokemonTab.css';
import './styles/Modal.css'
const S = "NO POKEMON";
const P = "Pokemon hasn't been catched yet!"
const C = "Catching date:"
const W = "Oops!.."
import moment from 'moment'

export default class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state={loaded: true, catch: false, date: null, show: false, pokemoncatch: {}};
        
    }

    componentDidMount(){
    fetch(`http://localhost:3000/catched/${this.props.pokemon.id}`)
        .then(response => response.json())
        .then(data => this.setState({ pokemoncatch: data }));
    }

    pokemonDate = date_ =>{
        return moment(date_).format('LLL');
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
      };
      
    render() {
        if(!this.props.show)
        {
            return null;
        }
        return(
            <>
            <div className = "modal">
            <img src={`../images/close.png`} alt="" className="modal__close" onClick={this.onClose}></img>
                <div className="modal__tabs">
                    <img src={`../images/${this.props.pokemon.id}.png`} alt="" onError={(e)=>{e.target.onerror=null; e.target.src="../images/alt.png"; this.setState({loaded: false});}}></img>
                    <div className="modal__info">
                        <h1>{this.state.loaded ? this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1) : S}</h1>
                        <h2>{this.state.pokemoncatch.caught  ? C : W}</h2>
                        <span>{this.state.pokemoncatch.caught ? this.pokemonDate(this.state.pokemoncatch.date) : P}</span>
                    </div>
                </div>
            </div>
            </>
        ) 
      }
}