import { useState, useEffect } from 'react';
import axios from 'axios';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    gap: '1.5rem',
  },
  qrContainer: {
    background: 'white',
    padding: '2rem',
    borderRadius: '1rem',
    boxShadow: '0 0 20px rgba(154, 39, 168, 0.2)',
  },
  qrImage: {
    maxWidth: '400px',
    height: 'auto',
  },
  applicantId: {
    fontSize: '1.5rem',
    color: '#E8DAB2',
    letterSpacing: '1px',
    fontWeight: 'bold',
  },
  heading: {
    color: '#E8DAB2',
    marginBottom: '1rem',
  }
};

function QR() {
  const [qrData, setQrData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQrData = async () => {
      try {
        // Get the user ID from localStorage or wherever you store it
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`/api/qr/${userId}`);
        setQrData(response.data);
      } catch (err) {
        setError('Failed to load QR code');
        console.error('Error fetching QR data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchQrData();
  }, []);

  if (loading) return <div style={styles.container}>Loading...</div>;
  if (error) return <div style={styles.container}>{error}</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My QR Code</h1>
      <div style={styles.qrContainer}>
        {qrData?.qrImage && (
          <img 
            src={qrData.qrImage} 
            alt="Applicant QR Code" 
            style={styles.qrImage}
          />
        )}
      </div>
      {qrData?.applicantId && (
        <div style={styles.applicantId}>
          Applicant ID: {qrData.applicantId}
        </div>
      )}
    </div>
  );
}

export default QR;