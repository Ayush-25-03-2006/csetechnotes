import { useEffect, useState } from "react";
import "./Dsa_Quiz.css";

function Dsa_quiz() {

    useEffect(() => {
        document.title = "Dsa Quiz"
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
    const correctAnswer1 = 3;
    const correctAnswer2 = 3;
    const correctAnswer3 = 1;
    const correctAnswer4 = 1;
    const correctAnswer5 = 1;
    const correctAnswer6 = 2;
    const correctAnswer7 = 2;
    const correctAnswer8 = 3;
    const correctAnswer9 = 2;
    const correctAnswer10 = 2;
    const correctAnswer11 = 1;
    const correctAnswer12 = 1;
    const correctAnswer13 = 1;
    const correctAnswer14 = 1;
    const correctAnswer15 = 2;
    const correctAnswer16 = 1;
    const correctAnswer17 = 2;
    const correctAnswer18 = 1;
    const correctAnswer19 = 0;
    const correctAnswer20 = 1;
    const correctAnswer21 = 1;
    const correctAnswer22 = 3;
    const correctAnswer23 = 1;
    const correctAnswer24 = 3;
    const correctAnswer25 = 2;
    const correctAnswer26 = 2;
    const correctAnswer27 = 0;
    const correctAnswer28 = 3;
    const correctAnswer29 = 1;
    const correctAnswer30 = 1;
    const correctAnswer31 = 0;
    const correctAnswer32 = 1;
    const correctAnswer33 = 0;
    const correctAnswer34 = 1;
    const correctAnswer35 = 0;
    const correctAnswer36 = 2;
    const correctAnswer37 = 3;
    const correctAnswer38 = 2;
    const correctAnswer39 = 1;
    const correctAnswer40 = 1;

    const options1 = [
        "A) O(1)",
        "B) O(log n)",
        "C) O(n²)",
        "D) O(n)"
    ];

    const options2 = [
        "A) Insert at beginning",
        "B) Delete first node",
        "C) Insert after a given node",
        "D) Delete last node"
    ]

    const options3 = [
        "A) Two data fields",
        "B) One extra pointer",
        "C) Parent pointer",
        "D) Height information"
    ]

    const options4 = [
        "A) Head points to itself",
        "B) Head becomes NULL",
        "C) Tail becomes NULL only",
        "D) Data becomes zero"
    ]

    const options5 = [
        "A) 20",
        "B) 30",
        "C) 40",
        "D) 25"
    ]

    const options6 = [
        "A) 36",
        "B) 48",
        "C) 60",
        "D) 72"
    ]

    const options7 = [
        "A) TOP = -1",
        "B) TOP = MAX",
        "C) TOP = MAX − 1",
        "D) TOP = 0"
    ]

    const options8 = [
        "A) LL Rotation",
        "B) RR Rotation",
        "C) LR Rotation",
        "D) RL Rotation"
    ];

    const options9 = [
        "A) Stack Overflow",
        "B) Memory Leakage",
        "C) False Overflow",
        "D) Underflow only"
    ];

    const options10 = [
        "A) front == rear",
        "B) rear == n − 1",
        "C) (rear + 1) % n == front",
        "D) front == -1"
    ];

    const options11 = [
        "A) Searching",
        "B) Enqueue",
        "C) Sorting",
        "D) Traversal"
    ];

    const options12 = [
        "A) Array is reverse sorted",
        "B) Array is already sorted (optimized version)",
        "C) All elements are distinct",
        "D) Array size is prime"
    ];

    const options13 = [
        "A) Bubble Sort",
        "B) Selection Sort",
        "C) Insertion Sort",
        "D) Merge Sort"
    ];

    const options14 = [
        "A) 4, 5",
        "B) 5, 4",
        "C) 5, 5",
        "D) 4, 4"
    ];

    const options15 = [
        "A) Quick Sort",
        "B) Heap Sort",
        "C) Merge Sort",
        "D) Selection Sort"
    ];

    const options16 = [
        "A) Pivot divides array equally every time",
        "B) Pivot is always the smallest or largest element",
        "C) Duplicate elements exist",
        "D) Array size is even"
    ];

    const options17 = [
        "A) O(n)",
        "B) O(log n)",
        "C) O(n log n)",
        "D) O(n²)"
    ];

    const options18 = [
        "A) It uses recursion only",
        "B) It creates temporary arrays during merging",
        "C) It uses linked lists",
        "D) It stores pivot elements"
    ];

    const options19 = [
        "A) 1",
        "B) 2",
        "C) 3",
        "D) 4"
    ];

    const options20 = [
        "A) 1",
        "B) 2",
        "C) 3",
        "D) Depends on the height"
    ];

    const options21 = [
        "A) Left child > Parent",
        "B) Parent ≥ Both Children",
        "C) Right child ≥ Parent",
        "D) Parent < Left Child"
    ];

    const options22 = [
        "A) Inorder",
        "B) Preorder",
        "C) Postorder",
        "D) None of these"
    ];

    const options23 = [
        "A) Binary Search Tree",
        "B) Complete Binary Tree",
        "C) AVL Tree",
        "D) Threaded Tree"
    ];

    const options24 = [
        "A) Merge Sort",
        "B) Insertion Sort",
        "C) Bubble Sort",
        "D) Quick Sort"
    ];

    const options25 = [
        "A) Internal nodes only",
        "B) Root node only",
        "C) Leaf nodes only",
        "D) Every node"
    ];

    const options26 = [
        "A) Queue",
        "B) Heap",
        "C) Stack",
        "D) Linked List"
    ];

    const options27 = [
        "A) Bubble Sort (optimized)",
        "B) Selection Sort",
        "C) Quick Sort (first element pivot)",
        "D) Heap Sort"
    ];

    const options28 = [
        "A) Push",
        "B) Pop",
        "C) Peek",
        "D) Insert at Middle"
    ];

    const options29 = [
        "A) The entire array becomes sorted",
        "B) Two sorted subarrays are combined into one sorted subarray",
        "C) Pivot is placed in its correct position",
        "D) Heap property is maintained"
    ];

    const options30 = [
        "A) Smaller height",
        "B) Linked leaf nodes",
        "C) Fewer keys",
        "D) Binary search property"
    ];

    const options31 = [
        "A) Overflow occurs and the node splits",
        "B) Nothing happens",
        "C) Root is deleted",
        "D) Tree becomes AVL"
    ];

    const options32 = [
        "A) 4 children",
        "B) 5 children",
        "C) 6 children",
        "D) 8 children"
    ];

    const options33 = [
        "A) LL",
        "B) RR",
        "C) LR",
        "D) RL"
    ];

    const options34 = [
        "A) 10",
        "B) 20",
        "C) 30",
        "D) None of these"
    ];

    const options35 = [
        "A) 7",
        "B) 8",
        "C) 9",
        "D) 0"
    ];

    const options36 = [
        "A) 0",
        "B) 1",
        "C) 4",
        "D) 9"
    ];

    const options37 = [
        "A) Linear Probing",
        "B) Separate Chaining",
        "C) Quadratic Probing",
        "D) Both B and C"
    ];

    const options38 = [
        "A) 0.60",
        "B) 0.70",
        "C) 0.75",
        "D) 0.80"
    ];

    const options39 = [
        "A) Internal nodes store complete records",
        "B) Leaf nodes are linked sequentially",
        "C) Every key appears only once",
        "D) Root must always contain two keys"
    ];

    const options40 = [
        "A) Binary Search Tree",
        "B) AVL Tree",
        "C) Hash Table",
        "D) Linear Search"
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
                    1. In a singly linked list having only a head pointer, the worst-case time complexity of deleting the last node is:
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
                <p className="question">2. Which operation on a singly linked list cannot be performed in O(1) time without additional information?
                </p>
                {options2.map((option, index) => (
                    <button key={index}
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
                            setSelected2(index)}}
                        disabled={selected2 !== null}
                    >
                        {option}
                    </button>
                ))}
                <p className="question">3. A doubly linked list requires more memory because each node stores:
                </p>
                {options3.map((option, index) => (
                    <button key={index}
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
                            setSelected3(index)}}
                        disabled={selected3 !== null}
                    >
                        {option}
                    </button>
                ))}
                <p className="question"> 4. If a linked list has only one node, deleting that node should result in:
                </p>
                {options4.map((option, index) => (
                    <button key={index}
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
                    5. A BST is constructed by inserting the keys 40, 20, 60, 10, 30, 50, 70, 25. After inserting 27, which node becomes unbalanced first in an AVL Tree?
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
                    6. A stack contains 12, 24, 36, 48 (bottom to top). After POP, PUSH(60), PUSH(72), POP, the top element is:
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
                    7. Overflow in an array implementation of stack occurs when:
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
                    8. An AVL tree becomes unbalanced due to insertion in the left subtree of the right child. Which rotation is required?
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
                    9. In a linear queue implemented using an array, repeated dequeue operations may lead to:
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
                    10. Which condition correctly represents a full circular queue of size n?
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
                            setSelected10(index)}}
                            disabled={selected10 !== null}
                    >
                        {option}
                    </button>
                ))}
                <p className="question">
                    11. Which operation in a queue always has O(1) time complexity in an array implementation?
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
                    12. Bubble Sort performs best when:
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
                    13. Which sorting algorithm performs the minimum number of swaps in the worst case?
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
                    14. A B-Tree of order 5 can contain at most ______ children and ______ keys in one node.
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
                    15. Which sorting algorithm is both stable and based on Divide and Conquer?
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
                    16. Quick Sort gives worst-case performance when:
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
                    17. The average time complexity of Quick Sort is:
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
                    18. Merge Sort requires extra memory because:
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
                    19. Insert the keys 15, 8, 22, 5, 10, 18, 30, 25, 23 into a B-Tree of order 4. How many keys will be present in the root after all insertions?
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
                    20. The maximum number of children of any node in a binary heap is:
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
                    21. A Max Heap satisfies which property?
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
                    22. Which traversal of a binary heap always produces a sorted sequence?
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
                    23. Heap Sort is based on which data structure?
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
                    24. Which of the following sorting algorithms is not stable?
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
                    25. In a B+ Tree, where are the actual data records stored?
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
                    26. Which of the following data structures is best suited for recursive function calls?
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
                    27. If the input array is already sorted, which algorithm generally performs the fewest comparisons?
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
                    28. Which operation is not supported directly by the Stack ADT?
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
                    29. In Merge Sort, after every merge operation:
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
                    30. Which property makes a B+ Tree more efficient than a B-Tree for range queries?
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
                    31. A B-Tree of order 4 has a node containing 3 keys. Another key is inserted into the same node. What happens?
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
                    32. A B+ Tree of order 5 can have a maximum of:
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
                    33. Consider the AVL Tree obtained after inserting 30, 20, 10. Which rotation is required?
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
                    34. Insert the keys 10, 20, 30 into an AVL Tree. The root after balancing becomes:
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
                    35. In Linear Probing, the hash function is h(k)=k mod 10. Insert the keys 27, 37, 47, 57. The key 57 will be stored at index:
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
                    36. Using Quadratic Probing with h(k)=k mod 11, insert 22, 33, 44. The key 44 will finally occupy:
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
                    37. Which collision resolution technique generally avoids primary clustering?
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
                    38. If a hash table has 20 slots and currently stores 15 records, the load factor is:
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
                    39. Which statement about B+ Trees is correct?
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
                    40. Which data structure guarantees O(log n) search, insertion, and deletion in the worst case?
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

export default Dsa_quiz;