import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import lexical from "./Compiler_Design/Lexical Analyser.pdf";

function CompilerDesign() {

    useEffect(() => {
        document.title = "Compiler Design";
    }, []);

    const [showPdf1, setShowPdf1] = useState(false);

    const notify = () => {
        toast("Downloading Notes For You", {
            autoClose: 1000,
            transition: null
        });
    };

    const showNotes = () => {
        setShowPdf1(!showPdf1);
    };

    return (
        <>
            <div className="container mt-4">
            <h2 style={{ color: "black", fontFamily: "sans-serif", fontSize: "40px" }}>Compiler Design</h2>
            <hr />
            <u><h3 >Topic Wise Notes Content</h3></u>
            <hr />
                <h3 className="mb-4">
                    1. Lexical Analyser
                </h3>
                <a
                    href={lexical}
                    download
                    className="btn btn-primary btn-lg mb-4"
                    onClick={notify}
                >
                    Download PDF
                </a>

                <button
                    className="btn btn-success btn-lg mb-4 ms-3"
                    onClick={showNotes}
                >
                    {showPdf1 ? "Hide Notes" : "Show Notes"}
                </button>

                {showPdf1 && (
                    <div className="mt-3">
                        <iframe
                            src={lexical}
                            width="70%"
                            height="500px"
                            title="Compiler Design - Lexical Analyser Notes"
                            style={{
                                marginBottom: "20px",
                                border: "1px solid #ddd"
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

export default CompilerDesign;