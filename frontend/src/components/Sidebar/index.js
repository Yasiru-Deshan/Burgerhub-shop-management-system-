import React from 'react'
import {
       SidebarContainer,
       Icon,
       CloseIcon,
       SideBtnWrap,
       SidebarMenu,
       SidebarRoute,
       SidebarWrapper,
       SidebarLink,
       SidebarLinks
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
              <CloseIcon/>
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLinks to="menu" onClick={toggle}>
                       Menu
                   </SidebarLinks>
                   <SidebarLinks to="offers" onClick={toggle}>
                       Offers
                   </SidebarLinks>
                   <SidebarLink to="about" onClick={toggle}>
                       About Us
                   </SidebarLink>
                   <SidebarLink to="contact" onClick={toggle}>
                       Contact Us
                   </SidebarLink>
               </SidebarMenu>

               <SideBtnWrap>
                   <SidebarRoute to="/signin">Sign In</SidebarRoute>
               </SideBtnWrap>
           </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
