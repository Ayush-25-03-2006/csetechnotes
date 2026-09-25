import { toast, ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";

import ml1 from "./Ml/ML TOP 20 QUES-ANS.pdf";

function Ml() {
    const [showPdf1, setShowPdf1] = useState(false);

    useEffect(() => {
        document.title = "Machine Learning";
    }, []);

    const notify = () => {
        toast.info("Downloading Notes For You", {
            autoClose: 1000,
            transition: null
        });
    };

    const togglePdf = () => {
        setShowPdf1(!showPdf1);
    };

    return (
        <>
            <div className="container mt-4">

                <h2
                    style={{
                        color:"black", backgroundColor:"white",borderRadius:"25px",
                        fontFamily: "sans-serif",
                        fontSize: "40px"
                    }}
                >
                    Machine Learning
                </h2>

                <hr />

                <u>
                    <h3>Topic Wise Notes Content</h3>
                </u>

                <hr />

                <h1 style={{ color: "crimson" }}>
                    @ Important Questions
                </h1>

                <hr />

                <h3 className="mb-4">
                    1. Top 20 Questions & Answers of Machine Learning
                </h3>

                {/* Download Button */}
                <a
                    href={ml1}
                    download
                    className="btn btn-primary btn-lg mb-3"
                    onClick={notify}
                >
                    Download PDF
                </a>

                {/* Show/Hide Button */}
                <button
                    className="btn btn-success btn-lg mb-3 ms-3"
                    onClick={togglePdf}
                >
                    {showPdf1 ? "Hide Notes" : "Show Notes"}
                </button>

                {/* PDF Viewer */}
                {showPdf1 && (
                    <div className="mt-3">
                        <iframe
                            src={ml1}
                            width="100%"
                            height="600px"
                            loading="lazy"
                            title="Machine Learning Notes"
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "10px"
                            }}
                            onLoad={() =>
                                toast.success(
                                    "Notes Loaded Successfully...",
                                    {
                                        autoClose: 1000,
                                        transition: null
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
        </>
    );
}

export default Ml;