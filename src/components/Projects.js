import React from 'react';
import ProjectCard from './ProjectCard';
import { DataConsumer } from '../context/context';
import styled from 'styled-components';
import bg from '../images/sunset.jpg';

export default function Projects() {
    return (
        <DataConsumer>
            {value => {
                const { projects } = value;
                // console.log(projects);
                return(
                    <ProjectWrapper>
                        <div className='nav'></div>
                        <div className='outer_banner'>
                            <div className='product_banner'>
                                <div className='product_wrapper'>
                                    {
                                        projects.map(project => {
                                            return (
                                                <div className='single_project'>
                                                    <ProjectCard icon={project.icon} language={project.language} technology={project.technology} title={project.title} completed={project.completed} url={project.url} description={project.description} />
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </ProjectWrapper>
                );
            }}
        </DataConsumer>
    );
}

const ProjectWrapper = styled.div`
background: linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)), url(${bg}) center/cover no-repeat fixed;
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
    @media screen and (max-width: 700px){
        .outer_banner {
            padding-top: 24%;
        }   
    }
    @media screen and (min-width: 700px){
        .outer_banner {
            padding-top: 6%;
        }   
    }
    .product_wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;      
    }

`;