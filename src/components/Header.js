import React, { Component } from 'react';
import './styles/Header.css';
import pokeball from '../../images/pokeball.png';
import {Link} from 'react-router-dom'
import RoutePaths from './Constants'

const Header = () => (
    <>
        <div className="header">
            <div className="header__logo">
                <Link to={RoutePaths.HOMEPAGE}><img src={pokeball} alt="" width="42px" height="42px"></img></Link>
                <Link to={RoutePaths.HOMEPAGE}><h1>POKEDEX</h1></Link>
            </div>
            <div className="nav">
                <Link to={RoutePaths.HOMEPAGE}><button className="nav__button">Home</button></Link>
                <Link to={RoutePaths.CATCHED}><button className="nav__button">Catched Pokemons</button></Link>
            </div>
        </div>
    </>
)

export default Header