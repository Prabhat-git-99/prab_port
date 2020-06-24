import React from 'react';
import styled from 'styled-components';

export default function SingleCertificate({name,icon,url}) {
    return (
        <CertificateWrapper icon={icon}>
            <div className='c_container'>
                <div className='fc_sec'></div>
                <div className='c_separator'></div>
                <div className='sc_sec'>
                    <div className='c_name'>{name}</div>
                    <div className='c_url'>
                        <div className='c_btn'>
                            <a href={url} target='_blank'>verify</a>
                        </div>
                    </div>
                </div>
            </div>
        </CertificateWrapper>
    );
}

const CertificateWrapper = styled.div`
    .c_container{
        margin: 10px 30px;
        padding: 10px 10px;
        display: flex;
        margin-bottom: 40px;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1); 
        background: rgba(255,255,255,0.2);
        border-top-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }
    .c_separator {
        background: lightgray;
        height: 40px;
        width: 2px;
        border-radius: 100%;
        margin: 5px 12px;
    }
    .fc_sec {
        background: url(${props => props.icon}) center/cover no-repeat;
        width: 50px;
        height: 50px;
    }
    .sc_sec {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5px 5px;
    }
    .c_name {
        text-align: center;
        font-size: 17px;
        font-weight: bold;
        text-transform: uppercase;
        word-wrap: wrap;      
    }
    .c_btn {
        margin-top:10px;
        padding: 5px 18px;
        background: rgb(255,255,255);
        background: linear-gradient(31deg, rgba(255,255,255,1) 0%, rgba(239,240,210,1) 41%, rgba(102,192,210,1) 76%);
        border-radius: 10px;
        /* transition: 1s; */
    }
    .c_btn a{
        text-decoration:none;
        text-transform:uppercase;
        color: var(--sandy);
        font-weight: bolder;
        font-size: 12px;
    }
    .c_btn:hover{
        background: var(--beige);
    }

`;