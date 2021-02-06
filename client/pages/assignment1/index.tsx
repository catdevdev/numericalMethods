/* UI */
import { Container } from "reactstrap";
import { ListGroup, ListGroupItem, Input, Button, Row, Col } from "reactstrap";

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
            <ListGroupItem style={{marginTop: 18}} >
              <Button style={{ width: "100%" }} color="primary">
                Calculate
              </Button>
            </ListGroupItem>
          </ListGroupItem>
          <ListGroupItem>
            <p>Results:</p>
            <Input></Input>
          </ListGroupItem>
        </ListGroup>
      </Container>
    </div>
  );
};

export default Assigment1;
