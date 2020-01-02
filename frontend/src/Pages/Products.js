import React, { Component } from 'react';

import './Products.css'

import Navbar from '../Components/Navbar2';
import Footer from '../Components/Footer';
import Alfaparf from '../Images/products/alfaparf.png';
import Joico from '../Images/products/joico.png';
import Kerastase from '../Images/products/kerastase.png';
import Loreal from '../Images/products/loreal.png';
import Olaplex from '../Images/products/olaplex.png';
import Redken from '../Images/products/redken.png';
import Senscience from '../Images/products/senscience.png';
import Tigi from '../Images/products/tigi.png';
import Wella from '../Images/products/wella.png';

export default class Products extends Component {
    render() {
        return(
            <div>
                <Navbar/>
                <div className="products-wrap">
                    <h1>Brands we use</h1>
                    <div className="img-wrap">
                        <img src={ Alfaparf } alt="Alfaparf" />
                        <img src={ Joico } alt="Joico" />
                        <img src={ Kerastase } alt="Kerastase" />
                        <img src={ Loreal } alt="Loreal" />
                        <img src={ Olaplex } alt="Olaplex" />
                        <img src={ Redken } alt="Redken" />
                        <img src={ Senscience } alt="Senscience" height="250px"/>
                        <img src={ Tigi } alt="Tigi" />
                        <img src={ Wella } alt="Wella" />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}