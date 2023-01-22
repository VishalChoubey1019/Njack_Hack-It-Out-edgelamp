import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

export default function MyApp() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedFile, setFile] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    

    React.useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, [])

    function nextButton(){
        if (pageNumber < numPages) 
            setPageNumber(pageNumber + 1);
    }

    function prevButton(){
        if (pageNumber > 1) 
            setPageNumber(pageNumber - 1);
    }

    return (
        <div>
            <input
                type="file"
                onChange={(event) => setFile(event.target.files[0])}
            />
            {selectedFile ? 
                <div>
                    <Document file={selectedFile} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                    </Document>
                    <p>Page {pageNumber} of {numPages}</p>
                    <button onClick={prevButton}>Previous</button>
                    <button onClick={nextButton}>Next</button>
                </div>
            : <h1>Please upload a file</h1>}
        </div>
    );
}
