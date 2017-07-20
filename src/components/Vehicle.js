import React, { Component } from "react";

export default class Vehicle extends Component {
  render() {
    let vehicles = this.props.state.vehicles.map(e => {
      return (
        <div className="card-colums" key={e.name}>
          <h2>
            Vehicle:{e.name}
          </h2>
          <h3>
            Model:{e.model}
          </h3>
          <h4>Specs</h4>
          <p>
            Manufacturer: {e.manufacturer}
          </p>
          <p>
            Class: {e.vehicle_class}
          </p>
          <p>
            Passengers: {e.passengers}
          </p>
          <p>
            Crew: {e.crew}
          </p>
          <p>
            Length: {e.length}
          </p>
          <p>
            Max Speed: {e.max_atmosphering_speed}
          </p>
          <p>
            Cargo Capacity: {e.cargo_capacity}
          </p>
        </div>
      );
    });
    return (
      <div className="card">
        {vehicles}
      </div>
    );
  }
}
