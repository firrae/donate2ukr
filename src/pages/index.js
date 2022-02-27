import React from "react"

import { graphql } from "gatsby"

import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Group from "../components/group"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const undecorate = {
  listStyleType: 'none',
}

// markup
const IndexPage = ({ data }) => {
  const links = data.allGroupsJson.nodes.map(l => {
    return <li key={l.id}><Group {...l} /></li>
  });

  return (
    <main style={pageStyles}>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <ul style={undecorate}>
            {links}
          </ul>
        </Col>
      </Row>
    </main>
  )
}

export const query = graphql`
query allJson {
  allGroupsJson(
    filter: {show: {eq: true}}, 
    sort: {fields: name, order: ASC}) {
    nodes {
      additionalInfo
      id
      name
      region
      url
      currencies
    }
  }
}
`

export default IndexPage