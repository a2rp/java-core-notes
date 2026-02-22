import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiBookOpen,
    FiCpu,
    FiTool,
    FiPlay,
    FiLayers,
    FiCode,
    FiHash,
    FiShuffle,
    FiSliders,
    FiCornerDownRight,
    FiRepeat,
    FiSkipForward,
} from "react-icons/fi";

const Foundations = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "what-is-java",
                icon: <FiBookOpen />,
                title: "What is Java",
                summary:
                    "Java is a class-based, object-oriented language designed for portability and reliability.",
                points: [
                    "Write code once, run it anywhere (with a JVM).",
                    "Compiled to bytecode, executed by the JVM.",
                    "Used for backend, Android, enterprise apps, tools, and more.",
                ],
                code: `// Java code runs inside the JVM
// Source code (.java) -> Bytecode (.class) -> JVM executes`,
                note: "Java feels strict at first, but that strictness helps you write safer code.",
            },
            {
                id: "jdk-jre-jvm",
                icon: <FiTool />,
                title: "JDK vs JRE vs JVM",
                summary:
                    "These three terms explain how Java code is developed and executed.",
                points: [
                    "JVM (Java Virtual Machine) runs bytecode.",
                    "JRE (Java Runtime Environment) = JVM + core libraries to run apps.",
                    "JDK (Java Development Kit) = JRE + tools like javac to build apps.",
                ],
                code: `JVM  -> runs .class bytecode
JRE  -> JVM + libraries (to run)
JDK  -> JRE + dev tools (to build)`,
                note: "If you are writing Java code, you need JDK. If you only run Java apps, JRE is enough.",
            },
            {
                id: "compile-execution",
                icon: <FiCpu />,
                title: "Compilation and execution flow",
                summary: "Java has a two-step journey: compile then run.",
                points: [
                    "Write code in a .java file.",
                    "Compile using javac to generate .class bytecode.",
                    "Run using java, which starts the JVM and executes bytecode.",
                ],
                code: `// 1) Compile
javac Main.java

// 2) Run
java Main`,
                note: "javac creates bytecode. java launches the JVM to run it.",
            },
            {
                id: "bytecode-platform",
                icon: <FiLayers />,
                title: "Bytecode and platform independence",
                summary:
                    "Java compiles to bytecode, not directly to machine code.",
                points: [
                    "Bytecode is the same on every OS.",
                    "Each OS has its own JVM that converts bytecode to machine instructions.",
                    "That is why Java is platform independent.",
                ],
                code: `// Same bytecode runs on different systems
Windows JVM -> runs bytecode
Linux JVM   -> runs bytecode
Mac JVM     -> runs bytecode`,
                note: "The JVM is the key reason Java works across platforms.",
            },
            {
                id: "hello-world",
                icon: <FiPlay />,
                title: "Hello World breakdown",
                summary:
                    "The smallest Java program that shows structure and entry point.",
                points: [
                    "class defines a blueprint (a type).",
                    "main is the entry point where the program starts.",
                    "System.out.println prints text to the console.",
                ],
                code: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,
                note: "main must be exactly public static void main(String[] args) for normal execution.",
            },
            {
                id: "data-types-variables",
                icon: <FiHash />,
                title: "Data types and variables",
                summary:
                    "Java has primitive types and reference types (objects).",
                points: [
                    "Primitives store values directly (int, double, boolean, char).",
                    "Reference types store references to objects (String, arrays, custom classes).",
                    "Choose the smallest type that fits the data.",
                ],
                code: `int age = 25;
double price = 99.99;
char grade = 'A';
boolean isActive = true;

String name = "Ashish"; // reference type (object)`,
                note: "String is not a primitive. It is an object.",
            },
            {
                id: "type-casting",
                icon: <FiShuffle />,
                title: "Type casting",
                summary:
                    "Convert one type to another: widening is automatic, narrowing needs manual cast.",
                points: [
                    "Widening: smaller -> larger type (int -> double) happens automatically.",
                    "Narrowing: larger -> smaller type (double -> int) requires casting.",
                    "Casting can lose data (example: 9.7 becomes 9).",
                ],
                code: `// Widening (automatic)
int num = 10;
double d1 = num;

// Narrowing (manual)
double d2 = 9.7;
int x = (int) d2; // x becomes 9`,
                note: "Widening is safe. Narrowing can truncate or overflow.",
            },
            {
                id: "operators",
                icon: <FiSliders />,
                title: "Operators",
                summary:
                    "Operators perform actions like math, comparison, and logic checks.",
                points: [
                    "Arithmetic: + - * / %",
                    "Relational: > < >= <= ==",
                    "Logical: && || !",
                    "Assignment: = += -= *= /= %=",
                ],
                code: `int a = 10;
int b = 3;

int sum = a + b;     // 13
int mod = a % b;     // 1

boolean ok = a > b;  // true
boolean both = (a > 5) && (b > 1); // true`,
                note: "Use == for primitives. For objects like String, use equals().",
            },
            {
                id: "control-flow",
                icon: <FiRepeat />,
                title: "Control flow (if, switch, loops)",
                summary:
                    "Control flow decides which code runs and how many times it runs.",
                points: [
                    "if/else is for decision making.",
                    "switch is good for multiple discrete cases.",
                    "for and while repeat code based on conditions.",
                ],
                code: `int age = 20;

if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

char grade = 'A';
switch (grade) {
    case 'A':
        System.out.println("Excellent");
        break;
    default:
        System.out.println("Other");
}

for (int i = 0; i < 3; i++) {
    System.out.println(i);
}

int n = 3;
while (n > 0) {
    n--;
}`,
                note: "Prefer switch when you have fixed options. Prefer if when logic is range-based.",
            },
            {
                id: "break-continue",
                icon: <FiSkipForward />,
                title: "Break and continue",
                summary:
                    "break exits the loop. continue skips the current iteration.",
                points: [
                    "break stops the loop immediately.",
                    "continue skips the remaining code in this iteration and moves to the next one.",
                    "Use them carefully for readability.",
                ],
                code: `// break example
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    System.out.println(i); // prints 0..4
}

// continue example
for (int i = 0; i < 6; i++) {
    if (i % 2 == 0) continue;
    System.out.println(i); // prints 1,3,5
}`,
                note: "Clean loops are easier to maintain. Do not overuse break/continue.",
            },
        ];
    }, []);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "isOpen" : ""}>
                <Styled.Header
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                >
                    <div className="left">
                        <div className="badge">
                            <FiCornerDownRight />
                        </div>

                        <div className="titleBlock">
                            <div className="title">Foundations</div>
                            <div className="subtitle">
                                This builds syntax muscle memory
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <span className="hint">
                            {open ? "Click to collapse" : "Click to expand"}
                        </span>
                        <span className="chev">
                            {open ? <FiChevronUp /> : <FiChevronDown />}
                        </span>
                    </div>
                </Styled.Header>

                {open && (
                    <Styled.Content>
                        <div className="topNote">
                            Foundations is the base layer. Keep it simple,
                            repeat it often, and your Java reading and writing
                            speed will jump fast.
                        </div>

                        <div className="grid">
                            {items.map((it) => (
                                <div className="card" key={it.id} id={it.id}>
                                    <div className="cardHead">
                                        <div className="cardIcon">
                                            {it.icon}
                                        </div>
                                        <div className="cardTitle">
                                            {it.title}
                                        </div>
                                    </div>

                                    <div className="cardSummary">
                                        {it.summary}
                                    </div>

                                    <ul className="list">
                                        {it.points.map((p, idx) => (
                                            <li key={idx}>{p}</li>
                                        ))}
                                    </ul>

                                    {it.code && (
                                        <pre className="code">
                                            {`${it.code}`}
                                        </pre>
                                    )}

                                    {it.note && (
                                        <div className="note">{it.note}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default Foundations;
