"use client"

import React from 'react'

export default function ButtonCheckout({ price }) {

  return (
    <button onClick={async () => {
      const response = await fetch('/api/checkout', {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(price)
      })

      const data = await response.json();
      window.location.href = data.url;

    }}
    >Buy</button>
  )
}
