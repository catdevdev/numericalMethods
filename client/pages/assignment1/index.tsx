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
  "3_point-procedure": string;
  "4_point_procedure_a": string;
  "4_point_procedure_b": string;
  "5_point_procedure_a": string;
  "5_point_procedure_b": string;
  "5_point_procedure_c": string;
  "2nd_deriv_procedure": string;
}

const Assigment1 = () => {
  const [x0, setX0] = useState("0.4216");
  const [h, setH] = useState("0.0217");
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
                  <p>x0</p>
                  <Input
                    onChange={(e) => {
                      setX0(e.target.value);
                    }}
                    value={x0}
                  />
                </ListGroupItem>
              </Col>
              <Col>
                <ListGroupItem>
                  <p>h1</p>
                  <Input
                    onChange={(e) => {
                      setH(e.target.value);
                    }}
                    value={h}
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
                    "/first_assignment",
                    {
                      x0,
                      h,
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
                3-point Procedure:{" "}
                <Badge color="dark">{data["3_point_procedure"]}</Badge>
              </p>
              <p>
                4-point Procedure (A) :{" "}
                <Badge color="dark">{data["4_point_procedure_a"]}</Badge>
              </p>
              <p>
                4-point Procedure (B) :{" "}
                <Badge color="dark">{data["4_point_procedure_b"]}</Badge>
              </p>
              <p>
                5-point Procedure (A) :{" "}
                <Badge color="dark">{data["5_point_procedure_a"]}</Badge>
              </p>
              <p>
                5-point Procedure (B) :{" "}
                <Badge color="dark">{data["5_point_procedure_b"]}</Badge>
              </p>
              <p>
                5-point Procedure (C) :{" "}
                <Badge color="dark">{data["5_point_procedure_c"]}</Badge>
              </p>
              <p>
                2nd Deriv. Procedures :{" "}
                <Badge color="dark">{data["2nd_deriv_procedure"]}</Badge>
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
