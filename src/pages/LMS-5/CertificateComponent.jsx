import React, { useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import certificateTemplate from './certificate-template.png'; // Ensure you have your certificate template image

const CertificateComponent = ({ username, email }) => {
  const certificateRef = useRef(null);

  const handleDownload = () => {
    html2canvas(certificateRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('certificate.pdf');
    });
  };

  return (
    <div>
      <div ref={certificateRef} className="certificate">
        <img src={certificateTemplate} alt="Certificate Template" className="certificate-template" />
        <div className="certificate-details">
          {/* <h2>Certificate of Achievement</h2>
          <p>This is to certify that</p>
          <h3>{username}</h3>
          <p>has successfully completed the IDP course.</p>
          <p>Email: {email}</p> */}
        </div>
      </div>
      <button onClick={handleDownload}>Download Certificate</button>
    </div>
  );
};

export default CertificateComponent;
