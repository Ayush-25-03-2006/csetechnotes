import { useEffect, useState } from "react";
import "./Dsa_Quiz.css";

function CompilerDesign_Quiz() {

    useEffect(() => {
        document.title = "Networking Quiz"
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
    const options1 = [
        "A. The grammar is both LL(1) and SLR(1)",
        "B. The grammar is ambiguous",
        "C. The grammar is neither LL(1) nor SLR(1)",
        "D. The grammar is LL(1) but not SLR(1)"
    ];
    const correctAnswer1 = 0;

    const options2 = [
        "A. {a,b}",
        "B. {a}",
        "C. {a,b,ε}",
        "D. {ε}"
    ];
    const correctAnswer2 = 2;

    const options3 = [
        "A. Only a",
        "B. a,b,c,ε",
        "C. a,b,c",
        "D. a,b,ε"
    ];
    const correctAnswer3 = 2;

    const options4 = [
        "A. {$}",
        "B. {b}",
        "C. {a}",
        "D. {ε}"
    ];
    const correctAnswer4 = 1;

    const options5 = [
        "A. {b}",
        "B. {ε}",
        "C. {a}",
        "D. {$}"
    ];
    const correctAnswer5 = 2;

    const options6 = [
        "A. FIRST(α) ∩ FIRST(β) = ∅",
        "B. FIRST(A) = FOLLOW(A)",
        "C. FOLLOW(A) = ∅",
        "D. FIRST(α) ∩ FIRST(β) ≠ ∅"
    ];
    const correctAnswer6 = 3;

    const options7 = [
        "A. FOLLOW(A) columns",
        "B. Every terminal column",
        "C. FIRST(A) columns only",
        "D. The $ column only"
    ];
    const correctAnswer7 = 0;

    const options8 = [
        "A. A → Ba | c",
        "B. A → αA | β",
        "C. A → Aα | β",
        "D. A → aB | b"
    ];
    const correctAnswer8 = 2;

    const options9 = [
        "A. E → TE, E → +TE | ε",
        "B. E → T+E', E' → TE' | ε",
        "C. E → TE', E' → +TE' | ε",
        "D. E → E'T, E' → E+T | ε"
    ];
    const correctAnswer9 = 2;

    const options10 = [
        "A. Bottom-up parsing",
        "B. Top-down parsing",
        "C. LR parsing",
        "D. Shift-reduce parsing"
    ];
    const correctAnswer10 = 1;

    const options11 = [
        "A. Rightmost derivation",
        "B. Leftmost derivation",
        "C. Leftmost derivation in reverse",
        "D. Rightmost derivation in reverse"
    ];
    const correctAnswer11 = 1;

    const options12 = [
        "A. Leftmost derivation",
        "B. Leftmost derivation in reverse",
        "C. Rightmost derivation",
        "D. Rightmost derivation in reverse"
    ];
    const correctAnswer12 = 3;

    const options13 = [
        "A. A substring matching the RHS of a production that can be reduced",
        "B. Always the complete input string",
        "C. Always the start symbol",
        "D. The first terminal on the stack"
    ];
    const correctAnswer13 = 0;

    const options14 = [
        "A. E → T",
        "B. E → E + T",
        "C. T → id",
        "D. E → id"
    ];
    const correctAnswer14 = 2;

    const options15 = [
        "A. Reduce",
        "B. Shift",
        "C. Accept",
        "D. Derive"
    ];
    const correctAnswer15 = 3;

    const options16 = [
        "A. Terminals",
        "B. Input characters only",
        "C. Non-terminals",
        "D. End marker only"
    ];
    const correctAnswer16 = 2;

    const options17 = [
        "A. S' → .S",
        "B. S' → S.",
        "C. S' → .",
        "D. S → S'."
    ];
    const correctAnswer17 = 1;

    const options18 = [
        "A. Beginning of grammar",
        "B. End of input",
        "C. Current parser position in a production",
        "D. Error position"
    ];
    const correctAnswer18 = 2;

    const options19 = [
        "A. S → C.C only",
        "B. C → c.C only",
        "C. C → .cC and C → .d",
        "D. Only S → .CC"
    ];
    const correctAnswer19 = 2;

    const options20 = [
        "A. A non-terminal",
        "B. $",
        "C. A terminal",
        "D. An already completed production"
    ];
    const correctAnswer20 = 0;

    const options21 = [
        "A. Tokens → FIRST → FOLLOW → DFA",
        "B. Augmented grammar → LR(0) items → closure/GOTO → canonical collection → parsing table",
        "C. FIRST → FOLLOW → LL table → parsing",
        "D. Parse tree → FIRST → lexical analysis → LR table"
    ];
    const correctAnswer21 = 1;

    const options22 = [
        "A. 2",
        "B. 3",
        "C. 5",
        "D. 4"
    ];
    const correctAnswer22 = 3;

    const options23 = [
        "A. FIRST(α) only",
        "B. FIRST(A)",
        "C. FOLLOW(A)",
        "D. Every terminal"
    ];
    const correctAnswer23 = 2;

    const options24 = [
        "A. Uses FOLLOW sets for reduction actions",
        "B. Uses FIRST instead of FOLLOW",
        "C. Does not use LR(0) items",
        "D. Does not use an augmented grammar"
    ];
    const correctAnswer24 = 0;

    const options25 = [
        "A. Only $",
        "B. Every terminal in FIRST(α)",
        "C. Only the first terminal of α",
        "D. Every terminal in FOLLOW(A)"
    ];
    const correctAnswer25 = 3;

    const options26 = [
        "A. Two accept actions",
        "B. Both shift and reduce actions",
        "C. Two different shifts",
        "D. GOTO and accept simultaneously"
    ];
    const correctAnswer26 = 1;

    const options27 = [
        "A. Shift and reduce are both possible",
        "B. Two different shifts are possible",
        "C. Two different reductions are possible",
        "D. No reduction is possible"
    ];
    const correctAnswer27 = 2;

    const options28 = [
        "A. LR(0)",
        "B. Canonical LR(1)",
        "C. SLR(1)",
        "D. LALR(1)"
    ];
    const correctAnswer28 = 1;

    const options29 = [
        "A. LALR(1)",
        "B. LR(0)",
        "C. SLR(1)",
        "D. LL(1)"
    ];
    const correctAnswer29 = 0;

    const options30 = [
        "A. LL(1) is bottom-up and LR is top-down",
        "B. Both always use the same parsing table",
        "C. LL(1) is top-down while LR is bottom-up",
        "D. LL(1) uses rightmost derivation in reverse"
    ];
    const correctAnswer30 = 2;

    const options31 = [
        "A. Check whether the program is semantically correct",
        "B. Convert characters into tokens",
        "C. Generate machine code directly",
        "D. Construct the DFA for the source program"
    ];
    const correctAnswer31 = 0;

    const options32 = [
        "A. Invalid token",
        "B. Type mismatch",
        "C. Missing parenthesis",
        "D. Invalid character"
    ];
    const correctAnswer32 = 1;

    const options33 = [
        "A. Runtime error",
        "B. Lexical error",
        "C. Semantic/type error",
        "D. Syntax error"
    ];
    const correctAnswer33 = 2;

    const options34 = [
        "A. Type checking",
        "B. Checking declaration of identifiers",
        "C. Checking scope-related rules",
        "D. Dividing source code into tokens"
    ];
    const correctAnswer34 = 3;

    const options35 = [
        "A. Store lexical tokens",
        "B. Store only global variables",
        "C. Store information required for one procedure/function invocation",
        "D. Store only intermediate code"
    ];
    const correctAnswer35 = 2;

    const options36 = [
        "A. Parameters and local variables",
        "B. DFA states",
        "C. FIRST and FOLLOW sets",
        "D. Lexemes only"
    ];
    const correctAnswer36 = 0;

    const options37 = [
        "A. Heap",
        "B. Stack",
        "C. Code segment",
        "D. Symbol table"
    ];
    const correctAnswer37 = 1;

    const options38 = [
        "A. main()",
        "B. A()",
        "C. None of these",
        "D. B()"
    ];
    const correctAnswer38 = 3;

    const options39 = [
        "A. Removed from the stack",
        "B. Moved to the symbol table",
        "C. Converted into a token",
        "D. Stored permanently in the heap"
    ];
    const correctAnswer39 = 0;

    const options40 = [
        "A. Return address",
        "B. Parameters",
        "C. FIRST set of a grammar",
        "D. Local variables"
    ];
    const correctAnswer40 = 2;

    const options41 = [
        "A. Lexical analysis",
        "B. Syntax analysis",
        "C. Semantic analysis",
        "D. Code generation"
    ];
    const correctAnswer41 = 2;

    const options42 = [
        "A. Tokens only",
        "B. DFA minimization",
        "C. Attributes attached to grammar symbols",
        "D. Symbol table hashing only"
    ];
    const correctAnswer42 = 2;

    const options43 = [
        "A. Exactly three memory addresses",
        "B. Exactly three operators",
        "C. At most three addresses/references",
        "D. Only one operand"
    ];
    const correctAnswer43 = 2;

    const options44 = [
        "A. Sharing the common subexpression b + c",
        "B. Eliminating both additions",
        "C. Removing the multiplication",
        "D. Replacing all variables with constants"
    ];
    const correctAnswer44 = 0;

    const options45 = [
        "A. Dead-code elimination",
        "B. Common subexpression elimination",
        "C. Constant propagation",
        "D. Strength reduction"
    ];
    const correctAnswer45 = 3;

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
                    <pre>
                    1. is corrected. Options have been shuffled. <br />
                        Correct-option distribution: A = 10, B = 13, C = 10, D = 12. <br />
                        1. <br />
                        Consider the grammar: <br />
                        S → CC <br />
                        C → cC | d <br />
                        Which statement is correct? <br />
                    </pre>
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
                    2. For the grammar: <br />
                        S → AB <br />
                        A → a | ε <br />
                        B → b | ε <br />
                        Which is the correct FIRST(S)? <br />
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
                    3. For the grammar: <br />
                        S → ABC <br />
                        A → a | ε <br />
                        B → b | ε <br />
                        C → c <br />
                        Which symbol(s) can belong to FIRST(S)? <br />
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
                    4. Consider: <br />
                        S → AB <br />
                        A → a | ε <br />
                        B → b <br />
                        If FIRST(B) = {"{b}"}, then FOLLOW(A) must contain:
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
                    5. For the grammar: <br />
                        S → Aa <br />
                        A → b | ε <br />
                        What is FOLLOW(A)? <br />
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
                    6. Which condition indicates a potential conflict between two productions A → α and A → β in an LL(1) parsing table?
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
                    7. If ε ∈ FIRST(α), the production A → α is entered in:
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
                    8. Which grammar contains immediate left recursion?
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
                    9. For the grammar: <br />
                        E → E + T | T <br />
                        After eliminating immediate left recursion, which form is correct? <br />
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
                    10. Which parsing technique constructs the parse tree starting from the start symbol and tries to derive the input string?
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
                    11. A top-down parser constructs:
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
                    12. A bottom-up parser constructs:
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
                    13. In shift-reduce parsing, a handle is:
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
                    14. Consider: <br />
                        E → E + T | T <br />
                        T → id <br />
                        For the input id + id, the first reduction in a bottom-up parser is generally: <br />
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
                    15. Which of the following is not an action in a conventional LR parsing table?
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
                    16. In an LR parsing table, the GOTO function is applied primarily to:
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
                    17. For the augmented grammar: <br />
                        S' → S <br />
                        the item representing acceptance is: <br />
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
                    18. In an LR(0) item, the dot indicates:
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
                    19. Consider the grammar: <br />
                        S → CC <br />
                        C → cC | d <br />
                        Which production is included in the closure when an LR(0) item contains: <br />
                        S → .CC <br />
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
                    20. The closure operation for an LR(0) item is required when the dot is immediately before:
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
                    21. Which sequence correctly represents the construction of an LR(0) parser?
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
                    22. For the grammar: <br />
                        S → CC <br />
                        C → cC | d <br />
                        How many productions are present in the augmented grammar? <br />
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
                    23. In SLR(1), a reduction using A → α is placed under:
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
                    24. The major difference between LR(0) and SLR(1) reduction placement is that SLR(1):
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
                    25. Suppose an LR state contains: <br />
                        A → α. <br />
                        In SLR(1), reduction by A → α is placed under: <br />
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
                    26. A shift-reduce conflict occurs when a parser table entry requires:
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
                    27. A reduce-reduce conflict occurs when:
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
                    28. Which LR parser generally has the greatest parsing power among the following?
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
                    29. Which parser is generally obtained by merging LR(1) states having the same LR(0) core?
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
                    30. Which statement about LL(1) and LR parsing is correct?
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
                    31. The primary function of a semantic analyzer is to:
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
                    32. Which of the following is primarily detected during semantic analysis?
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
                    33.Consider the statement: <br />
                        int x; <br />
                        x = "Hello"; <br />
                        The error in this statement is primarily a: <br />
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
                    34. Which of the following is NOT generally a task of semantic analysis?
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
                    35. During function execution, an activation record is primarily used to:
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
                    36. Which of the following is typically associated with an activation record?
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
                    37. Which memory area is commonly used to maintain activation records for function calls?
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
                    38. Consider the calls: <br />
                        main() → A() → B() <br />
                        When B() is executing, which activation record is at the top of the run-time stack? <br />
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
                    39. When a function finishes execution, its activation record is generally:
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
                    40. Which of the following is not normally a component of an activation record?
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
                    41. Which compiler phase is primarily responsible for checking whether an identifier has been declared with a compatible type?
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
                    42. Which of the following is most closely associated with syntax-directed translation?
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
                    43. In three-address code, an instruction generally contains:
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
                    44. For the expression: <br />
                        a = (b + c) * (b + c) <br />
                        A DAG can optimize the expression primarily by: <br />
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
                    45. Which optimization replaces an expensive operation with an equivalent cheaper operation, such as replacing multiplication by a constant with suitable shifts/additions where valid?
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

export default CompilerDesign_Quiz;