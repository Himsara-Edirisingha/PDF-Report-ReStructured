import { useState } from "react";
import { getAllDataAsJson, getReportStructure } from "./mock-data/data";
import PDFDocument from "./pdf-document/pdf-document";
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';

function App() {

  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);

  const generatePdfPreview = async () => {
    const blob = await pdf(<PDFDocument structure={getReportStructure()} data={getAllDataAsJson()} />).toBlob();
    const url = URL.createObjectURL(blob);
    setPdfBlobUrl(url);
  };

  return (
    <div className="App">
      <PDFDownloadLink
        document={<PDFDocument structure={getReportStructure()} data={getAllDataAsJson()}/>}
        fileName="sample.pdf"
      >
        {({ loading }) =>
          loading ? 'Loading document...' : <button>Download PDF</button>
        }
      </PDFDownloadLink>
      <button onClick={generatePdfPreview} style={{ marginLeft: '10px' }}>
        Preview PDF
      </button>
      {pdfBlobUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>PDF Preview</h3>
          <iframe
            src={pdfBlobUrl}
            title="PDF Preview"
            style={{ width: '80%', height: '80vh', border: '1px solid #ccc' }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
