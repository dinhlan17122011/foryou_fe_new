import React from "react";
import Slider from "react-slick";

import "./Feedback.scss"; // Tạo style riêng cho giao diện

const feedbackData = [
  {
    image: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fsavor-web.s3.kstorage.vn%2Fsrc%2Fimages%2Ffeedback%2Ffb-bsn-2024T9%2F%252310.jpg%3FAWSAccessKeyId%3DNN2UK5AY9JOIOEOCL2I2%26Expires%3D1733543739%26Signature%3DhesUJ8VJ26Ue4MbMQP5DvQ3rLgw%253D&w=768&q=75",
    text: "Bánh rất ngon, mềm và thơm!",
    rating: 5,
  },
  {
    image: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fsavor-web.s3.kstorage.vn%2Fsrc%2Fimages%2Ffeedback%2Ffb-bsn-2024T9%2F%252310.jpg%3FAWSAccessKeyId%3DNN2UK5AY9JOIOEOCL2I2%26Expires%3D1733543739%26Signature%3DhesUJ8VJ26Ue4MbMQP5DvQ3rLgw%253D&w=768&q=75",
    text: "Trang trí đẹp mắt, giao hàng đúng giờ.",
    rating: 5,
  },
  {
    image: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fsavor-web.s3.kstorage.vn%2Fsrc%2Fimages%2Ffeedback%2Ffb-bsn-2024T9%2F%252310.jpg%3FAWSAccessKeyId%3DNN2UK5AY9JOIOEOCL2I2%26Expires%3D1733543739%26Signature%3DhesUJ8VJ26Ue4MbMQP5DvQ3rLgw%253D&w=768&q=75",
    text: "Dịch vụ tốt, rất hài lòng!",
    rating: 5,
  },
  {
    image: "https://www.savor.vn/_next/image?url=https%3A%2F%2Fsavor-web.s3.kstorage.vn%2Fsrc%2Fimages%2Ffeedback%2Ffb-bsn-2024T9%2F%252310.jpg%3FAWSAccessKeyId%3DNN2UK5AY9JOIOEOCL2I2%26Expires%3D1733543739%26Signature%3DhesUJ8VJ26Ue4MbMQP5DvQ3rLgw%253D&w=768&q=75",
    text: "Bánh sinh nhật dễ thương, giá hợp lý.",
    rating: 4,
  },
];

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="feedback-container">
      <h2>Feedback tháng 12/2024</h2>
      <p>
        Savor Cake đã nhận được nhiều phản hồi tích cực từ phía khách hàng khi
        sử dụng sản phẩm bánh sinh nhật, bánh ngọt của chúng mình ...
      </p>
    </div>
  );
};

export default Feedback;
