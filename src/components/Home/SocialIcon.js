import React from 'react';
import { DataConsumer } from '../../context/context';

export default function SocialIcon() {
    return (
        <DataConsumer>
            {value => {
                const { social } = value;
                return (
                    <div className='social_container'>
                        <div className='s_co'>
                        {
                           social.map(soc => {
                               return (
                                    <div className='social-icon'>
                                        <a href = {soc.url} key = {soc.id} className='icon_hover'>{soc.icon}</a>
                                    </div>
                               );
                           }) 
                        }
                        </div>
                    </div>
                );
            }}
        </DataConsumer>
    )
}
