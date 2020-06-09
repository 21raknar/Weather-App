import React from "react";
import "./App.css";
import LocationList from "./components/LocationList";

const cities = [
  "Buenos Aires,ar",
  "Leon,es",
  "Madrid,es",
  "Paris,fr",
  "Lima,pe",
  "Berlin",
];
function App() {
  const handleSelectedLocation = (city) => {
    console.log(`handleSelectionLocation  ${city}`);
  };
  return (
    <div className="App">
      <LocationList
        cities={cities}
        onSelectedLocation={handleSelectedLocation}
      />
    </div>
  );
}

export default App;
