"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import logo from "/public/images/logo.png"
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
                        <Image src={logo} width="67" height="92" alt="Southport Hall logo" />
                    </Link>
                    <Stack className={styles.info}>
                        <h6 className='mt-3 mt-lg-0 mt-md-5 mb-1 headline-6'>Southport Hall</h6>
                        <Stack gap={2} className={`gap-md-1 ${styles.address}`}>
                            <address className='m-0 text-muted fw-medium'>
                                <p>200 Monticello Ave, <span className="d-block d-lg-inline">Jefferson, LA, 70121</span></p>
                            </address>
                            <Stack direction="horizontal" as="ul" className={styles.socialIcons}>
                                <li>
                                    <Link href="https://www.facebook.com/southporthall" target="_blank">
                                        <Image src={facebook} alt="facebook" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/southporthall" target="_blank">
                                        <Image src={instagram} alt="instagram" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/Southporthall" target="_blank">
                                        <Image src={twitter} alt="twitter" />
                                    </Link>
                                </li>
                            </Stack>
                        </Stack>
                    </Stack>
                    <div className={`${styles.poweredBy} d-flex flex-column flex-md-row align-items-center justify-content-center caption`}>
                        <p className="text-muted text-center text-lg-end p-lg-4"><span>Powered by</span> <Image src={poweredBy} width="132" height="29" alt="Blocktickets logo" /></p>
                    </div>
                </Stack>
            </Card>
        </footer>
    );
}
