"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link'
import Image from 'next/image';

import { useWindowSize } from '@/utilities/hooks';

import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';

import icon from '/public/images/icons/icon-blocktickets.svg';
import desktopLogo from '/public/images/logo.png';
import mobileLogo from '/public/images/logo-sm.png';

export default function Navigation() {

    const windowSize = useWindowSize();

    const logo = windowSize < 768 ? mobileLogo : desktopLogo;

    const router = useRouter();

    const navItems = [
        {
            label: "Calendar",
            url: "/"
        },
        {
            label: "Private events",
            url: "/private-events"
        },
        {
            label: "History",
            url: "/history"
        },
        {
            label: "Contact us",
            url: "/contact-us"
        },
    ];

    const [active, setActive] = useState(navItems[0]?.label)

    const handleSelect = key => setActive(key)

    return (
        <Navbar className='navigation container'>
            <Link href="/" className="navbar-brand desktop-only">
                <Image src={logo} alt="Southport Hall logo" width="47" height="76" className='logo' />
            </Link>
            <Container>
                <Link href="/" className="navbar-brand mobile-tablet-only">
                    <Image src={desktopLogo} alt="Southport Hall logo" width="67" height="92" className='logo' />
                </Link>
                <Nav as="nav" variant="pills" defaultActiveKey="/" activeKey={router.pathname} className="ms-auto">
                    <Dropdown className='mobile-only ms-auto' align="end">
                        <Dropdown.Toggle id="navigation-dropdown">
                            {active}
                        </Dropdown.Toggle>
                        <Dropdown.Menu align="end" variant="default" title={active} className='mobile-only'>
                            <Stack as="ul" gap={2}>
                                <li>
                                    <Link href={navItems[0]?.url} passHref legacyBehavior>
                                        <Dropdown.Item onClick={() => handleSelect(navItems[0]?.label)}>{navItems[0]?.label}</Dropdown.Item>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={navItems[1]?.url} passHref legacyBehavior>
                                        <Dropdown.Item onClick={() => handleSelect(navItems[1]?.label)}>{navItems[1]?.label}</Dropdown.Item>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={navItems[2]?.url} passHref legacyBehavior>
                                        <Dropdown.Item onClick={() => handleSelect(navItems[2]?.label)}>{navItems[2]?.label}</Dropdown.Item>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={navItems[3]?.url} passHref legacyBehavior>
                                        <Dropdown.Item onClick={() => handleSelect(navItems[3]?.label)}>{navItems[3]?.label}</Dropdown.Item>
                                    </Link>
                                </li>
                            </Stack>
                        </Dropdown.Menu>
                    </Dropdown>
                    <ul
                        role="main-navigation"
                        className="d-md-flex flex-column flex-md-row align-items-md-center tablet-desktop-only">
                        <li>
                            <Link href={navItems[0]?.url} passHref legacyBehavior>
                                <Nav.Link onClick={() => handleSelect(navItems[0]?.label)}>{navItems[0]?.label}</Nav.Link>
                            </Link>
                        </li>
                        <li>
                            <Link href={navItems[1]?.url} passHref legacyBehavior>
                                <Nav.Link onClick={() => handleSelect(navItems[1]?.label)}>{navItems[1]?.label}</Nav.Link>
                            </Link>
                        </li>
                        <li>
                            <Link href={navItems[2]?.url} passHref legacyBehavior>
                                <Nav.Link onClick={() => handleSelect(navItems[2]?.label)}>{navItems[2]?.label}</Nav.Link>
                            </Link>
                        </li>
                        <li>
                            <Link href={navItems[3]?.url} passHref legacyBehavior>
                                <Nav.Link onClick={() => handleSelect(navItems[3]?.label)}>{navItems[3]?.label}</Nav.Link>
                            </Link>
                        </li>
                    </ul>
                </Nav>
            </Container>
            <div className="bg-white p-2 rounded-circle desktop-only">
                <Link href="https://blocktickets.xyz" target="_blank">
                    <Image src={icon} alt="Blocktickets logo" width="32" height="32" />
                </Link>
            </div>
        </Navbar>
    );
}
