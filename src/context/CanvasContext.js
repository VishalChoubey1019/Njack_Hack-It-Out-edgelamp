import React from 'react'
import { fabric } from 'fabric'

const funButtons = React.createContext()

export const useButtons = () => {
    return React.useContext(funButtons)
}

export const CanvasProvider = ({ children }) => {
    // file
    const [numPages, setNumPages] = React.useState(null);
    const [currPage, setCurrPage] = React.useState(1);
    const [selectedFile, setFile] = React.useState(null);

    const [canvas, setCanvas] = React.useState('');
     
    // add a rectangle
    const addRect = canvi => {
        const rect = new fabric.Rect({
            height: 180,
            width: 200,
            fill: '#f4a261',
            cornerStyle: 'circle',
            editable: true
        });
        canvi.add(rect);
        canvi.renderAll();
    }

    // add text
    const addText = canvi => {
        const text = new fabric.Textbox("Type Here ...", {
            editable: true
        });
        canvi.add(text);
        canvi.renderAll();
    }
    // add image
    const addImage = canvi => {
        const image = new fabric.Image("jvghj")
        canvi.add(image);
        canvi.renderAll();
    }
    // add functions here

    return (
        <funButtons.Provider value={{ canvas, setCanvas, addRect, addText, addImage, numPages, setNumPages, currPage, setCurrPage, selectedFile, setFile }}>
            {children}
        </funButtons.Provider>
    )
}
