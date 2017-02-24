import React from 'react';
import {Link} from 'react-router';

export default function MailBox(props) {
    return (
        <div>
            <strong>
                {props.inbox}
            </strong>
            <br>
            <strong>
                {props.spam}
            </strong>
        </div>
    );
};

