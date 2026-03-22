import { useState } from "react";
import java from "./Java/javanotes.pdf";
import { toast, ToastContainer } from "react-toastify";
function Java() {
    const [showPdf1, setShowPdf1] = useState(false);
    const notify = () => toast("Downloading Notes For You",{autoClose:1000, transition:null}) 
    return(
        <div className="container mt-4">
        <u><h3 >Topic Wise Notes Content</h3></u>
        <hr />
          <h3 className="mb-4">1. Java Notes</h3>
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
                height="200px"
                title="OOPS Notes"
                onLoad={() => toast.success("Notes Loaded Successfully...")}
              ></iframe>
            </div>
          )}
          <ToastContainer position="top-center" theme="dark"/>
      </div>
    )
}
export default Java;