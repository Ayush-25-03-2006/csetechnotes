import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import lexical from "./Compiler_Design/Lexical Analyser.pdf";
import com1 from "./Compiler_Design/Syntax Analyser.pdf";
import com2 from "./Compiler_Design/FIRST and FOLLOW.pdf";
import com3 from "./Compiler_Design/Types of Parsing.pdf";
import com4 from "./Compiler_Design/LL(1).pdf";
import com5 from "./Compiler_Design/Bottom-Up Parsing.pdf";

function CompilerDesign() {

    useEffect(() => {
        document.title = "Compiler Design";
    }, []);

    const [showPdf1, setShowPdf1] = useState(false);
    const [showPdf2, setShowPdf2] = useState(false);
    const [showPdf3, setShowPdf3] = useState(false);
    const [showPdf4, setShowPdf4] = useState(false);
    const [showPdf5, setShowPdf5] = useState(false);
    const [showPdf6, setShowPdf6] = useState(false);

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
                            width="100%"
                            height="600px"
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
                <hr />
                <h1 style={{color:"black"}}> # Syntax Analyser</h1>
                <hr />
                <h3 className="mb-4">1. Syntax Analyser</h3>
                <a
                    href={com1}
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
                            src={com1}
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
                <hr />
                <h3 className="mb-4">2. First & Follow</h3>
                <a
                    href={com2}
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
                            src={com2}
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
                <hr />
                <h3 className="mb-4">3. Types Of Parsing</h3>
                <a
                    href={com3}
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
                            src={com3}
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
                <hr />
                <h3 className="mb-4">4. LL (1)</h3>
                <a
                    href={com4}
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
                            src={com4}
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
                <hr />
                <h3 className="mb-4">5. Bottom-Up-Parsing </h3>
                <a
                    href={com5}
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
                            src={com5}
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
                <ToastContainer
                    position="top-center"
                    theme="dark"
                />

            </div>
        </>
    );
}

export default CompilerDesign;