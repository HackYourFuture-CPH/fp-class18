import React from 'react';
import ContactForm from '../..components/ContactForm/ContactForm.component';
import DeliveryInformation from '../..components/ContentCard/DeliveryInformation/DeliveryInformation.component';
import './OrderPage.Style.css';

const OrderPageContainer = () => {
  const [order, setOrder] = React.useState([]);
  const [product, setProduct] = React.useState({});
  const params = React.useParams();

  React.useEffect =
    (() => {
      fetch(`api/orders/${params.id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.log(error));
    },
    []);

  return (
    <div>
      <h1>Order page Container</h1>
      <div className="order-product-total">
        <div className="order-product">
          <div className="order">
            <div>ORDER ID: {order.id}</div>
            <div>ORDER STATUS: {order.status}</div>
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
