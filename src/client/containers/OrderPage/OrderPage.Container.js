import React from 'react';
// import ContactForm from '../..components/ContactForm/ContactForm.component';
// import DeliveryInformation from '../..components/ContentCard/DeliveryInformation/DeliveryInformation.component';
import './OrderPage.Style.css';

const OrderPageContainer = () => {
  const [products, setProducts] = React.useState([]);
  const params = React.useParams();

  const getProductsByOrderId = async (id) => {
    const response = await fetch('api/orders/:id', {
      method: 'GET',
      data: { id },
    });
    return response.json();
  };

  React.useEffect =
    (async () => {
      const products = getProductsByOrderId(params.id);
      setProducts(products);
    },
    [params.id]);

  return (
    <div>
      <h1>Order page Container</h1>
      <div className="order-product-total">
        <div className="order-product">
          <div className="order">
            <div>ORDER ID: {params.id}</div>
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
