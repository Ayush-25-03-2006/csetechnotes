import { useEffect, useState } from "react";
import "./Dsa_Quiz.css";

function De_Quiz() {

    const [submitted, setSubmitted] = useState(false);
    const [finalScore, setFinalScore] = useState(0);

    function submit() {
        setFinalScore(score);
        setSubmitted(true);
    }

    useEffect(() => {
        document.title = "De Quiz"
    });

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
    const correctAnswer1 = 3;
    const correctAnswer2 = 2;
    const correctAnswer3 = 2;
    const correctAnswer4 = 1;
    const correctAnswer5 = 2;
    const correctAnswer6 = 1;
    const correctAnswer7 = 2;
    const correctAnswer8 = 1;
    const correctAnswer9 = 1;
    const correctAnswer10 = 2;
    const correctAnswer11 = 1;
    const correctAnswer12 = 0;
    const correctAnswer13 = 1;
    const correctAnswer14 = 1;
    const correctAnswer15 = 1;
    const correctAnswer16 = 1;
    const correctAnswer17 = 1;
    const correctAnswer18 = 2;
    const correctAnswer19 = 1;
    const correctAnswer20 = 1;
    const correctAnswer21 = 1;
    const correctAnswer22 = 2;
    const correctAnswer23 = 2;
    const correctAnswer24 = 3;
    const correctAnswer25 = 1;
    const correctAnswer26 = 0;
    const correctAnswer27 = 2;
    const correctAnswer28 = 1;
    const correctAnswer29 = 1;
    const correctAnswer30 = 1;
    const correctAnswer31 = 0;
    const correctAnswer32 = 1;
    const correctAnswer33 = 1;
    const correctAnswer34 = 1;
    const correctAnswer35 = 2;
    const correctAnswer36 = 2;
    const correctAnswer37 = 2;
    const correctAnswer38 = 1;
    const correctAnswer39 = 2;
    const correctAnswer40 = 1;

    const options1 = [
        "A) XOR",
        "B) NOR",
        "C) NAND",
        "D) Both B and C"
    ];

    const options2 = [
        "A) B",
        "B) A",
        "C) A + B",
        "D) AB"
    ];

    const options3 = [
        "A) 8",
        "B) 12",
        "C) 16",
        "D) 32"
    ];

    const options4 = [
        "A) Absorption Law",
        "B) De Morgan's First Law",
        "C) Complement Law",
        "D) Consensus Law"
    ];

    const options5 = [
        "A) NAND",
        "B) XOR",
        "C) NOR",
        "D) OR"
    ];

    const options6 = [
        "A) 2 inputs, 1 output",
        "B) 2 inputs, 2 outputs",
        "C) 3 inputs, 2 outputs",
        "D) 3 inputs, 1 output"
    ];

    const options7 = [
        "A) A + B",
        "B) A ⊕ B",
        "C) AB",
        "D) A ⊙ B"
    ];

    const options8 = [
        "A) Half Adder",
        "B) Full Adder",
        "C) Decoder",
        "D) Comparator"
    ];

    const options9 = [
        "A) One Half Adder",
        "B) Two Half Adders and one OR gate",
        "C) One XOR gate",
        "D) One NAND gate"
    ];

    const options10 = [
        "A) Decoder",
        "B) Encoder",
        "C) Multiplexer",
        "D) Demultiplexer"
    ];

    const options11 = [
        "A) 2 selection lines",
        "B) 3 selection lines",
        "C) 4 selection lines",
        "D) 8 selection lines"
    ];

    const options12 = [
        "A) A⊕B⊕C",
        "B) A+B+C",
        "C) AB+BC+AC",
        "D) A⊙B⊙C (XNOR)"
    ];

    const options13 = [
        "A) Many-to-One operation",
        "B) One-to-Many operation",
        "C) Binary Addition",
        "D) Binary Comparison"
    ];

    const options14 = [
        "A) A⊕B⊕C",
        "B) A⊙B⊙C (XNOR)",
        "C) AB+BC+AC",
        "D) A+B+C"
    ];

    const options15 = [
        "A) Have no outputs",
        "B) Use memory elements",
        "C) Do not use logic gates",
        "D) Have only one input"
    ];

    const options16 = [
        "A) Flip-Flop",
        "B) Latch",
        "C) Counter",
        "D) Register"
    ];

    const options17 = [
        "A) Level Triggered",
        "B) Edge Triggered",
        "C) Asynchronous only",
        "D) Memory-less"
    ];

    const options18 = [
        "A) D Flip-Flop",
        "B) JK Flip-Flop",
        "C) SR Flip-Flop",
        "D) T Flip-Flop"
    ];

    const options19 = [
        "A) D Flip-Flop",
        "B) JK Flip-Flop",
        "C) T Flip-Flop",
        "D) RS Flip-Flop"
    ];

    const options20 = [
        "A) Comparator",
        "B) Counter",
        "C) Decoder",
        "D) Multiplexer"
    ];

    const options21 = [
        "A) Both inputs are same",
        "B) Inputs are different",
        "C) Both inputs are LOW",
        "D) Both inputs are HIGH"
    ];

    const options22 = [
        "A) NAND",
        "B) NOR",
        "C) XNOR",
        "D) OR"
    ];

    const options23 = [
        "A) 16",
        "B) 24",
        "C) 32",
        "D) 64"
    ];

    const options24 = [
        "A) 2",
        "B) 3",
        "C) 4",
        "D) 6"
    ];

    const options25 = [
        "A) Identity Law",
        "B) Idempotent Law",
        "C) Complement Law",
        "D) Consensus Law"
    ];

    const options26 = [
        "A) Absorption Law",
        "B) Identity Law",
        "C) Distributive Law",
        "D) De Morgan's Law"
    ];

    const options27 = [
        "A) Full Adder",
        "B) Multiplexer",
        "C) Register",
        "D) Decoder"
    ];

    const options28 = [
        "A) n",
        "B) 2ⁿ",
        "C) n²",
        "D) 2ⁿ⁻¹"
    ];

    const options29 = [
        "A) 2",
        "B) 3",
        "C) 4",
        "D) 5"
    ];

    const options30 = [
        "A) Half Adders only",
        "B) Full Adders in series",
        "C) Decoders",
        "D) Multiplexers"
    ];

    const options31 = [
        "A) Flip-Flop",
        "B) Multiplexer",
        "C) Decoder",
        "D) Comparator"
    ];

    const options32 = [
        "A) At any time",
        "B) Only with the clock pulse",
        "C) Only with reset",
        "D) Only with enable signal"
    ];

    const options33 = [
        "A) Level Triggering",
        "B) Edge Triggering",
        "C) Pulse Triggering",
        "D) Delay Triggering"
    ];

    const options34 = [
        "A) 5",
        "B) 6",
        "C) 7",
        "D) 8"
    ];

    const options35 = [
        "A) XOR",
        "B) OR",
        "C) NOT",
        "D) XNOR"
    ];

    const options36 = [
        "A) 0",
        "B) 1",
        "C) A",
        "D) A'"
    ];

    const options37 = [
        "A) SR Flip-Flop",
        "B) JK Flip-Flop",
        "C) D Flip-Flop",
        "D) T Flip-Flop"
    ];

    const options38 = [
        "A) Edge Triggered",
        "B) Level Triggered",
        "C) Dynamic Memory",
        "D) Non-memory Device"
    ];

    const options39 = [
        "A) 2",
        "B) 3",
        "C) 4",
        "D) 5"
    ];

    const options40 = [
        "A) Truth Table",
        "B) Karnaugh Map (K-Map)",
        "C) Flowchart",
        "D) State Diagram"
    ];

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
        return total + (answer === correctAnswers[index] ? 1 : 0);
    }, 0);

    return (
        <>
            <div className="contain">
                <p className="question">
                    1. Which logic gate is known as the universal gate?
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
                            if(index !== correctAnswer1 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected1(index);}}
                        disabled={selected1 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    2. The Boolean expression A + A'B simplifies to:
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
                            if(index !== correctAnswer2 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected2(index);}}
                        disabled={selected2 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    3. How many cells are present in a 4-variable Karnaugh Map?
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
                            if(index !== correctAnswer3 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected3(index);}}
                        disabled={selected3 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    4. Which Boolean law is represented by (AB)' = A' + B'?
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
                            if(index !== correctAnswer4 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected4(index);}}
                        disabled={selected4 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    5. Which gate gives HIGH output only when all inputs are LOW?
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
                            if(index !== correctAnswer5 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected5(index);}}
                        disabled={selected5 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    6. A Half Adder has:
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
                            if(index !== correctAnswer6 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected6(index);}}
                        disabled={selected6 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    7. The Carry output of a Half Adder is:
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
                            if(index !== correctAnswer7 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected7(index);}}
                        disabled={selected7 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    8. Which circuit can add three 1-bit binary numbers?
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
                            if(index !== correctAnswer8 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected8(index);}}
                        disabled={selected8 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    9. A Full Adder can be implemented using:
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
                            if(index !== correctAnswer9 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected9(index);}}
                        disabled={selected9 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    10. Which combinational circuit selects one input from many inputs?
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
                            if(index !== correctAnswer10 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected10(index);}}
                        disabled={selected10 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    11. An 8:1 Multiplexer requires:
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
                            if(index !== correctAnswer11 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected11(index);}}
                        disabled={selected11 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    12. The Boolean function F(A,B,C)=Σm(1,2,4,7) is equivalent to:
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
                            if(index !== correctAnswer12 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected12(index);}}
                        disabled={selected12 !== null}
                    >
                        {option}
                    </button>
                ))}
                <p className="question">
                    13. A Demultiplexer performs:
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
                            if(index !== correctAnswer13 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected13(index);}}
                        disabled={selected13 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    14. The Boolean function F(A,B,C)=Σm(0,3,5,6) is equivalent to:
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
                            if(index !== correctAnswer14 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected14(index);}}
                        disabled={selected14 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    15. Sequential circuits differ from combinational circuits because they:
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
                            if(index !== correctAnswer15 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected15(index);}}
                        disabled={selected15 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    16. Which memory element is level-triggered?
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
                            if(index !== correctAnswer16 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected16(index);}}
                        disabled={selected16 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    17. Flip-Flops are generally:
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
                            if(index !== correctAnswer17 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected17(index);}}
                        disabled={selected17 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    18. Which Flip-Flop has an invalid state?
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
                            if(index !== correctAnswer18 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected18(index);}}
                        disabled={selected18 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    19. Which Flip-Flop removes the invalid state of the SR Flip-Flop?
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
                            if(index !== correctAnswer19 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected19(index);}}
                        disabled={selected19 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    20. The T Flip-Flop is mainly used in:
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
                            if(index !== correctAnswer20 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected20(index);}}
                        disabled={selected20 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    21. The output of an XOR gate is HIGH when:
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
                            if(index !== correctAnswer21 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected21(index);}}
                        disabled={selected21 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    22. Which gate is the complement of XOR?
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
                            if(index !== correctAnswer22 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected22(index);}}
                        disabled={selected22 !== null}
                    >
                        {option}
                    </button>
                ))}
                <p className="question">
                    23. A Boolean function with 5 variables requires how many K-map cells?
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
                            if(index !== correctAnswer23 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected23(index);}}
                        disabled={selected23 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    24. The maximum number of variables handled by a standard single K-map is:
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
                            if(index !== correctAnswer24 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected24(index);}}
                        disabled={selected24 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    25. Which law states A + A = A?
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
                            if(index !== correctAnswer25 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected25(index);}}
                        disabled={selected25 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    26. Which Boolean law is used to simplify A + AB?
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
                            if(index !== correctAnswer26 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected26(index);}}
                        disabled={selected26 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    27. Which of the following is NOT a combinational circuit?
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
                            if(index !== correctAnswer27 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected27(index);}}
                        disabled={selected27 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    28. The number of outputs of an n-to-2ⁿ decoder is:
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
                            if(index !== correctAnswer28 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected28(index);}}
                        disabled={selected28 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    29. In a Full Subtractor, the number of inputs is:
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
                            if(index !== correctAnswer29 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected29(index);}}
                        disabled={selected29 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    30. Ripple Carry Adder is formed by connecting:
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
                            if(index !== correctAnswer30 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected30(index);}}
                        disabled={selected30 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    31. Which device stores one bit of information?
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
                            if(index !== correctAnswer31 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected31(index);}}
                        disabled={selected31 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    32. In synchronous sequential circuits, the output changes:
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
                            if(index !== correctAnswer32 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected32(index);}}
                        disabled={selected32 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    33. Which triggering changes output only at the instant of clock transition?
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
                            if(index !== correctAnswer33 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected33(index);}}
                        disabled={selected33 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    34. If a circuit has 64 input combinations, the number of input variables is:
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
                            if(index !== correctAnswer34 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected34(index);}}
                        disabled={selected34 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    35. Which gate requires the minimum number of NAND gates for implementation?
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
                            if(index !== correctAnswer35 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected35(index);}}
                        disabled={selected35 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    36. The Boolean expression A · 1 is equal to:
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
                            if(index !== correctAnswer36 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected36(index);}}
                        disabled={selected36 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    37. Which Flip-Flop is known as the Data Flip-Flop?
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
                            if(index !== correctAnswer37 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected37(index);}}
                        disabled={selected37 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    38. A latch is:
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
                            if(index !== correctAnswer38 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected38(index);}}
                        disabled={selected38 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    39. The minimum number of select lines required for a 16:1 Multiplexer is:
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
                            if(index !== correctAnswer39 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected39(index);}}
                        disabled={selected39 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    40. Which technique is primarily used to minimize Boolean expressions in Digital Electronics?
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
                            if(index !== correctAnswer40 && "vibrate" in navigator){
                                navigator.vibrate(200);
                            }
                            setSelected40(index);}}
                        disabled={selected40 !== null}
                    >
                        {option}
                    </button>
                ))}
            </div >
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
                                : finalScore > 20
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

export default De_Quiz;