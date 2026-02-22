import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiAlertTriangle,
    FiShield,
    FiCode,
    FiTool,
    FiLayers,
} from "react-icons/fi";

const ExceptionHandling = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "checked-vs-unchecked",
                icon: <FiShield />,
                title: "Checked vs Unchecked Exceptions",
                summary:
                    "Checked exceptions must be handled or declared. Unchecked exceptions occur at runtime.",
                points: [
                    "Checked exceptions are verified at compile time.",
                    "Unchecked exceptions extend RuntimeException.",
                    "Compiler forces handling of checked exceptions.",
                ],
                code: `// Checked Exception
import java.io.FileReader;

public class Demo {
    public static void main(String[] args) throws Exception {
        FileReader file = new FileReader("test.txt");
    }
}

// Unchecked Exception
public class Test {
    public static void main(String[] args) {
        int x = 10 / 0; // ArithmeticException
    }
}`,
                note: "Checked = compile time handling required. Unchecked = runtime issues.",
            },
            {
                id: "try-catch-finally",
                icon: <FiCode />,
                title: "try catch finally",
                summary:
                    "try contains risky code, catch handles exception, finally always executes.",
                points: [
                    "try block wraps risky code.",
                    "catch block handles specific exception.",
                    "finally runs regardless of exception.",
                ],
                code: `public class TryCatchDemo {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero");
        } finally {
            System.out.println("Cleanup logic");
        }
    }
}`,
                note: "finally is commonly used for closing resources.",
            },
            {
                id: "throw-vs-throws",
                icon: <FiAlertTriangle />,
                title: "throw vs throws",
                summary:
                    "throw is used to explicitly throw an exception. throws declares exceptions in method signature.",
                points: [
                    "throw is followed by an exception object.",
                    "throws appears in method declaration.",
                    "throw transfers control immediately.",
                ],
                code: `public class ThrowDemo {

    static void validate(int age) throws Exception {
        if (age < 18) {
            throw new Exception("Not eligible");
        }
    }

    public static void main(String[] args) throws Exception {
        validate(15);
    }
}`,
                note: "throw creates and throws. throws declares responsibility.",
            },
            {
                id: "custom-exceptions",
                icon: <FiTool />,
                title: "Custom Exceptions",
                summary:
                    "Custom exceptions allow you to define domain-specific error types.",
                points: [
                    "Extend Exception for checked custom exception.",
                    "Extend RuntimeException for unchecked custom exception.",
                    "Useful for business logic validation.",
                ],
                code: `class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

public class CustomExceptionDemo {
    static void checkAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18+");
        }
    }
}`,
                note: "Use meaningful names for business-level errors.",
            },
            {
                id: "exception-hierarchy",
                icon: <FiLayers />,
                title: "Exception Hierarchy",
                summary: "All exceptions inherit from Throwable.",
                points: [
                    "Throwable is root class.",
                    "Error represents serious JVM issues.",
                    "Exception represents application-level issues.",
                    "RuntimeException is unchecked.",
                ],
                code: `java.lang.Object
   └── Throwable
        ├── Error
        └── Exception
             └── RuntimeException`,
                note: "Never catch Error unless you have a very specific reason.",
            },
        ];
    }, []);

    return (
        <Styled.Wrapper>
            <Styled.Container className={open ? "isOpen" : ""}>
                <Styled.Header
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                >
                    <div className="left">
                        <div className="badge">
                            <FiAlertTriangle />
                        </div>

                        <div className="titleBlock">
                            <div className="title">Exception Handling</div>
                            <div className="subtitle">
                                Java loves explicit error handling
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
                            Strong Java developers understand the exception
                            model deeply. Proper handling prevents crashes and
                            improves reliability.
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

export default ExceptionHandling;
