'use client'

import React from 'react';

import Stack from 'react-bootstrap/Stack'
import Badge from 'react-bootstrap/Badge'

import styles from './Hero.module.scss'

export default function Hero() {
    return (
        <Stack as="header" gap={2} className={`gap-md-1 text-center align-items-center ${styles.hero}`}>
            <h1 className='heading-lg display-1 m-0'>Discover the latest <span className='d-flex gap-1'><Badge bg="default" className='badge-primary badge-lg badge--schedule'>upcoming</Badge> events</span></h1>
            <h2 className="normal-lg fw-medium m-0"><span className='text-info'>from</span> Southport Hall</h2>
        </Stack>
    );
}
