import React from 'react';
import Link from 'next/link';
import moment from "moment";

import { formatDateTime, formatCurrency } from '@/utilities/helpers';

import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function EventCard({ event }) {
    let highTicketCost = Math.max(...event.tickets.map(o => o.cost))
    let lowTicketCost = Math.min(...event.tickets.map(o => o.cost))
    
    let convertedStart = moment(event?.start).utcOffset(-5, false)
    let convertedEnd = moment(event?.end).utcOffset(-5, false)
    let convertedDoorsOpen = moment(event?.doorsOpen).utcOffset(-5, false)

    return (
        <Link href={`https://blocktickets.xyz/e/${event.seoUrl}/${event.shortCode}`} target="_blank" className='text-decoration-none text-reset'>
            <Card className='event-card'>
                <Card.Img
                    variant='top'
                    src={event.image.url}
                    width={event.image.width}
                    height={event.image.height}
                    alt={event.name}
                />
                <Card.Body>
                    <Row className="flex-grow-1">
                        <Col xs={2}>
                            <Stack className='align-items-center text-center'>
                                <Card.Text>
                                    <span className='text-uppercase text-primary caption d-block'>{convertedStart.format('MMM')}</span>
                                    <span className="h4">{convertedStart.date()}</span>
                                </Card.Text>
                            </Stack>
                        </Col>
                        <Col xs={10} className='d-flex-column justify-content-between pe-0'>
                            <div className='d-flex-column'>
                                <Card.Title as="h5">{event.name}</Card.Title>
                                <Card.Subtitle as="h6">{formatDateTime(moment(convertedStart))} - {formatDateTime(moment(convertedEnd), 'timeOnly')}</Card.Subtitle>
                            </div>
                            <Row>
                                <Col className='pe-0'>
                                    <Stack gap={1}>
                                        <span className='small text-primary'>Concert Hall</span>
                                        <span className='fw-bold'>{formatCurrency(lowTicketCost)}+</span>
                                    </Stack>
                                </Col>
                                <Col className="d-flex">
                                    <Stack className='mt-auto align-items-end'>
                                        <span className='caption fw-semi-bold m-0 text-nowrap'>Door time: {formatDateTime(convertedDoorsOpen, 'timeOnly')}</span>
                                        <span className='caption text-muted m-0'>Age 18+</span>
                                    </Stack>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Link>
    );
}
