import React, { FC, ReactElement } from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Container } from "react-bootstrap";
import "../../App.scss"
type Props = {
  children: ReactElement;
};

const LayoutComponent: FC<Props> = (props: Props): ReactElement => {
  return (
    <Container fluid style={{ maxWidth: '90%', margin: '0 auto' }}>
      <div>
        <Header />
      </div>
      <div>{props.children}</div>
      <div>
        <Footer />
      </div>
    </Container>
  );
};
export default LayoutComponent;
