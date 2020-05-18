import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaBeer, FaShuttleVan } from "react-icons/fa";
export default class Services extends Component {
  state = {
  services :[
    {
      icon: <FaCocktail />,
      title: "Free Cocktail",
      info: "Free Cocktails for our guests",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      info: "Great Hiking experience for our guests",
    },
    {
      icon: <FaShuttleVan />,
      title: "ShuttleVan",
      info: "Shuttle Van services for our guests",
    },
    {
      icon: <FaBeer />,
      title: "Free Cocktail",
      info: "Free Cocktails for our guests",
    },
  ]
}

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
