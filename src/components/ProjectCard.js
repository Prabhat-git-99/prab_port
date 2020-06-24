import React from 'react';
import styled from 'styled-components';

export default function ProjectCard({icon,language,technology,title,completed,url,description}) {
    return (
        <ProductWrapper icon={icon}>
            <div className='container'>
                <div className='card_bigcontainer'>
                    <div className='card_container'>
                        <div className='first_sec'>
                            <div className='pro_title'>{title}</div>
                            <div className='pro_icon'>

                            </div>
                            <div className='pro_links'>
                                <a href={url} className='p_link'>Visit</a>
                            </div>
                        </div>
                        <div className='pro_separate'></div>
                        <div className='second_sec'>
                            <div className='pro_lang'>
                                <h2 className='com_title'>language</h2>
                                <p className='com_para'>{language}</p>
                            </div>
                            <div className='pro_tech'>
                                <h2 className='com_title'>technology</h2>  
                                <p className='com_para'>{technology}</p>
                            </div>
                        </div>
                        <div className='pro_separate'></div>
                        <div className='third_sec'>
                            <div className='pro_desc'>
                                <h2 className='com_title'>Description</h2>
                                <div className='com_para'>{description}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProductWrapper>    
    );
}

const ProductWrapper = styled.div`
    .card_container{
        display: flex;
        width: 380px;
        height: 200px;
        justify-content: center;
        align-items: center;
        margin: 20px;
        background: rgba(255,255,255,0.9);
        /* background: transparent; */
        box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.4);
        border-bottom-right-radius: 15px;
        border-top-left-radius: 15px;
        z-index:100;
    }
    .first_sec {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 28%;
        padding-right: 3px;
    }
    .pro_separate {
        padding: 1px 1px;
        /* width: 3px; */
        height: 40%;
        background: var(--grey);
        border-radius: 100%;
    }
    .second_sec {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 35%;
        margin-top: -20px;
    }
    .third_sec {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40%;
    }
    .com_title {
        font-size: 15px;
        letter-spacing: var(--mainSpacing);
        color: var(--silver);
        text-align: center;
        font-weight: lighter;
        text-transform: uppercase;
        overflow-wrap: wrap;
        margin-bottom: 10px;
        margin-top: 10px;      
    }
    .pro_title {
        /* color: lightblue; */
        color: rgb(32, 193, 223);
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        padding-bottom: 15px;
    }
    .pro_icon {
        width: 60px;
        height: 60px;
        background: url(${props => props.icon}) center/cover no-repeat;
    }
    
    .com_para {
        display: flex;
        justify-content: center;
        font-size: 13px;
        padding-left: 10px;
        width: 130px;
        text-align: left;
        overflow-wrap: wrap;

    }
    .pro_links {
        padding-top: 30px;
    }
    .p_link {
        text-decoration: none;
        text-transform: uppercase;
        color: var(--sandy);
    }
`;