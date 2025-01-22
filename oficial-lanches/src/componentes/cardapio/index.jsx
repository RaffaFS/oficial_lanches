// IMPORTAÇÃO PADRÃO

import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from './index.module.scss'

// IMPORTAÇÃO DE IMAGENS

import logo from '../../imgs/Logo/logo_background.png'

import smashIMG from '../../imgs/Salgados/smash_burger.jpg'
import baconIMG from '../../imgs/Salgados/bacon_burger.jpg'
import crispyIMG from '../../imgs/Salgados/crispy_chicken.jpg'
import duploIMG from '../../imgs/Salgados/duplo_da_casa.jpg'
import crepe1IMG from '../../imgs/Salgados/crepe_salgado.jpg'

import cocapIMG from '../../imgs/Bebidas/coca_lata.jpg'
import guaranapIMG from '../../imgs/Bebidas/guarana_lata.jpg'
import cocagIMG from '../../imgs/Bebidas/coca_2l.jpg'
import sukitagIMG from '../../imgs/Bebidas/sukita_2l.jpg'

import oreoIMG from '../../imgs/Doces/geladinho_oreo.jpg'
import maracujaIMG from '../../imgs/Doces/geladinho_chocolate_maracuja.jpg'
import prestigioIMG from '../../imgs/Doces/geladinho_prestigio.jpg'
import bisIMG from '../../imgs/Doces/geladinho_bis.jpg'
import crepe2IMG from '../../imgs/Doces/crepe_doce.jpg'

////////////////////////////
// CÓDIGO PARA EXPORTAÇÃO //
////////////////////////////

export default() => {

    // REFERENTE A NAVEGAÇÃO ENTRE ABAS

    const [salgados, setSalgados] = useState(true)
    const [bebidas, setBebidas] = useState(false)
    const [doces, setDoces] = useState(false)
    const [sobre, setSobre] = useState(false)

    function ativaSalgados(){
        setSalgados(true)
        setBebidas(false)
        setDoces(false)
        setSobre(false)
    }
    function ativaBebidas(){
        setSalgados(false)
        setBebidas(true)
        setDoces(false)
        setSobre(false)
    }
    function ativaDoces(){
        setSalgados(false)
        setBebidas(false)
        setDoces(true)
        setSobre(false)
    }
    function ativaSobre(){
        setSalgados(false)
        setBebidas(false)
        setDoces(false)
        setSobre(true)
    }

    // REFERENTE AO SISTEMA DE LISTA E PRODUTOS NO CARRINHO E ENVIO

    const [carrinho, setCarrinho] = useState([]);
    const [obs, setObs] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

    function adicionar(item){
        setCarrinho((carrinhoAtual) => [...carrinhoAtual, item]);
    }

    function remover(item){
        const itemReal = item.target.previousElementSibling.innerText
        setCarrinho((carrinhoAtual) => {
            const itemIndex = carrinhoAtual.indexOf(itemReal)
                const novoCarrinho = [...carrinhoAtual]
                novoCarrinho.splice(itemIndex, 1)
                carrinhoAtual = novoCarrinho
            return carrinhoAtual;
        })
        console.log(carrinho)
    }

    function anotar(e){
        setObs(e.target.value)
    }
    function anotarCidade(e){
        setCidade(e.target.value)
    }
    function anotarBairro(e){
        setBairro(e.target.value)
    }
    function anotarRua(e){
        setRua(e.target.value)
    }
    function anotarNumero(e){
        setNumero(e.target.value)
    }
    function anotarComplemento(e){
        setComplemento(e.target.value)
    }

    function enviar(){
        const whatsURL = `https://wa.me/5547991974121/?text=Meu pedido é: ${carrinho.join(", ")} // ${obs} // Endereço: ${cidade} - ${bairro} - ${rua} - ${numero} --- ${complemento} `
        window.open(whatsURL, '_blank')
    }

    // RETORNO PARA EXPORTAÇÃO

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
                                <button type="button" className={`${styles.btn} ${salgados ? '' : styles.hiddenBorder}`} onClick={ativaSalgados} >Salgados</button>
                            </div>
                            <div className={styles.tabBox}>
                            <button type="button" className={`${styles.btn} ${bebidas ? '' : styles.hiddenBorder}`} onClick={ativaBebidas} >Bebidas</button>
                            </div>
                            <div className={styles.tabBox}>
                                <button type="button" className={`${styles.btn} ${doces ? '' : styles.hiddenBorder}`} onClick={ativaDoces} >Doces</button>
                            </div>
                            <div className={styles.tabBox}>
                                <button type="button" className={`${styles.btn} ${sobre ? '' : styles.hiddenBorder}`} onClick={ativaSobre} >Sobre</button>
                            </div>
                        </div>
                        <div className={`${styles.grupo} ${salgados ? '' : styles.hidden}`}>
                            <div className={styles.item}>
                                <img src={smashIMG} alt="Smash Burguer" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Smash Burguer</h3>
                                        <p>Pão brioche, hambúrguer, queijo cheddar e maionese da casa.</p>
                                        <h4 className={styles.preco}>R$ 17,90</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Smash Burguer")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={baconIMG} alt="Bacon Burguer" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Bacon Burguer</h3>
                                        <p>Pão brioche, hambúrguer, 2 fatias de bacon, queijo cheddar e maionese da casa.</p>
                                        <h4 className={styles.preco}>R$ 22,90</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Bacon Burguer")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={crispyIMG} alt="Crispy Chicken" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Crispy Chicken</h3>
                                        <p>Pão brioche, frango empanado, queijo cheddar, cebola, tomate, alface americano e maionese da casa.</p>
                                        <h4 className={styles.preco}>R$ 23,90</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Crispy Chicken")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={duploIMG} alt="Duplo da Casa" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Duplo da Casa</h3>
                                        <p>Pão brioche, 2 hambúrgueres, 2 queijo cheddar , 2 bacon e maionese da casa</p>
                                        <h4 className={styles.preco}>R$ 26,90</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Duplo da Casa")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={crepe1IMG} alt="Crepe de Pizza" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Crepe de Pizza</h3>
                                        <h4 className={styles.preco}>R$ 7,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Crepe de Pizza")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={crepe1IMG} alt="Crepe de Frango com Catupiry" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Crepe de Frango com Catupiry</h3>
                                        <h4 className={styles.preco}>R$ 7,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Crepe de Frango com Catupiry")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.grupo} ${bebidas ? '' : styles.hidden}`}>
                            <div className={styles.item}>
                                <img src={cocapIMG} alt="Coca-Cola 350ml" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Coca-Cola 350ml</h3>
                                        <h4 className={styles.preco}>R$ 4,90</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Coca-Cola 350ml")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={guaranapIMG} alt="Guaraná 350ml" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Guaraná 350ml</h3>
                                        <h4 className={styles.preco}>R$ 4,90</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Guaraná 350ml")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={cocagIMG} alt="Coca-Cola 2L" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Coca-Cola 2L</h3>
                                        <h4 className={styles.preco}>R$ 14,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Coca-Cola 2L")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={sukitagIMG} alt="Sukita 2L" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Sukita 2L</h3>
                                        <h4 className={styles.preco}>R$ 13,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Sukita 2L")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.grupo} ${doces ? '' : styles.hidden}`}>
                            <div className={styles.item}>
                                <img src={oreoIMG} alt="Geladinho Gourmet de Oreo" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Geladinho Gourmet de Oreo</h3>
                                        <h4 className={styles.preco}>R$ 4,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Geladinho Gourmet de Oreo")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={maracujaIMG} alt="Geladinho Gourmet de Chocolate com Maracujá" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Geladinho Gourmet de Chocolate com Maracujá</h3>
                                        <h4 className={styles.preco}>R$ 4,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Geladinho Gourmet de Chocolate com Maracujá")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={prestigioIMG} alt="Geladinho Gourmet de Prestígio" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Geladinho Gourmet de Prestígio</h3>
                                        <h4 className={styles.preco}>R$ 4,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Geladinho Gourmet de Prestígio")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={bisIMG} alt="Geladinho Gourmet BIS" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Geladinho Gourmet BIS</h3>
                                        <h4 className={styles.preco}>R$ 4,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Geladinho Gourmet BIS")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={crepe2IMG} alt="Crepe de Prestígio" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Crepe de Prestígio</h3>
                                        <h4 className={styles.preco}>R$ 7,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Crepe de Prestígio")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <img src={crepe2IMG} alt="Crepe de Sonho de Valsa" />
                                <div className={styles.description}>
                                    <div className={styles.texto}>
                                        <h3 className={styles.title}>Crepe de Sonho de Valsa</h3>
                                        <h4 className={styles.preco}>R$ 7,00</h4>
                                    </div>
                                    <div className={styles.btnBox}>
                                        <button className={styles.adicionar} onClick={() => adicionar("Crepe de Sonho de Valsa")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.grupo} ${styles.sobre} ${sobre ? '' : styles.hidden}`}>
                            <p>Inserimos aqui um texto de apresentação sobre o negócio</p>
                        </div>
                        <div className={`${styles.infos} ${sobre ? styles.hidden : ''}`}>
                            <h2>Confira seu pedido, adicione observações e digite o endereço</h2>
                            <div className={styles.inputs}>
                                <div className={styles.pedido}>
                                    <ul>
                                        {carrinho.map((item) => (
                                            <li key={Math.random()}>
                                                <p>{item}</p>
                                                <strong onClick={remover}>x</strong>
                                            </li>
                                        ))}
                                    </ul>
                                    <textarea className={styles.obs} placeholder="Adicione observações aqui" onChange={anotar}></textarea>
                                </div>
                                <div className={styles.endereco}>
                                    <input type="text" placeholder="CEP"/>
                                    <input required type="text" placeholder="Cidade" onChange={anotarCidade} />
                                    <input required type="text" placeholder="Bairro" onChange={anotarBairro} />
                                    <input required type="text" placeholder="Rua" onChange={anotarRua} />
                                    <input required type="text" placeholder="Número" onChange={anotarNumero} />
                                    <input type="text" placeholder="Complemento" onChange={anotarComplemento} />
                                </div>
                            </div>
                            <div className={styles.btnBox}>
                                <button className={styles.btnEnviar} type="button" onClick={enviar}>Enviar pelo WhatsApp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}