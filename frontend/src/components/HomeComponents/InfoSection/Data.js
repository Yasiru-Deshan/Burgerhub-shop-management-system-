import { Button,Form } from 'react-bootstrap' 



export const homeObjOne = {
    id:'about',
    lightBg: false,
    lightText:true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../../images/contact.svg').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id:'about',
    lightBg: true,
    lightText: false,
    lightTextDesc:false,
    topLine: 'About Us',
    headline: 'Great Food Comes First',
    description: 'Every day, more than 11 million guests visit Burger Hub restaurants around the world. And they do so because our restaurants are known for serving high-quality, great-tasting, and affordable food. Founded in 2001, Burger Hub is the second largest fast food hamburger chain in the world. The original Home of the Whopper, our commitment to premium ingredients, signature recipes, and family-friendly dining experiences is what has defined our brand for more than 50 successful years.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: require('../../../images/about.svg').default,
    alt: 'Girllap',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id:'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Contact Us',
    headline: 'Digital Support',
    description: 'At Burger Hub we love to hear from our guests! See below for where to contact us about your digital order.',
    buttonLabel: 'Contact our team',
    imgStart: false,
    img: require('../../../images/contact.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
}

export const SignCard = {
    id:'signin',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    headline: 'Sign In',
    description:   <Form>
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
  </Form>,
    imgStart: true,
    img: require('../../../images/contact.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
}

