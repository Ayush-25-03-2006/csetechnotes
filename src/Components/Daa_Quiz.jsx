import { useEffect, useState } from "react";
import "./Dsa_Quiz.css";

function Daa_quiz() {

    useEffect(() => {
        document.title = "Daa Quiz"
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
    const correctAnswer1 = 2;
    const correctAnswer2 = 1;
    const correctAnswer3 = 0;
    const correctAnswer4 = 2;
    const correctAnswer5 = 3;
    const correctAnswer6 = 2;
    const correctAnswer7 = 1;
    const correctAnswer8 = 2;
    const correctAnswer9 = 0;
    const correctAnswer10 = 1;
    const correctAnswer11 = 2;
    const correctAnswer12 = 2;
    const correctAnswer13 = 0;
    const correctAnswer14 = 1;
    const correctAnswer15 = 1;
    const correctAnswer16 = 1;
    const correctAnswer17 = 1;
    const correctAnswer18 = 2;
    const correctAnswer19 = 2;
    const correctAnswer20 = 2;
    const correctAnswer21 = 2;
    const correctAnswer22 = 2;
    const correctAnswer23 = 1;
    const correctAnswer24 = 2;
    const correctAnswer25 = 2;
    const correctAnswer26 = 2;
    const correctAnswer27 = 3;
    const correctAnswer28 = 1;
    const correctAnswer29 = 2;
    const correctAnswer30 = 2;
    const correctAnswer31 = 1;
    const correctAnswer32 = 0;
    const correctAnswer33 = 1;
    const correctAnswer34 = 1;
    const correctAnswer35 = 1;
    const correctAnswer36 = 1;
    const correctAnswer37 = 2;
    const correctAnswer38 = 2;
    const correctAnswer39 = 1;
    const correctAnswer40 = 1;

    const options1 = [
        "A) O(n)",
        "B) Ω(n)",
        "C) Θ(n)",
        "D) o(n)"
    ];

    const options2 = [
        "A) O(n)",
        "B) O(n²)",
        "C) O(n³)",
        "D) O(log n)"
    ];

    const options3 = [
        "A) T(n)=2T(n/2)+n",
        "B) T(n)=T(n−1)+1",
        "C) T(n)=3T(n−1)+1",
        "D) T(n)=T(n/2)+1"
    ];

    const options4 = [
        "A) Θ(n²)",
        "B) Θ(n²logn)",
        "C) Θ(n³)",
        "D) Θ(n³logn)"
    ];

    const options5 = [
        "A) Merge Sort",
        "B) Binary Search",
        "C) Quick Sort",
        "D) Insertion Sort"
    ];

    const options6 = [
        "A) Θ(n)",
        "B) Θ(log n)",
        "C) Θ(n log n)",
        "D) Θ(n²)"
    ];

    const options7 = [
        "A) Pivot divides array equally",
        "B) Pivot is always smallest/largest",
        "C) Array contains duplicates",
        "D) Array size is prime"
    ];

    const options8 = [
        "A) Heap Sort",
        "B) Quick Sort",
        "C) Merge Sort",
        "D) Selection Sort"
    ];

    const options9 = [
        "A) [2, 4, 8, 5, 15, 20, 18, 12]",
        "B) [2, 5, 4, 12, 15, 20, 18, 8]",
        "C) [4, 2, 8, 5, 15, 20, 18, 12]",
        "D) [2, 5, 8, 12, 15, 20, 18, 4]"
    ];

    const options10 = [
        "A) Θ(n²)",
        "B) Θ(n)",
        "C) Θ(log n)",
        "D) Θ(n log n)"
    ];

    const options11 = [
        "A) Array is reverse sorted",
        "B) Array contains duplicates",
        "C) Array is already sorted",
        "D) Array size is odd"
    ];

    const options12 = [
        "A) [40, 30, 35, 20, 15, 10]",
        "B) [35, 40, 30, 20, 15, 10]",
        "C) [40, 35, 30, 20, 15, 10]",
        "D) [30, 40, 35, 20, 15, 10]"
    ];

    const options13 = [
        "A) Merge Sort",
        "B) Quick Sort",
        "C) Bubble Sort",
        "D) Insertion Sort"
    ];

    const options14 = [
        "A) Θ(1)",
        "B) Θ(log n)",
        "C) Θ(n)",
        "D) Θ(n log n)"
    ];

    const options15 = [
        "A) T(n)=T(n−1)+f(n)",
        "B) T(n)=aT(n/b)+f(n)",
        "C) T(n)=T(√n)+f(n)",
        "D) All of these"
    ];

    const options16 = [
        "A) DFS",
        "B) BFS",
        "C) Prim",
        "D) Kruskal"
    ];

    const options17 = [
        "A) Queue",
        "B) Stack/Recursion",
        "C) Heap",
        "D) Linked List"
    ];

    const options18 = [
        "A) O(V²)",
        "B) O(E²)",
        "C) O(V+E)",
        "D) O(VlogV)"
    ];

    const options19 = [
        "A) Dijkstra",
        "B) Bellman-Ford",
        "C) Kruskal",
        "D) Floyd-Warshall"
    ];

    const options20 = [
        "A) Divide & Conquer",
        "B) Dynamic Programming",
        "C) Greedy",
        "D) Backtracking"
    ];

    const options21 = [
        "A) Dijkstra",
        "B) Prim",
        "C) Bellman-Ford",
        "D) BFS"
    ];

    const options22 = [
        "A) MST",
        "B) Single-source shortest path",
        "C) All-pairs shortest paths",
        "D) Topological ordering"
    ];

    const options23 = [
        "A) 70",
        "B) 80",
        "C) 85",
        "D) 95"
    ];

    const options24 = [
        "A) DFS",
        "B) BFS",
        "C) Bellman-Ford",
        "D) Prim"
    ];

    const options25 = [
        "A) Divide & Conquer",
        "B) Dynamic Programming",
        "C) Greedy",
        "D) Backtracking"
    ];

    const options26 = [
        "A) Backtracking",
        "B) Dynamic Programming",
        "C) Greedy",
        "D) Branch and Bound"
    ];

    const options27 = [
        "A) Activity Selection",
        "B) Huffman Coding",
        "C) Fractional Knapsack",
        "D) 0/1 Knapsack"
    ];

    const options28 = [
        "A) Independent subproblems",
        "B) Overlapping subproblems",
        "C) No recursion",
        "D) Randomized choices"
    ];

    const options29 = [
        "A) Binary Search",
        "B) Merge Sort",
        "C) Matrix Chain Multiplication",
        "D) Heap Sort"
    ];

    const options30 = [
        "A) Greedy",
        "B) Dynamic Programming",
        "C) Backtracking",
        "D) Divide & Conquer"
    ];

    const options31 = [
        "A) Searching",
        "B) Optimization Problems",
        "C) Sorting",
        "D) Graph Traversal"
    ];

    const options32 = [
        "A) DFS",
        "B) Prim",
        "C) Dijkstra",
        "D) Bellman-Ford"
    ];

    const options33 = [
        "A) T(n)=2T(n/2)+1",
        "B) T(n)=T(n/2)+1",
        "C) T(n)=T(n−1)+1",
        "D) T(n)=3T(n/2)+1"
    ];

    const options34 = [
        "A) 49",
        "B) 343",
        "C) 512",
        "D) 729"
    ];

    const options35 = [
        "A) Stability is required",
        "B) Worst-case guarantee is important",
        "C) Input is nearly sorted",
        "D) Extra memory is available"
    ];

    const options36 = [
        "A) Largest edge",
        "B) Minimum edge without forming a cycle",
        "C) Random edge",
        "D) Edge with maximum degree"
    ];

    const options37 = [
        "A) Θ(n)",
        "B) Θ(n log n)",
        "C) Θ(n²)",
        "D) Θ(n²logn)"
    ];

    const options38 = [
        "A) Merge Sort",
        "B) Heap Sort",
        "C) Quick Sort",
        "D) Counting Sort"
    ];

    const options39 = [
        "A) Solving overlapping subproblems",
        "B) Dividing a problem into independent subproblems and combining their solutions",
        "C) Making locally optimal choices",
        "D) Exploring all possible solutions"
    ];

    const options40 = [
        "A) Merge Sort",
        "B) Quick Sort",
        "C) Heap Sort",
        "D) Selection Sort"
    ];

    return (
        <>
            <div className="contain">
                <p className="question">
                    1. Which asymptotic notation gives the tightest bound on an algorithm?
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
                        onClick={() => setSelected1(index)}
                        disabled={selected1 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    2. If f(n)=5n²+3n+1, then the order of growth is:
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
                        onClick={() => setSelected2(index)}
                        disabled={selected2 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    3. Which recurrence has solution Θ(n log n)?
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
                        onClick={() => setSelected3(index)}
                        disabled={selected3 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    4. The recurrence T(n)=8T(n/2)+n² has complexity:
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
                        onClick={() => setSelected4(index)}
                        disabled={selected4 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    5. Which algorithm is NOT based on Divide & Conquer?
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
                        onClick={() => setSelected5(index)}
                        disabled={selected5 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    6. The average-case time complexity of Quick Sort is:
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
                        onClick={() => setSelected6(index)}
                        disabled={selected6 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    7. Worst-case Quick Sort occurs when:
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
                        onClick={() => setSelected7(index)}
                        disabled={selected7 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    8. Which sorting algorithm is stable?
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
                        onClick={() => setSelected8(index)}
                        disabled={selected8 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    9. A min heap is represented as [2, 5, 8, 12, 15, 20, 18]. After inserting 4, the resulting heap is:
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
                        onClick={() => setSelected9(index)}
                        disabled={selected9 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    10. The best-case complexity of Insertion Sort is:
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
                        onClick={() => setSelected10(index)}
                        disabled={selected10 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    11. Bubble Sort performs minimum swaps when:
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
                        onClick={() => setSelected11(index)}
                        disabled={selected11 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    12. A max heap is represented as [50, 40, 35, 20, 15, 10, 30]. After deleting the root, the resulting heap is:
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
                        onClick={() => setSelected12(index)}
                        disabled={selected12 !== null}
                    >
                        {option}
                    </button>
                ))}
                <p className="question">
                    13. Which sorting algorithm guarantees Θ(n log n) in the worst case?
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
                        onClick={() => setSelected13(index)}
                        disabled={selected13 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    14. The recurrence T(n)=T(n/2)+1 solves to:
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
                        onClick={() => setSelected14(index)}
                        disabled={selected14 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    15. Master Theorem is applicable to:
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
                        onClick={() => setSelected15(index)}
                        disabled={selected15 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    16. Which graph traversal uses a Queue?
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
                        onClick={() => setSelected16(index)}
                        disabled={selected16 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    17. DFS is naturally implemented using:
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
                        onClick={() => setSelected17(index)}
                        disabled={selected17 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    18. Time complexity of BFS using adjacency list is:
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
                        onClick={() => setSelected18(index)}
                        disabled={selected18 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    19. Which algorithm constructs a Minimum Spanning Tree?
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
                        onClick={() => setSelected19(index)}
                        disabled={selected19 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    20. Prim's algorithm follows which paradigm?
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
                        onClick={() => setSelected20(index)}
                        disabled={selected20 !== null}
                    >
                        {option}
                    </button>
                ))}
                <p className="question">
                    21. Which shortest path algorithm supports negative edge weights?
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
                        onClick={() => setSelected21(index)}
                        disabled={selected21 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    22. Floyd-Warshall algorithm finds:
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
                        onClick={() => setSelected22(index)}
                        disabled={selected22 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    23. Given the cost matrix, find the minimum tour cost starting from A and returning to A.
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                                <th>D</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>A</th>
                                <td>0</td>
                                <td>10</td>
                                <td>15</td>
                                <td>20</td>
                            </tr>
                            <tr>
                                <th>B</th>
                                <td>10</td>
                                <td>0</td>
                                <td>35</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <th>C</th>
                                <td>15</td>
                                <td>35</td>
                                <td>0</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <th>D</th>
                                <td>20</td>
                                <td>25</td>
                                <td>30</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
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
                        onClick={() => setSelected23(index)}
                        disabled={selected23 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    24. Which algorithm detects negative-weight cycles?
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
                        onClick={() => setSelected24(index)}
                        disabled={selected24 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    25. Huffman Coding is based on:
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
                        onClick={() => setSelected25(index)}
                        disabled={selected25 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    26. Fractional Knapsack is solved optimally using:
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
                        onClick={() => setSelected26(index)}
                        disabled={selected26 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    27. Which problem cannot be solved optimally using Greedy?
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
                        onClick={() => setSelected27(index)}
                        disabled={selected27 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    28. Dynamic Programming is applicable when a problem has:
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
                        onClick={() => setSelected28(index)}
                        disabled={selected28 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    29. Which is a Dynamic Programming problem?
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
                        onClick={() => setSelected29(index)}
                        disabled={selected29 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    30. The N-Queen problem is solved using:
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
                        onClick={() => setSelected30(index)}
                        disabled={selected30 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    31. Branch and Bound is mainly used for:
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
                        onClick={() => setSelected31(index)}
                        disabled={selected31 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    32. Topological Sorting can be performed using:
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
                        onClick={() => setSelected32(index)}
                        disabled={selected32 !== null}
                    >
                        {option}
                    </button>
                ))}
                <p className="question">
                    33. Binary Search follows the recurrence:
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
                        onClick={() => setSelected33(index)}
                        disabled={selected33 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    34. Using Strassen's Algorithm, the multiplication of two 8×8 matrices requires how many recursive matrix multiplications?
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
                        onClick={() => setSelected34(index)}
                        disabled={selected34 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    35. Heap Sort is preferred over Quick Sort when:
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
                        onClick={() => setSelected35(index)}
                        disabled={selected35 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    36. Kruskal's algorithm repeatedly selects:
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
                        onClick={() => setSelected36(index)}
                        disabled={selected36 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    37. If T(n)=4T(n/2)+n, then its complexity is:
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
                        onClick={() => setSelected37(index)}
                        disabled={selected37 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    38. Which sorting algorithm has worst-case Θ(n²) but average-case Θ(n log n)?
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
                        onClick={() => setSelected38(index)}
                        disabled={selected38 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    39. Divide & Conquer works by:
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
                        onClick={() => setSelected39(index)}
                        disabled={selected39 !== null}
                    >
                        {option}
                    </button>
                ))}

                <p className="question">
                    40. Which algorithm is based on both Divide & Conquer and partitioning around a pivot?
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
                        onClick={() => setSelected40(index)}
                        disabled={selected40 !== null}
                    >
                        {option}
                    </button>
                ))}
            </div >
            <hr style={{ border: "5px solid blue", margin: "40px" }} />
        </>
    );
}

export default Daa_quiz;