import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiZap,
    FiCode,
    FiCpu,
    FiGitBranch,
    FiLayers,
    FiBox,
    FiCheckCircle,
    FiLink,
    FiSettings,
} from "react-icons/fi";

const Java8AndBeyond = () => {
    const [open, setOpen] = useState(false);

    const cards = useMemo(() => {
        return [
            {
                id: "lambda",
                icon: <FiZap />,
                title: "Lambda expressions",
                summary:
                    "A compact way to write anonymous functions. Mostly used with functional interfaces.",
                points: [
                    "Syntax: (params) -> expression or (params) -> { block }",
                    "Reduces boilerplate for small behaviors",
                    "Works with functional interfaces (single abstract method)",
                ],
                code: `import java.util.Arrays;
import java.util.List;

public class Demo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Neha", "Niraj", "Ash");

        // Before Java 8 style
        // names.forEach(new Consumer<String>() {
        //     public void accept(String s) { System.out.println(s); }
        // });

        // Java 8 lambda
        names.forEach(s -> System.out.println(s));
    }
}`,
                note: "Lambdas make code read like intent, not ceremony.",
            },
            {
                id: "functional-interface",
                icon: <FiCode />,
                title: "Functional interfaces",
                summary:
                    "An interface with exactly one abstract method. Target type for lambdas.",
                points: [
                    "Can have default and static methods",
                    "Use @FunctionalInterface to prevent accidental extra abstract methods",
                    "Examples: Runnable, Comparator, Callable",
                ],
                code: `@FunctionalInterface
interface Printer {
    void print(String msg);
}

public class Demo {
    public static void main(String[] args) {
        Printer p = m -> System.out.println("Print: " + m);
        p.print("Hello");
    }
}`,
                note: "One abstract method is the key. Default methods do not count.",
            },
            {
                id: "built-in-functional",
                icon: <FiCpu />,
                title: "Built in functional interfaces",
                summary:
                    "Java provides common functional interfaces in java.util.function.",
                points: [
                    "Predicate<T> returns boolean",
                    "Function<T,R> transforms T to R",
                    "Consumer<T> consumes input, returns nothing",
                    "Supplier<T> returns a value, takes nothing",
                ],
                code: `import java.util.function.*;

public class Demo {
    public static void main(String[] args) {
        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println(isEven.test(10)); // true

        Function<String, Integer> len = s -> s.length();
        System.out.println(len.apply("java")); // 4

        Consumer<String> log = s -> System.out.println("LOG: " + s);
        log.accept("started");

        Supplier<Double> rand = () -> Math.random();
        System.out.println(rand.get());
    }
}`,
                note: "These cover most everyday lambda needs without custom interfaces.",
            },
            {
                id: "streams",
                icon: <FiLayers />,
                title: "Streams API",
                summary:
                    "A pipeline for processing collections in a declarative way.",
                points: [
                    "Stream is not a data structure, it is a view over data",
                    "Intermediate ops: map, filter, sorted",
                    "Terminal ops: forEach, collect, reduce, count",
                ],
                code: `import java.util.*;
import java.util.stream.*;

public class Demo {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6);

        List<Integer> evens = nums.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());

        System.out.println(evens); // [2, 4, 6]
    }
}`,
                note: "Streams are great for readable transformations, but avoid over-chaining blindly.",
            },
            {
                id: "map-filter-reduce",
                icon: <FiGitBranch />,
                title: "map, filter, reduce",
                summary: "The core building blocks of stream pipelines.",
                points: [
                    "filter keeps items that match a condition",
                    "map transforms each item",
                    "reduce combines items into a single result",
                ],
                code: `import java.util.*;
import java.util.stream.*;

public class Demo {
    public static void main(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5);

        int sumOfSquaresOfOdds = nums.stream()
            .filter(n -> n % 2 != 0)   // 1,3,5
            .map(n -> n * n)           // 1,9,25
            .reduce(0, (a, b) -> a + b);

        System.out.println(sumOfSquaresOfOdds); // 35
    }
}`,
                note: "If you can read it left to right like a sentence, you did it right.",
            },
            {
                id: "collectors",
                icon: <FiBox />,
                title: "Collectors",
                summary:
                    "Helpers to collect stream results into lists, sets, maps, groups, and more.",
                points: [
                    "toList, toSet, joining",
                    "groupingBy, partitioningBy",
                    "counting, summingInt, averagingInt",
                ],
                code: `import java.util.*;
import java.util.stream.*;

public class Demo {
    static class User {
        String name;
        String role;
        User(String name, String role) { this.name = name; this.role = role; }
        public String getRole() { return role; }
        public String getName() { return name; }
    }

    public static void main(String[] args) {
        List<User> users = Arrays.asList(
            new User("Neha", "SUPER_ADMIN"),
            new User("Niraj", "SUPER_ADMIN"),
            new User("Asha", "EMPLOYEE")
        );

        Map<String, List<User>> byRole = users.stream()
            .collect(Collectors.groupingBy(User::getRole));

        System.out.println(byRole.keySet());
    }
}`,
                note: "Collectors turn streams into real results without manual loops.",
            },
            {
                id: "optional",
                icon: <FiCheckCircle />,
                title: "Optional",
                summary:
                    "A container that may or may not hold a value. Helps avoid null checks everywhere.",
                points: [
                    "Use map, flatMap, filter to transform safely",
                    "Use orElse, orElseGet for fallback",
                    "Avoid Optional.get() unless you are 100% sure",
                ],
                code: `import java.util.*;

public class Demo {
    static String findName(boolean ok) {
        return ok ? "Ash" : null;
    }

    public static void main(String[] args) {
        Optional<String> name = Optional.ofNullable(findName(false));

        String safe = name
            .map(s -> s.toUpperCase())
            .orElse("UNKNOWN");

        System.out.println(safe); // UNKNOWN
    }
}`,
                note: "Optional is not magic. It is a tool for safer intent and cleaner flow.",
            },
            {
                id: "method-references",
                icon: <FiLink />,
                title: "Method references",
                summary:
                    "A shorter form of lambda when you are only calling an existing method.",
                points: [
                    "Static method: ClassName::method",
                    "Instance method: instance::method",
                    "Constructor: ClassName::new",
                ],
                code: `import java.util.*;
import java.util.stream.*;

public class Demo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("java", "core", "notes");

        // Lambda
        names.forEach(s -> System.out.println(s));

        // Method reference
        names.forEach(System.out::println);

        List<Integer> lens = names.stream()
            .map(String::length)
            .collect(Collectors.toList());

        System.out.println(lens); // [4, 4, 5]
    }
}`,
                note: "Method references improve readability when the lambda adds no extra logic.",
            },
            {
                id: "default-static-interface",
                icon: <FiSettings />,
                title: "Default and static methods in interface",
                summary:
                    "Interfaces can provide default behavior and utility methods without breaking old implementations.",
                points: [
                    "default methods have a body and can be overridden",
                    "static methods belong to the interface, not the class",
                    "Useful for evolving APIs safely",
                ],
                code: `interface Logger {
    default void info(String msg) {
        System.out.println("INFO: " + msg);
    }

    static String tag() {
        return "APP";
    }
}

class Service implements Logger { }

public class Demo {
    public static void main(String[] args) {
        Service s = new Service();
        s.info("started");

        System.out.println(Logger.tag());
    }
}`,
                note: "Default methods help you add features without forcing every class to change immediately.",
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
                            <FiZap />
                        </div>

                        <div className="titleBlock">
                            <div className="title">Java 8 and Beyond</div>
                            <div className="subtitle">Modern Java identity</div>
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
                            Java 8 changed how Java code is written. Lambdas,
                            streams, and functional style are common in real
                            projects, interviews, and modern codebases.
                        </div>

                        <div className="grid">
                            {cards.map((c) => (
                                <div className="card" key={c.id} id={c.id}>
                                    <div className="cardHead">
                                        <div className="cardIcon">{c.icon}</div>
                                        <div className="cardTitle">
                                            {c.title}
                                        </div>
                                    </div>

                                    <div className="cardSummary">
                                        {c.summary}
                                    </div>

                                    <ul className="list">
                                        {c.points.map((p, idx) => (
                                            <li key={idx}>{p}</li>
                                        ))}
                                    </ul>

                                    {c.code && (
                                        <pre className="code">
                                            {`${c.code}`}
                                        </pre>
                                    )}

                                    {c.note && (
                                        <div className="note">{c.note}</div>
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

export default Java8AndBeyond;
