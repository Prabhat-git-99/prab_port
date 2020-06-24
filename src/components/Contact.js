import React from 'react';
import styled from 'styled-components';
import location from '../images/location.svg';
import phone from '../images/phone.svg';
import ballon from '../images/ballon.svg';
import agree from '../images/agree.svg';
import { DataConsumer } from '../context/context';
import SingleFind from './SingleFind';

export default function Contact() {
    return (
        <ContactWrapper>
            <div className='nav'></div>
            <div className='education_banner'>
                <div className='contact_container'>
                    <div className='first_sec'>
                        <div className='detail_container'>
                            <div className='location_container'>
                                <div className='title_co'>
                                    <div className='com_title'>Location</div>
                                    <div className='loc_icon'></div>
                                </div>
                                <div className='address'>Jd green paradise, pune 411047, maharashtra, india</div>
                            </div>
                            <div className='phone_container'>
                                <div className='title_co'>
                                    <div className='com_title'>Contact</div>
                                    <div className='phone_icon'></div>
                                </div>
                                <div className='address'>+91 7057965399</div>
                                <div className='address'>prabatwork3939@gmail.com</div>
                            </div>
                        </div>
                        <div className='contact_logo'></div>
                        <div className='contact_form'>
                            <div className='com_title'>Send Message<span className='con_icon'></span></div>
                            <div className='form'>
                                <form className='form_container' action="https://formspree.io/mnqgvodd" method="POST">
                                    <div className='form_group firstName'>
                                        <input type='text' name='firstName' placeholder='First Name' className='form-control' />
                                    </div>
                                    <div className='form_group'>
                                        <input type='email' name='email' placeholder='yourmail@abc.com' className='form-control' />
                                    </div>
                                    <div className='form_group'>
                                        <input type='text' name='subject' placeholder='title' className='form-control' />
                                    </div>
                                    <div className='form_group'>
                                        <textarea name='message' id='' className='form-control' placeholder='Your Message Here' rows='5'></textarea>
                                    </div>
                                    <div className='form_group input_btn'>
                                        <input type='submit' value='Send' className='form-control submit_btn'></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='second_sec'>
                        <div className='contact_sec_title'>
                            <div className='new_sep'></div>
                                <div className='new_tit'>Find me here also</div>
                            <div className='new_sep'></div>
                        </div>
                        <div className='logo_container'>
                            <DataConsumer>
                                {value => {
                                    const { findMe } = value;
                                    return (
                                    // console.log(findMe);
                                    <div className='log_container'>
                                        {
                                              findMe.map(me => {
                                                  return (
                                                      <SingleFind url={me.url} icon={me.icon} />
                                                  )
                                              })
                                          } 
                                    </div>
                                    );
                                }}
                            </DataConsumer>
                            <div className='end'></div>
                        </div>
                    </div>
                </div>
            </div>
        </ContactWrapper>
    );
}

const ContactWrapper = styled.div`
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
        display: flex;
        flex-direction: column;
    }
    .first_sec {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    @media screen and (max-width: 700px){
        .first_sec {
            display: flex;
            flex-direction: column;
        }
    }
    .detail_container{
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        /* border: 2px solid red; */
        padding: 20px 20px;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
    }
    .location_container{        
        padding-bottom: 20px;
    }
    .title_co {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .com_title {
        font-size: 20px;
        text-transform: uppercase;
        font-weight: bolder;
        color: rgba(0,0,0,0.7); 
    }
    .loc_icon {
        background: url(${location}) center/cover no-repeat;
        width: 40px;
        height: 40px;
    }
    .phone_icon {
        background: url(${phone}) center/cover no-repeat;
        width: 30px;
        height: 30px;
        margin-left: 8px;
    }
    .address{
        padding: 15px 10px;
        font-size: 15px;
        text-transform: uppercase;
        word-wrap: wrap;
        letter-spacing: var(--smallSpacing);
    }
    .phone_container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .contact_logo {
        background: url(${ballon}) center/cover no-repeat;
        background-size: 200px;
        width: 250px;
        height: 250px;
    }
    .contact_form{
        width: 400px;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .form{
        width: 300px;
        margin: 10px 0;
    }
    .form-control{
        border: none;
        border-bottom: 1px solid grey;
        width: 100%;
        outline:none;
        padding: 7px;
        text-transform: uppercase;
    }
    .input_btn{
        width: 40%;
        margin: 0 auto;
        background: none;
    }
    .submit_btm {
        width: 100px;
        background: red;
    }
    input[type=submit]{
        background: rgb(255,255,255);
        background: linear-gradient(31deg, rgba(255,255,255,1) 43%, rgba(127,234,222,1) 79%, rgba(81,254,254,1) 88%);
        border-radius: 20px;
        color: var(--sandy);
        font-weight: bolder;
        letter-spacing: var(--smallSpacing);
        cursor: pointer;
    }
    input[type=submit]:hover{
        /* background: white; */
        background: rgb(255,255,255);
background: linear-gradient(31deg, rgba(255,255,255,1) 0%, rgba(130,255,241,1) 39%, rgba(38,168,168,1) 68%);
    }
    .second_sec {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
        margin: 60px 10px;
    }
    .contact_sec_title{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .new_sep {
        width: 100px;
        height: 2px;
        border-radius: 100%;
        background: var(--grey);
        margin: 0 20px;
    }
    .new_tit {
        font-size: 20px;
        text-transform: uppercase;
        color: grey;
        letter-spacing: var(--bigSpacing);
    }
    .logo_container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .log_container{
        padding-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
    .end{
        width: 300px;
        height: 200px;
        background: url(${agree}) center/cover no-repeat;
        background-size: 140px;
    }
`;
