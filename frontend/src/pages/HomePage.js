import React from 'react';
import HeroSection from '../components/HomeComponents/HeroSection';
import InfoSection from '../components/HomeComponents/InfoSection';
import HomeMenu from '../components/HomeComponents/HomeMenu';
import { homeObjTwo,homeObjThree  } from '../components/HomeComponents/InfoSection/Data';


const Home = () => {

    return (
        <>
     
        <HeroSection />
        <HomeMenu/>
        <InfoSection {...homeObjTwo}/>
        <InfoSection {...homeObjThree}/>
        
        
    

        
        </>
    )
}

export default Home
