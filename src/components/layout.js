import React from "react"

import { Link, graphql, useStaticQuery } from 'gatsby'
import { Helmet } from "react-helmet";

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
            <Helmet>
                <meta charSet="utf-8" />
                <title>Donate 2 Ukraine{`${location.pathname.replace('/', '') !== '' ? ' from ' + location.pathname.replace('/', '') : ' from Anywhere'}`}</title>
                <link rel="canonical" href={`https://donate2ukr.com${location.pathname}`} />
                <meta name="description" content="An open source list of organization and methods to donate to in support of Ukraine and her people." />
                <meta name="keywords" content={`Ukraine, Donate, Humanitarian, IStandWithUkraine, ${location.pathname.replace('/', '') !== '' ? location.pathname.replace('/', '') : 'Everywhere'}, How to help from ${location.pathname.replace('/', '') !== '' ? location.pathname.replace('/', '') : 'Everywhere'}`} />
            </Helmet>
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