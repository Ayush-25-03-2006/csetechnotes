import introduction from "./Dsa/introduction&OverviewtoDSA.pdf";
import ll1 from "./Dsa/LINKEDLIST1.pdf";
import ll2 from "./Dsa/linkedlist2.pdf";
import ll3 from "./Dsa/linkedlist3.pdf";
import ll4 from "./Dsa/linkedlist4.pdf";
// import ll5 from "./Dsa/linkedlist5.pdf";
import ll6 from "./Dsa/linkedlist6.pdf";
import ll7 from "./Dsa/linkedlist7.pdf";
import ll8 from "./Dsa/linkedlist8.pdf";

import stack1 from "./Dsa/STACKArraycreating&display.pdf";
import stack2 from "./Dsa/STACKpush,pop,peek.pdf";
import stack3 from "./Dsa/stackLinkedListRepresentation.pdf";
import stack4 from "./Dsa/stackArithmeticExpression.pdf";

import queue1 from "./Dsa/QUEUEcreate&display.pdf";
import queue2 from "./Dsa/QUEUElinkedlistrepresentation.pdf";
import queue3 from "./Dsa/CIRCULARQUEUE.pdf";

import sort1 from "./Dsa/QUICKSORT.pdf";
import sort2 from "./Dsa/MERGESORT.pdf";
import sort3 from "./Dsa/HEAPSORT.pdf";
import sort4 from "./Dsa/Sorting&Searching.pdf";

import question from "./Dsa/DSATOP30QUES-ANS.pdf";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
function Dsa() {
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

    const [showPdf16, setShowPdf16] = useState(false);
    const [showPdf17, setShowPdf17] = useState(false);
    const [showPdf18, setShowPdf18] = useState(false);
    const [showPdf19, setShowPdf19] = useState(false);

    const [showPdf20, setShowPdf20] = useState(false);
    
    const [showPdf21,setShowPdf21] = useState(false);

    const notify = () => toast("Downloading Notes For You",{autoClose:1000,transition:null}); 
        return (
    <div className="container mt-4">
    <u><h3 >Topic Wise Notes Content</h3></u>
    <hr />
    <h3 className="mb-4">1. Introduction & Overview Of Dsa</h3>
    <a
      href={introduction}
      download
      className="btn btn-primary btn-lg mb-4"
      onClick={notify}
    >
      Download PDF
    </a>
    <button
      className="btn btn-success btn-lg mb-4 ms-3"
      onClick={() => setShowPdf21(!showPdf21)}
    >
      {showPdf21 ? "Hide Notes" : "Show Notes"}
    </button>
    {showPdf21 && (
      <div className="mt-3">
        <iframe
          src={introduction}
          width="70%"
          height="200px"
          title="OOPS Notes"
        ></iframe>
      </div>
    )}
  <hr />
  <h1> # Linked List</h1>
  <hr />
    <h3 className="mb-4">1. Linked List In C</h3>
    <a
      href={ll1}
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
          src={ll1}
          width="70%"
          height="200px"
          title="OOPS Notes"
        ></iframe>
      </div>
    )}
    <hr />
           <h3 className="mb-4">2. Singly Linked List In C (Creating & Displaying Of Node)</h3>
    
          <a
            href={ll2}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf2(!showPdf2)}
          >
            {showPdf2 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf2 && (
            <div className="mt-3">
              <iframe
                src={ll2}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
  <hr />
           <h3 className="mb-4">3. Singly Linked List In C (Traversing & Searching Of Node)</h3>
    
          <a
            href={ll3}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf3(!showPdf3)}
          >
            {showPdf3 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf3 && (
            <div className="mt-3">
              <iframe
                src={ll3}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
  <hr />
           <h3 className="mb-4">4. Singly Linked List In C (Insertion Of Node)</h3>
    
          <a
            href={ll4}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf4(!showPdf4)}
          >
            {showPdf4 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf4 && (
            <div className="mt-3">
              <iframe
                src={ll4}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
  {/* <hr />
           <h3 className="mb-4">5. Linked List In C Part 5</h3>
    
          <a
            href={ll5}
            download
            className="btn btn-primary btn-lg mb-3"
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf5(!showPdf5)}
          >
            {showPdf5 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf5 && (
            <div className="mt-3">
              <iframe
                src={ll5}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )} */}
  <hr />
           <h3 className="mb-4">6. Circular Singly Linked List In C (Create & Display Of Node)</h3>
    
          <a
            href={ll6}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf6(!showPdf6)}
          >
            {showPdf6 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf6 && (
            <div className="mt-3">
              <iframe
                src={ll6}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
  <hr />
           <h3 className="mb-4">7. Circular Singly Linked List In C (Insertion & Deletion Of Node)</h3>
    
          <a
            href={ll7}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf7(!showPdf7)}
          >
            {showPdf7 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf7 && (
            <div className="mt-3">
              <iframe
                src={ll7}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
  <hr />
           <h3 className="mb-4">8. Doubly Linked List In C (Doubly Linked List)</h3>
    
          <a
            href={ll8}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf8(!showPdf8)}
          >
            {showPdf1 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf8 && (
            <div className="mt-3">
              <iframe
                src={ll8}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
          <hr />
          <h1> # Stack </h1>
                          <hr />
           <h3 className="mb-4">1. Implementation Of Stack using Array In C (Creating & Displaying)</h3>
    
          <a
            href={stack1}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf9(!showPdf9)}
          >
            {showPdf9 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf9 && (
            <div className="mt-3">
              <iframe
                src={stack1}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
          <hr />
           <h3 className="mb-4">2. Implementation Of Stack using Array In C (Push, Pop & Peek)</h3>
    
          <a
            href={stack2}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf10(!showPdf10)}
          >
            {showPdf10 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf10 && (
            <div className="mt-3">
              <iframe
                src={stack2}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
          <hr />
           <h3 className="mb-4">3. Implementation Of Stack using Linked List In C (Create & Display)</h3>
    
          <a
            href={stack3}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf11(!showPdf11)}
          >
            {showPdf11 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf11 && (
            <div className="mt-3">
              <iframe
                src={stack3}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
          <hr />
           <h3 className="mb-4">4. Arithmetic Expression In Stack</h3>
    
          <a
            href={stack4}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf12(!showPdf12)}
          >
            {showPdf12 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf12 && (
            <div className="mt-3">
              <iframe
                src={stack4}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
          <hr />
          <h1> # Queue</h1>
          <hr />
           <h3 className="mb-4">1. Implementation Of Queue using Array In C (Create & Display)</h3>
    
          <a
            href={queue1}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf13(!showPdf13)}
          >
            {showPdf13 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf13 && (
            <div className="mt-3">
              <iframe
                src={queue1}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
          <hr />
           <h3 className="mb-4">2. Implementation Of Queue using Linked List In C (Create & Display)</h3>
    
          <a
            href={queue2}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf14(!showPdf14)}
          >
            {showPdf14 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf14 && (
            <div className="mt-3">
              <iframe
                src={queue2}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
          <hr />
           <h3 className="mb-4">3. Implementation Of Circular Queue using Linked List In C (Create & Display)</h3>
    
          <a
            href={queue3}
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
                src={queue3}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
          <hr />
          <h1># Searching & Sorting Algorithm's</h1>
          <hr />
           <h3 className="mb-4">1. Quick Sort</h3>
          <a
            href={sort1}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf16(!showPdf16)}
          >
            {showPdf16 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf16 && (
            <div className="mt-3">
              <iframe
                src={sort1}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
          <hr />
           <h3 className="mb-4">2. Merge Sort</h3>
    
          <a
            href={sort2}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf17(!showPdf17)}
          >
            {showPdf17 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf17 && (
            <div className="mt-3">
              <iframe
                src={sort2}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
          <hr />
           <h3 className="mb-4">3. Heap Sort</h3>
    
          <a
            href={sort3}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf18(!showPdf18)}
          >
            {showPdf18 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf18 && (
            <div className="mt-3">
              <iframe
                src={sort3}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
          <hr />
           <h3 className="mb-4">4. Searching & Sorting</h3>
    
          <a
            href={sort4}
            download
            className="btn btn-primary btn-lg mb-3"
            onClick={notify}
          >
            Download PDF
          </a>
    
          <button
            className="btn btn-success btn-lg mb-3 ms-3"
            onClick={() => setShowPdf19(!showPdf19)}
          >
            {showPdf19 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf19 && (
            <div className="mt-3">
              <iframe
                src={sort4}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
          <hr />
          <h1 style={{color: "crimson"}}>@ Important Question</h1>
          <hr />
           <h3 className="mb-4">1. Top 30 Question & Answer Of DSA</h3>
    
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
            onClick={() => setShowPdf20(!showPdf20)}
          >
            {showPdf20 ? "Hide Notes" : "Show Notes"}
          </button>
    
          {showPdf20 && (
            <div className="mt-3">
              <iframe
                src={question}
                width="70%"
                height="200px"
                title="OOPS Notes"
              ></iframe>
            </div>
          )}
      <ToastContainer position="top-center"/>
  </div>
    )
}
export default Dsa;
