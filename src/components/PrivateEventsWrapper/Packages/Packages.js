import React from 'react';

import Card from 'react-bootstrap/Card'
import Stack from 'react-bootstrap/Stack'

import { File } from './File';

export default function Packages() {

    return (
        <section>
            <Card body>
                <Card.Title as="h5" className='text-center'>Download our private event packages to learn more.</Card.Title>
                <Stack as="ul" direction="horizontal" gap={3} className='flex-wrap justify-content-center gap-lg-4'>
                    <File title="Private events" link="https://southport.nyc3.cdn.digitaloceanspaces.com/privateparty.pdf" />
                    <File title="Weddings" link="https://southport.nyc3.cdn.digitaloceanspaces.com/weddingpackage.pdf" />
                    <File title="Bridal & Baby Showers" link="https://southport.nyc3.cdn.digitaloceanspaces.com/reunions.pdf" />
                    <File title="Rental Information" link="https://southport.nyc3.cdn.digitaloceanspaces.com/reunions.pdf" />
                    <File title="Sweet 16 / Prom" link="https://southport.nyc3.cdn.digitaloceanspaces.com/sweetsixteen.pdf" />
                </Stack>
            </Card>
        </section>
    );
}
