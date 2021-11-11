import React from 'react';
import ContactForm from './ContactForm.component';

export default {title: 'Components / ContactForm', component: ContactForm};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <ContactForm {...args}/>;


export const Info = Template.bind({});

Info.args = {
    user: {
        fullName: "Jon Doe",
        email: "jdoe@gmail.com"
    }
};
