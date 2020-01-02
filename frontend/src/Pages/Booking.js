import React, { Component } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Datetime from 'react-datetime';

import './Booking.css';

export default class Booking extends Component {
    render() {
        return(
            <div>
                <div>
                    <Navbar/>
                    <div className="services-wrap">
                        <h1>Services</h1>
                        <p>Aplicação tinta cliente</p>
                        <p>Baby liss</p>
                        <p>Penteado</p>
                        <p>reflexo 1 touca</p>
                        <p>Reflexo 2 papel</p>
                        <p>Reflexo 3 dosagem</p>
                        <p>Banho de lua</p>
                        <p>Cílios</p>
                        <p>Corte feminino</p> 
                        <p>Corte masculino</p>
                        <p>Depilação axila</p>
                        <p>Depilação buço</p>
                        <p>Depilação contorno</p> 
                        <p>Contorno completo</p>
                        <p>Depilação meia perna</p>
                        <p>Depilação perna inteira</p>
                        <p>Buço com linha </p>
                        <p>Depilação rosto com linha</p> 
                        <p>Escova</p>
                        <p>Henna</p>
                        <p>Hidratação 1</p>
                        <p>Hidratação 2</p>
                        <p>Hidratação 3 </p>
                        <p>Maquiagem </p>
                        <p>Penteado</p>
                        <p>Noiva make up</p> 
                        <p>Noiva penteado </p>
                        <p>Prévia de noiva </p>
                        <p>Pintar unhas </p>
                        <p>Pé </p>
                        <p>Mão </p>
                        <p>Pé e mão </p>
                        <p>Retoque de raiz</p>
                        
                        <h1>calendar space</h1>
                        <Datetime />
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}