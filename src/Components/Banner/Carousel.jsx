import axios from "axios";
import "./Banner.css";
import { TrendingCoins } from "../../config/api";
import { useContext, useEffect, useState } from "react";
import { CryptoContext } from "../../CryptoContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Carousel = () => {
  const { currency } = useContext(CryptoContext);

  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    //Passing current currency to get data & dereferencing to only get data value form objects
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };

  console.log(trending);

  // const items = trending.map((coin) => (
  //   <Link
  //     to={`/coins/${coin.id}`}
  //     style={{
  //       display: 'flex',
  //       flexDirection: 'column',
  //       alignItems: 'center',
  //       cursor: 'pointer',
  //       textTransform: 'uppercase',
  //       color: 'white',
  //   }}>
  //     <img src={coin?.image} alt={coin.name} height="80" style={{ marginBottom: 10 }}/>
  //   </Link>
  // ))

  useEffect(() => {
    fetchTrendingCoins();
  }, [currency]);

  var settings = {
    // dots: true,  //Specify whether you want dots to display or not
    infinite: true, //Specify whether you want infinite scrolling or not
    speed: 1500, //Specify the speed of scrolling or animationDuration
    slidesToShow: 4, //Specify how many slides you want to show each time
    // slidesToScroll: 1,  //Specify how many slides you want to scroll on clicking
    autoplay: true, //Specify whether you want to enable auto play or not
    autoplaySpeed: 1000, //Specify the duration of autoplay in miliseconds
    responsive: [
      //handle for different breakpoints
      {
        breakpoint: 512,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    draggable: true, //Enables mouseTracking
  };

  return (
    <>
      <div className="carousel">
        <Slider {...settings}>
          {trending.map((coin, index) => (
          <div key={index}>
            <Link
              to={`/coins/${coin.id}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              <img
                src={coin.image}
                alt={coin.name}
                height="80"
                style={{ marginBottom: 10 }}
              />
            </Link>
          </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
