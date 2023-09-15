import { Component } from "react";
import "./banner.css";

export class Banner extends Component{
    render(){
        return(
            <section className="welcome">
                <div className="container">
                    <div className="text-banner">
                        <h1>Venha conhecer nossas promoções</h1>
                        <h2>50% Off nos produtos</h2>
                    </div>

                    <a href="#" className="link-button">Ver produto</a>
                </div>
            </section>
        )
    }
}