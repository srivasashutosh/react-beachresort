import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);

  const {
    handleChange,
    type,
    capacity,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
    price,
  } = context;

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  let capacities = getUnique(rooms, "capacity");
  //capacities = ["all", ...capacities];
  capacities = capacities.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {capacities}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="size">Room size</label>
          <div className="size-inputs">
            <input type="number" name="minSize" value={minSize} onChange={handleChange} className="size-input"></input>

            <input type="number" name="maxSize" value={maxSize} onChange={handleChange} className="size-input"></input>
          </div>
          <div className="form-group">
          <div className="single-extra">
          <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}></input>
          <label htmlFor="breakfast">Breakfast</label>

          </div>

          <div className="single-extra">
          <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}></input>
          <label htmlFor="pets">pets</label>

          </div>
          </div>
        </div>
      </form>
    </section>
  );
}
