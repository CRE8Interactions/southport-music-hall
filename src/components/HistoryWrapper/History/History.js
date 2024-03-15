import React from 'react';
import Image from 'next/image'

import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import history1 from '/public/images/southport-hall-history_1.png';
import history2 from '/public/images/southport-hall-history_2.png';

export default function History() {

    return (
        <Card body>
            <Card.Title as="h5">Our history</Card.Title>
            <Card.Text>Southport Hall originally opened for business in the early 1900’s, operating primarily as an illegal casino founded by Joe Hyland. A handful of clubs like Southport operated in “The Free State” of Jefferson during this time. Over a century later, Southport Hall is the only speak easy still standing. Called Hyland’s Southport Inn, the venue operated much like a private club, where an elite clientele enjoyed roulette, craps, poker, blackjack and keno. The club changed hands over a 20-year period, purchased first by Rudy and George O’Dwyer and renamed the Southport Club, and then by Charlie Kerner, who called it the Old Southport Club. Later, reputed New Orleans Mafia boss Carlos Marcello operated the venue as the New Southport Club.</Card.Text>
            <Card.Text>By the 1960s, the hall was no longer operating as an illegal casino but was instead known as Farhad Grotto, a gathering spot for the Mystic Order of the Veiled Prophets of the Enchanted Realm. The social organization later moved to Harahan and is well- known for its “Bug Patrol,” a swarm of black and red dune buggies appearing in many Carnival parades.</Card.Text>
            <Card.Text>Changing its name back to Southport Hall in 2004, Catherine Bagnetto Foss and Charles Bagnetto Jr, (sister and brother) purchased the hall. The business is now operated by two of Charlie’s sons, Jay Bagnetto, General Manager / Private Parties and Mark Bagnetto, Talent Manager / Advertising. In the past 8 years Southport has become a prominent destination for live music and private events.</Card.Text>
            <Card.Text>Today, the club still has the original counting room, replete with a solid bronze door and a cement wall. You can also check out an antique keno board that still resides on a back wall, tucked innocently behind a picture where, in the old days, it was quickly hidden if authorities raided the place.</Card.Text>
            <Card.Text>You may also come across The Southport Hall ghost, who likes to hang out in an apartment and the bathrooms in the back room, according to Foss and O’Reilly. The ghost has made himself known not only to employees but also to visitors. “Customers tell us they’ve had various encounters with the ghost,” says O’Reilly. Foss says the hall’s cook and another employee describe it as wearing a long coat and a Confederate-type hat, and the family has named the ghost ‘George.’</Card.Text>
            <Row className='grid-container-sm'>
                <Col xs={12} md={6} className='col d-flex justify-content-center'>
                    <Image
                        src={history1}
                        quality={100}
                        className="image"
                        alt="Picture of Southport Hall Counting Room"
                        width="300"
                        height="231" />
                </Col>
                <Col xs={12} md={6} className='col d-flex justify-content-center'>
                    <Image
                        src={history2}
                        quality={100}
                        className="image"
                        alt="Picture of Southport Hall Counting Room"
                        width="300"
                        height="231" />
                </Col>
            </Row>
            <Card.Text>Carlos Marcello and the John F. Kennedy Assassination.</Card.Text>
            <Card.Text>Carlos Marcello reportedly operated an illegal casino and nightspot at the Southport Club from the 1930s to ’50s. By 1947, Marcello controlled Louisiana’s illegal gambling network. He joined forces with New York Mob associate Meyer Lansky to skim money from some of the most important casinos in the New Orleans area. In 1959, Marcello appeared before a U.S. Senate committee investigating organized crime. Robert F. Kennedy served as Chief Counsel to the committee, and his brother, Senator John F. Kennedy, was a committee member. In response to committee questioning, Marcello invoked the Fifth Amendment to the U.S. Constitution, refusing to answer any questions regarding his background, activities and associates. In its investigation of John F. Kennedy’s assassination, the House Select Committee on Assassinations said that Jack Ruby’s murder of Lee Harvey Oswald was a primary reason to suspect organized crime of possible involvement in the assassination. Their report stated: “The committee found that Marcello had the motive, means and opportunity to have President John F. Kennedy assassinated, though it was unable to establish direct evidence of Marcello’s complicity.”</Card.Text>
            <Card.Text>In 1992, a New York Post story claimed Marcello, Trafficante, Jr., and Jimmy Hoffa had all been involved in President Kennedy’s assassination. In his 1994 autobiography, Mob Lawyer, Ragano wrote that in July 1963, he was sent to New Orleans by Hoffa to meet Marcello and Santo Trafficante concerning President Kennedy’s assassination plans. When Kennedy was killed, Hoffa apparently told Ragano, “I told you that they could do it. I’ll never forget what Carlos and Santo did for me.” He added: “This means Bobby is out as Attorney General.” Marcello later told Ragano, “When you see Jimmy (Hoffa), you tell him he owes me and he owes me big.”</Card.Text>
        </Card >
    );
}
