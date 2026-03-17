import { useState } from "react";

import ll1 from "./Dsa/LINKEDLIST1.pdf";
import ll2 from "./Dsa/linkedlist2.pdf";
import ll3 from "./Dsa/linkedlist3.pdf";
import ll4 from "./Dsa/linkedlist4.pdf";
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

function Dsa() {

const [openPdf, setOpenPdf] = useState(null);

const notes = [
{ title: "Linked List In C", file: ll1 },
{ title: "Singly Linked List (Create & Display)", file: ll2 },
{ title: "Singly Linked List (Traverse & Search)", file: ll3 },
{ title: "Singly Linked List (Insertion)", file: ll4 },
{ title: "Circular Linked List (Create & Display)", file: ll6 },
{ title: "Circular Linked List (Insertion & Deletion)", file: ll7 },
{ title: "Doubly Linked List", file: ll8 },

```
{ title: "Stack Using Array (Create & Display)", file: stack1 },
{ title: "Stack Using Array (Push Pop Peek)", file: stack2 },
{ title: "Stack Using Linked List", file: stack3 },
{ title: "Arithmetic Expression Using Stack", file: stack4 },

{ title: "Queue Using Array", file: queue1 },
{ title: "Queue Using Linked List", file: queue2 },
{ title: "Circular Queue", file: queue3 },

{ title: "Quick Sort", file: sort1 },
{ title: "Merge Sort", file: sort2 },
{ title: "Heap Sort", file: sort3 },
{ title: "Searching & Sorting", file: sort4 },

{ title: "Top 30 DSA Questions", file: question }
```

];

return ( <div className="container mt-4">

```
  <h2 className="mb-4">📘 DSA Notes</h2>

  {notes.map((note, index) => (
    <div key={index} className="mb-4">

      <h4>{index + 1}. {note.title}</h4>

      <a
        href={note.file}
        download
        className="btn btn-primary btn-lg mb-2"
      >
        Download PDF
      </a>

      <button
        className="btn btn-success btn-lg mb-2 ms-3"
        onClick={() =>
          setOpenPdf(openPdf === index ? null : index)
        }
      >
        {openPdf === index ? "Hide Notes" : "Show Notes"}
      </button>

      {openPdf === index && (
        <div className="mt-3">
          <iframe
            src={note.file}
            width="70%"
            height="250px"
            title="Notes"
          />
        </div>
      )}

      <hr />

    </div>
  ))}

</div>
```

);
}

export default Dsa;
