import React, { Component } from 'react';
import PokemonTab from './PokemonTab';
import './styles/InfiniteScroll.css';

export default class InfiniteScrollCatched extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pokemon: [],
            visible: 8
        }
        this.loadMore = this.loadMore.bind(this);
    }

    loadMore(){
        this.setState((prev) => {
            return {visible: prev.visible + 8};
          });
    }

    componentDidMount(){
        fetch('http://localhost:3000/catched/')
            .then(response => response.json())
            .then(data => this.setState({ pokemon: data }))
    }

    visiblePokemons = pokemons =>{
        return pokemons.slice(0, this.state.visible)
    }

    render(){
        return(
            <>
                {this.state.pokemon? (
                    <div className = "tabs__wrapper"> 
                    <div className = "tabs__items">
                    { this.visiblePokemons(this.state.pokemon).map(pokemon =>(
                        <PokemonTab
                            key = {pokemon.id}
                            pokemon={pokemon}/>
                    ))
                    }
                    </div>
                    {
                        this.state.visible < this.state.pokemon.length &&
                        <button onClick={this.loadMore} className="loadmorebutton">LOAD MORE</button>
                    }
                    </div>
                ) : (
                    <h1>LOADING...</h1>
                )
                }
            </>
        );
    }
}