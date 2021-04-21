/* imporst */
import ScrollMenu from "react-horizontal-scrolling-menu";
import { useRouter } from "next/router";
// import c from "./index.module.scss";
/* UI */
import { Button } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const Header = () => {
  const router = useRouter();
  return (
    <>
      <div style={{ height: 128 }}></div>
      <ListGroup style={{ position: "fixed", top: 0, left: 0, width: "100%" }}>
        <ListGroupItem>
          <ScrollMenu
            // menuStyle={{ width: "100%" }}
            // menuStyle={{ width: "100%" }}
            wrapperStyle={{ width: "100%" }}
            alignCenter={false}
            itemStyle={{ margin: "0 10px" }}
            data={[
              <Button
                onClick={() => {
                  router.push("/assignment1");
                }}
                color={
                  router.pathname === "/assignment1" ? "primary" : "secondary"
                }
              >
                assignment_1
              </Button>,
              <Button
                onClick={() => {
                  router.push("/assignment2");
                }}
                color={
                  router.pathname === "/assignment2" ? "primary" : "secondary"
                }
              >
                assignment_2
              </Button>,
              <Button
              onClick={() => {
                router.push("/assignment3");
              }}
              color={
                router.pathname === "/assignment3" ? "primary" : "secondary"
              }
              >assignment_3</Button>,
              <Button
              onClick={() => {
                router.push("/assignment4");
              }}
              color={
                router.pathname === "/assignment4" ? "primary" : "secondary"
              }
              >assignment_4</Button>,
              <Button>assignment_5</Button>,
              <Button>assignment_6</Button>,
              <Button>assignment_7</Button>,
              <Button>assignment_8</Button>,
              <Button>assignment_9</Button>,
              <Button>assignment_10</Button>,
            ]}
          />
        </ListGroupItem>

        <Breadcrumb tag="nav" listTag="div">
          <BreadcrumbItem
            onClick={() => {
              router.push("/");
            }}
            style={{ cursor: "pointer" }}
            tag="a"
          >
            Home
          </BreadcrumbItem>

          {router.pathname !== "/" && (
            <BreadcrumbItem active tag="span">
              {router.pathname.replace("/", "")}
            </BreadcrumbItem>
          )}
        </Breadcrumb>
      </ListGroup>
    </>
  );
};

export default Header;
