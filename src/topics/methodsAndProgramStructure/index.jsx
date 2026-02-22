import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiCode,
    FiRepeat,
    FiAlertTriangle,
    FiPlay,
    FiLayers,
    FiCornerDownRight,
} from "react-icons/fi";

const MethodsProgramStructure = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "method-declaration",
                icon: <FiCode />,
                title: "Method declaration and invocation",
                summary:
                    "A method defines reusable behavior. It has return type, name, parameters, and body.",
                points: [
                    "Methods improve code reuse and readability.",
                    "Signature = return type + name + parameters.",
                    "Method is executed when called.",
                ],
                code: `public class Demo {

    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println(result);
    }
}`,
                note: "Execution always starts from main method.",
            },
            {
                id: "method-overloading",
                icon: <FiLayers />,
                title: "Method overloading",
                summary:
                    "Same method name, different parameter list. Decided at compile time.",
                points: [
                    "Return type alone cannot differentiate overloaded methods.",
                    "Parameter count or parameter type must differ.",
                    "This is compile-time polymorphism.",
                ],
                code: `class MathUtil {

    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }
}`,
                note: "Overloading improves API readability.",
            },
            {
                id: "pass-by-value",
                icon: <FiAlertTriangle />,
                title: "Pass by value (important trap)",
                summary:
                    "Java is always pass by value. For objects, the reference value is passed.",
                points: [
                    "Primitive values are copied.",
                    "Object reference is copied, not the object itself.",
                    "Reassigning inside method does not affect original reference.",
                ],
                code: `class User {
    String name;
}

public class Test {

    static void change(User u) {
        u.name = "Updated"; // modifies object
        u = new User();     // reassigning local copy only
    }

    public static void main(String[] args) {
        User user = new User();
        user.name = "Ash";

        change(user);
        System.out.println(user.name); // Updated
    }
}`,
                note: "Java is NOT pass by reference. It passes reference value by value.",
            },
            {
                id: "main-method",
                icon: <FiPlay />,
                title: "Main method signature",
                summary:
                    "Main method is JVM entry point. It must follow exact signature.",
                points: [
                    "public so JVM can access it.",
                    "static so it runs without object creation.",
                    "String[] args holds command-line arguments.",
                ],
                code: `public class Main {

    public static void main(String[] args) {
        System.out.println("Program starts here");

        for (String arg : args) {
            System.out.println(arg);
        }
    }
}`,
                note: "If signature changes, JVM will not find entry point.",
            },
            {
                id: "varargs",
                icon: <FiRepeat />,
                title: "Varargs",
                summary:
                    "Varargs allow passing variable number of arguments to a method.",
                points: [
                    "Syntax uses ... after type.",
                    "Internally treated as array.",
                    "Only one varargs parameter allowed, and it must be last.",
                ],
                code: `class Demo {

    static int sum(int... numbers) {
        int total = 0;
        for (int n : numbers) {
            total += n;
        }
        return total;
    }

    public static void main(String[] args) {
        System.out.println(sum(1, 2, 3, 4));
    }
}`,
                note: "Use varargs carefully for readability.",
            },
            {
                id: "recursion",
                icon: <FiCornerDownRight />,
                title: "Recursion basics",
                summary:
                    "A method calling itself. Must have base condition to stop.",
                points: [
                    "Each call creates new stack frame.",
                    "Base condition prevents infinite recursion.",
                    "Used in problems like factorial, tree traversal.",
                ],
                code: `public class RecursionDemo {

    static int factorial(int n) {
        if (n == 1) return 1;      // base case
        return n * factorial(n - 1); // recursive call
    }

    public static void main(String[] args) {
        System.out.println(factorial(5));
    }
}`,
                note: "Without base case, StackOverflowError occurs.",
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
                            <FiCode />
                        </div>

                        <div className="titleBlock">
                            <div className="title">
                                Methods and Program Structure
                            </div>
                            <div className="subtitle">
                                Java interview trap alert: Java is always pass
                                by value
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
                            Methods define behavior. Understanding method
                            structure makes your program predictable and
                            modular.
                        </div>

                        <div className="grid">
                            {items.map((it) => (
                                <div className="card" key={it.id}>
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

                                    <pre className="code">{`${it.code}`}</pre>

                                    <div className="note">{it.note}</div>
                                </div>
                            ))}
                        </div>
                    </Styled.Content>
                )}
            </Styled.Container>
        </Styled.Wrapper>
    );
};

export default MethodsProgramStructure;
