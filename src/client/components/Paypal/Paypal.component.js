/* eslint-disable @typescript-eslint/camelcase, no-console, react/self-closing-comp */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function Paypal({
  orderId,
  totalSum,
  userName,
  onSuccess,
  onError,
}) {
  const paypalRef = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        style: {
          color: 'white',
          shape: 'rect',
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: 'CAPTURE',
            payer: {
              name: {
                given_name: userName.split(' ')[0],
                surname: userName.split(' ')[1],
              },
              email_address: 'sb-ip8so8858167@personal.example.com',
            },
            purchase_units: [
              {
                description: orderId,
                amount: {
                  currency_code: 'DKK',
                  value: totalSum,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          await actions.order.capture().then((details) => {
            onSuccess(details);
          });
        },
        onError: (err) => {
          onError(err);
        },
      })
      .render(paypalRef.current);
  }, [orderId, totalSum, userName, onSuccess, onError]);

  return <div ref={paypalRef}></div>;
}

Paypal.propTypes = {
  orderId: PropTypes.string.isRequired,
  totalSum: PropTypes.number.isRequired,
  userName: PropTypes.string,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

Paypal.defaultProps = {
  userName: 'Donald Duck',
  onSuccess: (data) => console.log(data),
  onError: (data) => console.log(data),
};
