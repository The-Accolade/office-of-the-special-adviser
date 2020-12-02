import React from 'react';

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from 'reactstrap';

// core components
import Navbar from 'components/Navbars/Navbar.js';
import SectionHeader from 'components/Headers/SectionHeader.js';
import Footer from 'components/Footers/Footer.js';

function LandingPage() {
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
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Projects</h2>
                <h5 className="description">
                  carried out since the start of this administration
                </h5>
                <br />
              </Col>
            </Row>
            <br />
            <br />
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avata">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require('assets/img/pictures/Project Picture One.png')}
                      />
                    </a>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avata">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require('assets/img/pictures/Project Picture Two.png')}
                      />
                    </a>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h1">20</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Libraries and ICT centers were renovated across Secondary
                      Schools across the VI Education District
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section text-center">
          <Container>
            <h2 className="title">
              Student Improvement Programmes in Tertiary Institutions
            </h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h1"> 1 </CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      We launched the 4.0 edition of Ready-set-Work Programme
                      for final year students Y2020 MOE MINISTER
                    </p>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avata">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require('assets/img/pictures/Lagos Project.png')}
                      />
                    </a>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require('assets/img/pictures/Project Seminar.png')}
                      />
                    </a>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Second Slide */}
        <div className="section text-center">
          <Container>
            <h2 className="title">
              Student Improvement Programmes in Tertiary Institutions
            </h2>
            <Row>
              <Col md="8">
                <Card className="card-profile card-plain">
                  <div>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require('assets/img/pictures/Code Lagos.png')}
                      />
                    </a>
                  </div>
                  <div className="author">
                    <CardTitle tag="h4">
                      {' '}
                      An initiative to make coding curriculum accessible to
                      every student in Lagos State.{' '}
                    </CardTitle>
                  </div>
                  <div>
                    <Col md="12">
                      <Col>
                        Skills include:
                        <div>Python, Scratch, Greenfoot & Alice</div>
                      </Col>
                    </Col>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h1"> 100,000+ </CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Students Trained
                    </p>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h1"> 656</CardTitle>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Public/ Private Schools Covered
                    </p>
                    <p className="card-description section-dark text-center">
                      Primary & Secondary Schools
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Third Slide */}
        <div className="section text-center">
          <Container>
            <h2 className="title">
              Approved E-learning Infrastructure for State-owned Tertiary
              Institutions
            </h2>
            <p>Caused by Covid-19 pandemic as a mitigation strategy</p>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div className="card-avata">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require('assets/img/pictures/ICT.png')}
                      />
                    </a>
                  </div>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div>
                    <CardTitle tag="h1">1st</CardTitle>
                    <CardTitle tag="h2">
                      State in Nigeria to achieve this feat
                    </CardTitle>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Fourth Slide */}
        <div className="section section-dark text-center">
          <Container>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require('assets/img/pictures/Signing.png')}
                      />
                    </a>
                    <p className="card-description text-center">
                      We signed an agreement with investors for proposed LASU
                      <strong> 8,272-unit</strong> hostel.
                    </p>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <h2 className="title">
                    Stakeholders meeting on LASU land encroachment.
                  </h2>
                  <div>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require('assets/img/pictures/School Logo 4.png')}
                      />
                    </a>
                  </div>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <h2 className="title">
                    LASU created a technology capable of monitoring Carbon
                    Monoxide emission level in vehicles{' '}
                  </h2>
                  <h2 className="title">
                    Admitted <strong>2,000</strong> more students for Stream 2
                    admission exercise
                  </h2>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Fifth Slide */}
        <div className="section text-center">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require('assets/img/pictures/CBT 1.png')}
                      />
                    </a>
                  </div>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile card-plain">
                  <div>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require('assets/img/pictures/CBT 2.png')}
                      />
                    </a>
                    <h4 className="title text-center">
                      Constructed a 500-seater CBT center at LASU in partnership
                      with Private organizations.
                    </h4>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Sixth Slide */}
        <div className="section text-center">
          <Container>
            <h2 className="title">Lagos State Polytechnic (LASPOTECH)</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require('assets/img/pictures/metillelu.png')}
                      />
                    </a>
                  </div>
                  <div className="author">
                    <CardTitle tag="h4">
                      Appointed Mr. METILLELU, Olumide Olusola as the Acting
                      Rector
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h3">
                          {' '}
                          Commenced the HND Top–Up programme.{' '}
                        </CardTitle>
                      </div>
                    </a>
                  </CardBody>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h3">
                          {' '}
                          Commenced the installation of a Power Substation
                        </CardTitle>
                      </div>
                    </a>
                  </CardBody>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h3">
                          {' '}
                          Y2019 i-Creat Skills Festival emerged 1st
                        </CardTitle>
                      </div>
                    </a>
                  </CardBody>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h3">
                          {' '}
                          Y2020 Nigerian Polytechnic Games emerged 2nd
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
                        <CardTitle tag="h1"> Ongoing</CardTitle>
                      </div>
                    </a>

                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h3">
                          {' '}
                          Plans to replicate the same hostels as is currently
                          done in LASU
                        </CardTitle>
                      </div>
                    </a>
                  </CardBody>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <div className="author">
                          <CardTitle tag="h2">
                            {' '}
                            Released funds for the construction of the
                            following:
                          </CardTitle>
                        </div>
                      </a>
                      <div className="author">
                        <CardTitle tag="h3">
                          {' '}
                          -- Administration Building
                        </CardTitle>
                      </div>
                      <div className="author">
                        <CardTitle tag="h3"> -- Perimeter Fence</CardTitle>
                      </div>
                      <div className="author">
                        <CardTitle tag="h3">
                          {' '}
                          -- And equipping the fire station
                        </CardTitle>
                      </div>
                    </a>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Seventh Slide */}
        <div className="section text-center">
          <Container>
            <h2 className="title">
              Michael Otedola College of Primary Education (MOCPED)
            </h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      Released <strong>N200m</strong> Bailout fund to pay
                      retirees.
                    </CardTitle>
                  </div>
                </Card>
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      Paid gratuities and 14 years pension arrears
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      Revalidated the <strong>460-seater</strong> auditorium
                    </CardTitle>
                  </div>
                </Card>
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      Upgraded infrastructure & provided furniture
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h2">
                      Graduated the first batch of students of the University of
                      Ibadan affiliation progamme with two{' '}
                      <strong>1st-class</strong> graduates
                    </CardTitle>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Eight Slide */}
        <div className="section text-center">
          <Container>
            <h2 className="title">
              Adeniran Ogunsanya College of Education (AOCOED)
            </h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      Appointment of <strong>Professor Bililkis Idowu</strong>{' '}
                      as the new Provost of AOCOED
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      Release of <strong>N350 million</strong> bailout for
                      personnel cost and
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      increased subvention fund by <strong>25%</strong>
                    </CardTitle>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Ninth Slide */}
        <div className="section text-center">
          <Container>
            <h2 className="title">Lagos State College of Health Technology</h2>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      Commenced sign language in the classroom
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      Implemented e-Learning infrastructure & web-based result
                      processing software
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">Newly Accredited courses </CardTitle>
                    <CardTitle tag="h5">1. Health Information Mgt</CardTitle>
                    <CardTitle tag="h5">
                      2. Pharmacy Technician / Pharmaceutical Technologist
                    </CardTitle>
                    <CardTitle tag="h5">Environmental Health Tech;</CardTitle>
                    <CardTitle tag="h5">Community Health Science.</CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      Approved for construction & Commencement:
                    </CardTitle>
                    <CardTitle tag="h5">1. Pavement Interlocking</CardTitle>
                    <CardTitle tag="h5">2. Laboratory</CardTitle>
                    <CardTitle tag="h5">3. e-Library.</CardTitle>
                    <CardTitle tag="h5">4. Library.</CardTitle>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Tenth Slide */}
        <div className="section text-center">
          <Container>
            <h2 className="title">
              Lagos State College of Nursing, Midwifery and Public Health
              Nursing (LASCON)
            </h2>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      Both departments admitted 70 students in 2019 & 2020
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      Both departments graduated 67 students in the year 2019
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      We recorded a 100% Pass rate from students who
                      participated in the National qualifying exams{' '}
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      49 students from our school participated in the
                      Ready-Set-Work Programme
                    </CardTitle>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* Eleventh Slide */}
        <div className="section text-center">
          <Container>
            <h2 className="title">
              Improvements at the Adult Literacy Education
            </h2>
            <h5 className="title">Thru Agency for Mass Education</h5>
            <Row>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      21 Additional Adult literacy Centers making a total of
                      1,284.
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      2 Additional Vocational Centers
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      Payment of backlog (salary) to adult learner facilitators
                      and vocational training instructors.{' '}
                    </CardTitle>
                  </div>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-profile card-plain">
                  <div className="author">
                    <CardTitle tag="h4">
                      The sum of N253m was paid as bursary award for 8,246
                      beneficiaries
                    </CardTitle>
                    <CardTitle tag="h4">
                      The sum of N190m was paid as scholarship awards to 845
                      beneficiary
                    </CardTitle>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
