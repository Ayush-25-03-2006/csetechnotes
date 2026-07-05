import { useEffect, useState } from "react";
import "./Dsa_Quiz.css";

function Toc_quiz() {

    useEffect(() => {
        document.title = "Toc Quiz"
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
        "A. {aⁿbⁿ | n ≥ 0}",
        "B. {ww | w ∈ {a,b}*}",
        "C. Strings over {a,b} containing an even number of a's",
        "D. {aⁿbⁿcⁿ | n ≥ 0}"
    ];
    const correctAnswer1 = 2;

    const options2 = [
        "A. Pushdown Automaton",
        "B. Finite Automaton",
        "C. Turing Machine only",
        "D. Linear Bounded Automaton"
    ];
    const correctAnswer2 = 1;

    const options3 = [
        "A. DFA only",
        "B. NFA only",
        "C. ε-NFA",
        "D. Moore Machine"
    ];
    const correctAnswer3 = 2;

    const options4 = [
        "A. Union",
        "B. Intersection",
        "C. Complement",
        "D. Equal number of a's and b's"
    ];
    const correctAnswer4 = 3;

    const options5 = [
        "A. Left factoring",
        "B. State minimization",
        "C. Pumping Lemma",
        "D. Chomsky Normal Form"
    ];
    const correctAnswer5 = 1;

    const options6 = [
        "A. n+1 states",
        "B. n² states",
        "C. n states",
        "D. 2ⁿ states"
    ];
    const correctAnswer6 = 2;

    const options7 = [
        "A. Reversal",
        "B. Union",
        "C. Complement",
        "D. Infinite memory"
    ];
    const correctAnswer7 = 3;

    const options8 = [
        "A. A language is regular",
        "B. A language is finite",
        "C. A language is not regular",
        "D. DFA minimization"
    ];
    const correctAnswer8 = 2;

    const options9 = [
        "A. Type-0",
        "B. Type-1",
        "C. Type-2",
        "D. Type-3"
    ];
    const correctAnswer9 = 3;

    const options10 = [
        "A. δ : Q × Σ → Q",
        "B. δ : Q × Σ → 2^Q",
        "C. δ : Q × Γ → Q",
        "D. δ : Σ × Q → 2^Q"
    ];
    const correctAnswer10 = 0;

    const options11 = [
        "A. NFA",
        "B. ε-NFA",
        "C. DFA",
        "D. PDA"
    ];
    const correctAnswer11 = 2;

    const options12 = [
        "A. It cannot be accepted by a DFA",
        "B. It can always be accepted by an equivalent DFA",
        "C. It requires a PDA",
        "D. It requires a Turing Machine"
    ];
    const correctAnswer12 = 1;

    const options13 = [
        "A. Table Filling Method",
        "B. Subset Construction",
        "C. Pumping Construction",
        "D. State Elimination"
    ];
    const correctAnswer13 = 1;

    const options14 = [
        "A. Recursive only",
        "B. Context-free",
        "C. Regular",
        "D. Context-sensitive"
    ];
    const correctAnswer14 = 2;

    const options15 = [
        "A. Stack",
        "B. Tape",
        "C. Set of states",
        "D. Queue"
    ];
    const correctAnswer15 = 2;

    const options16 = [
        "A. Not equivalent",
        "B. Equivalent in expressive power",
        "C. Equivalent only for finite languages",
        "D. Equivalent only for unary alphabets"
    ];
    const correctAnswer16 = 1;

    const options17 = [
        "A. 2 states",
        "B. 3 states",
        "C. 4 states",
        "D. 5 states"
    ];
    const correctAnswer17 = 2;

    const options18 = [
        "A. Binary strings ending in 11",
        "B. Binary strings with even number of 0's",
        "C. {0ⁿ1ⁿ | n ≥ 1}",
        "D. Strings containing 101"
    ];
    const correctAnswer18 = 2;

    const options19 = [
        "A. Reversing transitions",
        "B. Swapping initial and final states",
        "C. Interchanging final and non-final states",
        "D. Removing ε-transitions"
    ];
    const correctAnswer19 = 2;

    const options20 = [
        "A. Infinite memory",
        "B. One stack",
        "C. No auxiliary memory",
        "D. One queue"
    ];
    const correctAnswer20 = 2;

    const options21 = [
        "A. {aⁿbⁿ | n ≥ 0}",
        "B. {a*}",
        "C. (ab)*",
        "D. {a,b}*"
    ];
    const correctAnswer21 = 0;

    const options22 = [
        "A. DFA",
        "B. PDA",
        "C. LBA",
        "D. Moore Machine"
    ];
    const correctAnswer22 = 1;

    const options23 = [
        "A. A → BC",
        "B. A → BCD",
        "C. A → ε",
        "D. A → aB"
    ];
    const correctAnswer23 = 0;

    const options24 = [
        "A. Left recursion",
        "B. ε-production",
        "C. Ambiguity",
        "D. Recursion tree"
    ];
    const correctAnswer24 = 1;

    const options25 = [
        "A. A → B",
        "B. A → a",
        "C. A → BC",
        "D. A → aB"
    ];
    const correctAnswer25 = 0;

    const options26 = [
        "A. It has more than one start symbol",
        "B. A string has more than one parse tree",
        "C. It has ε-productions",
        "D. It contains left recursion"
    ];
    const correctAnswer26 = 1;

    const options27 = [
        "A. Type-0",
        "B. Type-1",
        "C. Type-2",
        "D. Type-3"
    ];
    const correctAnswer27 = 2;

    const options28 = [
        "A. {aⁿbⁿ | n ≥ 1}",
        "B. (ab)*",
        "C. a*",
        "D. (a+b)*"
    ];
    const correctAnswer28 = 0;

    const options29 = [
        "A. DFA",
        "B. PDA",
        "C. Turing Machine",
        "D. Moore Machine"
    ];
    const correctAnswer29 = 2;

    const options30 = [
        "A. It has finite memory only",
        "B. It uses an infinite tape",
        "C. It has no input tape",
        "D. It cannot simulate a DFA"
    ];
    const correctAnswer30 = 1;

    const options31 = [
        "A. A language is regular",
        "B. A language is context-free",
        "C. A language is not context-free",
        "D. A DFA is minimal"
    ];
    const correctAnswer31 = 2;

    const options32 = [
        "A. {aⁿbⁿ | n ≥ 0}",
        "B. {wwᴿ | w ∈ {a,b}*}",
        "C. {aⁿbⁿcⁿ | n ≥ 1}",
        "D. Balanced parentheses"
    ];
    const correctAnswer32 = 2;

    const options33 = [
        "A. Variables",
        "B. Productions",
        "C. Stack",
        "D. Start symbol"
    ];
    const correctAnswer33 = 2;

    const options34 = [
        "A. Greibach Normal Form",
        "B. Chomsky Normal Form",
        "C. Right Linear Grammar",
        "D. Left Linear Grammar"
    ];
    const correctAnswer34 = 1;

    const options35 = [
        "A. (ab)*",
        "B. a*",
        "C. {aⁿbⁿ | n ≥ 1}",
        "D. (a+b)*"
    ];
    const correctAnswer35 = 2;

    const options36 = [
        "A. Terminal",
        "B. Variable",
        "C. Start Symbol",
        "D. Production Rule"
    ];
    const correctAnswer36 = 2;

    const options37 = [
        "A. Two input tapes",
        "B. A stack",
        "C. Infinite states",
        "D. Multiple start states"
    ];
    const correctAnswer37 = 1;

    const options38 = [
        "A. Type-3",
        "B. Type-2",
        "C. Type-1",
        "D. Type-0"
    ];
    const correctAnswer38 = 3;

    const options39 = [
        "A. Type-3",
        "B. Type-2",
        "C. Type-1",
        "D. Type-0"
    ];
    const correctAnswer39 = 3;

    const options40 = [
        "A. Halting Problem",
        "B. DFA Acceptance Problem",
        "C. Post Correspondence Problem",
        "D. Context-Free Grammar Ambiguity Problem"
    ];
    const correctAnswer40 = 1;

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
                    1. Which of the following languages is regular?
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
                    2. Which automaton can recognize every regular language?
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
                    3. ε-transitions are allowed in:
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
                    4. Which operation does not preserve regularity?
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
                    5. The minimum number of states in a DFA is obtained using:
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
                    6. A DFA having n states can be converted into an equivalent NFA with:
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
                    7. Which of the following is not a closure property of regular languages?
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
                    8. The Pumping Lemma is mainly used to prove:
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
                    9. Which grammar generates exactly the regular languages?
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
                    10. The transition function of a DFA is:
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
                    11. Which of the following is deterministic?
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
                    12. If a language is accepted by an NFA, then:
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
                    13. Which method is commonly used to convert an NFA into a DFA?
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
                    14. The language accepted by a DFA is always:
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
                    15. Which of the following is a necessary component of every finite automaton?
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
                    16. Regular expressions and finite automata are:
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
                    17. A DFA for strings ending with "01" over {"{0,1}"} requires at least:
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
                    18. Which language cannot be accepted by any finite automaton?
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
                    19. The complement of a DFA language is obtained by:
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
                    20. A finite automaton has:
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
                    21. Which of the following languages is context-free but not regular?
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
                    22. Which automaton recognizes context-free languages?
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
                    23. Which production is allowed in Chomsky Normal Form (CNF)?
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
                    24. Before converting a CFG into CNF, which production is usually removed first?
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
                    25. Which of the following is a unit production?
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
                    26. A grammar is called ambiguous if:
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
                    27. Which grammar type generates context-free languages?
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
                    28. Which of the following is accepted by a Pushdown Automaton but not by a DFA?
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
                    29. Which machine recognizes recursively enumerable languages?
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
                    30. Which of the following is true about a Turing Machine?
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
                    31. Pumping Lemma for context-free languages is mainly used to prove:
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
                    32. Which language is not context-free?
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
                    33. Which of the following is not a component of a CFG?
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
                    34. Which normal form allows only productions of the form A → BC or A → a?
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
                    35. Which language requires memory to count symbols?
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
                    36. Which symbol can derive every string in a grammar?
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
                    37. A PDA differs from a DFA because it has:
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
                    38. Which of the following is an unrestricted grammar?
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
                    39. In Chomsky Hierarchy, the most powerful grammar is:
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
                    40. Which of the following problems is decidable by a Turing Machine?
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

export default Toc_quiz;