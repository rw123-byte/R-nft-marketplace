import React from 'react'
import { Container,Row ,Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './footer.css';

const MY_ACCOUNT = [
  {
    display:'Author profile',
    url:'/seller-profile'
  },
  {
    display:'Create Item',
    url:'/create'
  },
  {
    display:'Collection',
    url:'/market'
  },
  {
    display:'Edit Profile',
    url:'/edit-profile'
  }
]

const RESOURCES = [
  {
    display:'Partner',
    url:'#'
  },
  {
    display:'Edit Profile',
    url:'#'
  },
  {
    display:'Community',
    url:'#'
  },
  {
    display:'Activity',
    url:'#'
  }
  
]

const COMPANY = [
  {
    display:'About',
    url:'#'
  },
  {
    display:'Career',
    url:'#'
  },
  {
    display:'Ranking',
    url:'#'
  },
  {
    display:'Contact Us',
    url:'/contact'
  }
  
]
const Footer = () => {
  return (
<footer className="footer">
  <Container>
    <Row>
      <Col lg='3' md='6' sm='6'>
      <div className="logo">
    <h2 className='d-flex gap-2 align-items-center'>
        <span>
            <i class="ri-fire-fill"></i>
        </span>
          RuNfts
    </h2>
    <p>RU-Nft marketplace is an application that allows users to buy and sell arts in the artwork industry. A user can also create,upload and add NFTs to the list.</p>
    </div>
      </Col>

      <Col lg='3' md='6' sm='6'>
        <h5>My Account</h5>
        <ListGroup className='list_group'>
          {MY_ACCOUNT.map((item,index)=>(
    <ListGroupItem key={index} className='list_item'>
        <Link to={item.url}>{item.display}</Link>
   </ListGroupItem>
  ))}
 </ListGroup>
      </Col>
      
      <Col lg='3' md='6' sm='6'>
      <h5>Resources</h5>
        <ListGroup className='list_group'>
          {RESOURCES.map((item,index)=>(
    <ListGroupItem key={index} className='list_item'>
        <Link to={item.url}>{item.display}</Link>
   </ListGroupItem>
  ))}
 </ListGroup>
      </Col>

      <Col lg='3' md='6' sm='6'>
      <h5>Company</h5>
        <ListGroup className='list_group'>
          {COMPANY.map((item,index)=>(
    <ListGroupItem key={index} className='list_item'>
        <Link to={item.url}>{item.display}</Link>
   </ListGroupItem>
  ))
          }
 </ListGroup>
      </Col>

      <Col lg='3' md='6' sm='6'>
      <h5>Newsletter</h5>
      <input type='text' className='newsletter' placeholder='Email'/>
      <div className='social_links d-flex gap-3 align-items-center'>
        <span><Link to='#'><i class="ri-facebook-fill"></i></Link></span>
        <span><Link to='#'><i class="ri-telegram-line"></i></Link></span>
        <span><Link to='#'><i class="ri-instagram-line"></i></Link></span>
      </div>
      </Col>

      <Col lg='12' className='mt-4 text-center'>
        <p className='copyright '>Copyrights 2022, Developed by Wekesa Ruth All Rights Reserved.</p>
      </Col>
    </Row>
  </Container>
</footer>
  )
}
export default Footer;