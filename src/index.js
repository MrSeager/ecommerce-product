import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import autoAnimate from '@formkit/auto-animate';

import { Container, Navbar, Nav, Image, Button, Collapse } from 'react-bootstrap';
import { useEffect, useRef, useState } from 'react';

import ImgLogo from './images/logo.svg';
import ImgCart from './images/icon-cart.svg';
import ImgAvatar from './images/image-avatar.png';

const MainSite = () => {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <Navbar expand='lg' className='p-3 cs-line'>
        <Container className='justify-content-start align-items-top w-50'>
          <Navbar.Brand href='#home'>
            <Image fluid src={ImgLogo} alt='logo' className='m-3' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='order-first' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#' className='cs-nav-link'>Collections</Nav.Link>
              <Nav.Link href='#' className='cs-nav-link'>Men</Nav.Link>
              <Nav.Link href='#' className='cs-nav-link'>Women</Nav.Link>
              <Nav.Link href='#' className='cs-nav-link'>About</Nav.Link>
              <Nav.Link href='#' className='cs-nav-link'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Container className='align-self-start justify-content-end w-50 cs-collapse-area'>
            <Button onClick={() => setOpen(!open)}
                    aria-controls='example-collapse-text'
                    aria-expanded={open}
                    variant='custom'
                    className='me-3'>
              <Image src={ImgCart} alt='card' />
            </Button>
            <Collapse in={open} className='shadow'>
              <Container id="" className='cs-collapse w-50'>
                <h1>Cart</h1>
                <p>Your cart is empty</p>
              </Container>
            </Collapse>
            <Navbar.Brand href='#'>
              <Image fluid src={ImgAvatar} alt='avatar' className='w-50 cs-avatar' />
            </Navbar.Brand>
          </Container>
      </Navbar>
    </main>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainSite />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
