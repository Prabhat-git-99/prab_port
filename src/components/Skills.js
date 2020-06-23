import React from 'react';
import { DataConsumer } from '../context/context';
import styled from 'styled-components';
import SingleCard from './SingleCard';
import bannerImg from '../images/snowskill.jpg';
import ride from '../images/ride.svg';
import art from '../images/art.svg';
import milky from '../images/milkyway.jpg';
import foot from '../images/foot.svg';

export default function Skills() {
    return (
        <DataConsumer>
            {value => {
                const {technologies,industry,language} = value;
                return (
                    <SkillsWrapper>
                        <div className='nav'></div>
                        <div className='skill_banner'>
                            <div className='skill_top'>
                            <div className='tech_section'>
                            <div className='skill_title'>
                                <span className='t1'>Technoligies</span>
                            </div>
                                <div className='tech_container'>
                                    {
                                        technologies.map(tech => {
                                            return (
                                                <SingleCard name={tech.name} category={tech.category} image={tech.icon}/>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className='lan_section'>
                            <div className='skill_title'>
                                <span className='t1'>Languages</span>
                            </div>
                                <div className='lan_container'>
                                {
                                        language.map(tech => {
                                            return (
                                                <SingleCard name={tech.name} category={tech.category} image={tech.icon} />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            <div className='ind_section'>
                            <div className='skill_title'>
                                <span className='t1'>Industry Knowledge</span>
                            </div>
                                <div className='ind_container'>
                                {
                                        industry.map(tech => {
                                            return (
                                                <SingleCard name={tech.name} category={tech.category} image={tech.icon} />
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            </div>
                        </div>
                    </SkillsWrapper>
                );
            }}
        </DataConsumer>
    );
}

const SkillsWrapper = styled.div`
    .nav{
        position: fixed;
        /* height: 101px; */
        @media screen and (max-width:700px){
            height: 101px;
        }
        @media screen and (min-width:700px){
            height: 61px;
        }
        /* background: rgba(150, 31, 6 ,0.9); */
        background: rgba(119, 12, 12,0.9);
        width: 100vw;
        opacity: 1;
        z-index: 2;
    }
    .skill_top {
        position: absolute;
        top: 20%;
    }
    .skill_banner {
        /* background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4)), url(${bannerImg}) center/cover no-repeat fixed; */
        /* background: var(--beige) ; */
        /* height: 100vh; */
        /* z-index: -1; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .tech_container {
        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }
    .lan_section {
        margin-top: 30px;
        padding: 30px 0;
    }
    .ind_section {
        margin-top: 30px;
    }
    .lan_container {
        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        /* align-items: center; */
    }
    .ind_container {
        width: 100vw;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        padding-bottom: 50px;
    }
    .skill_title {
        text-align: center;
        padding-top: 15px;
        margin-bottom: 10px;
        padding-bottom: 10px;
        letter-spacing: var(--bigSpacing);
        text-transform: uppercase;
        border-radius:100%;
        width: 65vw;
        margin: 0 auto;
        clip-path: polygon(0 33%, 100% 7%, 91% 100%, 0% 100%);
        background: url(${milky}) center/cover no-repeat fixed;

    }
    .t1{
        font-size: 20px;
        font-weight: bolder;
        color: var(--beige);
        z-index: 10;
    }
`;