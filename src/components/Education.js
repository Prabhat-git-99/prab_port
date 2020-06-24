import React from 'react';
import { DataConsumer } from '../context/context';
import styled from 'styled-components';
import SingleEducation from './singleEducation';
import SingleFind from './SingleFind';
import SingleCertificate from './SingleCertificate.js';

export default function Education() {
    return (
        <DataConsumer>
            {
                value => {
                    const { education, findMe, certificate} = value;
                    return (
                        <EducationWrapper>
                            <div className='nav'></div>
                            <div className='education_banner'>
                                <div className='education_container'>
                                    <div className='second_sec'>
                                        <div className='sec_separator'></div>
                                        <div className='find_me_container'>
                                          {
                                              findMe.map(me => {
                                                  return (
                                                      <SingleFind url={me.url} icon={me.icon} />
                                                  );
                                              })
                                          }  
                                        </div>
                                        <div className='sec_separator'></div>
                                    </div>
                                    <div className='first_sec'>
                                        <div className='school_container'>
                                            {
                                                education.map(edu => {
                                                    return (
                                                        <SingleEducation name={edu.name} college={edu.college} branch={edu.branch} score={edu.score} icon={edu.icon}/>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                    <div className='certificate_title'>
                                        <div className='c_tit'></div>
                                        <div className='title'>Certification</div>
                                        <div className='c_tit'></div> 
                                    </div>
                                    <div className='certificate_container'>
                                        {
                                            certificate.map(cer => {
                                                return(
                                                    <SingleCertificate name={cer.name} icon={cer.icon} url={cer.url} />
                                                );
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </EducationWrapper>
                    );
                }
            }
        </DataConsumer>
    );
}

const EducationWrapper = styled.div`
    .nav{
        position: fixed;
        @media screen and (max-width:700px){
            height: 101px;
        }
        @media screen and (min-width:700px){
            height: 61px;
        }
        background: rgba(119, 12, 12,0.9);
        width: 100vw;
        opacity: 1;
        z-index: 2;
    }
    @media screen and (max-width:700px) {
        .education_banner {
        padding-top: 30%;
        }
    }
    @media screen and (min-width:700px) {
        .education_banner {
        padding-top: 6%;
        }
    }
    .education_banner {
        background: rgba(255,255,255,0.1);
    }
    .education_container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .school_container {
        display: flex;
        flex-wrap: wrap;
    }
    .find_me_container{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .second_sec {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .sec_separator{
        width: 25vw;
        margin: 0 15px;
        height: 2px;
        background: lightgray;
        border-radius: 100%;
    }
    .certificate_title {
        margin: 15px 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .c_tit {
        width: 10vw;
        height: 2px;
        background: goldenrod;
        border-radius: 100%;
    }
    .title {
        margin: 8px 17px;
        text-transform: uppercase;
        font-size: 20px;
        letter-spacing: var(--bigSpacing);
        color: var(--grey);
    }
    .certificate_container {
        display: flex;
        flex-wrap: wrap;
        align-items: center; 
        justify-content: center;
    }
`;