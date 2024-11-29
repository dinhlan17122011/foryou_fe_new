import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import Introduction from "../../components/introductionComponent/introduction";
import CartButton from "../../components/CartButtonComponents/CartButton";
import CardCake from '../../components/CardCakeComponents/CardCake'
const HomePage = () => {
  return (
    <div>
      <SliderComponent />
      <Introduction />
      <h2>HomePage</h2>
      <CartButton />
      <CardCake/>
    </div>
  );
};

export default HomePage;
