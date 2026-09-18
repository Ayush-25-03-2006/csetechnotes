import { useEffect, useState } from "react";
import java from "./Java/javanotes.pdf";
import java1 from "./Java/Java.pdf";
import java3 from "./Java/Methods in Java.pdf";
import java2 from "./Java/Basic Programming  in Java.pdf";
import java4 from "./Java/Array_List & String.pdf";
import java5 from "./Java/Class & Object.pdf";
import java6 from "./Java/Constructor in Java.pdf";
import java8 from "./Java/Inheritance in Java.pdf";
import java7 from "./Java/Wrapper Classes.pdf";
import java9 from "./Java/Polymorphism in Java.pdf";
import java10 from "./Java/Package in java.pdf";
import java11 from "./Java/Exception Handling in Java.pdf";
import java12 from "./Java/Threads in Java.pdf";
import java13 from "./Java/JDBC in Java.pdf";
import question from "./Java/Java TOP 20 QUES-ANS.pdf";

import { toast, ToastContainer } from "react-toastify";
function Java() {

  const [showPdf1, setShowPdf1] = useState(false);
  const [showPdf2, setShowPdf2] = useState(false);
  const [showPdf3, setShowPdf3] = useState(false);
  const [showPdf4, setShowPdf4] = useState(false);
  const [showPdf5, setShowPdf5] = useState(false);
  const [showPdf6, setShowPdf6] = useState(false);
  const [showPdf7, setShowPdf7] = useState(false);
  const [showPdf8, setShowPdf8] = useState(false);
  const [showPdf9, setShowPdf9] = useState(false);
  const [showPdf10, setShowPdf10] = useState(false);
  const [showPdf11, setShowPdf11] = useState(false);
  const [showPdf12, setShowPdf12] = useState(false);
  const [showPdf13, setShowPdf13] = useState(false);
  const [showPdf14, setShowPdf14] = useState(false);
  const [showPdf15, setShowPdf15] = useState(false);

  const notify = () => toast("Downloading Notes For You", { autoClose: 1000, transition: null })

  useEffect(() => {
    document.title = "Java Programming"
  })
  return (
    <div className="container mt-4">
      <h2 style={{ color: "black", fontFamily: "sans-serif", fontSize: "40px" }}>Java Programming</h2>
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
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
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
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
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
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
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
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
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
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
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
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">7. Java Wrapper class </h3>
      <a
        href={java7}
        download
        className="btn btn-primary btn-lg mb-4"
        onClick={notify}
      >
        Download PDF
      </a>
      <button
        className="btn btn-success btn-lg mb-4 ms-3"
        onClick={() => setShowPdf8(!showPdf8)}
      >
        {showPdf8 ? "Hide Notes" : "Show Notes"}
      </button>
      {showPdf8 && (
        <div className="mt-3">
          <iframe
            src={java7}
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">8. Java Inheritance</h3>
      <a
        href={java8}
        download
        className="btn btn-primary btn-lg mb-4"
        onClick={notify}
      >
        Download PDF
      </a>
      <button
        className="btn btn-success btn-lg mb-4 ms-3"
        onClick={() => setShowPdf9(!showPdf9)}
      >
        {showPdf9 ? "Hide Notes" : "Show Notes"}
      </button>
      {showPdf9 && (
        <div className="mt-3">
          <iframe
            src={java8}
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">9. Java Polymorphism</h3>
      <a
        href={java9}
        download
        className="btn btn-primary btn-lg mb-4"
        onClick={notify}
      >
        Download PDF
      </a>
      <button
        className="btn btn-success btn-lg mb-4 ms-3"
        onClick={() => setShowPdf10(!showPdf10)}
      >
        {showPdf10 ? "Hide Notes" : "Show Notes"}
      </button>
      {showPdf10 && (
        <div className="mt-3">
          <iframe
            src={java9}
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">10. Java Package</h3>
      <a
        href={java10}
        download
        className="btn btn-primary btn-lg mb-4"
        onClick={notify}
      >
        Download PDF
      </a>
      <button
        className="btn btn-success btn-lg mb-4 ms-3"
        onClick={() => setShowPdf11(!showPdf11)}
      >
        {showPdf11 ? "Hide Notes" : "Show Notes"}
      </button>
      {showPdf11 && (
        <div className="mt-3">
          <iframe
            src={java10}
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">11. Java Exception Handling</h3>
      <a
        href={java11}
        download
        className="btn btn-primary btn-lg mb-4"
        onClick={notify}
      >
        Download PDF
      </a>
      <button
        className="btn btn-success btn-lg mb-4 ms-3"
        onClick={() => setShowPdf12(!showPdf12)}
      >
        {showPdf12 ? "Hide Notes" : "Show Notes"}
      </button>
      {showPdf12 && (
        <div className="mt-3">
          <iframe
            src={java11}
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">12. Java MultiThreading</h3>
      <a
        href={java12}
        download
        className="btn btn-primary btn-lg mb-4"
        onClick={notify}
      >
        Download PDF
      </a>
      <button
        className="btn btn-success btn-lg mb-4 ms-3"
        onClick={() => setShowPdf13(!showPdf13)}
      >
        {showPdf13 ? "Hide Notes" : "Show Notes"}
      </button>
      {showPdf13 && (
        <div className="mt-3">
          <iframe
            src={java12}
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">13. Java Database Connectivity (Jdbc)</h3>
      <a
        href={java13}
        download
        className="btn btn-primary btn-lg mb-4"
        onClick={notify}
      >
        Download PDF
      </a>
      <button
        className="btn btn-success btn-lg mb-4 ms-3"
        onClick={() => setShowPdf14(!showPdf14)}
      >
        {showPdf14 ? "Hide Notes" : "Show Notes"}
      </button>
      {showPdf14 && (
        <div className="mt-3">
          <iframe
            src={java13}
            width="100%"
            height="600px"
            style={{
                  border: "1px solid #ccc",
                  borderRadius: "10px"
            }}
            onLoad={() => toast.success("Notes Loaded Successfully...", { autoClose: 1000, transition: null })}
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">14. Java Full Notes</h3>
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
            width="100%"
            height="600px"
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
      <h3 className="mb-4">1. Top 20 Question & Answer Of Java</h3>

      <a
        href={question}
        download
        className="btn btn-primary btn-lg mb-3"
        onClick={notify}
      >
        Download PDF
      </a>

      <button
        className="btn btn-success btn-lg mb-3 ms-3"
        onClick={() => setShowPdf15(!showPdf15)}
      >
        {showPdf15 ? "Hide Notes" : "Show Notes"}
      </button>

      {showPdf15 && (
        <div className="mt-3">
          <iframe
            src={question}
            width="100%"
            height="600px"
            title="OOPS Notes"
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
  )
}
export default Java;