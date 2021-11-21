import React from 'react';
// import ContactForm from '../..components/ContactForm/ContactForm.component';
// import DeliveryInformation from '../..components/ContentCard/DeliveryInformation/DeliveryInformation.component';
import './OrderPage.Style.css';
import { useParams } from 'react-router-dom';
import { useFetchApi } from '../../hooks/UseFetchApi';

const OrderPageContainer = () => {
  const { id } = useParams();
  const order = useFetchApi(`orders/${id}`);
  console.log(order.data);

  return (
    <div>
      <h1>Order page Container</h1>
      <div className="order-product-total">
        <div className="order-product">
          <div className="order">
            <div>ORDER ID: {id}</div>
            <div>ORDER STATUS: {order.orderStatus}</div>
          </div>
          <div className="product">
            <div className="picture-name-quantity">
              <div>ProductItem</div>
            </div>
          </div>
        </div>
        <div className="total">total</div>
      </div>
      <div className="delivery-contact">
        <div className="delivery">Delivery Info</div>
        <div className="contact">Contact:</div>
      </div>
    </div>
  );
};

export default OrderPageContainer;
