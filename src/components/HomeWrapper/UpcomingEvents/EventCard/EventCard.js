import React from 'react';
import Link from 'next/link';
import moment from "moment";

import { formatDateTime, formatCurrency } from '@/utilities/helpers';

import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function EventCard({ event }) {
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
                    alt={`Cover art for ${event?.name} event`}
                />
                <Card.Body>
                    <Row className="flex-grow-1">
                        <Col xs={2}>
                            <Stack className='align-items-center text-center'>
                                <span className='text-uppercase text-primary caption d-block'>{convertedStart.format('MMM')}</span>
                                <span className="headline-4 fw-bold">{convertedStart.date()}</span>
                            </Stack>
                        </Col>
                        <Col xs={10} className='d-flex-column justify-content-between'>
                            <div className='d-flex-column'>
                                <Card.Title as="h5">{event.name}</Card.Title>
                                <Card.Subtitle as="h6">{formatDateTime(moment(convertedStart))} - {formatDateTime(moment(convertedEnd), 'timeOnly')}</Card.Subtitle>
                            </div>
                            <Row className="gap-1">
                                <Col>
                                    <p className='small room text-primary'>{event?.venue?.name}</p>
                                </Col>
                                <Row className='m-0 align-items-center'>
                                    <Col className='ps-0'>
                                        <span className='normal-md m-0 fw-bold'>{formatCurrency(lowTicketCost)}+</span>
                                    </Col>
                                    <Col className="d-flex">
                                        <Stack className='mt-auto align-items-end'>
                                            <span className='caption caption-bold m-0 text-nowrap'>Door time: {formatDateTime(convertedDoorsOpen, 'timeOnly')}</span>
                                            <span className='caption text-muted m-0'>Age {event?.ageMinimum || '18'}+</span>
                                        </Stack>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Link>
    );
}
