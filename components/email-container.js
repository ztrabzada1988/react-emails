import React from 'react';
import EMAILS from '../emails';
import MailBox from './mailbox';

export default function EmailContainer(props) {
    const email = EMAILS[props.params.inboxOrSpam];
    return <MailBox inbox={email.inbox} spam={email.spam} />;
};
