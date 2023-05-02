import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import useAnalyticsDB from "../../hooks/useAnalyticsDB"; 

const GDPRBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);
  const { logClick } = useAnalyticsDB();

  useEffect(() => {
    const hasAccepted = localStorage.getItem("gdpr_accepted");
    if (hasAccepted) {
      setShowBanner(false);
    }
  }, []);

  const handleAccept = () => {
    logClick("GDPRBanner","accept","");
    localStorage.setItem("gdpr_accepted", "true");
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div
          className="fixed-bottom p-2 text-white"
          style={{
            zIndex: 9999,
            boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
            background: "#0A4D68",
          }}
        >
          <Container>
            <Row>
              <Col className="d-flex align-items-center justify-content-center">
                <span
                  style={{
                    marginRight: "10px",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  This website uses cookies to improve your experience. By
                  clicking "Accept", you consent to the use of all cookies in
                  accordance with GDPR.
                </span>
              </Col>
              <Col xs="auto">
                <Button
                  variant="light"
                  onClick={handleAccept}
                  style={{ fontSize: "14px" }}
                >
                  Accept
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </>
  );
};

export default GDPRBanner;
