import React from "react";
import './HomePage.scss'
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import Introduction from "../../components/introductionComponent/introduction";
import CartButton from "../../components/CartButtonComponents/CartButton";
import ProductCard from '../../components/CardCakeComponents/ProductCard';
import TitleSection from '../../components/CardCakeComponents/TitleSection'
import ShippingPolicy from "../../components/PolicyComponents/ShippingPolicy";
import AddFruit from "../../components/AddFruitComponents/AddFruit";
import CakeOrder from "../../components/CakeOrderCompontents/CakeOrder";
import StoreSystem from "../../components/StoreSystemComponents/StoreSystem";
import Feedback from "../../components/FeedbacksComponents/feedbacks";
import Footer from "../../components/FooterComponents/Footer";

const HomePage = () => {

  return (
    <div>
      <SliderComponent />
      <Introduction />
      <CartButton />
      <div style={{padding:'0 90px'}} >
      <TitleSection />
      <p className="mota">Mời bạn xem ngay hơn 99+ mẫu bánh kem, bánh sinh nhật tươi ngon, đa dạng, giá chỉ từ 120k</p>
      <ProductCard/>
      <AddFruit/>
      <CakeOrder/>
      </div>
      <ShippingPolicy/>
      <StoreSystem/>
      <Feedback />
      <Footer />
    </div>
  );
};

export default HomePage;
