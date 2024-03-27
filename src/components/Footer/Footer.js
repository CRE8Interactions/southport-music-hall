"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import logo from "/public/images/logo-sm.png"
import poweredBy from "/public/images/icons/logo-blocktickets.svg"
import facebook from '/public/images/icons/facebook.svg';
import instagram from '/public/images/icons/instagram.svg';
import twitter from '/public/images/icons/twitter.svg';

import styles from './Footer.module.scss';

export default function Footer() {

    return (
        <footer className={`container ${styles.footer}`}>
            <Card body className='card-lg'>
                <Stack className="d-flex-column flex-lg-row gap-lg-5 align-items-center align-items-lg-stretch">
                    <Link href="/">
                        <Image src={logo} width="71" height="100" alt="Southport Hall logo" className={styles.logo} />
                    </Link>
                    <Stack className={styles.info}>
                        <h6 className='mt-3 mt-lg-0 mt-md-4 mb-1 headline-6'>Southport Hall</h6>
                        <Stack gap={2} className={`gap-md-1 ${styles.address}`}>
                            <address className='m-0 text-muted fw-medium'>
                                <p>200 Monticello Ave, Jefferson, LA 70121</p>
                            </address>
                            <Stack direction="horizontal" as="ul" className={styles.socialIcons}>
                                <li>
                                    <a href="https://www.facebook.com/southporthall" target="_blank">
                                        <Image src={facebook} alt="facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/Southporthall" target="_blank">
                                        <Image src={twitter} alt="twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/southporthall" target="_blank">
                                        <Image src={instagram} alt="instagram" />
                                    </a>
                                </li>
                            </Stack>
                        </Stack>
                    </Stack>
                    <div className={`${styles.poweredBy} d-flex flex-column flex-md-row align-items-center justify-content-center caption`}>
                        <p className="text-muted text-center text-lg-end"><span>Powered by</span> <Image src={poweredBy} width="132" height="29" alt="Blocktickets logo" /></p>
                    </div>
                </Stack>
            </Card>
        </footer>
    );
}
