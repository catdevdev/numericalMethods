/* UI */
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from 'recharts'
import { Container, Table } from "reactstrap";
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
  x: number;
  y: number;
}

const Assigment6 = () => {
  const [a, setA] = useState("0");
  const [b, setB] = useState("3");
  const [x0, setX0] = useState("0");
  const [y0, setY0] = useState("0");
  const [h, setH] = useState("0.05");

  const [data, setData] = useState<DataFromServer[]>(null);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Container>
        <ListGroup>
        {!data &&
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
                  <p>y0</p>
                  <Input
                    onChange={(e) => {
                      setY0(e.target.value);
                    }}
                    value={y0}
                  />
                </ListGroupItem>
              </Col>
                 <Col>
                <ListGroupItem>
                  <p>h</p>
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
                    "/api/EulerMethod",
                    {
                      a,
                      b,
                      x0,
                      y0,
                      h,
                    }
                  );
                  setData(res.data);
                  console.log(res.data);
                  setLoading(false);
                }}
                style={{ width: "100%" }}
                color="primary"
              >
                Calculate
              </Button>
            </ListGroupItem>
          </ListGroupItem>
}

          {data && (
            <>
           <LineChart
            width={800}
            height={400}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
              <XAxis dataKey="name" />  
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="y" stroke="#ff7300" yAxisId={0} />
          </LineChart>
          <Table striped>
           <thead>
           <tbody>
            <tr>
              <th>@</th>
              <th>x</th>
              <th>y</th>
            </tr>
            </tbody>
              <tbody>
              {
                data.map(({x,y}, index)=>
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{x.toFixed(3)}</td>
                    <td>{y.toFixed(3)}</td>
                  </tr>
                )
              }
              </tbody>
          </thead>
          </Table>
          </>
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

export default Assigment6;
