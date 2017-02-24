import React from 'react';
import MailBox from './mailbox';


export default function EmailList(props) {
    const emails = Object.keys(props.emails).map(function(inboxOrSpam, index) {
        const email = props.emails[inboxOrSpam];
        console.log(email);
        return (
            <li key={index}>
                <MailBox inbox={email.inbox} spam={email.spam} />
            </li>
        );
    });

    return (
        <ul>
            {emails}
        </ul>
    );
};
