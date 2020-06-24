import React from 'react';
import styled from 'styled-components';
import mainBcg from '../../images/redmain.jpg';
import SocialIcon from './SocialIcon';
import Title from '../Title';
import SVG from '../../images/snowman.svg';
import ME from '../../images/me.svg';

export default function Hero({img, max, children}) {
    return (
        <>
        <HeroWrapper max={max} img={img}>
            <div className='banner'>
                <div className='hero_para'>
                    <h4 className='hero_sub text-sub'>prabhat singh</h4>
                </div>
                <div className='big_title_container'>
                    <div className='title_container'>
                        <div className='title-text title_1'>
                            <h2>web</h2>
                        </div>
                        <div className='title-text title_2'>
                            <h2>software</h2>
                        </div>
                    </div>
                    <div className='title_separator'></div>
                    <div className='big_title title_text'>
                        <h1>Developer</h1>
                    </div>
                </div>
                <SocialIcon></SocialIcon>
            </div>
            <div className='bottom_banner'>
                {/* About section */}
                <div className='about_container'>
                    <div className='about_info'>
                        <div className='about_title'>
                            <span>about</span>
                        </div>
                        <div className='about_para'>
                            <p><span className='span_bold'>Prabhat Singh</span>, Lives in Pune, <span className='span_bold'>India</span></p>
                            <p>I'am Full stack developer, currently pursuing btech in computer science</p>
                        </div>
                    </div>
                    <div className='title_separator'></div>
                    <div className='hobby_info'>
                        <div className='hobby_title'>
                            <span>Favorites</span>
                        </div>
                        <div className='hobby_para'>
                            <p>Coding</p>
                            <p>Space-Universe Concept</p>
                            <p>Cricket</p>
                            <p>Trekking</p>
                        </div>
                    </div>
                </div>  
                {/* About section end */}  
                <div className='big_separator'>
                <Title title1='about' title2='me' />
                </div>
                <div className='img_container'>
                    <div className='img_box'>
                    </div>
                </div> 
            </div>
            {children}
        </HeroWrapper>
        </>
    );
}

const HeroWrapper = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: ${props => props.max?'100vh':'60vh'};
    @media screen and (max-width: 700px) {
        min-height: 100vh;
    }  
    background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8)), url(${props => props.img}) center/cover no-repeat fixed;
    .hero_para {
        padding-right: 50px;
        padding-bottom: 5px;
        color: var(--beige);
        letter-spacing: var(--bigSpacing);
        text-transform: uppercase;
        font-size: 10px; 
    }
    .big_title_container {
        display: flex;
        padding-top: 10px;
        justify-content:center;
        /* align-self: auto; */
        align-items: center;
    }
    .title_separator {
        background: var(--lightOrange);
        height: 60px;
        width: 2px;
    }
    .title_container {
        padding-right: 15px;
        color: var(--grey);
        text-transform: uppercase;
        font-size: 15px;
    }
    .big_title {
        padding-left: 15px;
        color: var(--azure);
        text-transform: uppercase;
    }
    .social_container {  
        position: absolute;
        top: 90%;
        width: 300px;
    }
    .s_co {
        display: flex;
        justify-content: space-around;
        align-self: center;
    }
    .social-icon {
        font-size: 20px;    
    }
    .about_title,.hobby_title {
            color: var(--grey);
            font-weight: lighter;
            font-size: 20px;
            letter-spacing: var(--bigSpacing);
            text-transform: uppercase;
        }
    @media screen and (max-width:700px){
        .about_title,.hobby_title {
            font-size: 25px;
            padding: 20px;
        }
        .about_para, .hobby_para {
            font-size: 20px;
            padding-bottom: 20px;
        }
        .bottom_banner{
            display: flex;
            position: absolute;
            top: 100vh;
            flex-direction: column;
        }
        .about_container {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
        }
        .title_separator {
            display: none;
        }
        .big_separator {
            display: none;
        }
        .img_container {
            background: url(${ME}) center/cover no-repeat;
            background-size: 50%;
            height: 300px;
        }

    }
    @media screen and (min-width: 700px) {
        .bottom_banner {
            padding-top:20px;
            display: flex;
            position: absolute;
            top: 60vh;
            /* align-items:center; */
        }
        .about_container {
            width: 60vw;
            display: flex;
            justify-content:space-around;
            align-items: center;
            background: url(${SVG}) center no-repeat;
            background-size: 95px;
            background-position-x: 55.5%;
            background-position-y: 140%;
        }
        .about_info {
            width: 50%;
        }
        .hobby_info {
            width: 40%;
        }
        .big_separator {
        
        }
        .img_container {
            width: 30vw;
        }
        .about_para, .hobby_para {
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            text-transform: uppercase;
            letter-spacing: var(--smallSpacing);
        }
        .img_container {
            /* box-sizing: border-box; */
            background: url(${ME}) center/cover no-repeat;
            background-size: 50%;
        }
    }
`;

Hero.defaultProps = {
    img: mainBcg
};