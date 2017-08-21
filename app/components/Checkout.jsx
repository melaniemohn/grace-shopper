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

  render() {
    return (
      <div>
        <h3>Shipping Information:</h3>
        <form>
          <div className="form-group">
            <label>Address Line 1:</label>
            <input type="text" name="address-line-1" className="form-contol"/>
          </div>
          <div className="form-group">
            <label>Address Line 2:</label>
            <input type="text" name="address-line-2" className="form-contol"/>
          </div>
          <div className="form-group">
            <label>City:</label>
            <input type="text" name="city" className="form-contol"/>
          </div>
          <div className="form-group">
            <label>State/Province:</label>
            <input type="text" name="state" className="form-contol"/>
          </div>
          <div className="form-group">
            <label>ZIP/Postal Code:</label>
            <input type="text" name="zip" className="form-contol"/>
          </div>
          <div className="form-group">
            <label>Select Country:</label>
            <select>
            	<option value="AU">Australia</option>
            	<option value="CA">Canada</option>
            	<option value="NZ">New Zealand</option>
            	<option value="US">United States</option>
            </select>
          </div>
        </form>
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_a1c8vlzHpqWvQKVOTDjYQ1DX"
        />
      </div>
    )
  }
}
