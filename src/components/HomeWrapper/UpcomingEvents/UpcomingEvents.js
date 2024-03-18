'use client'

import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { EventCard } from './EventCard';

export default function UpcomingEvents({ events }) {
    return (
        <Row className='spacer-top grid-container-lg g-md-4'>
            {events?.map(event => (
                <Col md={6} lg={4} key={event.id}>
                    <EventCard event={event} />
                </Col>
            ))}
        </Row>
    );
}
