import { useEffect, useState } from "react";
import "./Dsa_Quiz.css";

function Os_quiz() {

    useEffect(() => {
        document.title = "Os Quiz"
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
    const correctAnswer1 = 1;
    const correctAnswer2 = 1;
    const correctAnswer3 = 2;
    const correctAnswer4 = 2;
    const correctAnswer5 = 0;
    const correctAnswer6 = 2;
    const correctAnswer7 = 2;
    const correctAnswer8 = 1;
    const correctAnswer9 = 1;
    const correctAnswer10 = 2;
    const correctAnswer11 = 1;
    const correctAnswer12 = 1;
    const correctAnswer13 = 2;
    const correctAnswer14 = 0;
    const correctAnswer15 = 1;
    const correctAnswer16 = 1;
    const correctAnswer17 = 0;
    const correctAnswer18 = 1;
    const correctAnswer19 = 1;
    const correctAnswer20 = 0;
    const correctAnswer21 = 2;
    const correctAnswer22 = 1;
    const correctAnswer23 = 1;
    const correctAnswer24 = 1;
    const correctAnswer25 = 2;
    const correctAnswer26 = 1;
    const correctAnswer27 = 1;
    const correctAnswer28 = 1;
    const correctAnswer29 = 1;
    const correctAnswer30 = 1;
    const correctAnswer31 = 2;
    const correctAnswer32 = 2;
    const correctAnswer33 = 1;
    const correctAnswer34 = 2;
    const correctAnswer35 = 2;
    const correctAnswer36 = 1;
    const correctAnswer37 = 1;
    const correctAnswer38 = 2;
    const correctAnswer39 = 2;
    const correctAnswer40 = 2;

    const options1 = [
        "A) Time quantum expires",
        "B) I/O operation completes",
        "C) Process is created",
        "D) CPU dispatches the process"
    ];

    const options2 = [
        "A) 4 ms",
        "B) 6 ms",
        "C) 8 ms",
        "D) 10 ms"
    ];

    const options3 = [
        "A) Heap",
        "B) Global Data",
        "C) Stack",
        "D) Code Segment"
    ];

    const options4 = [
        "A) 11 ms",
        "B) 13 ms",
        "C) 15 ms",
        "D) 9 ms"
    ];

    const options5 = [
        "A) Increase CPU utilization",
        "B) Increase disk capacity",
        "C) Reduce cache size",
        "D) Eliminate interrupts"
    ];

    const options6 = [
        "A) Round Robin",
        "B) FCFS",
        "C) SJF",
        "D) Priority Scheduling"
    ];

    const options7 = [
        "A) P1",
        "B) P2",
        "C) P3",
        "D) P1 and P3 together"
    ];

    const options8 = [
        "A) Variable Partitioning",
        "B) Paging",
        "C) Fixed Partitioning",
        "D) Compaction"
    ];

    const options9 = [
        "A) Memory Controller",
        "B) CPU",
        "C) Hard Disk",
        "D) DMA Controller"
    ];

    const options10 = [
        "A) FIFO",
        "B) LRU",
        "C) Optimal",
        "D) Clock"
    ];

    const options11 = [
        "A) Page is modified",
        "B) Requested page is absent from RAM",
        "C) TLB is full",
        "D) CPU cache misses"
    ];

    const options12 = [
        "A) Large CPU Cache",
        "B) Excessive Page Faults",
        "C) Large Time Quantum",
        "D) Small Registers"
    ];

    const options13 = [
        "A) Mutual Exclusion",
        "B) Hold and Wait",
        "C) Resource Sharing",
        "D) Circular Wait"
    ];

    const options14 = [
        "A) P1",
        "B) P2",
        "C) P3",
        "D) P2 and P3 together"
    ];

    const options15 = [
        "A) Increase RAM",
        "B) Synchronize processes",
        "C) Compress files",
        "D) Speed up CPU clock"
    ];

    const options16 = [
        "A) Any Integer",
        "B) 0 or 1",
        "C) Only Positive Integers",
        "D) -1, 0, 1"
    ];

    const options17 = [
        "A) Mutual Exclusion",
        "B) Memory Allocation",
        "C) Deadlock Detection",
        "D) Page Replacement"
    ];

    const options18 = [
        "A) FCFS",
        "B) Round Robin",
        "C) SJF",
        "D) Priority"
    ];

    const options19 = [
        "A) P1 → P2 → P3",
        "B) P2 → P3 → P1",
        "C) P3 → P2 → P1",
        "D) P2 → P1 → P3"
    ];

    const options20 = [
        "A) Priority Scheduling",
        "B) FCFS",
        "C) Round Robin",
        "D) HRRN"
    ];

    const options21 = [
        "A) 5",
        "B) 6",
        "C) 7",
        "D) 8"
    ];

    const options22 = [
        "A) 5",
        "B) 6",
        "C) 7",
        "D) 8"
    ];

    const options23 = [
        "A) First Fit",
        "B) Best Fit",
        "C) Worst Fit",
        "D) Next Fit"
    ];

    const options24 = [
        "A) Paging",
        "B) Variable Partitioning",
        "C) Segmentation with Paging",
        "D) Cache Memory"
    ];

    const options25 = [
        "A) 0",
        "B) 1",
        "C) 5",
        "D) Depends on RAM"
    ];

    const options26 = [
        "A) Disk Blocks",
        "B) CPU State",
        "C) Page Table Only",
        "D) Cache Only"
    ];

    const options27 = [
        "A) Waiting Time",
        "B) Response Time",
        "C) Turnaround Time",
        "D) Throughput"
    ];

    const options28 = [
        "A) 4",
        "B) 5",
        "C) 6",
        "D) 7"
    ];

    const options29 = [
        "A) 2",
        "B) 3",
        "C) 4",
        "D) 5"
    ];

    const options30 = [
        "A) Reduce Fragmentation",
        "B) Prevent Starvation",
        "C) Improve Paging",
        "D) Increase CPU Clock"
    ];

    const options31 = [
        "A) 8 bits",
        "B) 10 bits",
        "C) 12 bits",
        "D) 16 bits"
    ];

    const options32 = [
        "A) 250 KB",
        "B) 300 KB",
        "C) 600 KB",
        "D) Cannot be allocated"
    ];

    const options33 = [
        "A) Faster creation",
        "B) Better parallelism on multicore processors",
        "C) No context switching",
        "D) Smaller memory footprint"
    ];

    const options34 = [
        "A) FCFS",
        "B) SJF",
        "C) SRTF",
        "D) HRRN"
    ];

    const options35 = [
        "A) 11 ms",
        "B) 12 ms",
        "C) 13 ms",
        "D) 14 ms"
    ];

    const options36 = [
        "A) Entire process always remains in RAM",
        "B) It allows execution larger than physical memory",
        "C) It eliminates page faults",
        "D) It removes secondary storage"
    ];

    const options37 = [
        "A) Wait until I/O completes",
        "B) Execute another ready process",
        "C) Keep CPU Idle",
        "D) Restart the process"
    ];

    const options38 = [
        "A) 4 ms",
        "B) 5 ms",
        "C) 6 ms",
        "D) 7 ms"
    ];

    const options39 = [
        "A) First Fit",
        "B) Best Fit",
        "C) Worst Fit",
        "D) Next Fit"
    ];

    const options40 = [
        "A) Aging",
        "B) Starvation",
        "C) Thrashing",
        "D) Busy Waiting"
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
                    1. A process moves from the Waiting state to the Ready state when:
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
                    2. Three processes arrive at time 0 with burst times 8 ms, 4 ms and 2 ms respectively. If FCFS scheduling is used, the average waiting time is:
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
                    3. If multiple threads of the same process share memory, which memory region is not shared?
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
                    4. Processes P1, P2 and P3 have burst times 9 ms, 4 ms and 2 ms respectively. Assuming all arrive together and non-preemptive SJF is used, the completion time of P1 is:
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
                    5. The main objective of multiprogramming is to:
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
                    6. Which scheduling algorithm may produce the minimum average waiting time, but requires burst time information beforehand?
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
                    7. Three processes P1, P2 and P3 have burst times 5 ms, 4 ms and 3 ms respectively. All arrive at time 0. Time quantum = 2 ms. Which process completes first?
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
                    8. Which memory management technique completely eliminates external fragmentation?
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
                    9. A logical address is generated by:
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
                    10. Which page replacement algorithm requires future knowledge of page references?
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
                    11. A page fault occurs when:
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
                    12. Thrashing mainly occurs because:
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
                    13. Which of the following is not a necessary condition for deadlock?
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
                    14. P1=(AT=0, BT=7), P2=(AT=2, BT=3), P3=(AT=4, BT=1). Using SRTF scheduling, which process finishes last?
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
                    15. The primary purpose of a semaphore is:
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
                    16. Binary Semaphore can have values:
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
                    17. Peterson's Algorithm guarantees:
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
                    18. Which CPU scheduling algorithm generally gives the best response time in interactive systems?
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
                    19. Processes have priorities: P1=3, P2=1, P3=2 (smaller number means higher priority). All arrive together. Which execution order is correct?
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
                    20. Which scheduling algorithm can suffer from starvation without aging?
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
                    21. Page reference string: 1, 2, 3, 2, 4, 1, 5, 2. Number of frames = 3. Using FIFO page replacement, total page faults are:
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
                    22. Reference string: 7, 0, 1, 2, 0, 3, 0. Frames = 3. Using LRU algorithm, page faults are:
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
                    23. Which memory allocation strategy usually leaves the smallest leftover hole?
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
                    24. Compaction is mainly useful in:
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
                    25. A process has 5 pages. Initially no pages are in memory. Minimum possible page faults are:
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
                    26. Context switching overhead mainly involves saving and restoring:
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
                    27. Which scheduling criterion measures how quickly the CPU starts executing a process after arrival?
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
                    28. Reference string: 2, 3, 2, 1, 5, 2, 4, 5. Frames = 3. Using Optimal Page Replacement, total page faults are:
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
                    29. A system has a page size of 1 KB. The logical address generated is 3076. The page number is:
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
                    30. The purpose of aging in scheduling is to:
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
                    31. A page size is 4 KB. Offset field requires:
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
                    32. Available memory holes are: 100 KB, 250 KB, 300 KB, 600 KB. Processes arrive in order: 212 KB, 417 KB, 112 KB. Using First Fit, the second process is allocated to:
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
                    33. Which of the following is an advantage of kernel-level threads over user-level threads?
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
                    34. Which CPU scheduling algorithm is preemptive by design?
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
                    35. A process arrives at time 5 ms and completes at time 18 ms. Its Turnaround Time is:
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
                    36. Which statement regarding virtual memory is correct?
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
                    37. A process has higher priority but is waiting for I/O. CPU is free. The scheduler should:
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
                    38. A process has Burst Time = 9 ms and Turnaround Time = 15 ms. Its Waiting Time is:
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
                    39. Which memory allocation strategy attempts to use the largest available hole first?
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
                    40. A system spends most of its time swapping pages instead of executing processes. This situation is called:
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
                                    : " Failed!"}
                        ]
                    </div>
                </>
            )}
            <hr style={{ border: "5px solid blue", margin: "40px" }} />
        </>
    );
}

export default Os_quiz;