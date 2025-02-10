import React from 'react'
import './Otherspayment.css'
const qr = 'https://res.cloudinary.com/ds18h1q0k/image/upload/v1736063980/corg_k5d1bk.png';

const Otherspayment = () => {
  return (
    <div className="payment-container">
      {/* Space for QR Code */}
      <div>
      <img src={qr} alt="" className="" />
      </div>

      {/* Input Group for Payment Mode */}
      <div className="input-group">
        <select id="paymentMode" placeholder="Select Payment Mode">
          <option value="" disabled selected>Select Payment Mode</option>
          <option value="creditCard">google pay</option>
          <option value="debitCard">super money</option>
          <option value="paypal">phone pay</option>
          {/* Add more payment options as needed */}
        </select>
      </div>

      {/* Input Group for Payment ID */}
      <div className="input-group">
        <input type="text" id="paymentId" placeholder="Enter Payment ID" />
      </div>

      {/* UTR Number Input
      <div className="input-group">
        <input 
          type="text" 
          id="utrNumber"
          placeholder="Enter UTR Number"
          pattern="[0-9]*"
          maxLength="22"
        />
      </div> */}

      {/* Payment Confirmation Photo Upload */}
      <div className="input-group">
        <input 
          type="file" 
          id="paymentProof"
          accept="image/*"
          placeholder="Upload Payment Confirmation"
        />
      </div>

      {/* Register Button */}
      <div>
        <button>Register</button>
      </div>

      {/* Note at the bottom */}
      <div>
        <p>The details of the registration and the registration will be successful after the verification of the payment.</p>
      </div>
    </div>
  )
}

export default Otherspayment
