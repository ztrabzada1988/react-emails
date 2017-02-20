import React from 'react';
import {Link} from 'react-router';

export default function Contact(props) {
    return (
        <div>
            <strong>
                <Link to={'/contacts/' + props.id}>
                    {props.name}
                </Link>
            </strong>
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            &nbsp;
            {props.phoneNumber}
        </div>
    );
};

