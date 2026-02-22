import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiShield,
    FiCopy,
    FiHash,
    FiAlertTriangle,
    FiTrendingUp,
    FiGrid,
} from "react-icons/fi";

const BestPracticesInterviewTraps = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "immutability",
                icon: <FiShield />,
                title: "Immutability",
                summary:
                    "Immutable objects cannot change state after creation. Safer, simpler, and thread-friendly.",
                points: [
                    "Make class final so it cannot be extended and mutated via subclassing.",
                    "Make fields private and final.",
                    "Do not provide setters.",
                    "For mutable fields (List, Date), store and return defensive copies.",
                    "String is immutable, so it is safe for pooling and caching.",
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
                note: "Immutability reduces bugs because objects do not change unexpectedly.",
            },
            {
                id: "defensive-copying",
                icon: <FiCopy />,
                title: "Defensive copying",
                summary:
                    "When a class holds mutable data, return a copy to prevent outside code from mutating internal state.",
                points: [
                    "Do defensive copy in constructor (store a copy).",
                    "Do defensive copy in getter (return a copy).",
                    "If you return internal references directly, callers can mutate your object.",
                ],
                code: `import java.util.ArrayList;
import java.util.List;

final class SafeCart {
    private final List<String> items;

    public SafeCart(List<String> items) {
        this.items = new ArrayList<>(items); // copy in
    }

    public List<String> getItems() {
        return new ArrayList<>(items); // copy out
    }
}`,
                note: "Most interview bugs come from exposing mutable fields directly.",
            },
            {
                id: "equals-hashcode",
                icon: <FiHash />,
                title: "equals and hashCode rules",
                summary:
                    "If you override equals, you must override hashCode. Hash-based collections depend on this contract.",
                points: [
                    "equals compares logical equality.",
                    "hashCode groups objects into buckets for HashMap and HashSet.",
                    "If equals is true for two objects, their hashCode must be equal.",
                    "If hashCode changes after insertion (mutable key), HashMap lookups break.",
                ],
                code: `class User {
    private final int id;
    private final String name;

    User(int id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return id == user.id;
    }

    @Override
    public int hashCode() {
        return Integer.hashCode(id);
    }
}`,
                note: "Never use mutable objects as HashMap keys unless you fully control mutation.",
            },
            {
                id: "common-mistakes",
                icon: <FiAlertTriangle />,
                title: "Common mistakes",
                summary:
                    "Small Java mistakes that repeatedly appear in interviews and real projects.",
                points: [
                    "Using == instead of equals for String content comparison.",
                    "Forgetting break in switch (fall-through).",
                    "Ignoring null checks and causing NullPointerException.",
                    "Modifying a collection while iterating using for-each (ConcurrentModificationException).",
                    "Assuming Java passes objects by reference (it does not).",
                ],
                code: `import java.util.ArrayList;
import java.util.Iterator;

public class MistakesDemo {
    public static void main(String[] args) {
        String a = "java";
        String b = new String("java");
        System.out.println(a.equals(b)); // true
        System.out.println(a == b);      // false

        ArrayList<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);

        // safe removal using iterator
        Iterator<Integer> it = list.iterator();
        while (it.hasNext()) {
            Integer v = it.next();
            if (v == 2) it.remove();
        }
    }
}`,
                note: "If you remember only one thing - Strings use equals, not ==.",
            },
            {
                id: "performance-considerations",
                icon: <FiTrendingUp />,
                title: "Performance considerations",
                summary:
                    "Know the common time-cost patterns so you do not pick slow approaches by accident.",
                points: [
                    "String concatenation inside loops is costly. Use StringBuilder.",
                    "Prefer primitives when you do not need object behavior (boxing adds overhead).",
                    "ArrayList random access is fast, LinkedList random access is slow.",
                    "HashMap average operations are O(1), TreeMap operations are O(log n).",
                    "Avoid premature optimization, but know the typical hotspots.",
                ],
                code: `public class PerfDemo {
    public static void main(String[] args) {
        // bad inside loops
        String s = "";
        for (int i = 0; i < 1000; i++) {
            s = s + i;
        }

        // better
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 1000; i++) {
            sb.append(i);
        }
        String result = sb.toString();
    }
}`,
                note: "StringBuilder is a classic Java performance win for repeated concatenation.",
            },
            {
                id: "which-collection",
                icon: <FiGrid />,
                title: "When to use which collection",
                summary:
                    "Pick collections by access pattern, ordering needs, uniqueness, and lookup speed.",
                points: [
                    "ArrayList - fast index access, append is usually cheap, great default list.",
                    "LinkedList - good for frequent insert/remove at ends, not for random access.",
                    "HashSet - unique elements, fast lookup, order not guaranteed.",
                    "LinkedHashSet - unique with insertion order preserved.",
                    "TreeSet - unique and sorted, slower than HashSet.",
                    "HashMap - key-value, fast lookup, order not guaranteed.",
                    "LinkedHashMap - preserves insertion order, useful for LRU-style logic.",
                    "TreeMap - sorted keys, supports range queries.",
                ],
                code: `import java.util.*;

public class ChooseCollection {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();           // default list
        Set<String> set = new HashSet<>();                // unique + fast lookup
        Map<String, Integer> map = new HashMap<>();       // key-value lookup

        Set<Integer> sorted = new TreeSet<>();            // sorted unique
        Map<String, Integer> ordered = new LinkedHashMap<>(); // preserves insertion order
    }
}`,
                note: "Default choices in real projects are often ArrayList + HashMap unless ordering or sorting is required.",
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
                            <FiShield />
                        </div>

                        <div className="titleBlock">
                            <div className="title">
                                Best Practices and Interview Traps
                            </div>
                            <div className="subtitle">
                                Practical rules that prevent bugs and win
                                interviews
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
                            These topics show maturity. They are simple on
                            paper, but they decide real-world reliability and
                            interview confidence.
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

export default BestPracticesInterviewTraps;
