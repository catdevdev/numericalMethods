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
  trapezia_method: string;
  simpson_method: string;
  error: string;
}

const Assigment1 = () => {
  const [a, setA] = useState("0.6");
  const [b, setB] = useState("1.4");
  const [n, setN] = useState("1500");
  const [expression, setExpression] = useState("cos(x)/x+1");
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
                  <p>a</p>
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
                  <p>b</p>
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
                  <p>n</p>
                  <Input
                    onChange={(e) => {
                      setN(e.target.value);
                    }}
                    value={n}
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
                    "/assignment_2",
                    {
                      a,
                      b,
                      n,
                      expression
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
                simpson_method:{" "}
                <Badge color="dark">{data.simpson_method}</Badge>
              </p>
              <p>
                trapezia_method :{" "}
                <Badge color="dark">{data.trapezia_method}</Badge>
              </p>
              <p>
                error : <Badge color="dark">{data.error}</Badge>
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
