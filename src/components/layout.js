import React from "react"

import { Link, graphql, useStaticQuery } from 'gatsby'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Nav from "react-bootstrap/Nav"

const h1Style = {
    paddingBottom: '50px',
}

export default function Layout({ children, location }) {
    const data = useStaticQuery(graphql`
        query menu {
          allGroupsJson(
            filter: {show: {eq: true}}
          ) {
            distinct(field: region)
          }
        }
      `);

    const tabs = data.allGroupsJson.distinct.map(t => {
        return (
            <Nav.Item key={t}>
                <Nav.Link as="li" eventKey={`/${t}`}><Link to={`/${t}`}>{t}</Link></Nav.Link>
            </Nav.Item>
        )
    });

    return (
        <Container fluid>
            <Row>
                <h1 style={h1Style}>Verified Groups Helping Ukraine</h1>
            </Row>
            <Row>
                <Nav variant="tabs" defaultActiveKey={location.pathname}>
                    <Nav.Item>
                        <Nav.Link as="li" eventKey="/"><Link to="/">All</Link></Nav.Link>
                    </Nav.Item>
                    {tabs}
                </Nav>
            </Row>
            {children}
        </Container>
    )
}