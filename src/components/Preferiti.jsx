import { Container, Col, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Preferiti = () => {
  const companyList = useSelector((state) => {
    return state.savedCompanies.content;
  });

  return (
    <Container>
      <Row>
        <Col sm={8}>
          <ul style={{ listStyle: "none" }}>
            {companyList.map((company, i) => {
              return (
                <li key={i} className="my-4">
                  <Button variant="danger">Elimina</Button>
                  <a href={company.url} target="_blank" rel="noreferrer">
                    {company.company_name}
                  </a>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Preferiti;
