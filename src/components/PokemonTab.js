import React, { Component } from 'react';
import './styles/PokemonTab.css';
const S = "NO POKEMON";
import Modal from './Modal'


export default class PokemonTab extends React.Component{
    constructor(props){
        super(props);
        this.state={loaded: true, catch: {}, date: null, show: false, catching: false};
        this.catched = this.catched.bind(this);
    }

    showModal = () => {
        this.setState({
          show: !this.state.show
        });
    }

    catched(){
        this.setState({catching: true});
        this.disabled;
        const pokedate = new Date();
        const url = 'http://localhost:3000/catched';
        const pokemons = {
            name: this.props.pokemon.name,
            id: this.props.pokemon.id,
            date: pokedate,
            caught: 1,
        };
        return fetch(url,
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(pokemons),
                headers:{
                    'Content-Type': 'application/json'
                }
        }).then(res => res.json());
    }
    
    pokemonName = name =>{
       return name.charAt(0).toUpperCase() + name.slice(1);
    }

    componentDidMount(){
        fetch(`http://localhost:3000/catched/${this.props.pokemon.id}`)
            .then(response => response.json())
            .then(data => this.setState({ catch: data }))
    }

    render(){
        console.log(this.state.catch.caught)
        return(
            <>
            <div className="tabs__tab">
                <img src={`../images/${this.props.pokemon.id}.png`} onClick={()=>{this.showModal();}} alt="" onError={(e)=>{e.target.onerror=null; e.target.src="../images/alt.png"; this.setState({loaded: false});} }></img>
                <h1 onClick={()=>{this.showModal();}}>{this.state.loaded ? this.pokemonName(this.props.pokemon.name) : S}</h1>
                <button className="catchbutton" onClick={this.catched} disabled={this.state.catch.caught || this.state.catching}>CATCH</button>
            </div>
            <Modal show={this.state.show} onClose={this.showModal} pokemon={this.props.pokemon}/>
            </>
        );
    }
}
