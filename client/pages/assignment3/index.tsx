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
        is not ready
      </Container>
    </div>
  );
};

export default Assigment1;
