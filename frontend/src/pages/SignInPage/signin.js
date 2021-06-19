import React from 'react'
import HeroSection from '../../components/HomeComponents/HeroSection'
import './SignIn.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Button,Form } from 'react-bootstrap';
import { homeObjFour, homeObjTwo, SignCard } from '../../components/HomeComponents/InfoSection/Data';
import InfoSection from '../../components/HomeComponents/InfoSection';
import { Column1, Column2, InfoRow,Img,ImgWrap, InfoWrapper, InfoContainer } from '../../components/HomeComponents/InfoSection/InfoElements';

const SigninPage = () => {
    return (
      
<div style={{ 
      backgroundColor: ` #FF5733` 
    }} className="bg">

<div className="container" style={{ backgroundColor: `#fff`}}>

<InfoWrapper>
<InfoRow>
 
  <Column1>
  <h1>Sign In</h1>
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  </Column1>

  <Column2>
  <ImgWrap>
                       <Img src={require('../../images/svg-1.svg').default} />
                       </ImgWrap>
  </Column2>
     
  </InfoRow>
  </InfoWrapper>
      
      </div>  
</div>
        
        
    )
}

export default SigninPage
