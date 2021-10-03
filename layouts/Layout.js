import Footer from "./Footer";
import Header from "./Header";
import { Row, Col, Divider } from "antd";
// import Sidebar from './Sidebar';
export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <Row justify="center">
        <Col span={12}>{children}</Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={12} offset={6}>
          <Footer />
        </Col>
      </Row>
    </>
  );
}
