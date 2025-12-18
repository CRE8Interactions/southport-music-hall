import React, { useState, useEffect } from 'react';
import moment from "moment";

import { formatDateTime, getTimezoneDate, formatCurrency } from '@/utilities/helpers';

import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

export default function EventCard({ event }) {
    const [end, setEnd] = useState();

    const offerPrices = event?.offers?.flatMap(offer => offer?.am_pricing_objects?.map(pricing => pricing?.totalDue));
    // get any connected offers 
    const discountPrices = event?.offers
        .filter((offer) => offer?.connected_offers?.length > 0) // Ensure offer has some connected_offers
        .flatMap((offer) =>
            offer?.connected_offers.flatMap((offer) =>
                offer?.am_pricing_objects?.map((pricing) => pricing?.totalDue)
            )
        );

    const validPrices = [...offerPrices, ...(discountPrices?.length > 0 ? discountPrices : [])]

    const lowTicketCost = Math.min(...validPrices);

    let convertedStart = getTimezoneDate(event?.start, event?.venue?.timezone)
    console.log(convertedStart);
    let convertedDoorsOpen = getTimezoneDate(event?.doorsOpen, event?.venue?.timezone)

    useEffect(() => {
        // end date is calculated based on start date and current time (includes daylight-savings) - can change based on daylight-savings, so needs to be recalculated since backend may be wrong 
        // set end date to 4 hours after event start date
        setEnd(new Date(moment(convertedStart).add(4, "h")));
    }, [convertedStart]);

    return (
        <a href={`https://blocktickets.xyz/e/${event.seoUrl}/${event.shortCode}`} target="_blank" className='text-decoration-none text-reset'>
            <Card className='event-card'>
                <Card.Img
                    variant='top'
                    src={event.image.url}
                    width={event.image.width}
                    height={event.image.height}
                    alt={`Cover art for ${event?.name} event`}
                />
                <Card.Body>
                    <Stack direction="horizontal" gap={2} className="justify-content-start flex-grow-1">
                        <div className='d-flex-column text-center h-100'>
                            <span className='text-uppercase text-primary caption d-block'>{convertedStart.format('MMM')}</span>
                            <span className="headline-4 fw-semi-bold">{convertedStart.date()}</span>
                        </div>
                        <Stack className='justify-content-between'>
                            <div className='d-flex-column'>
                                <Card.Title as="h5">{event.name}</Card.Title>
                                <Card.Subtitle as="h6">{formatDateTime(moment(convertedStart))} - {formatDateTime(moment(end), 'timeOnly')}</Card.Subtitle>
                            </div>
                            <div className="d-flex-column gap-1">
                                <p className='small room text-primary'>{event?.venue?.name?.substring(event?.venue?.name?.indexOf(": ") + 1)}</p>
                                <Stack direction='horizontal'>
                                    <span className='normal-md m-0 fw-bold'>{formatCurrency(lowTicketCost)}+</span>
                                    <Stack className='mt-auto align-items-end'>
                                        <span className='caption m-0 text-nowrap'>Door time: {formatDateTime(convertedDoorsOpen, 'timeOnly')}</span>
                                        <span className='caption text-muted m-0'>Age {event?.ageMinimum || '18'}+</span>
                                    </Stack>
                                </Stack>
                            </div>
                        </Stack>
                    </Stack>
                </Card.Body>
            </Card>
        </a>
    );
}
