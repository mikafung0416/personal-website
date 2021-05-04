import React from 'react';
import { ContactForm, SocialMedia } from './components';
import { Heading } from '../../components';
import contactMeContent from '../../static/contactMe';

const ContactMePage = () => {
    return (
        <>
        <Heading heading={contactMeContent.heading}/>
        <ContactForm content={contactMeContent.form}/>
        <SocialMedia content={contactMeContent.socialMedia}/>
        </>
    )
}

export default ContactMePage;