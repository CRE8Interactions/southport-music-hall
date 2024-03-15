import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import map from '/public/images/map.png';

import styles from './Contact.module.scss';

export default function Contact() {

    return (
        <section>
            <Card body className={styles.card}>
                <Row className='grid-container gx-md-4'>
                    <Col xs={12} md={6} lg={4}>
                        <Card.Title as="h5" className='card-title-lg'>Southport Hall</Card.Title>
                        <div className='card-text'>
                            <address className='lh-normal'>
                                <p>200 Monticello Ave.</p>
                                <p>Jefferson, LA 70121</p>
                            </address>
                            <address>
                                <p className='fw-bold'>Email:</p>
                                <a href="mailto:info@southporthall.com" className='text-decoration-none'>info@southporthall.com</a>
                            </address>
                            <address>
                                <p className='fw-bold'>Phone:</p>
                                <p>504-835-2903</p>
                            </address>
                        </div>
                        <Link href="https://www.google.com/maps/place/Southport+Hall/@29.9544435,-90.1366772,15z/data=!4m6!3m5!1s0x8620a546dea457b9:0x56f9086bc4ce869b!8m2!3d29.9544435!4d-90.1366772!16s%2Fg%2F1w15zt6k?entry=ttu" target="_blank" className='btn btn-outline-light mt-2 w-100'>Go to Google Maps</Link>
                    </Col>
                    <Col xs={12} md={6} lg={8} className={`${styles.map}`}>
                        <Image
                            src={map}
                            quality={100}
                            alt="Map of Southport Hall"
                            className={`${styles.image} image`}
                            width="742"
                            height="301"
                            priority
                        />
                    </Col>
                </Row>
            </Card>
        </section>
    );
}
