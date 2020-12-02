import React from 'react';

// reactstrap components
import { Row, Container } from 'reactstrap';

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://www.creative-tim.com?ref=pkr-footer"
                  target="_blank"
                >
                  <img
                    src="https://www.africa-newsroom.com/files/download/d5b32a39a62123e"
                    height={50}
                    alt="Lagos Logo"
                  />
                </a>
              </li>
              <li>
                <a
                  href="#0"
                  target="_blank"
                >
                  <span className="copyright">
                    © {new Date().getFullYear()}, Lagos Ministry of Education
                  </span>
                </a>
              </li>
            </ul>
          </nav>
          {/* <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, Lagos Ministry of Education
            </span>
          </div> */}
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
