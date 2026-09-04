import { useEffect, useState } from "react";
import java from "./Java/javanotes.pdf";
import java1 from "./Java/Java.pdf";
import java3 from "./Java/Methods in Java.pdf";
import java2 from "./Java/Basic Programming  in Java.pdf";
import java4 from "./Java/Array_List & String.pdf";
import java5 from "./Java/Class & Object.pdf";
import java6 from "./Java/Constructor in Java.pdf";

import { toast, ToastContainer } from "react-toastify";
function Java() {

    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
    const [showPdf3, setShowPdf3] = useState(false);
    const [showPdf4, setShowPdf4] = useState(false);
    const [showPdf5, setShowPdf5] = useState(false);
    const [showPdf6, setShowPdf6] = useState(false);
    const [showPdf7, setShowPdf7] = useState(false);

    const notify = () => toast("Downloading Notes For You",{autoClose:1000, transition:null}) 

    useEffect(() => {
      document.title = "Java Programming"
    })
    return(
        <div className="container mt-4">
        <h2 style={{color:"black", fontFamily:"sans-serif", fontSize:"40px"}}>Java Programming</h2>
        <hr />
        <u><h3 >Topic Wise Notes Content</h3></u>
          <hr />
          <h3 className="mb-4">1. Java Basic</h3>
          <a
            href={java1}
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
                src={java1}
                width="70%"
                height="300px"
                onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
              ></iframe>
            </div>
          )}
          <hr />
          <h3 className="mb-4">2. Java Basic Programs</h3>
          <a
            href={java2}
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
                src={java2}
                width="70%"
                height="300px"
                onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
              ></iframe>
            </div>
          )}
          <hr />
          <h3 className="mb-4">3. Java Methods</h3>
          <a
            href={java3}
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
                src={java3}
                width="70%"
                height="300px"
                onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
              ></iframe>
            </div>
          )}
          <hr />
          <h3 className="mb-4">4. Java Array List & String</h3>
          <a
            href={java4}
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
                src={java4}
                width="70%"
                height="300px"
                onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
              ></iframe>
            </div>
          )}
          <hr />
          <h3 className="mb-4">5. Java Class & Object</h3>
          <a
            href={java5}
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
                src={java5}
                width="70%"
                height="300px"
                onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
              ></iframe>
            </div>
          )}
          <hr />
          <h3 className="mb-4">6. Java Constructor</h3>
          <a
            href={java6}
            download
            className="btn btn-primary btn-lg mb-4"
            onClick={notify}
          >
            Download PDF
          </a>
          <button
            className="btn btn-success btn-lg mb-4 ms-3"
            onClick={() => setShowPdf7(!showPdf7)}
          >
            {showPdf7 ? "Hide Notes" : "Show Notes"}
          </button>
          {showPdf7 && (
            <div className="mt-3">
              <iframe
                src={java6}
                width="70%"
                height="300px"
                onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
              ></iframe>
            </div>
          )}
          <hr />
          <h3 className="mb-4">7. Java Full Notes</h3>
          <a
            href={java}
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
                src={java}
                width="70%"
                height="300px"
                onLoad={() => toast.success("Notes Loaded Successfully...",{autoClose:1000,transition:null})}
              ></iframe>
            </div>
          )}
          <ToastContainer position="top-center" theme="dark"/>
      </div>
    )
}
export default Java;