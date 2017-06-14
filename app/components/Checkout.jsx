import React from 'react'
import { Link } from 'react-router'

const Checkout = (props) => {
  return (
    <form action="/charge" method="post">
      <script
        src="https://checkout.stripe.com/checkout.js"
        class="stripe-button"
        data-key="pk_test_cAXaaXXjYxU103z7UYR4fzHE"
        data-amount="2000"
        data-name="Bits and Bytes"
        data-description="Your order"
        data-image="/public/images/pancake-emoji.png"
        data-locale="auto"
        data-zip-code="true"
        data-label="Checkout with Card"
        data-allow-remember-me="true"
      >
      </script>
    </form>
  )
}

export default Checkout
