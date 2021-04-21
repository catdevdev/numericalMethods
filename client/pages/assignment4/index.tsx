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
import { useState } from "react";

interface DataFromServer {
  bisection_method: {
    midpoint: number;
    iterations: number;
  };
}

const Assigment1 = () => {
  const [a, setA] = useState("-1");
  const [b, setB] = useState("2");
  const [e, setE] = useState("0.00008");
  const [expression, setExpression] = useState("0.0385*2.71828**(-0.7586*x)-x");
  const [data, setData] = useState<DataFromServer>(null);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Container>
        <ListGroup>
          <ListGroupItem>
            <p>Input:</p>
            <Row>
              <Col>
                <ListGroupItem>
                  <p>[a</p>
                  <Input
                    onChange={(e) => {
                      setA(e.target.value);
                    }}
                    value={a}
                  />
                </ListGroupItem>
              </Col>
              <Col>
                <ListGroupItem>
                  <p>b]</p>
                  <Input
                    onChange={(e) => {
                      setB(e.target.value);
                    }}
                    value={b}
                  />
                </ListGroupItem>
              </Col>
            </Row>
            <Row style={{ marginTop: 30 }}>
              <Col>
                <ListGroupItem>
                  <p>e</p>
                  <Input
                    onChange={(e) => {
                      setE(e.target.value);
                    }}
                    value={e}
                  />
                </ListGroupItem>
              </Col>
              <Col>
                <ListGroupItem>
                  <p>expression</p>
                  <Input
                    onChange={(e) => {
                      setExpression(e.target.value);
                    }}
                    value={expression}
                  />
                </ListGroupItem>
              </Col>
            </Row>
            <ListGroupItem style={{ marginTop: 18 }}>
              <Button
                onClick={async () => {
                  setLoading(true);
                  setData(null);
                  const res = await axios.post<DataFromServer>(
                    "/assignment_4",
                    {
                      a,
                      b,
                      e,
                      expression,
                    }
                  );
                  setData(res.data);
                  setLoading(false);
                }}
                style={{ width: "100%" }}
                color="primary"
              >
                Calculate
              </Button>
            </ListGroupItem>
          </ListGroupItem>

          {data && (
            <ListGroupItem>
              <p>Results:</p>
              <p>
                midpoint:{" "}
                <Badge color="dark">{data.bisection_method.midpoint}</Badge>
              </p>
              <p>
                iterations :{" "}
                <Badge color="dark">{data.bisection_method.iterations}</Badge>
              </p>
            </ListGroupItem>
          )}

          {loading && (
            <ListGroupItem>
              <Spinner />
            </ListGroupItem>
          )}
        </ListGroup>
      </Container>
    </div>
  );
};

export default Assigment1;
