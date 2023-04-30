import React, { FC, ReactElement } from 'react';
import { Button } from "react-bootstrap";
import '../../App.scss';

const Footer: FC = (): ReactElement => {

    return (

        <div className="mt-1 mb-3" data-testid="footer-text">
            <hr/>
            Copyright © 2023 • NewCo, Inc.
        </div>
    )
}
export default Footer;