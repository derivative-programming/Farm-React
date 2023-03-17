import React, { FC, ReactElement } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Container } from 'react-bootstrap';

type Props = {
    children: ReactElement
}

const LayoutComponent: FC<Props> = (props: Props): ReactElement => {

    return (
        <Container className="layout-container container">
            <Container>
                <Header />
                </Container>
            <Container style={{ height: 'calc(100vh - 120px)', overflowY: 'auto' }}>
                {props.children}
            </Container>
            <Container >
                <Footer />
            </Container>
        </Container>
    )
}
export default LayoutComponent;