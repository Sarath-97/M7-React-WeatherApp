import { useEffect, useState } from "react";

import React from "react";
import { Container } from "react-bootstrap";

const WeatherData = async () => {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      // let response = await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      // let data = response.json()
      // setData(data)
      // console.log(data);

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setData(data)
        console.log(data);
      });
    }
    fetchData();
  }, [lat,long])
  
  return (
    <Container>

    </Container>
  );
}

export default WeatherData