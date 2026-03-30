import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import question1 from "./C/PPS TOP 30 QUESTIONS (2023-24)❓.pdf";
import question2 from "./C/PPS UPDATED PYQ++++ QUES-ANS.pdf";

function C() {
    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
    const notify = () => toast("Downloading Notes For You",{autoClose:1000,transition:null});
    return (
        <div className="container mt-4">
            <u><h3>Topic Wise Notes Content</h3></u>
            <hr />
            <h3 className="mb-4">1. PPS Updated Question & Answer</h3>
            <a href={question2}
                download
                className="btn btn-primary btn-lg mb-4"
                onClick={notify}
            >Download Pdf</a>
            <button
                className="btn btn-success btn-lg mb-4 ms-3"
                onClick={() => setShowPdf1(!showPdf1)}
            >
                {showPdf1 ? "Hide Notes" : "Show Notes"}
            </button>
            {showPdf1 && (
                <div
                    className="mt-3">
                        <iframe src={question2} 
                            width="70%"
                            height="200px"
                            onLoad={() => toast.success("Notes Loaded Successully",{autoClose:1000,transition:null})}
                        ></iframe>
                    </div>
            )}
            <hr />
            <h3 className="mb-4">2. PPS Top 30 Question & Answer</h3>
            <a href={question1}
                download
                className="btn btn-primary btn-lg mb-4"
                onClick={notify}
            >Download Pdf</a>
            <button
                className="btn btn-success btn-lg mb-4 ms-3"
                onClick={() => setShowPdf2(!showPdf2)}
            >
                {showPdf2 ? "Hide Notes" : "Show Notes"}
            </button>
            {showPdf2 && (
                <div
                    className="mt-3">
                        <iframe src={question1} 
                            width="70%"
                            height="200px"
                            onLoad={() => toast.success("Notes Loaded Successully",{autoClose:1000,transition:null})}
                        ></iframe>
                    </div>
            )}
            <hr />
            {/* <button><a href="">Play Quiz</a></button> */}
            <ToastContainer position="top-center" theme="dark"/>
        </div>
    )
}
export default C;