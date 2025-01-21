import React from "react";
import { useState, useEffect } from "react";
import styles from './index.module.scss'

import logo from '../../imgs/Logo/logo_background.png'

export default () => {

    return (
        <>
            <div className={styles.container}>
                <header>
                    <div className={styles.hero}>
                        <div className={styles.central_logo}>
                            <img src={logo} alt="logo com background" />
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
                        <div className={`${styles.grupo}`}>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Smash Burguer</h3>
                                        <p>Pão brioche, hambúrguer, queijo cheddar, maionese da casa.</p>
                                        <h4 className={styles.preco}>R$ 17,90</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Smash Burguer">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Bacon Burguer</h3>
                                        <p>Pão brioche, hambúrguer, 2 fatias de bacon, queijo cheddar e maionese da casa.</p>
                                        <h4 className={styles.preco}>R$ 22,90</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Bacon Burguer">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Crispy Chicken</h3>
                                        <p>Pão brioche, frango empanado, queijo cheddar, cebola, tomate, alface americano e maionese da casa.</p>
                                        <h4 className={styles.preco}>R$ 23,90</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Crispy Chicken">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Duplo da Casa</h3>
                                        <p>Pão brioche, 2 hambúrgueres, 2 queijo cheddar , 2 bacon e maionese da casa</p>
                                        <h4 className={styles.preco}>R$ 26,90</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Duplo da Casa">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Crepe de Pizza</h3>
                                        <h4 className={styles.preco}>R$ 7,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Crepe de Pizza">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Crepe de Frango com Catupiry</h3>
                                        <h4 className={styles.preco}>R$ 7,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Crepe de Frango com Catupiry">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.grupo} ${styles.hidden}`}>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Coca-Cola 350ml</h3>
                                        <h4 className={styles.preco}>R$ 4,90</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Coca-Cola 350ml">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Guaraná 350ml</h3>
                                        <h4 className={styles.preco}>R$ 4,90</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item=">Guaraná 350ml">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Coca-Cola 2L</h3>
                                        <h4 className={styles.preco}>R$ 14,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Coca-Cola 2L">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Sukita 2L</h3>
                                        <h4 className={styles.preco}>R$ 13,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Sukita 2L">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.grupo} ${styles.hidden}`}>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Geladinho Gourmet de Oreo</h3>
                                        <h4 className={styles.preco}>R$ 4,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Geladinho Gourmet de Oreo">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Geladinho Gourmet de Chocolate com Maracujá</h3>
                                        <h4 className={styles.preco}>R$ 4,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Geladinho Gourmet de Chocolate com Maracujá">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Geladinho Gourmet de Prestígio</h3>
                                        <h4 className={styles.preco}>R$ 4,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Geladinho Gourmet de Prestígio">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Geladinho Gourmet BIS</h3>
                                        <h4 className={styles.preco}>R$ 4,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Geladinho Gourmet BIS">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Crepe de Prestígio</h3>
                                        <h4 className={styles.preco}>R$ 7,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Crepe de Prestígio">Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src="" alt="" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Crepe de Sonho de Valsa</h3>
                                        <h4 className={styles.preco}>R$ 7,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} data-item="Crepe de Sonho de Valsa">Adicionar</button>
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