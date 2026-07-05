import { useEffect, useState } from "react";
import "./Dsa_Quiz.css";

function Ai_quiz() {

    useEffect(() => {
        document.title = "Ai Quiz"
    });

    const [submitted, setSubmitted] = useState(false);
    const [finalScore, setFinalScore] = useState(0);

    function submit() {
        setFinalScore(score);
        setSubmitted(true);
        if (navigator.vibrate) {
            navigator.vibrate(200);
        }
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
    const correctAnswer1 = 2;   // C
    const correctAnswer2 = 2;   // C
    const correctAnswer3 = 1;   // B
    const correctAnswer4 = 2;   // C
    const correctAnswer5 = 2;   // C
    const correctAnswer6 = 1;   // B
    const correctAnswer7 = 1;   // B
    const correctAnswer8 = 1;   // B
    const correctAnswer9 = 2;   // C
    const correctAnswer10 = 1;  // B
    const correctAnswer11 = 1;  // B
    const correctAnswer12 = 2;  // C
    const correctAnswer13 = 2;  // C
    const correctAnswer14 = 1;  // B
    const correctAnswer15 = 1;  // B
    const correctAnswer16 = 0;  // A
    const correctAnswer17 = 2;  // C
    const correctAnswer18 = 1;  // B
    const correctAnswer19 = 2;  // C
    const correctAnswer20 = 2;  // C
    const correctAnswer21 = 2;  // C
    const correctAnswer22 = 0;  // A
    const correctAnswer23 = 2;  // C
    const correctAnswer24 = 1;  // B
    const correctAnswer25 = 2;  // C
    const correctAnswer26 = 1;  // B
    const correctAnswer27 = 2;  // C
    const correctAnswer28 = 1;  // B
    const correctAnswer29 = 2;  // C
    const correctAnswer30 = 0;  // A
    const correctAnswer31 = 1;  // B
    const correctAnswer32 = 2;  // C
    const correctAnswer33 = 1;  // B
    const correctAnswer34 = 1;  // B
    const correctAnswer35 = 1;  // B
    const correctAnswer36 = 1;  // B
    const correctAnswer37 = 1;  // B
    const correctAnswer38 = 1;  // B
    const correctAnswer39 = 1;  // B
    const correctAnswer40 = 2;  // C

    const options1 = [
        "A. Improving accuracy",
        "B. Creating intelligent machines",
        "C. Increasing manual work",
        "D. Solving complex problems"
    ];

    const options2 = [
        "A. General AI",
        "B. Super AI",
        "C. Weak AI",
        "D. Hybrid AI"
    ];

    const options3 = [
        "A. Banking – Virus Detection",
        "B. Healthcare – Disease Detection",
        "C. Education – Online Shopping",
        "D. Entertainment – Weather Forecasting"
    ];

    const options4 = [
        "A. Pattern recognition",
        "B. Understanding language",
        "C. Manual calculation only",
        "D. Decision making"
    ];

    const options5 = [
        "A. It solves mathematical equations quickly",
        "B. It defeats humans in chess",
        "C. A judge cannot distinguish it from a human through conversation",
        "D. It stores large amounts of data"
    ];

    const options6 = [
        "A. 2",
        "B. 3",
        "C. 4",
        "D. 5"
    ];

    const options7 = [
        "A. Tests physical strength",
        "B. Checks only conversation ability",
        "C. Measures memory size",
        "D. Requires internet access"
    ];

    const options8 = [
        "A. CPU and RAM",
        "B. Sensor and Actuator",
        "C. Stack and Queue",
        "D. Input and Output Buffer"
    ];

    const options9 = [
        "A. Agent = Input + Output",
        "B. Agent = Sensor + Memory",
        "C. Agent = Architecture + Program",
        "D. Agent = Hardware + Database"
    ];

    const options10 = [
        "A. Calculator",
        "B. Smart Thermostat",
        "C. Printer",
        "D. Keyboard"
    ];

    const options11 = [
        "A. Goal state to Initial state",
        "B. Initial state to Goal state",
        "C. Final state to Parent state",
        "D. Leaf node to Root node"
    ];

    const options12 = [
        "A. Heuristic Search",
        "B. Greedy Search",
        "C. Uninformed Search",
        "D. A* Search"
    ];

    const options13 = [
        "A. Queue",
        "B. Priority Queue",
        "C. Stack",
        "D. Linked List"
    ];

    const options14 = [
        "A. Always finds shortest path",
        "B. Uses less memory",
        "C. Expands nodes level by level",
        "D. Always optimal"
    ];

    const options15 = [
        "A. Randomly",
        "B. Level by level",
        "C. Using heuristic values only",
        "D. From leaf to root"
    ];

    const options16 = [
        "A. Queue (FIFO)",
        "B. Stack (LIFO)",
        "C. Heap",
        "D. Tree"
    ];

    const options17 = [
        "A. May enter infinite loop easily",
        "B. Always explores deepest node first",
        "C. Finds the shortest path in an unweighted graph",
        "D. Uses the least memory among all searches"
    ];

    const options18 = [
        "A. BFS and A*",
        "B. DFS and BFS",
        "C. DFS and Hill Climbing",
        "D. BFS and Greedy Search"
    ];

    const options19 = [
        "A. It requires more memory",
        "B. It avoids repeated search completely",
        "C. It combines low memory with completeness",
        "D. It never repeats nodes"
    ];

    const options20 = [
        "A. Uninformed Search",
        "B. Breadth First Search",
        "C. Heuristic Search",
        "D. Depth First Search"
    ];

    const options21 = [
        "A. g(n)",
        "B. f(n)",
        "C. h(n)",
        "D. g(n) + f(n)"
    ];

    const options22 = [
        "A. f(n)=g(n)+h(n)",
        "B. f(n)=g(n)-h(n)",
        "C. f(n)=h(n)-g(n)",
        "D. f(n)=g(n)×h(n)"
    ];

    const options23 = [
        "A. Estimated cost to goal",
        "B. Total heuristic value",
        "C. Actual cost from start node",
        "D. Branching factor"
    ];

    const options24 = [
        "A. Incomplete",
        "B. Optimal and Complete",
        "C. Random Search",
        "D. Uses only heuristic value"
    ];

    const options25 = [
        "A. Random neighbor",
        "B. Worst neighbor",
        "C. Best neighboring state",
        "D. Initial state only"
    ];

    const options26 = [
        "A. Deadlock",
        "B. Local Maximum",
        "C. Buffer Overflow",
        "D. Page Fault"
    ];

    const options27 = [
        "A. Simple Hill Climbing",
        "B. Stochastic Hill Climbing",
        "C. Steepest-Ascent Hill Climbing",
        "D. Random Hill Climbing"
    ];

    const options28 = [
        "A. Binary Trees",
        "B. AND/OR Graphs",
        "C. AVL Trees",
        "D. Decision Tables"
    ];

    const options29 = [
        "A. Only one child node",
        "B. Random child node",
        "C. All child nodes",
        "D. Any two child nodes"
    ];

    const options30 = [
        "A. Expert Systems",
        "B. Bubble Sorting",
        "C. Database Indexing",
        "D. Memory Allocation"
    ];

    const options31 = [
        "A. Natural Selection",
        "B. Heating and Cooling",
        "C. Water Cycle",
        "D. Binary Search"
    ];

    const options32 = [
        "A. Random Search",
        "B. Simulated Annealing",
        "C. Genetic Algorithm",
        "D. Hill Climbing"
    ];

    const options33 = [
        "A. Minimize the score",
        "B. Maximize the score",
        "C. Reduce memory usage",
        "D. Minimize branching factor"
    ];

    const options34 = [
        "A. Increasing tree depth",
        "B. Removing unnecessary nodes",
        "C. Increasing heuristic values",
        "D. Expanding all nodes"
    ];

    const options35 = [
        "A. α = β",
        "B. α > β",
        "C. α < β",
        "D. α = 0"
    ];

    const options36 = [
        "A. Program code only",
        "B. Facts and Rules",
        "C. Hardware components",
        "D. Network packets"
    ];

    const options37 = [
        "A. Goal State",
        "B. Initial State",
        "C. Leaf Node",
        "D. Final Solution"
    ];

    const options38 = [
        "A. Fuzzy Logic",
        "B. Bayesian Reasoning",
        "C. Predicate Logic",
        "D. Semantic Network"
    ];

    const options39 = [
        "A. Cost of nodes",
        "B. Dependency between variables",
        "C. Memory allocation",
        "D. Search depth"
    ];

    const options40 = [
        "A. Supervised Learning",
        "B. Reinforcement Learning",
        "C. Unsupervised Learning",
        "D. Online Learning"
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
        return total + (answer === correctAnswers[index] ? 1 : 0)
    }, 0);

    return (
        <>
            <div className="contain">
                <p className="question">
                    1. Which of the following is NOT a goal of Artificial Intelligence?
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
                    2. Which type of AI is designed to perform only a specific task?
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
                    3. Which application of AI is correctly matched?
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
                    4. Which of the following is NOT a characteristic of an AI system?
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
                    5. According to the Turing Test, a machine is considered intelligent if:
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
                    6. In the Turing Test, how many participants are involved?
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
                    7. Which is a limitation of the Turing Test?
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
                    8. An intelligent agent mainly consists of:
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
                    9. The structure of an intelligent agent is represented as:
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
                    10. Which of the following is an example of an intelligent agent?
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
                    11. In AI problem solving, a solution is searched from:
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
                    12. Which search technique is also known as Blind Search?
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
                    13. Depth First Search (DFS) primarily uses which data structure?
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
                    14. Which is an advantage of DFS?
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
                    15. Breadth First Search (BFS) explores nodes:
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
                    16. BFS uses which data structure?
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
                    17. Which property is true for Breadth First Search?
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
                    18. DFID (Depth First Iterative Deepening) combines the advantages of:
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
                    19. Why is DFID preferred over simple BFS in many cases?
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
                    20. Which search technique uses extra knowledge (heuristic) to reach the goal faster?
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
                    21. In Greedy Best-First Search, the next node is selected using:
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
                    22. The evaluation function used in the A* algorithm is:
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
                    23. In the A* algorithm, g(n) represents:
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
                    24. Which property is associated with the A* search algorithm?
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
                    25. Hill Climbing mainly selects:
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
                    26. Which problem is commonly faced in Hill Climbing?
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
                    27. Which type of Hill Climbing chooses the best among all neighboring states?
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
                    28. AO* algorithm is mainly used for solving problems represented by:
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
                    29. In an AND node, the solution requires:
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
                    30. Which of the following is an application of AO* search?
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
                    31. Simulated Annealing is inspired by which process?
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
                    32. Which stochastic search technique is based on natural selection?
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
                    33. In the Minimax algorithm, the MAX player always tries to:
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
                    34. Alpha-Beta Pruning improves Minimax by:
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
                    35. Pruning is performed in Alpha-Beta algorithm when:
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
                    36. A Knowledge Base mainly stores:
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
                    37. Forward Planning starts from:
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
                    38. Which reasoning method updates beliefs after receiving new evidence?
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
                    39. In a Bayesian Network, edges represent:
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
                    40. Which learning technique groups similar data without using labeled examples?
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

export default Ai_quiz;