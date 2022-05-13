import React, { FC, ReactElement } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

type Props = {
    children: ReactElement
}

const LayoutComponent: FC<Props> = (props: Props): ReactElement => {

    return (
        <div className="layout-container">
            <div className='layout-header-container'>
                <Header />
            </div>
            <div className='layout-body-container'>
                {props.children}
            </div>
            <div className='layout-footer-container'>
                <Footer />
            </div>
        </div>
    )
}
export default LayoutComponent;