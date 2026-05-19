import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import question1 from "./Ai/AI TOP 25 QUES-ANS.pdf";

function Ai() {

    const [showPdf1, setShowPdf1] = useState(false);

    useEffect(() => {
        document.title = "Artificial Intelligence";
    }, []);

    const notify = () => {
        toast.success("Downloading Pdf For You", {
            autoClose: 1000,
        });
    };

    return (
        <div className="container mt-4">

            <h2
                style={{
                    color: "black",
                    fontFamily: "sans-serif",
                    fontSize: "40px"
                }}
            >
                Artificial Intelligence
            </h2>

            <hr />

            <u>
                <h3>Topic Wise Notes Content</h3>
            </u>

            <hr />

            <h1
                style={{
                    color: "crimson",
                    fontFamily: "sans-serif"
                }}
            >
                @ Important Questions
            </h1>

            <hr />

            <h3 className="mb-4">
                1. Ai Top 25 Questions - Answers
            </h3>

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
                onClick={() => setShowPdf1(!showPdf1)}
            >
                {showPdf1 ? "Hide Notes" : "Show Notes"}
            </button>

            {showPdf1 && (
                <div className="mt-3">
                    <iframe
                        src={question1}
                        width="70%"
                        height="300px"
                        title="Toc Notes"
                        onLoad={() =>
                            toast.success(
                                "Notes Loaded Successfully...",
                                {
                                    autoClose: 1000
                                }
                            )
                        }
                    ></iframe>
                </div>
            )}

            <ToastContainer
                position="top-center"
                theme="dark"
            />

        </div>
    );
}

export default Ai;