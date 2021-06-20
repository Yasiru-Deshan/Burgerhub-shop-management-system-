import React from 'react'
import MenuItem from '../components/Menu/MenuItem'
import { useState } from 'react';
import { useEffect } from 'react';
import '../components/Menu/MenuCard.css'
import { array } from 'prop-types';


const Menu = () => {

    var i=0;
    const [loadData, setLoadData] = useState(false);
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8070/Food/menu")
        .then((response)=>{
            return response.json();
        })
        .then(responseData=>{

            for(i=0;i<4;i++){
            setMenu((menu)=>[...menu,responseData.[i]]);
            }
        })

    },
          [loadData]);


    

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

      const menuHandler=()=>{
      setLoadData(true);
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
