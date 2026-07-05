import { useEffect, useState } from "react";
import "./Dsa_Quiz.css";

function Oops_quiz() {

    useEffect(() => {
        document.title = "Oops Quiz"
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
        "A. Inheritance",
        "B. Polymorphism",
        "C. Abstraction",
        "D. Encapsulation"
    ];
    const correctAnswer1 = 2;

    const options2 = [
        "A. Private",
        "B. Protected",
        "C. Public",
        "D. Friend"
    ];
    const correctAnswer2 = 0;

    const options3 = [
        "A. They always require parameters.",
        "B. They can be declared as static.",
        "C. They return an integer value.",
        "D. They are called automatically when an object is created."
    ];
    const correctAnswer3 = 3;

    const options4 = [
        "A. Destructor",
        "B. Copy constructor",
        "C. Default constructor",
        "D. Parameterized constructor"
    ];
    const correctAnswer4 = 1;

    const options5 = [
        "A. ~",
        "B. #",
        "C. @",
        "D. *"
    ];
    const correctAnswer5 = 0;

    const options6 = [
        "A. Delete objects",
        "B. Access only static members",
        "C. Resolve ambiguity between member variables and parameters",
        "D. Allocate memory dynamically"
    ];
    const correctAnswer6 = 2;

    const options7 = [
        "A. Hierarchical inheritance",
        "B. Single inheritance",
        "C. Multilevel inheritance",
        "D. Multiple inheritance"
    ];
    const correctAnswer7 = 3;

    const options8 = [
        "A. Dynamic binding",
        "B. Static binding",
        "C. Constructor overloading",
        "D. Function templates"
    ];
    const correctAnswer8 = 0;

    const options9 = [
        "A. Friend function",
        "B. Virtual function",
        "C. Static function",
        "D. Inline function"
    ];
    const correctAnswer9 = 1;

    const options10 = [
        "A. Base class",
        "B. Friend class",
        "C. Abstract class",
        "D. Derived class"
    ];
    const correctAnswer10 = 2;

    const options11 = [
        "A. 0",
        "B. NULL",
        "C. -1",
        "D. 1"
    ];
    const correctAnswer11 = 0;

    const options12 = [
        "A. external",
        "B. public",
        "C. associate",
        "D. friend"
    ];
    const correctAnswer12 = 3;

    const options13 = [
        "A. Buffer overflow",
        "B. Diamond problem",
        "C. Memory leak",
        "D. Dangling pointer problem"
    ];
    const correctAnswer13 = 1;

    const options14 = [
        "A. Friend function",
        "B. Recursive function",
        "C. Inline function",
        "D. Virtual function"
    ];
    const correctAnswer14 = 2;

    const options15 = [
        "A. Global scope",
        "B. Namespace scope",
        "C. Class scope",
        "D. Local scope"
    ];
    const correctAnswer15 = 3;

    const options16 = [
        "A. Automatic variable",
        "B. Static variable",
        "C. Register variable",
        "D. Local variable"
    ];
    const correctAnswer16 = 1;

    const options17 = [
        "A. Protected",
        "B. Public",
        "C. Private",
        "D. Inaccessible"
    ];
    const correctAnswer17 = 0;

    const options18 = [
        "A. Runtime polymorphism",
        "B. Function overriding",
        "C. Compile-time polymorphism",
        "D. Dynamic binding"
    ];
    const correctAnswer18 = 2;

    const options19 = [
        "A. Polymorphism",
        "B. Encapsulation",
        "C. Abstraction",
        "D. Inheritance"
    ];
    const correctAnswer19 = 3;

    const options20 = [
        "A. bool",
        "B. class",
        "C. float",
        "D. double"
    ];
    const correctAnswer20 = 1;

    const options21 = [
        "A. Parameterized constructor",
        "B. Default constructor",
        "C. Virtual constructor",
        "D. Copy constructor"
    ];
    const correctAnswer21 = 1;

    const options22 = [
        "A. Parameterized constructor",
        "B. Copy constructor",
        "C. Dynamic constructor",
        "D. Default constructor"
    ];
    const correctAnswer22 = 0;

    const options23 = [
        "A. Returns an integer value",
        "B. Can have parameters",
        "C. Is called automatically when an object goes out of scope",
        "D. Can be overloaded"
    ];
    const correctAnswer23 = 2;

    const options24 = [
        "A. Protected members",
        "B. Public members",
        "C. Member functions",
        "D. Private members"
    ];
    const correctAnswer24 = 3;

    const options25 = [
        "A. Multiple inheritance",
        "B. Single inheritance",
        "C. Hierarchical inheritance",
        "D. Multilevel inheritance"
    ];
    const correctAnswer25 = 2;

    const options26 = [
        "A. Hybrid inheritance",
        "B. Multilevel inheritance",
        "C. Hierarchical inheritance",
        "D. Multiple inheritance"
    ];
    const correctAnswer26 = 1;

    const options27 = [
        "A. Return type only",
        "B. Parameter list",
        "C. Function name",
        "D. Access specifier"
    ];
    const correctAnswer27 = 1;

    const options28 = [
        "A. Two constructors have different parameters",
        "B. Two functions have different names",
        "C. A constructor calls another constructor",
        "D. A derived class defines a function with the same signature as its base class"
    ];
    const correctAnswer28 = 3;

    const options29 = [
        "A. Runtime binding",
        "B. Static binding",
        "C. Late binding",
        "D. Dynamic binding"
    ];
    const correctAnswer29 = 1;

    const options30 = [
        "A. Friend class",
        "B. Derived class",
        "C. Base class",
        "D. Main function"
    ];
    const correctAnswer30 = 2;

    const options31 = [
        "A. It can be instantiated directly.",
        "B. It cannot contain data members.",
        "C. It cannot have constructors.",
        "D. It must contain at least one pure virtual function."
    ];
    const correctAnswer31 = 3;

    const options32 = [
        "A. override",
        "B. virtual",
        "C. static",
        "D. inline"
    ];
    const correctAnswer32 = 1;

    const options33 = [
        "A. A virtual function",
        "B. A member function of the class",
        "C. A constructor",
        "D. A non-member function that can access private members"
    ];
    const correctAnswer33 = 3;

    const options34 = [
        "A. Suitable for recursive functions",
        "B. Faster execution for small functions",
        "C. Improves performance for small code",
        "D. Reduces function call overhead"
    ];
    const correctAnswer34 = 0;

    const options35 = [
        "A. Dynamic lifetime",
        "B. Global lifetime",
        "C. Automatic lifetime",
        "D. Static lifetime"
    ];
    const correctAnswer35 = 2;

    const options36 = [
        "A. destroy",
        "B. free",
        "C. remove",
        "D. delete"
    ];
    const correctAnswer36 = 3;

    const options37 = [
        "A. Array",
        "B. Enumeration",
        "C. Pointer",
        "D. Structure"
    ];
    const correctAnswer37 = 2;

    const options38 = [
        "A. Abstraction",
        "B. Polymorphism",
        "C. Inheritance",
        "D. Encapsulation"
    ];
    const correctAnswer38 = 1;

    const options39 = [
        "A. Dynamic binding",
        "B. Encapsulation",
        "C. Inheritance",
        "D. Polymorphism"
    ];
    const correctAnswer39 = 1;

    const options40 = [
        "A. Encapsulation",
        "B. Inheritance",
        "C. Preprocessor directives",
        "D. Abstraction"
    ];
    const correctAnswer40 = 2;

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
                    1. Which OOP feature allows a class to hide implementation details while exposing only essential functionality?
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
                    2. Which access specifier allows members to be accessed only within the same class?
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
                    3. Which statement about constructors in C++ is correct?
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
                    4. Which constructor is invoked when an object is initialized using another object of the same class?
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
                    5. Which symbol is prefixed to a destructor?
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
                    6. The primary purpose of the this pointer is to:
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
                    7. Which inheritance type allows a derived class to inherit from more than one base class?
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
                    8. Runtime polymorphism mainly depends on:
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
                    9. Which function enables runtime polymorphism?
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
                    10. Which class cannot be instantiated directly?
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
                    11. A pure virtual function is declared by assigning it:
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
                    12. Which keyword is used to declare a friend function?
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
                    13. Virtual base class is mainly used to solve:
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
                    14. Which function is generally expanded at the point of function call?
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
                    15. A variable declared inside a function has:
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
                    16. Which variable retains its value between successive function calls?
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
                    17. In protected inheritance, a public member of the base class becomes:
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
                    18. Constructor overloading is an example of:
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
                    19. Which OOP feature mainly supports code reusability?
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
                    20. Which of the following is a user-defined data type in C++?
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
                    21. If no constructor is explicitly defined in a class, the compiler provides:
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
                    22. Which constructor is used to initialize an object with user-defined values?
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
                    23. A destructor in C++:
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
                    24. Which of the following is NOT inherited by a derived class?
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
                    25. Which inheritance type has one base class and multiple derived classes?
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
                    26. Which inheritance type forms a chain of inheritance?
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
                    27. In function overloading, overloaded functions must differ in:
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
                    28. Function overriding occurs when:
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
                    29. Which binding occurs at compile time?
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
                    30. A virtual function should generally be declared in the:
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
                    31. Which statement about an abstract class is correct?
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
                    32. Which keyword is used while declaring a pure virtual function?
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
                    33. A friend function is:
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
                    34. Which of the following is NOT a benefit of inline functions?
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
                    35. Which lifetime ends automatically when a function returns?
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
                    36. Memory allocated using new is released using:
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
                    37. Which C++ data type is primarily used to store memory addresses?
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
                    38. Which OOP concept allows the same function name to perform different tasks depending on the object?
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
                    39. Which OOP feature bundles data and member functions into a single unit?
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
                    40. Which of the following is NOT considered one of the core principles of Object-Oriented Programming?
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

export default Oops_quiz;