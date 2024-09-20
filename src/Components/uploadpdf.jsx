import React, { useState } from 'react';

const UploadPdf = () => {
  const [, setFile] = useState(null);
  const [result] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">PDF Text Extractor</h1>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="input"
      />
    

      {result && (
        <div className="mt-4">
          <h2 className="text-xl font-bold mb-2">Extracted Text:</h2>
          <textarea
            className="textarea"
            value={result}
            readOnly
          />
        </div>
      )}
    </div>
  );
};

export default UploadPdf;
