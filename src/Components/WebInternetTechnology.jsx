import { useEffect, useState } from "react";
import question1 from "./Wit/WIT TOP 20 QUES-ANS.pdf";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WebinternetTechnology() {
    const [showPdf1, setShowPdf1] = useState(false);

    useEffect(() => {
        document.title = "Web & Internet Technology";
    }, []);

    const notify = () => {
        toast("Downloading Notes For You", {
            autoClose: 1000,
        });
    };

    return (
        <>
            <div className="container mt-4">
                <h2
                    style={{
                        color: "black",
                        backgroundColor: "white",
                        borderRadius: "25px",
                        fontFamily: "sans-serif",
                        fontSize: "40px",
                    }}
                >
                    Web & Internet Technology
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
                    1. WIT Top 20 Questions & Answers
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
                            title="WIT Top 20 Questions and Answers"
                            width="100%"
                            height="600px"
                            loading="eager"
                            style={{
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                            }}
                            onLoad={() =>
                                toast.success(
                                    "Notes Loaded Successfully",
                                    { autoClose: 1000 }
                                )
                            }
                        />
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

export default WebinternetTechnology;
