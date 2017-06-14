import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class Checkout extends React.Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_a1c8vlzHpqWvQKVOTDjYQ1DX"
      />
    )
  }
}

// import React from 'react'
// import { Link } from 'react-router'
//
// const Checkout = (props) => {
//   return (
//     <div>
//       <h1>HELLO</h1>
//     </div>
//   )
// }
//
// export default Checkout

//STRIPE FORM....
// <form action="/charge" method="post">
//   <script
//     src="https://checkout.stripe.com/checkout.js"
//     class="stripe-button"
//     data-key="pk_test_cAXaaXXjYxU103z7UYR4fzHE"
//     data-amount="2000"
//     data-name="Bits and Bytes"
//     data-description="Your order"
//     data-image="/public/images/pancake-emoji.png"
//     data-locale="auto"
//     data-zip-code="true"
//     data-label="Checkout with Card"
//     data-allow-remember-me="true"
//   >
//   </script>
// </form>
