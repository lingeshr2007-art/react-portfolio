import React from "react";
import offline from '../../assets/offline.png'
const OfflinePage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: "600px", padding: "20px", background: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ fontSize: "3rem", color: "#f44336" }}>Oops! No Internet</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
          It seems you're offline. Please check your internet connection and try again.
        </p>
        <img
          src={offline}
          alt="No Connection"
          style={{ width: "300px", marginBottom: "20px", borderRadius: "8px" }}
        />
        <div>
          <p style={{ fontSize: "1rem", color: "#757575" }}>
            Looks like you’ve lost your connection. Time to play hide and seek with your Wi-Fi router!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfflinePage;
