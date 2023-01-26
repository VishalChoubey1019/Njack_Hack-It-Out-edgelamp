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

    // uploaded image
    const addImage = (e, canvi) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function (f) {
            var data = f.target.result;
            fabric.Image.fromURL(data, function (img) {
                img.scaleToWidth(300);
                canvi.add(img).renderAll();
                var dataURL = canvi.toDataURL({ format: 'png', quality: 0.8 });
            });
        }
        reader.readAsDataURL(file);
    }

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

    // add highlight
    const addHighlight = canvi => {
        const rect = new fabric.Rect({
            height: 20,
            width: 400,
            fill: 'rgba(253,255,150,0.4)',
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
    // add functions here

    return (
        <funButtons.Provider value={{ canvas, setCanvas, addRect, addText, addImage, numPages, setNumPages, currPage, setCurrPage, selectedFile, setFile, addHighlight, setUploadImg }}>
            {children}
        </funButtons.Provider>
    )
}
