import React from "react";
import "./Header.css";
import { Button } from "react-bootstrap";

export default function Header() {
  return (
    <div className='header'>
      <h1 className='title'>Tech For Social Good</h1>
      <Button variant="light" href="http://eepurl.com/hez_cj">Subscribe to our mailing list</Button>
    </div>
  );
}
