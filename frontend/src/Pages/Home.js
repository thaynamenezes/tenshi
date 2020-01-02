import React, { Component } from 'react';
import "./Home.css"
import Hair from '../Images/hair2.jpeg';
import LogoRight from '../Images/wing-right.png';
import LogoLeft from '../Images/wing-left.png';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


export default class Home extends Component {
    render() {
        return(
            <div>
               <div className="title-wrap">
                    <img src={ LogoLeft } height="70rem" alt="angel wing logo"/>
                        <h1 className="title">Tenshi</h1>
                    <img src={ LogoRight } height="70rem" alt="angel wing logo"/>
                </div>

                <Navbar />
                <img src={ Hair } width="100%" alt="blond hair"/> 
                <div className="text-wrap">
                    <p>
                        Tenshi means angels that came to earth to bring the word of God about beauty and love in accordance to the japaneses.
                        This is exactly what our hair salon wants to bring to the world more beauty, more love, more happiness so our clients can always feel like they are in the best version of themselves and radiating positivity. 
                    </p>
                    <p className="quote">
                        "For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone."
                    </p>
                    <p className="quote author">Audrey Hepburn</p>
                </div>
                <Footer />
            </div> 
        );
    }
}
