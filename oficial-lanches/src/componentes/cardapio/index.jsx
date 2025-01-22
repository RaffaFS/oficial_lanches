// IMPORTAÇÃO PADRÃO

import React from "react";
import { useState, useEffect, useRef } from "react";
import styles from './index.module.scss'

// IMPORTAÇÃO DE IMAGENS

import logo from '../../imgs/Logo/logo_background.jpg'

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

    const [popup, setPopup] = useState(false)
    const [carrinho, setCarrinho] = useState([]);
    const [valores, setValores] = useState([]);
    const [valorF, setValorF] = useState(0);
    const [obs, setObs] = useState('');
    const [CEP, setCEP] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');

    function adicionar(item, preco){
        if(!popup){
            setPopup(!popup)
            setTimeout(() => setPopup(!!popup), 800)
        }

        setCarrinho((carrinhoAtual) => [...carrinhoAtual, item])

        setValores((valoresAnteriores) => {
            const novosValores = [...valoresAnteriores, Number(preco)]
            const valorFinal = novosValores.reduce((resultado, item) => resultado + item, 0).toFixed(2)
            setValorF(valorFinal)
            return novosValores
        })
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
        
        const precoReal = item.target.previousElementSibling.children[1].innerText
        setValores((valoresAnteriores) => {
            const precoIndex = valoresAnteriores.indexOf(precoReal)
                const novosValores = [...valoresAnteriores]
                novosValores.splice(precoIndex, 1)
                valoresAnteriores = novosValores
                const valorFinal = novosValores.reduce((resultado, item) => resultado + item, 0).toFixed(2)
                setValorF(valorFinal)
            return valoresAnteriores;
        })
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

    function carregaLocal(){
        fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        .then(retorno => retorno.json())
        .then(formatado => {
            setCidade(formatado.localidade)
            setBairro(formatado.bairro)
            setRua(formatado.logradouro)
        })
    }

    function enviar(e){
        e.preventDefault()
        const mensagem = `
            Meu pedido é: ${carrinho.join(", ")} === 
            Observações: ${obs} === 
            Total: R$${valorF} === 
            Cidade: ${cidade} - 
            Bairro: ${bairro} - 
            Rua: ${rua} - 
            Nº ${numero} - 
            Complemento: ${complemento}
        `.trim();
        const whatsURL = `https://wa.me/5547991325214/?text=${mensagem}`
        window.open(whatsURL, '_blank')
    }

    // RETORNO PARA EXPORTAÇÃO

    return (
        <>
            <div className={styles.container}>
                <header>
                    <p className={`${styles.popup} ${popup ? '' : styles.popupNone}`}>item adicionado!</p>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Smash Burguer", "17.90")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Bacon Burguer", "22.90")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Crispy Chicken", "23.90")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Duplo da Casa", "26.90")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Crepe de Pizza", "7.00")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Crepe de Frango com Catupiry", "7.00")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Coca-Cola 350ml", "4.90")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Guaraná 350ml", "4.90")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Coca-Cola 2L", "14.00")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Sukita 2L", "13.00")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Geladinho Gourmet de Oreo", "4.00")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Geladinho Gourmet de Chocolate com Maracujá", "4.00")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Geladinho Gourmet de Prestígio", "4.00")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Geladinho Gourmet BIS", "4.00")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Crepe de Prestígio", "7.00")}>Adicionar</button>
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
                                        <button className={styles.adicionar} onClick={() => adicionar("Crepe de Sonho de Valsa", "7.00")}>Adicionar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.grupo} ${styles.sobre} ${sobre ? '' : styles.hidden}`}>
                            <p>Inserimos aqui um texto de apresentação sobre o negócio</p>
                        </div>
                        <form className={`${styles.infos} ${sobre ? styles.hidden : ''}`} onSubmit={enviar}>
                            <h2>Confira seu pedido, adicione observações e digite o endereço</h2>
                            <div className={styles.inputs}>
                                <div className={styles.pedido}>
                                    <ul>
                                        {carrinho.map((item, index) => (
                                            <li key={Math.random()}>
                                                <div className={styles.itemInfo}>
                                                    <p>{item}</p>
                                                    <p>R${valores[index]}</p>
                                                </div>
                                                <strong onClick={remover}>x</strong>
                                            </li>
                                        ))}
                                    </ul>
                                    <textarea className={styles.obs} placeholder="Adicione observações aqui" onChange={anotar}></textarea>
                                </div>
                                <div className={styles.endereco}>
                                    <input type="text" placeholder="CEP" onChange={(e) => setCEP(e.target.value)} onBlur={carregaLocal}/>
                                    <input required type="text" placeholder="Cidade" value={cidade} onChange={anotarCidade} />
                                    <input required type="text" placeholder="Bairro" value={bairro} onChange={anotarBairro} />
                                    <input required type="text" placeholder="Rua" value={rua} onChange={anotarRua} />
                                    <input required type="text" placeholder="Número" onChange={anotarNumero} />
                                    <input type="text" placeholder="Complemento" onChange={anotarComplemento} />
                                </div>
                            </div>
                            <div className={styles.calcBox}>
                                <div className={styles.pix}>
                                    <p className={styles.pixTxt}>Total a pagar: R${valorF}</p>
                                    <p className={styles.pixTxt}>Chave PIX: 47991325214</p>
                                    <p className={styles.pixTxt}>Beneficiário: Yasmin Oliveira</p>
                                </div>
                                    <p className={styles.txt}>Favor enviar o comprovante de pagamento após o envio do pedido.</p>
                            </div>
                            <div className={styles.btnBox}>
                                <button className={styles.btnEnviar} type="submit">Enviar pedido pelo WhatsApp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}