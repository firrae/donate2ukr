import * as React from "react"

import Card from "react-bootstrap/Card"
// import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const style = {
    width: '40rem',
    marginBottom: '10px'
}

const Group = ({ name, additionalInfo, currencies, region, url, id }) => {
    return (
        <Card style={style} key={id}>
            <Card.Body>
                <Card.Title><a href={url} target="_blank" rel="noreferrer">{name}</a></Card.Title>
                <Card.Text>
                    {additionalInfo}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col>
                        <small>Currencies Accepted: {currencies.join(", ")}</small>
                    </Col>
                    <Col>
                        <small>Home Regions: {region.join(", ")}</small>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}

export default Group