/* UI */
import { Container } from "reactstrap";
import {
  ListGroup,
  ListGroupItem,
  Input,
  Button,
  Row,
  Col,
  Badge,
  Spinner,
} from "reactstrap";
/* imports */
import axios from "../../axios";

const Assigment1 = () => {
  return (
    <div>
      <Container>
        <ListGroup>
          <ListGroupItem>
            <p>Input:</p>
            <Row>
              <Col>
                <ListGroupItem>
                  <p>x0</p>
                  <Input></Input>
                </ListGroupItem>
              </Col>
              <Col>
                <ListGroupItem>
                  <p>h1</p>
                  <Input></Input>
                </ListGroupItem>
              </Col>
            </Row>
            <ListGroupItem style={{ marginTop: 18 }}>
              <Button style={{ width: "100%" }} color="primary">
                Calculate
              </Button>
            </ListGroupItem>
          </ListGroupItem>
          <ListGroupItem>
            <p>Results:</p>
            <p>
              3-point Procedure: <Badge color="primary">10.3123</Badge>
            </p>
            <p>
              4-point Procedure (A) : <Badge color="primary">10.3123</Badge>
            </p>
            <p>
              4-point Procedure (B) : <Badge color="primary">10.3123</Badge>
            </p>
            <p>
              5-point Procedure (A) : <Badge color="primary">10.3123</Badge>
            </p>
            <p>
              5-point Procedure (B) : <Badge color="primary">10.3123</Badge>
            </p>
            <p>
              5-point Procedure (C) : <Badge color="primary">10.3123</Badge>
            </p>
            <p>
              2nd Deriv. Procedures : <Badge color="primary">10.3123</Badge>
            </p>
          </ListGroupItem>
        </ListGroup>
      </Container>
    </div>
  );
};

export default Assigment1;
