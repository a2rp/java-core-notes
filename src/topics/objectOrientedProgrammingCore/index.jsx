import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiLayers,
    FiBox,
    FiTool,
    FiLink2,
    FiGitMerge,
    FiRepeat,
    FiShuffle,
    FiShield,
    FiActivity,
    FiCode,
    FiCheckCircle,
} from "react-icons/fi";

const OopCore = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "class-object",
                icon: <FiBox />,
                title: "Class and object",
                summary:
                    "Class is a blueprint. Object is an instance created from that blueprint.",
                points: [
                    "Class defines fields (data) and methods (behavior).",
                    "Object holds real values in memory at runtime.",
                    "You create objects using new.",
                ],
                code: `class Car {
    String model;
    void drive() { System.out.println("Driving " + model); }
}

public class Demo {
    public static void main(String[] args) {
        Car c = new Car();
        c.model = "Swift";
        c.drive();
    }
}`,
                note: "Class is definition. Object is the actual thing in memory.",
            },
            {
                id: "constructors",
                icon: <FiTool />,
                title: "Constructors",
                summary:
                    "Constructor initializes a new object. Same name as class, no return type.",
                points: [
                    "Default constructor exists only if you do not write any constructor.",
                    "You can overload constructors (multiple versions).",
                    "Constructor runs automatically when you use new.",
                ],
                code: `class User {
    String name;

    User() {
        name = "Unknown";
    }

    User(String name) {
        this.name = name;
    }
}

public class Demo {
    public static void main(String[] args) {
        User a = new User();
        User b = new User("Ash");
        System.out.println(a.name);
        System.out.println(b.name);
    }
}`,
                note: "If you create a parameterized constructor, default one is not provided automatically.",
            },
            {
                id: "this-keyword",
                icon: <FiLink2 />,
                title: "this keyword",
                summary:
                    "this refers to the current object. Used to access fields and methods of the same instance.",
                points: [
                    "Commonly used to resolve naming conflicts between fields and parameters.",
                    "Used to call another constructor in the same class: this(...).",
                    "You can return this from methods for chaining.",
                ],
                code: `class Box {
    int size;

    Box(int size) {
        this.size = size; // field = parameter
    }

    Box grow() {
        this.size++;
        return this; // chaining
    }
}`,
                note: "this is the current object reference.",
            },
            {
                id: "encapsulation",
                icon: <FiShield />,
                title: "Encapsulation",
                summary:
                    "Encapsulation means hiding internal state and exposing controlled access using methods.",
                points: [
                    "Make fields private to prevent direct access.",
                    "Provide getters and setters with validation.",
                    "Helps maintain invariants and prevents accidental misuse.",
                ],
                code: `class BankAccount {
    private double balance;

    public double getBalance() {
        return balance;
    }

    public void deposit(double amount) {
        if (amount <= 0) return;
        balance += amount;
    }
}`,
                note: "Encapsulation is about control, not hiding for no reason.",
            },
            {
                id: "inheritance",
                icon: <FiGitMerge />,
                title: "Inheritance",
                summary:
                    "Inheritance allows a class to reuse and extend another class using extends.",
                points: [
                    "Child class inherits fields and methods from parent class.",
                    "Promotes code reuse, but avoid deep inheritance chains.",
                    "Use overriding to change behavior in the child class.",
                ],
                code: `class Animal {
    void sound() { System.out.println("Some sound"); }
}

class Dog extends Animal {
    void bark() { System.out.println("Bark"); }
}

public class Demo {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.sound();
        d.bark();
    }
}`,
                note: "Inheritance models an 'is-a' relationship (Dog is an Animal).",
            },
            {
                id: "super-keyword",
                icon: <FiLayers />,
                title: "super keyword",
                summary:
                    "super refers to the parent class. Used to call parent constructor or parent methods.",
                points: [
                    "super(...) must be the first line inside a constructor.",
                    "Use super.method() to call parent version when overriding.",
                    "super helps reuse parent initialization logic.",
                ],
                code: `class Parent {
    Parent(String name) { System.out.println("Parent: " + name); }
    void show() { System.out.println("Parent show"); }
}

class Child extends Parent {
    Child() {
        super("Init"); // call parent constructor
    }

    @Override
    void show() {
        super.show(); // call parent method
        System.out.println("Child show");
    }
}`,
                note: "super is mainly about parent access and proper initialization.",
            },
            {
                id: "method-overriding",
                icon: <FiRepeat />,
                title: "Method overriding",
                summary:
                    "Overriding means child class provides a new implementation of a parent method.",
                points: [
                    "Same method name, parameters, and return type (or compatible).",
                    "Use @Override annotation to avoid mistakes.",
                    "Runtime decides which method runs (dynamic dispatch).",
                ],
                code: `class A {
    void run() { System.out.println("A running"); }
}

class B extends A {
    @Override
    void run() { System.out.println("B running"); }
}

public class Demo {
    public static void main(String[] args) {
        A obj = new B();
        obj.run(); // B running
    }
}`,
                note: "Overriding enables polymorphism.",
            },
            {
                id: "polymorphism",
                icon: <FiShuffle />,
                title: "Polymorphism",
                summary:
                    "Polymorphism means one interface, multiple implementations. Most common is runtime polymorphism via overriding.",
                points: [
                    "Parent reference can point to child object.",
                    "Method call resolves to the object's actual type at runtime.",
                    "Improves flexibility, reduces tight coupling.",
                ],
                code: `class Payment {
    void pay() { System.out.println("Pay default"); }
}

class CardPayment extends Payment {
    @Override
    void pay() { System.out.println("Pay by card"); }
}

class UpiPayment extends Payment {
    @Override
    void pay() { System.out.println("Pay by UPI"); }
}

public class Demo {
    static void checkout(Payment p) {
        p.pay();
    }

    public static void main(String[] args) {
        checkout(new CardPayment());
        checkout(new UpiPayment());
    }
}`,
                note: "This is how real systems stay extendable without rewriting old code.",
            },
            {
                id: "abstraction",
                icon: <FiActivity />,
                title: "Abstraction",
                summary:
                    "Abstraction means exposing only the necessary behavior and hiding internal details.",
                points: [
                    "You focus on what an object does, not how it does it.",
                    "Achieved using abstract classes and interfaces.",
                    "Helps build clean APIs and reusable components.",
                ],
                code: `interface Storage {
    void save(String data);
}

class DiskStorage implements Storage {
    public void save(String data) {
        System.out.println("Saved to disk: " + data);
    }
}`,
                note: "Abstraction is the reason large codebases stay manageable.",
            },
            {
                id: "abstract-class",
                icon: <FiCode />,
                title: "Abstract class",
                summary:
                    "An abstract class can have both abstract methods (no body) and concrete methods (with body).",
                points: [
                    "Cannot create object directly from an abstract class.",
                    "Used when you want shared code + required methods.",
                    "Child must implement all abstract methods.",
                ],
                code: `abstract class Shape {
    abstract double area();

    void info() {
        System.out.println("I am a shape");
    }
}

class Circle extends Shape {
    double r;
    Circle(double r) { this.r = r; }

    @Override
    double area() {
        return 3.14159 * r * r;
    }
}`,
                note: "Abstract class is for partial implementation + shared logic.",
            },
            {
                id: "interface",
                icon: <FiCheckCircle />,
                title: "Interface",
                summary:
                    "An interface defines a contract. Implementing class must provide the behavior.",
                points: [
                    "Supports multiple inheritance of type (a class can implement multiple interfaces).",
                    "In Java 8+, interfaces can have default and static methods.",
                    "Best for defining capability like Runnable, Comparable.",
                ],
                code: `interface Flyable {
    void fly();
}

class Bird implements Flyable {
    @Override
    public void fly() {
        System.out.println("Bird flying");
    }
}`,
                note: "Interface is about capability. It keeps designs flexible.",
            },
            {
                id: "interface-vs-abstract",
                icon: <FiLayers />,
                title: "Interface vs abstract class",
                summary:
                    "Use interface for capability contracts. Use abstract class for shared base behavior.",
                points: [
                    "Interface - multiple can be implemented, focuses on what.",
                    "Abstract class - single inheritance, can store state and shared logic.",
                    "Rule of thumb - start with interface, use abstract class only if you need shared base code.",
                ],
                code: `// Interface for capability
interface Logger {
    void log(String msg);
}

// Abstract class for shared base behavior
abstract class BaseLogger {
    void prefix() { System.out.print("[LOG] "); }
    abstract void log(String msg);
}`,
                note: "In real projects, interfaces usually scale better over time.",
            },
            {
                id: "object-class-methods",
                icon: <FiBox />,
                title: "Object class methods",
                summary:
                    "Every Java class extends Object. Key methods are toString, equals, and hashCode.",
                points: [
                    "toString - readable representation for logs/debug.",
                    "equals - content equality (override for meaningful comparison).",
                    "hashCode - must match equals contract, used by HashMap/HashSet.",
                ],
                code: `class User {
    private final int id;
    private final String name;

    User(int id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "User{id=" + id + ", name='" + name + "'}";
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User other = (User) o;
        return id == other.id;
    }

    @Override
    public int hashCode() {
        return Integer.hashCode(id);
    }
}`,
                note: "equals and hashCode should always be overridden together for correct collection behavior.",
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
                            <FiLayers />
                        </div>

                        <div className="titleBlock">
                            <div className="title">
                                Object Oriented Programming Core
                            </div>
                            <div className="subtitle">This is Java's spine</div>
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
                            OOP is the foundation of most Java codebases. If
                            this is strong, everything else becomes easier.
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

export default OopCore;
