import React from 'react';
import MailBox from './mailbox';
import EMAILS from '../emails';

export default function EmailList(props) {
    const emails = Object.keys(EMAILS).map(function(inboxOrSpam, index) {
        const email = props.emails[inboxOrSpam];
        console.log(email);
        return (
            <li key={index}>
                <MailBox inbox={EMAILS[inboxOrSpam]} spam={email.spam} />
            </li>
        );
    });

    return (
        <ul>
            {emails}
        </ul>
    );
};
