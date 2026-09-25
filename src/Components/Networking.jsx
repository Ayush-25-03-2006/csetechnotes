import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import basic from './Networking/Basic of Computer Network.pdf';
import physical from "./Networking/Physical Layer.pdf";
import dll from "./Networking/Data Link Layer.pdf";
import app from "./Networking/Application Layer.pdf";
import net from "./Networking/Network Layer.pdf";
import question from "./Networking/CN  TOP 40 QUES-ANS.pdf";

function Networking() {

  const [showPdf1, setShowPdf1] = useState(false);
  const [showPdf2, setShowPdf2] = useState(false);
  const [showPdf3, setShowPdf3] = useState(false);
  const [showPdf4, setShowPdf4] = useState(false);
  const [showPdf5, setShowPdf5] = useState(false);
  const [showPdf6, setShowPdf6] = useState(false);

  const notify = () => toast("Downloading Notes For You", { autoClose: 1000, transition: null });

  useEffect(() => {
    document.title = "Computer Network"
  });
  return (
    <>
      <div className="container mt-4">
        <h2 style={{ color: "black", backgroundColor: "white", borderRadius: "25px", fontFamily: "sans-serif", fontSize: "40px" }}>Computer Network</h2>
        <hr />
        <u><h3 >Topic Wise Notes Content</h3></u>
        <hr />
        <h3 className="mb-4">1. Basic Of Computer Networking</h3>
        <a
          href={basic}
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
              src={basic}
              width="100%"
              height="600px"
              title="OOPS Notes"
              loading="eager"
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px"
              }}
              onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
            ></iframe>
          </div>
        )}
        <hr />
        <h3 className="mb-4">2. Physical Layer</h3>
        <a
          href={physical}
          download
          className="btn btn-primary btn-lg mb-4"
          onClick={notify}
        >
          Download PDF
        </a>
        <button
          className="btn btn-success btn-lg mb-4 ms-3"
          onClick={() => setShowPdf3(!showPdf3)}
        >
          {showPdf3 ? "Hide Notes" : "Show Notes"}
        </button>
        {showPdf3 && (
          <div className="mt-3">
            <iframe
              src={physical}
              width="100%"
              height="600px"
              loading="eager"
              title="OOPS Notes"
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px"
              }}
              onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
            ></iframe>
          </div>
        )}
        <hr />
        <h3 className="mb-4">3. Data Link Layer</h3>
        <a
          href={dll}
          download
          className="btn btn-primary btn-lg mb-4"
          onClick={notify}
        >
          Download PDF
        </a>
        <button
          className="btn btn-success btn-lg mb-4 ms-3"
          onClick={() => setShowPdf4(!showPdf4)}
        >
          {showPdf4 ? "Hide Notes" : "Show Notes"}
        </button>
        {showPdf4 && (
          <div className="mt-3">
            <iframe
              src={dll}
              width="100%"
              height="600px"
              title="OOPS Notes"
              loading="eager"
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px"
              }}
              onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
            ></iframe>
          </div>
        )}
        <hr />
        <h3 className="mb-4">4. Network Layer</h3>
        <a
          href={net}
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
              src={net}
              width="100%"
              height="600px"
              title="OOPS Notes"
              loading="eager"
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px"
              }}
              onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
            ></iframe>
          </div>
        )}
        <hr />
        <h3 className="mb-4">5. Application Layer</h3>
        <a
          href={app}
          download
          className="btn btn-primary btn-lg mb-4"
          onClick={notify}
        >
          Download PDF
        </a>
        <button
          className="btn btn-success btn-lg mb-4 ms-3"
          onClick={() => setShowPdf5(!showPdf5)}
        >
          {showPdf5 ? "Hide Notes" : "Show Notes"}
        </button>
        {showPdf5 && (
          <div className="mt-3">
            <iframe
              src={app}
              width="100%"
              height="600px"
              title="OOPS Notes"
              loading="eager"
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px"
              }}
              onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
            ></iframe>
          </div>
        )}
        <hr />
        <h1 style={{ color: "crimson" }}>@ Important Question</h1>
        <hr />
        <h3 className="mb-4">1. Computer Network Important Question</h3>
        <a
          href={question}
          download
          className="btn btn-primary btn-lg mb-4"
          onClick={notify}
        >
          Download PDF
        </a>
        <button
          className="btn btn-success btn-lg mb-4 ms-3"
          onClick={() => setShowPdf6(!showPdf6)}
        >
          {showPdf6 ? "Hide Notes" : "Show Notes"}
        </button>
        {showPdf6 && (
          <div className="mt-3">
            <iframe
              src={question}
              width="100%"
              height="600px"
              title="OOPS Notes"
              loading="eager"
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px"
              }}
              onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
            ></iframe>
          </div>
        )}
        <ToastContainer position="top-center" theme="dark" />
      </div>
    </>
  )
}
export default Networking;