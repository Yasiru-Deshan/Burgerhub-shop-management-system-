import React from 'react';
import Icon1 from '../../../images/burger4.png'
import Icon2 from '../../../images/burger5.png'
import Icon3 from '../../../images/burger6.png'


import {
         ServicesH1,
         ServicesH2,
         ServicesContainer,
         ServicesWrapper,
         ServicesCard,
         ServicesIcon,
         Servicesp
} from './MenuElements';
import { Button } from '../../ButtonElements';

const HomeMenu = ( {primary,dark,dark2}) => {
    return (
        <ServicesContainer id="">
           <ServicesH1>Hot Deals</ServicesH1> 
            <ServicesWrapper>
               
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Whopper</ServicesH2>
                    
                    <Button to='home'
                             smooth={true} 
                             duration={500} 
                             spy={true} 
                             exact='true' 
                             offset={-80}
                              primary={primary ? 0 : 1}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1: 0}

                              >Order Now</Button>  
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Chicken Sandwich</ServicesH2>
                    <Button to='home'
                             smooth={true} 
                             duration={500} 
                             spy={true} 
                             exact='true' 
                             offset={-80}
                              primary={primary ? 0 : 1}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1: 0}

                              >Order Now</Button>  
            
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Chicken Junior</ServicesH2>
                    <Button to='home'
                             smooth={true} 
                             duration={500} 
                             spy={true} 
                             exact='true' 
                             offset={-80}
                              primary={primary ? 0 : 1}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1: 0}

                              >Order Now</Button>  
                    
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Whopper</ServicesH2>
                    
                    <Button to='home'
                             smooth={true} 
                             duration={500} 
                             spy={true} 
                             exact='true' 
                             offset={-80}
                              primary={primary ? 0 : 1}
                              dark={dark ? 1 : 0}
                              dark2={dark2 ? 1: 0}

                              >Order Now</Button>  
                </ServicesCard>
                
                    



            </ServicesWrapper>

        </ServicesContainer>
    )
}

export default HomeMenu
