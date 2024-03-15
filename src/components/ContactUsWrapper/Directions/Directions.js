import React from 'react';

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styles from './Directions.module.scss';

export default function Directions() {

    return (
        <section>
            <Card body>
                <Row className='grid-container'>
                    <Col xs={12} md={6} className='col'>
                        <Card.Title as="h5" className='card-title-sm card-title--primary'>Directions from I-10E</Card.Title>
                        <ul className={styles.list}>
                            <li>Travel east on I-10.</li>
                            <li>Take Exit 228, the Causeway Blvd S exit.</li>
                            <li>Keep right and follow the signs for Causeway Blvd S (0.1 miles).</li>
                            <li>Merge onto N Causeway Blvd (0.3 miles).</li>
                            <li>Continue straight onto Causeway Blvd (2.2 miles).</li>
                            <li>Use the middle lane when crossing the bridge.</li>
                            <li>Continue to the River Road intersection (0.3 miles).</li>
                            <li>Turn left on Pope St. (1.2 miles).</li>
                            <li>Turn left onto Dakin St. (50 feet).</li>
                        </ul>
                    </Col>
                    <Col xs={12} md={6} className='col'>
                        <Card.Title as="h5" className='card-title-sm card-title--primary'>Directions from I-10W</Card.Title>
                        <ul className={styles.list}>
                            <li>Travel west on I-10.</li>
                            <li>Stay on I-10 West until reaching Exit 232, which is Carrollton Ave/Highway 61 North/Tulane Ave.</li>
                            <li>Take the exit for Carrollton Avenue South, using the far right lane.</li>
                            <li>Continue onto Dublin St, covering a distance of approximately 0.3 miles.</li>
                            <li>Make a left turn onto Dixon St, which is just 0.1 miles ahead.</li>
                            <li>Take a right turn onto S Carrollton Ave, traveling approximately 400 feet.</li>
                            <li>Turn right into the parking lot for Southport Hall.</li>
                            <li>Proceed to turn right onto Highway 90 West/S Claiborne Ave, continuing for about 0.9 miles.</li>
                            <li>After 0.8 miles, make a left turn onto Dakin St.</li>
                            <li>The venue will be on your left-hand side, approximately 0.8 miles from the intersection.</li>
                        </ul>
                    </Col>
                </Row>
            </Card>
        </section>
    );
}
