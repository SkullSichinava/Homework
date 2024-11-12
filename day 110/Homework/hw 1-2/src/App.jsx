import React from 'react';
import Button from '../components/button';
import HomePage from '../components/HomePage';

export default function App() {
  const myInformation = "secret!";

  return (
    <div>
      <Button value="Goa Best" level="level001" />
      <HomePage />
    </div>
  );
}
