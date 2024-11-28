// src/components/RandomButton.jsx
import React from 'react';

export function RandomButton({ onRandomize }) {
  return (
    <button onClick={() => onRandomize(Math.random())}>
      Generate Random
    </button>
  );
}
