import {Button, Col, Container, Row} from "react-bootstrap";
import {Link, Redirect} from "react-router-dom";
import {authMiddleware} from "../services/auth_service";
import LoginPage from "./login-page";

function AdminPage() {
    if (!authMiddleware()) {
        return <Redirect to="/login" />
    }
    return (
        <>
            <Container className="mt-5">
                <Row className="mt-5">
                    <Col md={6} className={"textCenter"}>
                        <h4 className="text-primary">
                            Admin page
                        </h4>
                    </Col>
                    <Col md={6} className="float-end">
                        <Button className="btn btn-success float-end">
                            <Link style={{color:"#fff"}} to="/">Public Page</Link>
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-5 float-none">
                    <Col md={6} style={{height: "100px",backgroundColor:"#80ffdb"}} className=""></Col>
                    <Col md={1} style={{height: "100px"}}></Col>
                    <Col md={5} style={{height: "100px",backgroundColor:"#5390d9"}}></Col>
                </Row>
                <Row className="mt-5">
                    <Col md={12} style={{height: "200px",backgroundColor:"#6930c3"}}></Col>

                </Row>
                <Row className="mt-5">
                    <Col md={8} style={{height: "150px",backgroundColor:"#9d4edd"}}></Col>
                    <Col md={1} style={{height: "150px"}}></Col>
                    <Col md={3} style={{height: "150px",backgroundColor:"#40916c"}}></Col>
                </Row>
                <Row className="mt-5">
                    <Col md={12} style={{height: "200px",backgroundColor:"#48bfe3"}}></Col>
                </Row>
            </Container>
        </>
    );
}

export default AdminPage;