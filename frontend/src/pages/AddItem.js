import React,{ useState} from 'react';
import { Form, Button} from 'react-bootstrap';
import { InfoWrapper,InfoRow,Column1,Column2 } from '../components/HomeComponents/InfoSection/InfoElements'
import ImageUploads from '../components/ImageUploads';
import './SignInPage/SignIn.css'
import axios from 'axios'

function AddItem(){

    const [name,setName] = useState("");
    const [price,setPrice] = useState("");

    function sendData(e){

        e.preventDefault();
    

    const newFood = { name, price }

    axios.post("http://localhost:8070/Food/add",newFood)
    .then(()=>{
        alert("Food Item Added")
    }).catch((err)=>{
        alert(err)
    })
}

  return(

    <div style={{ backgroundColor: ` #FF5733` 
      }} className="bg">
  
  <div className="container" style={{ backgroundColor: `#fff` }}>
  
  <InfoWrapper>
      <InfoRow>

  <Column1>
  <h1>Add New Item</h1>
    <Form onSubmit={sendData}>
  <Form.Group>
    <Form.Label for="foodname">Name</Form.Label>
    <Form.Control placeholder="Enter Item Name" 
       onChange={
           (e)=>{ setName(e.target.value);}
    } />
  </Form.Group>

  <Form.Group>
    <Form.Label for="foodprice">Price</Form.Label>
    <Form.Control type="number" placeholder="Enter Price" 
       onChange={
           (e)=>{  setPrice(e.target.value);
           }
         } />
  </Form.Group>

  <Button variant="primary" type="submit" >
    Add Item
  </Button>
</Form>
</Column1>

          <Column2>
          <ImageUploads/>
     
          </Column2>
</InfoRow>
</InfoWrapper>
</div>

</div>

  )

}

export default AddItem