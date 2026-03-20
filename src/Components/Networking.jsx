import { useState } from "react";
import Network from "./Networking/ComputerNetworkNotes.pdf";

function Networking() {
    const [showPdf1, setShowPdf1] = useState(false);

    return(
        <>
        <div className="container mt-4">
        <u><h3 >Topic Wise Notes Content</h3></u>
            <hr />
            <h3 className="mb-4">1. Computer Network Notes</h3>
                  <a
                    href={Network}
                    download
                    className="btn btn-primary btn-lg mb-4"
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
                        src={Network}
                        width="70%"
                        height="200px"
                        title="OOPS Notes"
                      ></iframe>
                    </div>
                  )}
                  </div>
                  
        </>
    )
}
export default Networking;