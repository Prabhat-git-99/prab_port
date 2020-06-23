import React from 'react';
import styled from 'styled-components';
import { DataConsumer } from '../context/context';
import { Link } from 'react-router-dom';


export default function NavBar() {
    return (
        <DataConsumer>
            {value => {
                const {links} = value;
                console.log(links);
                return(
                    <NavWrapper>
                        <nav className='nav-bar'>
                            <div className='nav-container'>
                                {
                                    links.map(link => {
                                        return (
                                            <div className='link'>
                                                <Link to={link.path} className='link-path'>{link.text}</Link>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </nav>
                    </NavWrapper>
                );
            }}
        </DataConsumer>
    )
}

const NavWrapper = styled.nav`
    /* position: --webkit-sticky;
    position: sticky; */
    position:fixed;
    z-index: 100;
    top: 0;
    width: 100%;
    @media screen and (max-width:700px) {
        padding: 20px;
    }
    @media screen and (min-width:700px) {
        padding: 0;
    }
    /* background: #6E0A0C; */
    background: rgba(0,0,0,0.7);
    z-index: 3;
    .nav-container {
        padding: 20px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }   
    .link-path {
        text-decoration: none;
        display: block;
        color: var(--azure);
        text-transform: uppercase;
        transition: var(--mainTransition) ease-in color; 
    }
    .link-path:hover {
        /* color: var(--lightOrange); */
        color: var(--sandy);
    }
`;