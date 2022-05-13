import React, { FC, ReactElement } from 'react';
import { Button } from "react-bootstrap";
import '../../App.scss';

const Footer: FC = (): ReactElement => {

    return (
        <div className="footer-container">
            Copyright © 2021 • NewCo, Inc.
        </div>
    )
}
export default Footer;