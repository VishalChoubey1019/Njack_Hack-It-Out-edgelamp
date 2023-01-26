import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { fabric } from 'fabric';
import { useButtons } from '../context/CanvasContext';
import { MdClose } from 'react-icons/md';


export default function ExportPDF() {
    const contextValues = useButtons();

    function onDocumentLoadSuccess({ numPages }) {
        contextValues.setNumPages(numPages);
        contextValues.setCurrPage(1);
        contextValues.setCanvas(initCanvas());
        changePage(1);
    }

    function changePage(offset) {
        const page = contextValues.currPage;
        contextValues.edits[page] = contextValues.canvas.toObject();
        contextValues.setEdits(contextValues.edits);
        contextValues.setCurrPage(page => page + offset);
        contextValues.canvas.clear()
        contextValues.edits[page + offset] && contextValues.canvas.loadFromJSON(contextValues.edits[page + offset]);
        contextValues.canvas.renderAll();
    }

    // fabric js
    const initCanvas = () => (
        new fabric.Canvas('canvas', {
            isDrawingMode: false,
            height: 842,
            width: 595,
            backgroundColor: 'rgba(0,0,0,0)'
        })
    )

    // fabric js

    React.useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, [])

    return (
        <div>
            {contextValues.selectedFile ?
                <div className="w-full py-8">
                    <div className='p-2 bg-red-500 shadow-sm rounded-md text-white fixed top-5 right-5' onClick={() => contextValues.setFile(null)}><MdClose className='text-white text-xl' /></div>

                    <Document file={contextValues.selectedFile} onLoadSuccess={onDocumentLoadSuccess} className="flex justify-center" id="doc">

                        <div className='absolute z-[9]'>
                            <canvas id="canvas" />
                        </div>

                        <Page pageNumber={contextValues.currPage} id="docPage" className="px-4 py-2 shadow-lg border" width={595} height={842} />

                    </Document>
                    <div className='fixed bottom-2 flex items-center justify-center w-full gap-3 z-50'>
                        {contextValues.currPage > 1 && <button onClick={() => changePage(-1)} className='px-4 py-2 bg-gray-700 rounded-md text-white'>{'<'}</button>}
                        <div className='px-4 py-2 bg-gray-700 rounded-md text-white'>Page {contextValues.currPage} of {contextValues.numPages}</div>
                        {contextValues.currPage < contextValues.numPages && <button onClick={() => changePage(1)} className='px-4 py-2 bg-gray-700 rounded-md text-white'>{'>'}</button>}
                    </div>
                </div>
                : null}
        </div>
    );
}