import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

export default function MyApp() {
    const [numPages, setNumPages] = useState(null);
    const [currPage, setCurrPage] = useState(1);
    const [selectedFile, setFile] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setCurrPage(1);
    }

    function changePage(offset) {
        setCurrPage(page => page + offset);
    }

    React.useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, [])

    return (
        <div>
            <input
                type="file"
                onChange={(event) => setFile(event.target.files[0])}
            />
            {selectedFile ?
                <div>
                    <Document file={selectedFile} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={currPage} />
                    </Document>
                    <p>Page {currPage} of {numPages}</p>
                    {currPage > 1 && <button onClick={() => changePage(-1)}>Previous</button>}
                    {currPage < numPages && <button onClick={() => changePage(1)}>Next</button>}
                </div>
                : <h1>Please upload a file</h1>}
        </div>
    );
}
