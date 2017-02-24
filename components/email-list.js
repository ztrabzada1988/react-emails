import React from 'react';
import MailBox from './mailbox';

export default function EmailList(props) {
    const emails = Object.keys(props.emails).map(function(inboxOrSpam, index) {
        const emails = props.emails[inboxOrSpam];
        return (
            <li key={index}>
                <MailBox inbox={email.inbox} spam={email.name} />
            </li>
        );
    });

    return (
        <ul>
            {emails}
        </ul>
    );
};
