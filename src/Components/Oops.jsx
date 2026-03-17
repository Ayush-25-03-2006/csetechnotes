import { useState } from "react";
import classObject from "./Oops/CLASS&OBJECTpart1.pdf";
import OopsBasic from "./Oops/BASICC++.pdf";
import OopsBasic2 from "./Oops/CLASS&OBJECTpart2.pdf";
import Constructor from "./Oops/CONSTRUCTOR.pdf";
import CopyConstructor from "./Oops/COPYCONSTRUCTOR.pdf";
import Destructor from "./Oops/Destructor.pdf";
import Encapsulation from "./Oops/ENCAPSULATION.pdf";
import Inheritance from "./Oops/INHERITANCE.pdf";
import TypesOfInheritance from "./Oops/TYPESOFINHERITANCE.pdf";
import Polymorphism from "./Oops/POLYMORPHISM.pdf";
import FriendFunctionInlineFunction from "./Oops/FRIENDFUNCTIONINLINEFUNCTION.pdf";
import question from "./Oops/OOPsTOP25QUES&ANS.pdf";
function Oops() {

  const [showPdf1, setShowPdf1] = useState(false);
  const [showPdf2, setShowPdf2] = useState(false);
  const [showPdf3, setShowPdf3] = useState(false);
  const [showPdf4, setShowPdf4] = useState(false);
  const [showPdf5, setShowPdf5] =  useState(false);
  const [showPdf6, setShowPdf6] = useState(false);
  const [showPdf7, setShowPdf7] = useState(false);
  const [showPdf8, setShowPdf8] =  useState(false);
  const [showPdf9, setShowPdf9] = useState(false);
  const [showPdf10, setShowPdf10] = useState(false);
  const [showPdf11, setShowPdf11] = useState(false);

  const [showPdf12, setShowPdf12] = useState(false);

  return (
    <div className="container mt-4">
      <u><h3 >Topic Wise Notes Content</h3></u>
    <hr/>
      <h3 className="mb-4">1. OOPS Basic in C++</h3>

      <a
        href={OopsBasic}
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
            src={OopsBasic}
            width="70%"
            height="200px"
            title="OOPS Notes"
          ></iframe>
        </div>
      )}
      <hr />
       <h3 className="mb-4">2. Class & Object In C++ Part 1</h3>

      <a
        href={classObject}
        download
        className="btn btn-primary btn-lg mb-3"
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
            src={classObject}
            width="70%"
            height="200px"
            title="OOPS Notes"
          ></iframe>
        </div>
      )}
      <hr />
    <h3 className="mb-4">3. Class & Object In C++ Part 2</h3>

      <a
        href={OopsBasic2}
        download
        className="btn btn-primary btn-lg mb-3"
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
            src={OopsBasic2}
            width="70%"
            height="200px"
            title="OOPS Notes"
          ></iframe>
        </div>
      )}
      <hr />
    <h3 className="mb-4">4. Constructor in C++</h3>

      <a
        href={Constructor}
        download
        className="btn btn-primary btn-lg mb-3"
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
            src={Constructor}
            width="70%"
            height="200px"
            title="OOPS Notes"
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">5. Copy Constructor in C++</h3>

      <a
        href={CopyConstructor}
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
            src={CopyConstructor}
            width="70%"
            height="200px"
            title="OOPS Notes"
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">6. Destructor in C++</h3>

      <a
        href={Destructor}
        download
        className="btn btn-primary btn-lg mb-3"
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
            src={Destructor}
            width="70%"
            height="200px"
            title="OOPS Notes"
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">7. Encapsulation in C++</h3>

      <a
        href={Encapsulation}
        download
        className="btn btn-primary btn-lg mb-3"
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
            src={Encapsulation}
            width="70%"
            height="200px"
            title="OOPS Notes"
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">8. Inheritance in C++</h3>

      <a
        href={Inheritance}
        download
        className="btn btn-primary btn-lg mb-3"
      >
        Download PDF
      </a>

      <button
        className="btn btn-success btn-lg mb-3 ms-3"
        onClick={() => setShowPdf8(!showPdf8)}
      >
        {showPdf8 ? "Hide Notes" : "Show Notes"}
      </button>

      {showPdf8 && (
        <div className="mt-3">
          <iframe
            src={Inheritance}
            width="70%"
            height="200px"
            title="OOPS Notes"
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">9. Types Of Inheritance in C++</h3>

      <a
        href={TypesOfInheritance}
        download
        className="btn btn-primary btn-lg mb-3"
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
            src={TypesOfInheritance}
            width="70%"
            height="200px"
            title="OOPS Notes"
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">10. Polymorphism in C++</h3>

      <a
        href={Polymorphism}
        download
        className="btn btn-primary btn-lg mb-3"
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
            src={Polymorphism}
            width="70%"
            height="200px"
            title="OOPS Notes"
          ></iframe>
        </div>
      )}
      <hr />
      <h3 className="mb-4">11. Friend Function & Inline Function in C++</h3>

      <a
        href={FriendFunctionInlineFunction}
        download
        className="btn btn-primary btn-lg mb-3"
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
            src={FriendFunctionInlineFunction}
            width="70%"
            height="200px"
            title="OOPS Notes"
          ></iframe>
        </div>
      )}
      <hr />
      <h1 style={{color:"crimson"}}>@ Important Question</h1>
      <hr />
      <h3 className="mb-4">1. Top 25 Question & Answer Of Oops</h3>

      <a
        href={question}
        download
        className="btn btn-primary btn-lg mb-3"
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
            src={question}
            width="70%"
            height="200px"
            title="OOPS Notes"
          ></iframe>
        </div>
      )}
      <hr />
    </div>
    
  );
}

export default Oops;