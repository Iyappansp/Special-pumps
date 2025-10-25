"use client";
import React, { useState } from "react";
import PageLoader from "@/components/ui/PageLoader";

export default function LoaderDemoPage() {
  const [loading, setLoading] = useState(false);

  const simulateLoad = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc",
      }}
    >
      {loading && <PageLoader />}
      <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#0f172a" }}>
        Loader Demo
      </h1>
      <button
        onClick={simulateLoad}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#1e40af",
          color: "#fff",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Show Loader
      </button>
    </main>
  );
}
