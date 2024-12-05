import React from "react";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import Introduction from "../../components/introductionComponent/introduction";
import CartButton from "../../components/CartButtonComponents/CartButton";
import ProductCard from '../../components/CardCakeComponents/ProductCard';
import TitleSection from '../../components/CardCakeComponents/TitleSection'
import './HomePage.scss'

const HomePage = () => {

  return (
    <div>
      <SliderComponent />
      <Introduction />
      <CartButton />
      <div style={{padding:'0 110px'}} >
      <TitleSection />
      <p className="mota">Mời bạn xem ngay hơn 99+ mẫu bánh kem, bánh sinh nhật tươi ngon, đa dạng, giá chỉ từ 120k</p>
      <ProductCard/>

      </div>
    </div>
  );
};

export default HomePage;
