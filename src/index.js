import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import autoAnimate from '@formkit/auto-animate';

import { 
  Container, 
  Navbar, 
  Nav, 
  Image, 
  Button, 
  ButtonGroup, 
  Collapse, 
  Row, 
  Col, 
  Badge,
  Dropdown
} from 'react-bootstrap';

import { 
  useCallback, 
  useEffect, 
  useRef, 
  useState 
} from 'react';

import ImageGallery from "react-image-gallery";

import ImgLogo from './images/logo.svg';
import ImgCart from './images/icon-cart.svg';
import ImgDump from './images/icon-delete.svg';
import ImgAvatar from './images/image-avatar.png';

import ImgProduct_1 from './images/image-product-1.jpg';
import ImgThumbnail_1 from './images/image-product-1-thumbnail.jpg';
import ImgProduct_2 from './images/image-product-2.jpg';
import ImgThumbnail_2 from './images/image-product-2-thumbnail.jpg';
import ImgProduct_3 from './images/image-product-3.jpg';
import ImgThumbnail_3 from './images/image-product-3-thumbnail.jpg';
import ImgProduct_4 from './images/image-product-4.jpg';
import ImgThumbnail_4 from './images/image-product-4-thumbnail.jpg';

const images = [
  {
    original: ImgProduct_1,
    thumbnail: ImgThumbnail_1,
    originalClass: 'cs-img-class',
    thumbnailClass: 'cs-thumbnail-class',
  },
  {
    original: ImgProduct_2,
    thumbnail: ImgThumbnail_2,
    originalClass: 'cs-img-class',
    thumbnailClass: 'cs-thumbnail-class',
  },
  {
    original: ImgProduct_3,
    thumbnail: ImgThumbnail_3,
    originalClass: 'cs-img-class',
    thumbnailClass: 'cs-thumbnail-class',
  },
  {
    original: ImgProduct_4,
    thumbnail: ImgThumbnail_4,
    originalClass: 'cs-img-class',
    thumbnailClass: 'cs-thumbnail-class',
  }
];

const MainSite = () => {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count !== 0)
    setCount(count - 1);
  };

  const handleAddToCart = () => {
    if (count !== 0) {
      const newItem = { id: cartItems.length + 1, count: count, };
      setCartItems([...cartItems, newItem]);
    };
  };

  const handleDeleteItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <main>
      <Navbar expand='lg' className='p-3 cs-line'>
        <Container className='justify-content-center align-items-top w-50'>
          <Navbar.Brand href='#home'>
            <Image fluid src={ImgLogo} alt='logo' className='m-3 px-0 ps-lg-5' />
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
        <Container className='w-50 align-self-start justify-content-end'>
          <Dropdown  className=''
                     align='end'>
            <Dropdown.Toggle variant='custom'
                             className='cs-toggle'>
              <Image src={ImgCart} alt='cart' />
              {cartItems.length !== 0 ? (
                <Badge bg="custom" className='cs-badge-2'>{cartItems.length}</Badge>
              ) : ('')}
            </Dropdown.Toggle>

            <Dropdown.Menu className='shadow cs-w'>
              <Dropdown.Header className='fw-bold'>Cart</Dropdown.Header>
              <Dropdown.Divider />
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                <Container className='m-2 cs-grid'>
                  <Image fluid src={ImgThumbnail_1} alt='thumbnail card' className='rounded cs-gr-2' />
                  <p className='cs-tc-2'>Fall Limited Edition Sneakers</p>
                  <Button variant='custom' className='cs-gr-2' onClick={() => handleDeleteItem(item.id)}><Image src={ImgDump} alt='delete' /></Button>
                  <p className='cs-tc-2'>$125 x {item.count} <b>${item.count * 125}</b></p>
                </Container>
              ))) : (
                <p className='cs-tc-2 text-center p-5'>Your cart is empty</p>
              )}
              {cartItems.length !== 0 ? (
                <Button variant='custom' className='cs-w-2 m-3 cs-btn-2 cs-gc-3'>Checkout</Button>
              ) : ('')}
            </Dropdown.Menu>
          </Dropdown>
            <Navbar.Brand href='#'>
              <Image fluid src={ImgAvatar} alt='avatar' className='w-50 cs-avatar' />
            </Navbar.Brand>
          </Container>
      </Navbar>
      <Container>
        <Row className='p-5 gap-5'>
          <Col  lg={6} className=''>
            <MyGallery />
          </Col>
          <Col  lg={5} className='d-flex flex-column justify-content-center'>
            <h2 className='h6 text-uppercase fw-bold cs-tc'>Sneaker Company</h2>
            <h3 className='display-3 fw-bold'>Fall Limited Edition Sneakers</h3>
            <p className='cs-tc-2'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
            durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <div className='d-flex flex-row flex-lg-column align-items-lg-start align-items-center justify-content-between'>
              <h4 className='h3 fw-bold'>$125.00 <Badge bg="custom" className='cs-badge'>50%</Badge></h4>
              <h4 className='cs-tc-3 h5 text-decoration-line-through'>$250.00</h4>
            </div>
            <div className='d-flex flex-column flex-lg-row'>
              <ButtonGroup  className='cs-w-3 me-3 cs-bg mb-lg-0 mb-3'>
                <Button variant='custom' className='cs-btn fw-bold' onClick={handleDecrement}>-</Button>
                <h4 className='h5 m-2 fw-bold'>{count}</h4>
                <Button variant='custom' className='cs-btn fw-bold' onClick={handleIncrement}>+</Button>
              </ButtonGroup>
              <Button onClick={handleAddToCart} variant='custom' className='cs-w-4 shadow cs-btn-2'>
                <Image src={ImgCart} className='cs-image' /> Add to cart
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

class MyGallery extends React.Component{
  render () {
    if (window.innerWidth >= 992)
      {
    return <ImageGallery 
              items={images}
              useBrowserFullscreen={false}
              showNav={false}
              showPlayButton={false}
              showFullscreenButton={true}
              showThumbnails={true}
            />
      } else {
        return <ImageGallery 
              items={images}
              useBrowserFullscreen={false}
              showNav={true}
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={false}
            />
      }
  }
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
