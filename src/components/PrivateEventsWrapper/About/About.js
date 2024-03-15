import React from 'react';

import Card from 'react-bootstrap/Card'

export default function About() {

    return (
        <section>
            <Card body>
                <Card.Title as="h5">About Southport Hall</Card.Title>
                <Card.Text><span className='fw-bold'>The Glassed Atrium and Front Bar Area</span> provide an inviting space for parties of 30 to 100 guests. Decorated with New Orleans artwork and vintage signs, this area combines charm with a modern touch. A snake-shaped bar and wooden buffet add elegance, while the glass atrium offers a picturesque view. The space features round tables, leather chairs, highboys, and stools.</Card.Text>
                <Card.Text><span className="fw-bold">The Concert Hall</span> ccomfortably accommodates over 250 guests and features a large dance floor. With wooden beams and a historic keno board, it exudes a nostalgic atmosphere. The hall includes a wooden bar, hardwood floors, and a stage equipped with lighting and sound. Parties on Nights of Concerts: Guests attending concerts may enjoy the show free of charge in most cases.</Card.Text>
                <Card.Text><span className="fw-bold">Company and Private Crawfish Catering Events:</span> Crawfish boils are a specialty at Southport, available from mid-March to mid-June. Our venue is perfect for hosting crawfish catering parties, with ample parking, spacious areas, and a glassed-in atrium overlooking a deck.</Card.Text>
                <Card.Text>We provide setup and breakdown services, tables and chairs, attentive staff, and police security. Outside caterers are welcome, and we offer a convenient setup area. Our flexible bar packages include soft drinks, beers, liquor selections, and frozen daiquiris.</Card.Text>
                <Card.Text>To inquire or request a quote for private events, contact Jay Bagnetto at 504-908-2577 or <a href="mailto:jaybagnetto@yahoo.com">jaybagnetto@yahoo.com</a>. Create unforgettable memories at Southport!</Card.Text>
            </Card>
        </section>
    );
}
