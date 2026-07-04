import { useEffect, useState } from "react";
import "./Dsa_Quiz.css";

function Dbms_quiz() {

    useEffect(() => {
        document.title = "Dbms Quiz"
    });

    const [submitted, setSubmitted] = useState(false);
    const [finalScore, setFinalScore] = useState(0);

    function submit() {
        setFinalScore(score);
        setSubmitted(true);
    }

    const [selected1, setSelected1] = useState(null);
    const [selected2, setSelected2] = useState(null);
    const [selected3, setSelected3] = useState(null);
    const [selected4, setSelected4] = useState(null);
    const [selected5, setSelected5] = useState(null);
    const [selected6, setSelected6] = useState(null);
    const [selected7, setSelected7] = useState(null);
    const [selected8, setSelected8] = useState(null);
    const [selected9, setSelected9] = useState(null);
    const [selected10, setSelected10] = useState(null);
    const [selected11, setSelected11] = useState(null);
    const [selected12, setSelected12] = useState(null);
    const [selected13, setSelected13] = useState(null);
    const [selected14, setSelected14] = useState(null);
    const [selected15, setSelected15] = useState(null);
    const [selected16, setSelected16] = useState(null);
    const [selected17, setSelected17] = useState(null);
    const [selected18, setSelected18] = useState(null);
    const [selected19, setSelected19] = useState(null);
    const [selected20, setSelected20] = useState(null);
    const [selected21, setSelected21] = useState(null);
    const [selected22, setSelected22] = useState(null);
    const [selected23, setSelected23] = useState(null);
    const [selected24, setSelected24] = useState(null);
    const [selected25, setSelected25] = useState(null);
    const [selected26, setSelected26] = useState(null);
    const [selected27, setSelected27] = useState(null);
    const [selected28, setSelected28] = useState(null);
    const [selected29, setSelected29] = useState(null);
    const [selected30, setSelected30] = useState(null);
    const [selected31, setSelected31] = useState(null);
    const [selected32, setSelected32] = useState(null);
    const [selected33, setSelected33] = useState(null);
    const [selected34, setSelected34] = useState(null);
    const [selected35, setSelected35] = useState(null);
    const [selected36, setSelected36] = useState(null);
    const [selected37, setSelected37] = useState(null);
    const [selected38, setSelected38] = useState(null);
    const [selected39, setSelected39] = useState(null);
    const [selected40, setSelected40] = useState(null);

    // here index is provided start from 0 to n -1
    const options1 = [
        "Every determinant may or may not be a super key.",
        "BCNF removes only partial dependency.",
        "Every determinant must be a super key.",
        "BCNF is weaker than 3NF."
    ];
    const correctAnswer1 = 2;

    const options2 = [
        "Double rectangle",
        "Diamond",
        "Single rectangle",
        "Double ellipse"
    ];
    const correctAnswer2 = 0;

    const options3 = [
        "BCNF",
        "2NF",
        "1NF",
        "3NF"
    ];
    const correctAnswer3 = 3;

    const options4 = [
        "Union Rule",
        "Transitivity Rule",
        "Decomposition Rule",
        "Augmentation Rule"
    ];
    const correctAnswer4 = 1;

    const options5 = [
        "Projection",
        "Union",
        "Natural Join",
        "Intersection"
    ];
    const correctAnswer5 = 2;

    const options6 = [
        "SELECT Name FROM Employee WHERE Salary > 50000;",
        "SELECT Name WHERE Salary > 50000 FROM Employee;",
        "SELECT * FROM Employee HAVING Salary > 50000;",
        "SELECT Name IN Employee WHERE Salary > 50000;"
    ];
    const correctAnswer6 = 0;

    const options7 = [
        "SELECT",
        "ORDER BY",
        "WHERE",
        "HAVING"
    ];
    const correctAnswer7 = 3;

    const options8 = [
        "Alternate Key",
        "Primary Key",
        "Candidate Key",
        "Super Key"
    ];
    const correctAnswer8 = 1;

    const options9 = [
        "Dense Index",
        "Sparse Index",
        "Secondary Index",
        "Clustered Index"
    ];
    const correctAnswer9 = 0;

    const options10 = [
        "Left Outer Join",
        "Full Outer Join",
        "Inner Join",
        "Right Outer Join"
    ];
    const correctAnswer10 = 2;

    const options11 = [
        "Trivial FD",
        "Multivalued Dependency",
        "Functional Dependency of Super Key",
        "Non-superkey determining another attribute"
    ];
    const correctAnswer11 = 3;

    const options12 = [
        "Join",
        "Selection",
        "Difference",
        "Union"
    ];
    const correctAnswer12 = 1;

    const options13 = [
        "2NF",
        "1NF",
        "BCNF",
        "3NF"
    ];
    const correctAnswer13 = 0;

    const options14 = [
        "Dirty Read",
        "Phantom Read",
        "Lost Update",
        "Cascading Rollback"
    ];
    const correctAnswer14 = 2;

    const options15 = [
        "Isolation",
        "Atomicity",
        "Durability",
        "Consistency"
    ];
    const correctAnswer15 = 1;

    const options16 = [
        "Rename",
        "Selection",
        "Division",
        "Projection"
    ];
    const correctAnswer16 = 3;

    const options17 = [
        "File Name",
        "Foreign Key Only",
        "Physical Ordering of Records",
        "Hash Value Only"
    ];
    const correctAnswer17 = 2;

    const options18 = [
        "Relation",
        "SQL Result before DISTINCT",
        "Temporary Table",
        "Table View"
    ];
    const correctAnswer18 = 0;

    const options19 = [
        "3NF",
        "BCNF",
        "1NF",
        "2NF"
    ];
    const correctAnswer19 = 3;

    const options20 = [
        "2-tier",
        "3-Schema Architecture",
        "Client-only Architecture",
        "1-tier"
    ];
    const correctAnswer20 = 1;

    const options21 = [
        "3NF",
        "4NF",
        "BCNF",
        "2NF"
    ];
    const correctAnswer21 = 1;

    const options22 = [
        "A",
        "AC",
        "B",
        "None of these"
    ];
    const correctAnswer22 = 3;

    const options23 = [
        "Division",
        "Projection",
        "Selection",
        "Union"
    ];
    const correctAnswer23 = 0;

    const options24 = [
        "Isolation",
        "Atomicity",
        "Availability",
        "Consistency"
    ];
    const correctAnswer24 = 2;

    const options25 = [
        "Rectangle",
        "Double Ellipse",
        "Diamond",
        "Dashed Ellipse"
    ];
    const correctAnswer25 = 3;

    const options26 = [
        "TRUNCATE",
        "DROP",
        "DELETE",
        "REMOVE"
    ];
    const correctAnswer26 = 1;

    const options27 = [
        "Hash Index",
        "Sparse Index",
        "Sequential Index",
        "B+ Tree Index"
    ];
    const correctAnswer27 = 0;

    const options28 = [
        "AVG()",
        "SUM()",
        "COUNT(*)",
        "COUNT(column_name)"
    ];
    const correctAnswer28 = 2;

    const options29 = [
        "Rename",
        "Join",
        "Projection",
        "Selection"
    ];
    const correctAnswer29 = 0;

    const options30 = [
        "ORDER BY",
        "DISTINCT",
        "WHERE",
        "HAVING"
    ];
    const correctAnswer30 = 3;

    const options31 = [
        "Full Outer Join",
        "Left Outer Join",
        "Right Outer Join",
        "Inner Join"
    ];
    const correctAnswer31 = 0;

    const options32 = [
        "Partial Dependency",
        "Transitive Dependency",
        "Functional Dependency",
        "Multivalued Dependency"
    ];
    const correctAnswer32 = 1;

    const options33 = [
        "INSERT",
        "ALTER",
        "UPDATE",
        "DELETE"
    ];
    const correctAnswer33 = 1;

    const options34 = [
        "Shared Lock",
        "Exclusive Lock",
        "Binary Lock",
        "Intent Lock"
    ];
    const correctAnswer34 = 0;

    const options35 = [
        "Heap File",
        "Cluster File",
        "Sequential File",
        "Hash File"
    ];
    const correctAnswer35 = 2;

    const options36 = [
        "It is always dense.",
        "It requires no sorting.",
        "It is created only on foreign keys.",
        "It is built on the ordering key."
    ];
    const correctAnswer36 = 3;

    const options37 = [
        "Only primary keys",
        "Only one copy of each common attribute",
        "Duplicate common attributes",
        "No common attributes"
    ];
    const correctAnswer37 = 1;

    const options38 = [
        "Serializable Schedule",
        "Recoverable Schedule",
        "Cascadeless Schedule",
        "Irrecoverable Schedule"
    ];
    const correctAnswer38 = 3;

    const options39 = [
        "Projection",
        "Cartesian Product",
        "Rename",
        "Selection"
    ];
    const correctAnswer39 = 0;

    const options40 = [
        "Faster ORDER BY operations",
        "Improved search performance",
        "Faster retrieval",
        "Reduced insertion cost"
    ];
    const correctAnswer40 = 3;

    const selectedAnswers = [
        selected1, selected2, selected3, selected4, selected5,
        selected6, selected7, selected8, selected9, selected10,
        selected11, selected12, selected13, selected14, selected15,
        selected16, selected17, selected18, selected19, selected20,
        selected21, selected22, selected23, selected24, selected25,
        selected26, selected27, selected28, selected29, selected30,
        selected31, selected32, selected33, selected34, selected35,
        selected36, selected37, selected38, selected39, selected40
    ];

    const correctAnswers = [
        correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5,
        correctAnswer6, correctAnswer7, correctAnswer8, correctAnswer9, correctAnswer10,
        correctAnswer11, correctAnswer12, correctAnswer13, correctAnswer14, correctAnswer15,
        correctAnswer16, correctAnswer17, correctAnswer18, correctAnswer19, correctAnswer20,
        correctAnswer21, correctAnswer22, correctAnswer23, correctAnswer24, correctAnswer25,
        correctAnswer26, correctAnswer27, correctAnswer28, correctAnswer29, correctAnswer30,
        correctAnswer31, correctAnswer32, correctAnswer33, correctAnswer34, correctAnswer35,
        correctAnswer36, correctAnswer37, correctAnswer38, correctAnswer39, correctAnswer40
    ];

    const score = selectedAnswers.reduce((total, answer, index) => {
        return total + (answer === correctAnswers[index] ? 1 : 0)
    }, 0);

    return (
        <>
            <div className="contain">
        <p className="question">
    1. Which of the following statements about BCNF is correct?
        </p>
{options1.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected1 !== null
            ? index === correctAnswer1
                ? "correct"
                : index === selected1
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer1 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected1(index);
        }}
        disabled={selected1 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    2. A weak entity in an ER diagram is represented by:
</p>

{options2.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected2 !== null
            ? index === correctAnswer2
                ? "correct"
                : index === selected2
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer2 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected2(index);
        }}
        disabled={selected2 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    3. Which normal form removes transitive dependency?
</p>

{options3.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected3 !== null
            ? index === correctAnswer3
                ? "correct"
                : index === selected3
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer3 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected3(index);
        }}
        disabled={selected3 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    4. If relation R(A, B, C) has FD A→B and B→C, then A→C follows by:
</p>

{options4.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected4 !== null
            ? index === correctAnswer4
                ? "correct"
                : index === selected4
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer4 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected4(index);
        }}
        disabled={selected4 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    5. Which relational algebra operator is not commutative?
</p>

{options5.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected5 !== null
            ? index === correctAnswer5
                ? "correct"
                : index === selected5
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer5 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected5(index);
        }}
        disabled={selected5 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    6. Which SQL query returns the names of employees whose salary is greater than 50000?
</p>

{options6.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected6 !== null
            ? index === correctAnswer6
                ? "correct"
                : index === selected6
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer6 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected6(index);
        }}
        disabled={selected6 !== null}
    >
        {option}
    </button>
))}

                <p className="question">
    7. Which SQL clause is processed after GROUP BY?
</p>

{options7.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected7 !== null
            ? index === correctAnswer7
                ? "correct"
                : index === selected7
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer7 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected7(index);
        }}
        disabled={selected7 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    8. Which key uniquely identifies a tuple and is chosen by the designer?
</p>

{options8.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected8 !== null
            ? index === correctAnswer8
                ? "correct"
                : index === selected8
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer8 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected8(index);
        }}
        disabled={selected8 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    9. Which index requires an index entry for every search-key value?
</p>

{options9.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected9 !== null
            ? index === correctAnswer9
                ? "correct"
                : index === selected9
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer9 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected9(index);
        }}
        disabled={selected9 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    10. Which join returns only matching tuples from both relations?
</p>

{options10.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected10 !== null
            ? index === correctAnswer10
                ? "correct"
                : index === selected10
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer10 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected10(index);
        }}
        disabled={selected10 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    11. Which dependency violates BCNF but may satisfy 3NF?
</p>

{options11.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected11 !== null
            ? index === correctAnswer11
                ? "correct"
                : index === selected11
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer11 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected11(index);
        }}
        disabled={selected11 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    12. Which of the following is a unary relational algebra operator?
</p>

{options12.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected12 !== null
            ? index === correctAnswer12
                ? "correct"
                : index === selected12
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer12 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected12(index);
        }}
        disabled={selected12 !== null}
    >
        {option}
    </button>
))}
                <p className="question">
    13. If every non-key attribute depends on the whole candidate key, then the relation is in:
</p>

{options13.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected13 !== null
            ? index === correctAnswer13
                ? "correct"
                : index === selected13
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer13 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected13(index);
        }}
        disabled={selected13 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    14. Which concurrency problem occurs when one transaction overwrites another transaction's update?
</p>

{options14.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected14 !== null
            ? index === correctAnswer14
                ? "correct"
                : index === selected14
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer14 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected14(index);
        }}
        disabled={selected14 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    15. Which property of a transaction ensures that either all operations occur or none occur?
</p>

{options15.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected15 !== null
            ? index === correctAnswer15
                ? "correct"
                : index === selected15
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer15 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected15(index);
        }}
        disabled={selected15 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    16. Which relational algebra operator is generally used to retrieve specific columns?
</p>

{options16.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected16 !== null
            ? index === correctAnswer16
                ? "correct"
                : index === selected16
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer16 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected16(index);
        }}
        disabled={selected16 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    17. A clustered index is primarily based on:
</p>

{options17.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected17 !== null
            ? index === correctAnswer17
                ? "correct"
                : index === selected17
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer17 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected17(index);
        }}
        disabled={selected17 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    18. Which of the following cannot contain duplicate tuples?
</p>

{options18.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected18 !== null
            ? index === correctAnswer18
                ? "correct"
                : index === selected18
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer18 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected18(index);
        }}
        disabled={selected18 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    19. Which normal form removes partial dependency?
</p>

{options19.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected19 !== null
            ? index === correctAnswer19
                ? "correct"
                : index === selected19
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer19 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected19(index);
        }}
        disabled={selected19 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    20. Which database architecture provides the highest data independence?
</p>

{options20.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected20 !== null
            ? index === correctAnswer20
                ? "correct"
                : index === selected20
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer20 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected20(index);
        }}
        disabled={selected20 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    21. Which normal form is based on the concept of multivalued dependency (MVD)?
</p>

{options21.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected21 !== null
            ? index === correctAnswer21
                ? "correct"
                : index === selected21
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer21 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected21(index);
        }}
        disabled={selected21 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    22. If R(A, B, C, D) has FDs A -{`&gt`} B, A -{`&gt`} C, then the candidate key is:
</p>

{options22.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected22 !== null
            ? index === correctAnswer22
                ? "correct"
                : index === selected22
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer22 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected22(index);
        }}
        disabled={selected22 !== null}
    >
        {option}
    </button>
))}

                <p className="question">
    23. Which relational algebra operation is used to answer "for all" type queries?
</p>

{options23.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected23 !== null
            ? index === correctAnswer23
                ? "correct"
                : index === selected23
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer23 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected23(index);
        }}
        disabled={selected23 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    24. Which of the following is not an ACID property?
</p>

{options24.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected24 !== null
            ? index === correctAnswer24
                ? "correct"
                : index === selected24
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer24 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected24(index);
        }}
        disabled={selected24 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    25. In an ER diagram, a derived attribute is represented by:
</p>

{options25.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected25 !== null
            ? index === correctAnswer25
                ? "correct"
                : index === selected25
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer25 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected25(index);
        }}
        disabled={selected25 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    26. Which SQL statement permanently removes a table and all its data?
</p>

{options26.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected26 !== null
            ? index === correctAnswer26
                ? "correct"
                : index === selected26
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer26 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected26(index);
        }}
        disabled={selected26 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    27. Which indexing method generally provides the fastest equality search?
</p>

{options27.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected27 !== null
            ? index === correctAnswer27
                ? "correct"
                : index === selected27
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer27 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected27(index);
        }}
        disabled={selected27 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    28. Which SQL function returns the total number of rows, including NULL values?
</p>

{options28.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected28 !== null
            ? index === correctAnswer28
                ? "correct"
                : index === selected28
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer28 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected28(index);
        }}
        disabled={selected28 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    29. Which relational algebra operator changes only the relation name or attribute names?
</p>

{options29.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected29 !== null
            ? index === correctAnswer29
                ? "correct"
                : index === selected29
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer29 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected29(index);
        }}
        disabled={selected29 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    30. Which SQL clause cannot be used without GROUP BY?
</p>

{options30.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected30 !== null
            ? index === correctAnswer30
                ? "correct"
                : index === selected30
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer30 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected30(index);
        }}
        disabled={selected30 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    31. Which join returns all tuples from both relations, matching where possible?
</p>

{options31.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected31 !== null
            ? index === correctAnswer31
                ? "correct"
                : index === selected31
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer31 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected31(index);
        }}
        disabled={selected31 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    32. Which dependency is removed while converting a relation from 2NF to 3NF?
</p>

{options32.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected32 !== null
            ? index === correctAnswer32
                ? "correct"
                : index === selected32
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer32 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected32(index);
        }}
        disabled={selected32 !== null}
    >
        {option}
    </button>
))}
                <p className="question">
    33. Which of the following is not a DML command?
</p>

{options33.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected33 !== null
            ? index === correctAnswer33
                ? "correct"
                : index === selected33
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer33 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected33(index);
        }}
        disabled={selected33 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    34. Which lock allows multiple transactions to read simultaneously?
</p>

{options34.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected34 !== null
            ? index === correctAnswer34
                ? "correct"
                : index === selected34
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer34 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected34(index);
        }}
        disabled={selected34 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    35. Which file organization is most suitable for sequential processing?
</p>

{options35.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected35 !== null
            ? index === correctAnswer35
                ? "correct"
                : index === selected35
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer35 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected35(index);
        }}
        disabled={selected35 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    36. Which of the following is true for a primary index?
</p>

{options36.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected36 !== null
            ? index === correctAnswer36
                ? "correct"
                : index === selected36
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer36 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected36(index);
        }}
        disabled={selected36 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    37. The result of a natural join contains:
</p>

{options37.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected37 !== null
            ? index === correctAnswer37
                ? "correct"
                : index === selected37
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer37 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected37(index);
        }}
        disabled={selected37 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    38. Which schedule can never be recovered if a transaction aborts?
</p>

{options38.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected38 !== null
            ? index === correctAnswer38
                ? "correct"
                : index === selected38
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer38 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected38(index);
        }}
        disabled={selected38 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    39. Which relational algebra operator removes duplicate tuples automatically?
</p>

{options39.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected39 !== null
            ? index === correctAnswer39
                ? "correct"
                : index === selected39
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer39 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected39(index);
        }}
        disabled={selected39 !== null}
    >
        {option}
    </button>
))}

<p className="question">
    40. Which of the following is not a benefit of indexing?
</p>

{options40.map((option, index) => (
    <button
        key={index}
        className={`btn option ${selected40 !== null
            ? index === correctAnswer40
                ? "correct"
                : index === selected40
                    ? "wrong"
                    : ""
            : ""
            }`}
        onClick={() => {
            if (index !== correctAnswer40 && "vibrate" in navigator) {
                navigator.vibrate(200);
            }
            setSelected40(index);
        }}
        disabled={selected40 !== null}
    >
        {option}
    </button>
))}
</div>
            <button
                className="btn btn-success"
                style={{ margin: "20px 0" }}
                onClick={submit}
            >
                Submit Quiz
            </button>
            {submitted && (
                <>
                    <div style={{ fontSize: "30px", color: "green" }}>
                        [ Result : {finalScore} / 40 ]
                    </div>

                    <div style={{ fontSize: "30px", color: "green" }}>
                        [ Accuracy : {((finalScore / 40) * 100).toFixed(2)} % ]
                    </div>

                    <div
                        className={
                            finalScore >= 30
                                ? "excellent"
                                : finalScore >= 25
                                    ? "good"
                                    : finalScore > 20
                                        ? "average"
                                        : "failed"
                        }
                    >
                        [
                        {finalScore >= 30
                            ? " Well Done!"
                            : finalScore >= 25
                                ? " Good!"
                                : finalScore >= 20
                                    ? " Ok!"
                                    : " Improve Yourself!"}
                        ]
                    </div>
                </>
            )}
            <hr style={{ border: "5px solid blue", margin: "40px" }} />
        </>
    );
}

export default Dbms_quiz;