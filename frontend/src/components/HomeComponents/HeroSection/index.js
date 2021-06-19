import React, { useState} from 'react'
import Video from '../../../videos/video.mp4'; 
import { Button } from '../../ButtonElements'
import { HeroContainer,
         HeroBg,
         VideoBg,
         HeroContent,
         HeroH1,
         HeroP,
         HeroBtnWrapper,
         ArrowForward,
         ArrowRight
          } from './HeroElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>It's Burger O' Clock</HeroH1>
                <HeroP>
                   Enjoy 50$  off on your first 2 orders above 175$
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter = {onHover} 
                    onMouseLeave = {onHover}
                    primary='true'
                    dark=''
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}>
                        Sign In{hover ? <ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>

        </HeroContainer>
            
        
    );
};

export default HeroSection;
