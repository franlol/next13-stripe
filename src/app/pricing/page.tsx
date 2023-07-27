import ButtonCheckout from '@/domains/Home/components/ButtonCheckout/ButtonCheckout';
import React from 'react'

const PricingPage = async () => {
  const response = await fetch('http://localhost:3000/api/prices');
  const prices = await response.json();
console.log('prices', prices)
  return (
    <div>
      <h1>Pricing</h1>

      <ul>
        {prices.data.map((price) => <li
          key={`price-${price.id}`}
        >
          {price.nickname} -> {price.unit_amount / 100}{price.currency}

          <ButtonCheckout  price={price}/>
        </li>)}
      </ul>

    </div>
  )
}

export default PricingPage;
