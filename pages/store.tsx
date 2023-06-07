import React from 'react'
import storesItems from "../data/items.json";
import { Row, Col } from 'react-bootstrap';

export default function store() {
  return (
    <div>
        <h1>Stores</h1>
        <Row md={2} xs={1} lg={3}>
            {storesItems.map((item) => {
                return (<Col key={item.id}>{JSON.stringify(item)}</Col>)
            })}
        </Row>
    </div>
  )
}
