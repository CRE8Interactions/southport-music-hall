import React from 'react';
import Image from 'next/image'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import glassedAtriumBar from '/public/images/glassed-atrium_bar.png';
import concertHall from '/public/images/concert-hall.png';

import styles from './Locations.module.scss';

export default function Locations() {

    return (
        <section className="spacer-top">
            <p className="normal-md normal-md-lg text-center mb-5">Southport offers two exceptional locations for private events: The Concert Hall and The Glassed Atrium/Front Bar Area. Our versatile venue caters to a wide range of occasions, including weddings, reunions, parties, and more.</p>
            <Card body>
                <Row className='grid-container-sm'>
                    <Col xs={12} md={6} className='col'>
                        <Image
                            src={glassedAtriumBar}
                            quality={100}
                            alt="Picture of Glassed Atrium and Front Bar"
                            className={`${styles.image} image`}
                            width="516"
                            height="315"
                        />
                    </Col>
                    <Col xs={12} md={6} className='col'>
                        <Image
                            src={concertHall}
                            quality={100}
                            alt="Picture of the concert Hall"
                            className={`${styles.image} image`}
                            width="516"
                            height="315"
                        />
                    </Col>
                </Row>
            </Card>
        </section>
    );
}
