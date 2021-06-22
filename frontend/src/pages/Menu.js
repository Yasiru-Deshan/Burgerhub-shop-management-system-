import React from 'react'
import MenuItem from '../components/Menu/MenuItem'
import { useState } from 'react';
import { useEffect } from 'react';
import '../components/Menu/MenuCard.css'
import axios from 'axios'


const Menu = () => {

    
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
       

        const getFoods = ()=>{

            axios.get('http://localhost:8070/Food/menu').then((res)=>{
                setMenu(res.data);
            })
        }
    
      getFoods();

    },[])
    

    const MenuList = ()=>{
        return menu.map((aName)=>{

            return(
                <MenuItem
                          key ={aName.id} 
                          name = {aName.name}
                          price = {aName.price}  />
            )
        })
    };

    return (

        <div style={{backgroundColor:'#FF5733'}}>
        <React.Fragment>

        <div className="MenuContainer">


            <MenuList/>

            </div>
            
    
            
        </React.Fragment>
        </div>
    )
}

export default Menu