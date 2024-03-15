import React from 'react';

import styles from './Header.module.scss';

export default function Header() {

    return (
        <header className={styles.jumbotron}>
            <h1 className='heading-lg m-0 text-white'>Private Events</h1>
        </header>
    );
}
