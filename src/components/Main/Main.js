import React from 'react';

import HeaderLanding from '../HeaderLanding/HeaderLanding';
import About from '../About/About';
import Technologys from '../Technologys/Technologys';
import Student from '../Student/Student';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

export default class Main extends React.Component{
    render(){
        return (
            <section className="Main">
                <HeaderLanding/>
                <About/>
                <Technologys/>
                <Student/>
                <Portfolio/>
                <Footer/>

            </section>
        )
    }
}