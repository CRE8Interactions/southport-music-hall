import React from 'react';
import Link from 'next/link'

import Card from 'react-bootstrap/Card'

export default function BoxOffice() {

    return (
        <section>
            <Card body>
                <Card.Title className='card-title-sm card-title--primary'>Box Office</Card.Title>
                <Card.Text>Tickets for all Southport Hall events can be purchased at <Link href="https://blocktickets.xyz/venue/southport-hall:-main-room" target="_blank" className='text-primary'>blocktickets.xyz/venue/southport-hall</Link></Card.Text>
                <Card.Text>Need additional help with tickets? Contact <a href="mailto:help@blocktickets.xyz" className='text-primary'>help@blocktickets.xyz</a></Card.Text>
            </Card>
        </section>
    );
}
