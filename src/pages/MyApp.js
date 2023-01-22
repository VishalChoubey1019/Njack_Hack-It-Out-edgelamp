import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

export default function MyApp() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [selectedile, setFile] = useState(null);


    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
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
            {selectedile ? <Document file={selectedile} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document> : <h1>Please upload a file</h1>}
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );
}