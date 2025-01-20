import React from "react";
import { useState, useEffect } from "react";
import styles from './index.module.scss'

export default () => {

    return (
        <>
            <div className={styles.container}>
                <header>
                    <div className={styles.hero}>
                        <div className={styles.central_logo}>
                            <img src="" alt="" />
                        </div>
                    </div>
                </header>
                <div className={styles.cardapio_box}>
                    <div className={styles.cardapio}>
                        <div className={styles.menu}>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}