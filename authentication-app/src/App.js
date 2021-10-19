import {Button, Col, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Container className="mt-5">
                <Row className="mt-5">
                    <Col md={6} className={"textCenter"}>
                        <h4 className="text-primary">
                            Public page
                        </h4>
                    </Col>
                    <Col md={6} className="float-end">
                        <Button className="btn btn-success float-end">Admin Page</Button>
                    </Col>
                </Row>
                <Row className="mt-5 float-none">
                    <Col md={6} style={{height: "100px",backgroundColor:"#6930c3"}} className=""></Col>
                    <Col md={1} style={{height: "100px"}}></Col>
                    <Col md={5} style={{height: "100px",backgroundColor:"#5390d9"}}></Col>
                </Row>
                <Row className="mt-5">
                    <Col md={12} style={{height: "200px",backgroundColor:"#80ffdb"}}></Col>

                </Row>
                <Row className="mt-5">
                    <Col md={8} style={{height: "150px",backgroundColor:"#9d4edd"}}></Col>
                    <Col md={1} style={{height: "150px"}}></Col>
                    <Col md={3} style={{height: "150px",backgroundColor:"#48bfe3"}}></Col>
                </Row>
                <Row className="mt-5">
                    <Col md={12} style={{height: "200px",backgroundColor:"#40916c"}}></Col>
                    </Row>
            </Container>
        </div>
    );
}

export default App;
