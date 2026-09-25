import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import lexical from "./Compiler_Design/Lexical Analyser.pdf";
import com1 from "./Compiler_Design/Syntax Analyser.pdf";
import com2 from "./Compiler_Design/FIRST and FOLLOW.pdf";
import com3 from "./Compiler_Design/Types of Parsing.pdf";
import com4 from "./Compiler_Design/LL(1).pdf";
import com5 from "./Compiler_Design/Bottom-Up Parsing.pdf";
import com6 from "./Compiler_Design/LR(0).pdf";
import com7 from "./Compiler_Design/SLR(1).pdf";
import com8 from "./Compiler_Design/LR(1) & CLR(1).pdf";
import com9 from "./Compiler_Design/LALR(1).pdf";

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
    const [showPdf7, setShowPdf7] = useState(false);
    const [showPdf8, setShowPdf8] = useState(false);
    const [showPdf9, setShowPdf9] = useState(false);
    const [showPdf10, setShowPdf10] = useState(false);

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
                <h2 style={{color:"black", backgroundColor:"white",borderRadius:"25px",fontFamily: "sans-serif", fontSize: "40px" }}>Compiler Design</h2>
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
                            loading="eager"
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
                <h1 style={{color:"black", backgroundColor:"white",borderRadius:"25px",}}> # Syntax Analyser</h1>
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
                <h3 className="mb-4">6. LR(0) </h3>
                <a
                    href={com6}
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
                            src={com6}
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
                <h3 className="mb-4">7. SLR(1) </h3>
                <a
                    href={com7}
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
                            src={com7}
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
                <h3 className="mb-4">8. LR(1) & CLR(1) </h3>
                <a
                    href={com8}
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
                            src={com8}
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
                <h3 className="mb-4">9. LALR(1) </h3>
                <a
                    href={com9}
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
                            src={com9}
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
                <ToastContainer
                    position="top-center"
                    theme="dark"
                />

            </div>
        </>
    );
}

export default CompilerDesign;