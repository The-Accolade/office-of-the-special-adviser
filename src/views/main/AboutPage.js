import React from 'react';
import SectionHeader from 'components/Headers/SectionHeader.js';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from 'reactstrap';

// core components
import Navbar from 'components/Navbars/Navbar.js';
import Footer from 'components/Footers/Footer.js';

const AboutPage = () => {
  document.documentElement.classList.remove('nav-open');
  React.useEffect(() => {
    document.body.classList.add('profile-page');
    return function cleanup() {
      document.body.classList.remove('profile-page');
    };
  });
  return (
    <>
      <Navbar />
      <SectionHeader />
      <div className="section text-center">
        <Container>
          <h2 className="title">About us</h2>
          <Row>
            <Col md="8">
              <Card className="card-profile card-plain">
                <div>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require('assets/img/pictures/Group Picture with Governor and Deputy.png')}
                    />
                  </a>
                </div>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardBody>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h1">
                        Office of the Special Adviser on Education
                      </CardTitle>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    A group becomes a team when each member is sure enough of
                    himself and his contribution to praise the skill of the
                    others. No one can whistle a symphony. It takes an orchestra
                    to play it.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section section-dark text-center">
        <Container>
          <h2 className="title">Offices & Agencies</h2>
          <Row>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h2">
                        Office Of Special Adviser On Education
                      </CardTitle>
                    </div>
                  </a>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h2">
                        Agency For Mass Literacy, Adult & Non-formal Education
                      </CardTitle>
                    </div>
                  </a>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-profile card-plain">
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h2">
                        Lagos State Scholarship Board
                      </CardTitle>
                    </div>
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <Card className="card-profile card-plain">
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h2">Lagos State Library Board</CardTitle>
                    </div>
                  </a>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-profile card-plain">
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h2">Lagos State Library Board</CardTitle>
                    </div>
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section text-center">
        <Container>
          <h2 className="title">Our Mandate</h2>
          <Row>
            <Col md="12">
              <Card className="card-profile card-plain">
                <CardBody>
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      src={require('../../assets/img/pictures/mandate.png')}
                      alt="..."
                    />
                  </a>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
