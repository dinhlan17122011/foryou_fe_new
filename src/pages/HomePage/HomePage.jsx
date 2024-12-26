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
import DeliveryTeam from "../../components/DeliveryTeamComponents/DeliveryTeam";
import CakeSection from "../../components/CakeCollectionComponents/CakeCollection";
import FloatingIcons from "../../components/FloatingIcons/FloatingIcons";

const HomePage = () => {

  return (
    <div>
      <div id="home">
        <SliderComponent />
        <Introduction />
      </div>
        <DeliveryTeam />
        <CakeSection />
        <CartButton />
      <div id="categories">
        <div style={{ padding: '0 90px' }}>
          <TitleSection />
          <p className="mota">Mời bạn xem ngay hơn 99+ mẫu bánh kem, bánh sinh nhật tươi ngon, đa dạng, giá chỉ từ 120k</p>
          <ProductCard />
          <AddFruit />
          <CakeOrder />
        </div>
      </div>
      <div id="policies">
        <ShippingPolicy />
      </div>
      <div id="feedback">
        <Feedback />
      </div>
      <div id="contact">
        <StoreSystem />
      </div>
      <Footer />
      <FloatingIcons />
    </div>
  );
};

export default HomePage;
