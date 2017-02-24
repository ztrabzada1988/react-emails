import React from 'react';
import {Link} from 'react-router';

export default function MailBox(props) {
    return (
        <div>
            <strong>
                <h1>{props.inbox}</h1>
            </strong>
            <br></br>
            <strong>
                <h1>{props.spam}</h1>
            </strong>
        </div>
    );
};

