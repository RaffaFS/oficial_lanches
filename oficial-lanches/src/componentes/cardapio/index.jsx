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
                            <div className={styles.tabBox}>
                                <button type="button" className={`${styles.btn}`}>Salgados</button>
                            </div>
                            <div className={styles.tabBox}>
                            <button type="button" className={`${styles.btn} ${styles.hiddenBorder}`}>Bebidas</button>
                            </div>
                            <div className={styles.tabBox}>
                                <button type="button" className={`${styles.btn} ${styles.hiddenBorder}`}>Doces</button>
                            </div>
                            <div className={styles.tabBox}>
                                <button type="button" className={`${styles.btn} ${styles.hiddenBorder}`}>Sobre</button>
                            </div>
                        </div>
                        <div className={`${styles.grupo} ${styles.hidden}`}>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.grupo} ${styles.hidden}`}>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.grupo} ${styles.hidden}`}>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}></h3>
                                        <p></p>
                                        <h4 className={styles.preco}></h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}