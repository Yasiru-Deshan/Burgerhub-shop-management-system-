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
} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
              <CloseIcon/>
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to="menu" onClick={toggle}>
                       Menu
                   </SidebarLink>
                   <SidebarLink to="offers" onClick={toggle}>
                       Offers
                   </SidebarLink>
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
