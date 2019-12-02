import React, { Component } from 'react';
import './styles/Home.css';
import PokemonTab from './PokemonTab'

export default class Catched extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            catched: [],
            catchedpage: true,
        }
    }
    
    componentDidMount()
    {
        fetch('http://localhost:3000/catched')
            .then(response => response.json())
            .then(data => this.setState({ catched: data }))
    }
    render(){
        return(
            <>
                {this.state.catched? (
                    <div className="tabs">
                    <div className = "tabs__wrapper"> 
                    <div className = "tabs__items">
                    { this.state.catched.map(catched =>(
                        <PokemonTab
                            key = {catched.id}
                            pokemon={catched}
                            catch = {this.state.catchedpage}
                            />
                    ))
                    }
                    </div>
                    </div>
                    </div>
                ) : (
                    <h1>LOADING...</h1>
                )
                }
            </>
        );
    }
}