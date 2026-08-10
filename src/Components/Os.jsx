import { useState, useEffect } from "react";
import os from "./Os/Osnotes.pdf";
import { ToastContainer, toast } from 'react-toastify';
import question1 from './Os/OS TOP 25 QUES-ANS.pdf';

function Os() {

  const [showPdf1, setShowPdf1] = useState(false);
  const [showPdf2, setShowPdf2] = useState(false);

  const notify = () => toast("Downloading Notes For You", { autoClose: 1000, transition: null });

  useEffect(() => {
    document.title = "Operating System"
  })
  return (
    <div className="container mt-4">
      <h2 style={{ color: "black", fontFamily: "sans-serif", fontSize: "40px" }}>Operating System</h2>
      <hr />
      <u><h3 >Topic Wise Notes Content</h3></u>
      <hr />
      <h3 className="mb-4">1. Operating System Notes</h3>

      <a
        href={os}
        download
        className="btn btn-primary btn-lg mb-4"
        onClick={notify}
      >
        Download PDF
      </a>

      <button
        className="btn btn-success btn-lg mb-4 ms-3"
        onClick={() => setShowPdf1(!showPdf1)}
      >
        {showPdf1 ? "Hide Notes" : "Show Notes"}
      </button>

      {showPdf1 && (
        <div className="mt-3">
          <iframe
            src={os}
            width="70%"
            height="300px"
            title="OOPS Notes"
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
          ></iframe>
        </div>
      )}
      <hr />
      <h1 style={{ color: "crimson" }}>@ Important Questions</h1>
      <hr />
      <h3 className="mb-4">1. Os Top 25 Questions</h3>
      <a
        href={question1}
        download
        className="btn btn-primary btn-lg mb-4"
        onClick={notify}
      >
        Download PDF
      </a>
      <button
        className="btn btn-success btn-lg mb-4 ms-3"
        onClick={() => setShowPdf2(!showPdf2)}
      >
        {showPdf2 ? "Hide Notes" : "Show Notes"}
      </button>
      {showPdf2 && (
        <div className="mt-3">
          <iframe
            src={question1}
            width="70%"
            height="300px"
            title="OS Notes"
            style={{ marginBottom: "20px" }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
          ></iframe>
        </div>
      )}
      <ToastContainer position="top-center" theme="dark" />
    </div>
  )
}
export default Os;