import React from 'react'
import "./App.css"
import Boton from './components/Boton'
import BotonClear from './components/BotonClear'
import Pantalla from './components/Pantalla'
import { useState } from 'react'
import { evaluate } from "mathjs"
import BotonDelete from './components/BotonDelete'

export default function App(){
    const [input, setInput] = useState("");
    const agregarInput = val => {
        setInput(input + val)
    }

    const calcularResultado = () => {
        if(input){
            setInput(evaluate(input).toString())
        } else {
            alert("Insertar una operacion matematica")
        }
    }

    function botonDelete(){
        setInput(input.substring(0, input.length - 1));
    }

    return (
        <div className='App'>
            <div className='logo-container'>
                <img src="https://coursework.vschool.io/content/images/2017/08/react-banner.png" 
                alt='Logo'
                className='img-logo'/>
            </div>
            <div className='contenedor-calculadora'>
                <Pantalla input={input}/>
                
                <div className='fila'>
                    <Boton manejarClic={agregarInput}>1</Boton>
                    <Boton manejarClic={agregarInput}>2</Boton>
                    <Boton manejarClic={agregarInput}>3</Boton>
                    <Boton manejarClic={agregarInput}>+</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={agregarInput}>4</Boton>
                    <Boton manejarClic={agregarInput}>5</Boton>
                    <Boton manejarClic={agregarInput}>6</Boton>
                    <Boton manejarClic={agregarInput}>-</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={agregarInput}>7</Boton>
                    <Boton manejarClic={agregarInput}>8</Boton>
                    <Boton manejarClic={agregarInput}>9</Boton>
                    <Boton manejarClic={agregarInput}>*</Boton>
                </div>
                <div className='fila'>
                    <Boton manejarClic={calcularResultado}>=</Boton>
                    <Boton manejarClic={agregarInput}>0</Boton>
                    <Boton manejarClic={agregarInput}>.</Boton>
                    <Boton manejarClic={agregarInput}>/</Boton>
                </div>
                <div className='fila'>
                    <BotonDelete manejarDelete={botonDelete}>Delete</BotonDelete>
                    <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
                </div>
            </div>
        </div>
    )
}