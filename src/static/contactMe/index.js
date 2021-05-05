const contactMeContent = {
    heading: 'Contact Me',
    form: {
        fields: {
            name: 'Name',
            email: 'Email Address',
            message: 'Your Message',
            sendBtn: 'Send Message'
        },
        toastMessages: {
            success: 'Message Sent Successfully🎉',
            error: 'Message Sent Failed❌ Please try again or contact me via social media below',
            invalidEmail: 'Please enter a valid email address📧'
        }
    },
    socialMedia: [
        {
            name: 'github',
            link: 'https://github.com/mikafung0416',
            icon: '/images/socialMedia/github.svg'
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/mika-fung/',
            icon: '/images/socialMedia/linkedin.svg'
        }
    ]
    
}

export default contactMeContent;