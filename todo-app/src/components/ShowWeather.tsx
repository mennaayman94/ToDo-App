import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import axios from "axios";

export default function ShowWeather() {
const ApiKey="6274b702274677db9c618ddbc471e407"
const [weather, setWather]= React.useState<any>(null)
  useEffect(() => {
    if ("geolocation" in navigator) {
    window.navigator.geolocation.getCurrentPosition((position) => {
        if(position){
            let {latitude,longitude }= position.coords
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}`).then((res)=>{
                console.log(res.data)
            if(res.data){
                setWather({
                    main:res.data.weather[0].description ,
                    wind:res.data.wind.speed,
                    humidity:res.data.main.humidity

                })

            }

            })
        }

    })
}
  }, []);
  return (
    <>
    {weather&& <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Current Weather{" "}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Weather State: {weather.main}
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Wind Speed: {weather.wind}
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Humidity :{weather.humidity}       
        </Typography>
      </CardContent>
    </Card>}
    </>
   
  );
}
