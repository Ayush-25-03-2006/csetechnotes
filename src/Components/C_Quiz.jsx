import { useEffect, useState } from "react";
import "./Dsa_Quiz.css";

function C_quiz() {

    useEffect(() => {
        document.title = "C Quiz"
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
    const [selected41, setSelected41] = useState(null);
    const [selected42, setSelected42] = useState(null);
    const [selected43, setSelected43] = useState(null);
    const [selected44, setSelected44] = useState(null);
    const [selected45, setSelected45] = useState(null);

    // here index is provided start from 0 to n -1

const correctAnswer1 = 0;
const correctAnswer2 = 2;
const correctAnswer3 = 1;
const correctAnswer4 = 2;
const correctAnswer5 = 0;
const correctAnswer6 = 1;
const correctAnswer7 = 2;
const correctAnswer8 = 2;
const correctAnswer9 = 1;
const correctAnswer10 = 2;
const correctAnswer11 = 3;
const correctAnswer12 = 2;
const correctAnswer13 = 1;
const correctAnswer14 = 3;
const correctAnswer15 = 1;
const correctAnswer16 = 1;
const correctAnswer17 = 3;
const correctAnswer18 = 0;
const correctAnswer19 = 0;
const correctAnswer20 = 2;
const correctAnswer21 = 1;
const correctAnswer22 = 1;
const correctAnswer23 = 0;
const correctAnswer24 = 2;
const correctAnswer25 = 2;
const correctAnswer26 = 0;
const correctAnswer27 = 3;
const correctAnswer28 = 1;
const correctAnswer29 = 0;
const correctAnswer30 = 2;
const correctAnswer31 = 0;
const correctAnswer32 = 3;
const correctAnswer33 = 1;
const correctAnswer34 = 0;
const correctAnswer35 = 2;
const correctAnswer36 = 3;
const correctAnswer37 = 1;
const correctAnswer38 = 0;
const correctAnswer39 = 3;
const correctAnswer40 = 2;
const correctAnswer41 = 1;
const correctAnswer42 = 3;
const correctAnswer43 = 0;
const correctAnswer44 = 2;
const correctAnswer45 = 1;

    const options1 = [
    "A. static",
    "B. auto",
    "C. register",
    "D. extern"
];

const options2 = [
    "A. struct",
    "B. while",
    "C. printf",
    "D. union"
];

const options3 = [
    "A. stdio.h",
    "B. stdlib.h",
    "C. string.h",
    "D. math.h"
];

const options4 = [
    "A. strcpy()",
    "B. strcat()",
    "C. strcmp()",
    "D. strlen()"
];

const options5 = [
    "A. extern",
    "B. auto",
    "C. register",
    "D. static"
];

const options6 = [
    "A. *",
    "B. &",
    "C. ->",
    "D. %"
];

const options7 = [
    "A. Linear Search",
    "B. Sequential Search",
    "C. Binary Search",
    "D. Hash Search"
];

const options8 = [
    "A. Bubble Sort",
    "B. Insertion Sort",
    "C. Selection Sort",
    "D. Merge Sort"
];

const options9 = [
    "A. Heap Sort",
    "B. Bubble Sort",
    "C. Selection Sort",
    "D. Quick Sort"
];

const options10 = [
    "A. Reduces memory usage in every case",
    "B. Makes every program faster",
    "C. Simplifies recursively defined problems",
    "D. Eliminates function calls"
];

const options11 = [
    "A. delete()",
    "B. remove()",
    "C. realloc()",
    "D. free()"
];

const options12 = [
    "A. while",
    "B. for",
    "C. do-while",
    "D. None of these"
];

const options13 = [
    "A. break",
    "B. continue",
    "C. return",
    "D. goto"
];

const options14 = [
    "A. define",
    "B. static",
    "C. final",
    "D. const"
];

const options15 = [
    "A. strcmp()",
    "B. strlen()",
    "C. strcpy()",
    "D. strcat()"
];

const options16 = [
    "A. #define",
    "B. #include",
    "C. #ifdef",
    "D. #undef"
];

const options17 = [
    "A. They can be applied only to constants.",
    "B. They are binary operators.",
    "C. They can be used only with floating-point variables.",
    "D. They are unary operators."
];

const options18 = [
    "A. All elements of an array must have the same data type.",
    "B. Arrays can store different data types.",
    "C. Array size can be changed after declaration.",
    "D. Array indexing starts from 1."
];

const options19 = [
    "A. Every recursive function must have a base condition.",
    "B. Recursion cannot return a value.",
    "C. Recursive functions cannot have local variables.",
    "D. A recursive function cannot call another recursive function."
];

const options20 = [
    "A. ::",
    "B. &&",
    "C. ?:",
    "D. ||"
];

const options21 = [
    "A. int",
    "B. char",
    "C. float",
    "D. double"
];

const options22 = [
    "A. sum(int,int);",
    "B. int sum(int,int);",
    "C. function sum(int,int);",
    "D. int sum(a,b);"
];

const options23 = [
    "A. A structure can contain members of different data types.",
    "B. All members of a structure must have the same data type.",
    "C. A structure cannot contain another structure as a member.",
    "D. Memory is allocated only for the first member."
];

const options24 = [
    "A. string.h",
    "B. stdio.h",
    "C. math.h",
    "D. stdlib.h"
];

const options25 = [
    "A. float",
    "B. double",
    "C. string",
    "D. char"
];

const options26 = [
    "A. 4 4.5",
    "B. 4.5 4",
    "C. 4 4",
    "D. Compilation error"
];

const options27 = [
    "A. 6 10 5",
    "B. 7 10 4",
    "C. 7 11 5",
    "D. 7 11 4"
];

const options28 = [
    "A. A",
    "B. B",
    "C. Compilation error",
    "D. No output"
];

const options29 = [
    "A. 1 10",
    "B. 6 10",
    "C. Hello",
    "D. Compilation error"
];

const options30 = [
    "A. 1 2 3 4 5",
    "B. 2 4",
    "C. 1 3 5",
    "D. Infinite loop"
];

const options31 = [
    "A. 0 1 2",
    "B. 0 1 2 3",
    "C. 1 2 3",
    "D. 0 1 2 3 4"
];

const options32 = [
    "A. 8",
    "B. 4",
    "C. 32",
    "D. 16"
];

const options33 = [
    "A. 4 0",
    "B. 6 0",
    "C. 6 Garbage",
    "D. Compilation error"
];

const options34 = [
    "A. 24",
    "B. 16",
    "C. 20",
    "D. 120"
];

const options35 = [
    "A. 8",
    "B. 16",
    "C. 4",
    "D. 2"
];

const options36 = [
    "A. Compilation error",
    "B. No output",
    "C. Infinite loop",
    "D. 0"
];

const options37 = [
    "A. 6",
    "B. 3",
    "C. 2",
    "D. 4"
];

const options38 = [
    "A. 5 3 1",
    "B. 1 3 5",
    "C. 5 4 3 2 1",
    "D. 5 3"
];

const options39 = [
    "A. Compilation error",
    "B. Garbage value",
    "C. 10",
    "D. 25"
];

const options40 = [
    "A. 7",
    "B. Address of x",
    "C. 10",
    "D. Garbage value"
];

const options41 = [
    "A. 13",
    "B. 5",
    "C. 8",
    "D. 3"
];

const options42 = [
    "A. 5 4 3 2 1",
    "B. 4 2 1",
    "C. 5 4 1",
    "D. 5 4 2 1"
];

const options43 = [
    "A. 40",
    "B. 30",
    "C. 20",
    "D. Compilation error"
];

const options44 = [
    "A. int sum(int n){ if(n==1) return 0; return n + sum(n-1); }",
    "B. int sum(int n){ return n*n; }",
    "C. int sum(int n){ if(n==0) return 0; return n + sum(n-1); }",
    "D. int sum(int n){ return n + sum(n); }"
];

const options45 = [
    "A. 20",
    "B. 5",
    "C. 10",
    "D. 2"
];

    const selectedAnswers = [
        selected1, selected2, selected3, selected4, selected5,
        selected6, selected7, selected8, selected9, selected10,
        selected11, selected12, selected13, selected14, selected15,
        selected16, selected17, selected18, selected19, selected20,
        selected21, selected22, selected23, selected24, selected25,
        selected26, selected27, selected28, selected29, selected30,
        selected31, selected32, selected33, selected34, selected35,
        selected36, selected37, selected38, selected39, selected40,
        selected41, selected42, selected43, selected44, selected45
    ];

    const correctAnswers = [
        correctAnswer1, correctAnswer2, correctAnswer3, correctAnswer4, correctAnswer5,
        correctAnswer6, correctAnswer7, correctAnswer8, correctAnswer9, correctAnswer10,
        correctAnswer11, correctAnswer12, correctAnswer13, correctAnswer14, correctAnswer15,
        correctAnswer16, correctAnswer17, correctAnswer18, correctAnswer19, correctAnswer20,
        correctAnswer21, correctAnswer22, correctAnswer23, correctAnswer24, correctAnswer25,
        correctAnswer26, correctAnswer27, correctAnswer28, correctAnswer29, correctAnswer30,
        correctAnswer31, correctAnswer32, correctAnswer33, correctAnswer34, correctAnswer35,
        correctAnswer36, correctAnswer37, correctAnswer38, correctAnswer39, correctAnswer40,
        correctAnswer41, correctAnswer42, correctAnswer43, correctAnswer44, correctAnswer45
    ];

    const score = selectedAnswers.reduce((total, answer, index) => {
        return total + (answer === correctAnswers[index] ? 1 : 0)
    }, 0);

    return (
        <>
        <div className="contain">
    <p className="question">
        1. Which storage class retains the value of a local variable between function calls?
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
        2. Which of the following is NOT a keyword in C?
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
        3. Which header file is required for dynamic memory allocation functions?
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
        4. Which function is used to compare two strings?
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
        5. Which storage class provides internal linkage?
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
        6. Which operator returns the address of a variable?
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
        7. Which searching algorithm requires the array to be sorted?
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
        8. Which sorting algorithm repeatedly selects the minimum element?
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
        9. Which sorting algorithm is stable?
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
        10. Which of the following is an advantage of recursion?
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
        11. Which function releases dynamically allocated memory?
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
        12. Which loop is guaranteed to execute at least once?
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
        13. Which statement skips the remaining part of the current loop iteration?
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
        14. Which keyword is used to declare a constant variable?
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
        15. Which function returns the length of a string?
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
        16. Which preprocessor directive is used to include a header file?
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
        17. Which statement about the increment (++) and decrement (--) operators is correct?
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
        18. Which statement about arrays in C is correct?
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
        19. Which statement about recursion is correct?
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
        20. Which operator is known as the conditional operator?
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
        21. Which data type stores exactly one character?
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
        22. Which function prototype is correct?
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
        23. Which of the following statements about structures in C is correct?
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
        24. Which header file is required to use mathematical functions like sqrt()?
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
        25. Which of the following is NOT a valid C data type?
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
        26. What will be the output of the following C program?
        <pre>{`#include<stdio.h>

int main()
{
    int p = 9;
    float q = 2.0;
    printf("%d ", p/2);
    printf("%.1f ", p/q);
}`}</pre>
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
        27. What is the output of the following C program?
        <pre>{`#include<stdio.h>

#include<stdio.h>

int main()
{
    int a=15;
    int x=5;
    int y=a++ - x++;
    int z=y++ - x++;
    printf("%d ",x);
    printf("%d ",y);
    printf("%d",z);
}`}</pre>
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
        28. What will be the output of the following C program?
        <pre>{`#include<stdio.h>

int main()
{
    int x = 5;
    if(x = 0)
        printf("A");
    else
        printf("B");
}`}</pre>
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
        29. What will be the output of the following C program?
        <pre>{`#include<stdio.h>

int main()
{
    int a = 5, b = 10;

    if (a = b && ++a)
        printf("%d %d", a, b);
    else
        printf("Hello");

    return 0;
}`}</pre>
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
        30. What will be the output?
        <pre>{`int i = 1;
while(i <= 5){
    printf("%d ", i);
    i += 2;
}`}</pre>
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
        31. What will be the output?
        <pre>{`for(int i = 0; i < 5; i++){
    if(i == 3)
        break;
    printf("%d ", i);
}`}</pre>
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
        32. What will be the output?
        <pre>{`int fun(int x){
    return x * x;
}

int main(){
    printf("%d", fun(fun(2)));
}`}</pre>
    </p>

    {options32.map((option, index) => (
        <button
            key={index}
            className={`btn option ${selected32 !== null
                ? index === correctAnswer32
                    ? "correct"
                    : index === selected32
                        ? "wrong"
                        : ''
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
        33. What will be the output?
        <pre>{`int a[5] = {2, 4, 6};
printf("%d %d", a[2], a[4]);`}</pre>
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
        34. What will be the output?
        <pre>{`int fun(int n){
    if(n == 0)
        return 1;
    return n * fun(n - 1);
}

printf("%d", fun(4));`}</pre>
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
        35. What will be the output?
        <pre>{`int a[] = {5, 10, 15, 20};
int n = sizeof(a) / sizeof(a[0]);
printf("%d", n);`}</pre>
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
        36. What will be the output?
        <pre>{`int i = 0;
do{
    printf("%d ", i);
    i++;
}while(i < 0);`}</pre>
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
        37. What will be the output?
        <pre>{`int a[] = {1, 2, 3, 4};
a[2] = a[0] + a[1];
printf("%d", a[2]);`}</pre>
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
        38. What will be the output?
        <pre>{`void fun(int n){
    if(n == 0)
        return;
    printf("%d ", n);
    fun(n - 2);
}

fun(5);`}</pre>
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
        39. What will be the output?
        <pre>{`int x = 10;
int *p = &x;
*p = 25;
printf("%d", x);`}</pre>
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
        40. What will be the output?
        <pre>{`int x = 7;
int *p = &x;
printf("%d", *p + 3);`}</pre>
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

    <p className="question">
        41. What will be the output?
        <pre>{`int fun(int x){
    if(x <= 1)
        return x;
    return fun(x - 1) + fun(x - 2);
}

printf("%d", fun(5));`}</pre>
    </p>

    {options41.map((option, index) => (
        <button
            key={index}
            className={`btn option ${selected41 !== null
                ? index === correctAnswer41
                    ? "correct"
                    : index === selected41
                        ? "wrong"
                        : ""
                : ""
            }`}
            onClick={() => {
                if (index !== correctAnswer41 && "vibrate" in navigator) {
                    navigator.vibrate(200);
                }
                setSelected41(index);
            }}
            disabled={selected41 !== null}
        >
            {option}
        </button>
    ))}

    <p className="question">
        42. What will be the output?
        <pre>{`int i;
for(i = 5; i > 0; i--){
    if(i == 3)
        continue;
    printf("%d ", i);
}`}</pre>
    </p>

    {options42.map((option, index) => (
        <button
            key={index}
            className={`btn option ${selected42 !== null
                ? index === correctAnswer42
                    ? "correct"
                    : index === selected42
                        ? "wrong"
                        : ""
                : ""
            }`}
            onClick={() => {
                if (index !== correctAnswer42 && "vibrate" in navigator) {
                    navigator.vibrate(200);
                }
                setSelected42(index);
            }}
            disabled={selected42 !== null}
        >
            {option}
        </button>
    ))}

    <p className="question">
        43. What will be the output?
        <pre>{`int a[] = {10, 20, 30, 40};
int *p = a + 1;
printf("%d", *(p + 2));`}</pre>
    </p>

    {options43.map((option, index) => (
        <button
            key={index}
            className={`btn option ${selected43 !== null
                ? index === correctAnswer43
                    ? "correct"
                    : index === selected43
                        ? "wrong"
                        : ""
                : ""
            }`}
            onClick={() => {
                if (index !== correctAnswer43 && "vibrate" in navigator) {
                    navigator.vibrate(200);
                }
                setSelected43(index);
            }}
            disabled={selected43 !== null}
        >
            {option}
        </button>
    ))}

    <p className="question">
        44. Which of the following functions correctly computes the sum of first n natural numbers using recursion?
    </p>

    {options44.map((option, index) => (
        <button
            key={index}
            className={`btn option ${selected44 !== null
                ? index === correctAnswer44
                    ? "correct"
                    : index === selected44
                        ? "wrong"
                        : ""
                : ""
            }`}
            onClick={() => {
                if (index !== correctAnswer44 && "vibrate" in navigator) {
                    navigator.vibrate(200);
                }
                setSelected44(index);
            }}
            disabled={selected44 !== null}
        >
            {option}
        </button>
    ))}

    <p className="question">
        45. What will be the output?
        <pre>{`int a[] = {2, 4, 6, 8, 10};
printf("%d", sizeof(a) / sizeof(a[2]));`}</pre>
    </p>

    {options45.map((option, index) => (
        <button
            key={index}
            className={`btn option ${selected45 !== null
                ? index === correctAnswer45
                    ? "correct"
                    : index === selected45
                        ? "wrong"
                        : ""
                : ""
            }`}
            onClick={() => {
                if (index !== correctAnswer45 && "vibrate" in navigator) {
                    navigator.vibrate(200);
                }
                setSelected45(index);
            }}
            disabled={selected45 !== null}
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
                        [ Result : {finalScore} / 45 ]
                    </div>

                    <div style={{ fontSize: "30px", color: "green" }}>
                        [ Accuracy : {((finalScore / 45) * 100).toFixed(2)} % ]
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
                                : finalScore > 20
                                    ? " Ok!"
                                    : " Failed!"}
                        ]
                    </div>
                </>
            )}
            <hr style={{ border: "5px solid blue", margin: "40px" }} />
        </>
    );
}

export default C_quiz;