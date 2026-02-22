import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiCpu,
    FiBox,
    FiZap,
    FiTrash2,
    FiLayers,
    FiHash,
    FiLock,
} from "react-icons/fi";

const MemoryJvmMentalModel = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "stack-vs-heap",
                icon: <FiLayers />,
                title: "Stack vs Heap",
                summary:
                    "Stack stores method calls and local variables. Heap stores objects created with new.",
                points: [
                    "Stack is fast and automatically cleaned when a method ends.",
                    "Heap is shared across threads and managed by the Garbage Collector.",
                    "Local primitives are usually on stack. Objects live on heap, stack holds references.",
                ],
                code: `public class Demo {
    static class Person {
        String name;
        Person(String name) { this.name = name; }
    }

    public static void main(String[] args) {
        int age = 25;                 // stack (primitive local)
        Person p = new Person("Ash");  // p reference on stack, object on heap
        System.out.println(p.name);
    }
}`,
                note: "Think like this - stack = execution, heap = storage for objects.",
            },
            {
                id: "object-lifecycle",
                icon: <FiBox />,
                title: "Object creation lifecycle",
                summary:
                    "new triggers allocation, constructor runs, reference is returned, object stays until unreachable.",
                points: [
                    "Memory for the object is allocated on heap.",
                    "Constructor initializes fields.",
                    "Reference is assigned to a variable (usually on stack).",
                    "Object becomes eligible for GC when no reachable references remain.",
                ],
                code: `class Car {
    String model;
    Car(String model) { this.model = model; }
}

public class Test {
    public static void main(String[] args) {
        Car c = new Car("Swift"); // heap object created, stack reference stored
        c = null;                 // object may become eligible for GC
    }
}`,
                note: "Eligible for GC does not mean it will be collected immediately.",
            },
            {
                id: "gc-basics",
                icon: <FiTrash2 />,
                title: "Garbage collection basics",
                summary:
                    "GC frees heap memory by removing objects that are no longer reachable.",
                points: [
                    "GC runs automatically. You do not manually free memory in Java.",
                    "An object is collectible when it is unreachable from GC roots (like stack references, static references).",
                    "Calling System.gc() is only a request, JVM may ignore it.",
                ],
                code: `public class GcDemo {
    static class A { }

    public static void main(String[] args) {
        A a = new A();
        a = null;          // now eligible for GC
        System.gc();       // request, not guarantee
    }
}`,
                note: "Focus on writing code that does not keep unnecessary references.",
            },
            {
                id: "reference-types",
                icon: <FiHash />,
                title: "Reference types",
                summary:
                    "Reference variables point to objects on heap. Multiple references can point to the same object.",
                points: [
                    "Reference holds address-like info, not the actual object data.",
                    "Two variables can point to the same object, changes appear through both.",
                    "Java is pass by value, but for objects the value passed is the reference value.",
                ],
                code: `class User {
    String name;
    User(String name) { this.name = name; }
}

public class RefDemo {
    static void rename(User u) {
        u.name = "Updated"; // modifies same object
    }

    public static void main(String[] args) {
        User a = new User("Ash");
        User b = a;         // b points to same object as a
        rename(a);
        System.out.println(b.name); // Updated
    }
}`,
                note: "Common confusion - objects are not passed by reference, references are passed by value.",
            },
            {
                id: "string-pool",
                icon: <FiZap />,
                title: "String pool",
                summary:
                    "String literals are stored in a shared pool. new String creates a new heap object.",
                points: [
                    "String is immutable, so pooling is safe and memory-efficient.",
                    "Two identical literals can point to the same pooled object.",
                    "Use intern() only if you know why you need it.",
                ],
                code: `public class StringPoolDemo {
    public static void main(String[] args) {
        String a = "java";
        String b = "java";
        System.out.println(a == b); // true (same pooled literal)

        String c = new String("java");
        System.out.println(a == c); // false (new object)

        String d = c.intern();
        System.out.println(a == d); // true (d points to pool)
    }
}`,
                note: "Use equals() for content comparison, not ==.",
            },
            {
                id: "wrappers-autoboxing",
                icon: <FiCpu />,
                title: "Wrapper classes and autoboxing",
                summary:
                    "Wrappers turn primitives into objects. Autoboxing converts automatically when needed.",
                points: [
                    "int -> Integer is boxing, Integer -> int is unboxing.",
                    "Collections store objects, so primitives are boxed.",
                    "Be careful with null unboxing, it causes NullPointerException.",
                ],
                code: `import java.util.ArrayList;

public class BoxingDemo {
    public static void main(String[] args) {
        int x = 10;
        Integer y = x;     // autoboxing

        int z = y;         // unboxing

        ArrayList<Integer> list = new ArrayList<>();
        list.add(5);       // boxing happens

        Integer n = null;
        // int bad = n;     // NullPointerException due to unboxing
    }
}`,
                note: "Wrappers add overhead. Prefer primitives unless you need object behavior.",
            },
            {
                id: "immutability",
                icon: <FiLock />,
                title: "Immutable objects",
                summary:
                    "Immutable means state cannot change after creation. String is the most common example.",
                points: [
                    "Immutable objects are thread-safe by default.",
                    "They are safe for caching and reuse.",
                    "To build custom immutable classes - make fields final, do not expose mutators, and do defensive copies.",
                ],
                code: `final class ImmutableUser {
    private final String name;
    private final int age;

    public ImmutableUser(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() { return name; }
    public int getAge() { return age; }
}`,
                note: "If a field is a mutable object (like List), return a copy in getter.",
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
                            <FiCpu />
                        </div>

                        <div className="titleBlock">
                            <div className="title">
                                Memory and JVM Mental Model
                            </div>
                            <div className="subtitle">
                                Understanding memory = confidence in Java
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
                            This section separates average dev from strong dev.
                            Memory clarity fixes bugs faster and makes your code
                            more predictable.
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

export default MemoryJvmMentalModel;
