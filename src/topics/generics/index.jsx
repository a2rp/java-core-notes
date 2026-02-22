import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiCpu,
    FiBox,
    FiCode,
    FiGitBranch,
    FiSliders,
    FiTarget,
} from "react-icons/fi";

const Generics = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "why-generics",
                icon: <FiTarget />,
                title: "Why generics",
                summary:
                    "Generics give type safety and remove casting by letting you write reusable, type-aware code.",
                points: [
                    "Prevents runtime ClassCastException by catching type issues at compile time.",
                    "Makes APIs clearer - List<String> tells you exactly what it contains.",
                    "Reduces boilerplate casting and improves readability.",
                ],
                code: `import java.util.ArrayList;

public class Demo {
    public static void main(String[] args) {
        // Without generics (raw type) - avoid this
        ArrayList list = new ArrayList();
        list.add("Ash");
        list.add(10);

        // String name = (String) list.get(0); // manual cast
        // String bad = (String) list.get(1);  // runtime ClassCastException

        // With generics - safe
        ArrayList<String> names = new ArrayList<>();
        names.add("Ash");
        // names.add(10); // compile-time error
        String name = names.get(0); // no cast
    }
}`,
                note: "Generics are mostly about safety + clean APIs, not performance.",
            },
            {
                id: "generic-classes",
                icon: <FiBox />,
                title: "Generic classes",
                summary:
                    "A generic class uses a type parameter (like T) so the same class works for many types.",
                points: [
                    "T is a placeholder for a real type, decided when you create the object.",
                    "Common convention: T (type), E (element), K (key), V (value).",
                    "Works great for utility containers like Pair, Box, Result.",
                ],
                code: `class Box<T> {
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}

public class Demo {
    public static void main(String[] args) {
        Box<String> b1 = new Box<>();
        b1.set("Java");
        System.out.println(b1.get());

        Box<Integer> b2 = new Box<>();
        b2.set(99);
        System.out.println(b2.get());
    }
}`,
                note: "Same class, different types - no duplicate code.",
            },
            {
                id: "generic-methods",
                icon: <FiCode />,
                title: "Generic methods",
                summary:
                    "A generic method declares its own type parameter and works independently of the class type.",
                points: [
                    "Useful for helper methods like print, swap, max, convert.",
                    "Type parameter is written before return type: <T>.",
                    "Java can often infer T from arguments.",
                ],
                code: `public class Demo {
    public static <T> void print(T value) {
        System.out.println(value);
    }

    public static <T> T first(T[] arr) {
        return arr[0];
    }

    public static void main(String[] args) {
        print("Ash");
        print(123);
        print(true);

        Integer[] nums = { 5, 7, 9 };
        System.out.println(first(nums));
    }
}`,
                note: "Generic methods are a clean way to write reusable utilities.",
            },
            {
                id: "wildcards",
                icon: <FiGitBranch />,
                title: "Wildcards",
                summary:
                    "Wildcards (?) make generics flexible when the exact type is unknown or should vary.",
                points: [
                    "? means unknown type.",
                    "<?> allows reading as Object, but restricts safe writing (except null).",
                    "<? extends T> is for reading (producer).",
                    "<? super T> is for writing (consumer).",
                ],
                code: `import java.util.List;

public class Demo {
    static void printAll(List<?> list) {
        for (Object x : list) {
            System.out.println(x);
        }
        // list.add("x"); // not allowed (except null)
    }

    public static void main(String[] args) {
        printAll(List.of("A", "B"));
        printAll(List.of(1, 2, 3));
    }
}`,
                note: "Rule of thumb: if you only need to read values, wildcards help a lot.",
            },
            {
                id: "bounded-types",
                icon: <FiSliders />,
                title: "Bounded types",
                summary:
                    "Bounds restrict allowed generic types. This gives you access to methods of the bound type.",
                points: [
                    "<T extends Number> means T must be Number or subclass.",
                    "Use bounds when you need operations available on a base type.",
                    "Multiple bounds use &: <T extends A & B> (class first, then interfaces).",
                ],
                code: `public class Demo {
    public static <T extends Number> double sum(T a, T b) {
        return a.doubleValue() + b.doubleValue();
    }

    public static void main(String[] args) {
        System.out.println(sum(10, 20));       // Integer
        System.out.println(sum(2.5, 7.5));     // Double
        // System.out.println(sum("a", "b"));  // compile-time error
    }
}`,
                note: "Bounds make your generic code safer and more useful.",
            },
            {
                id: "bounded-wildcards",
                icon: <FiCpu />,
                title: "Bounded wildcards",
                summary:
                    "Use extends and super wildcards to control variance and allow flexible method parameters.",
                points: [
                    "<? extends T> accepts T and its subclasses (good for reading).",
                    "<? super T> accepts T and its superclasses (good for writing).",
                    "PECS rule: Producer Extends, Consumer Super.",
                ],
                code: `import java.util.ArrayList;
import java.util.List;

public class Demo {
    static double total(List<? extends Number> nums) {
        double sum = 0;
        for (Number n : nums) sum += n.doubleValue();
        // nums.add(1); // not allowed safely
        return sum;
    }

    static void addIntegers(List<? super Integer> list) {
        list.add(1);
        list.add(2);
    }

    public static void main(String[] args) {
        List<Integer> ints = List.of(1, 2, 3);
        System.out.println(total(ints));

        List<Number> nums = new ArrayList<>();
        addIntegers(nums);
        System.out.println(nums);
    }
}`,
                note: "PECS is one of those interview favorites. Keep it simple and practical.",
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
                            <FiBox />
                        </div>

                        <div className="titleBlock">
                            <div className="title">Generics</div>
                            <div className="subtitle">
                                Type safety, reusable code, clean APIs
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
                            Generics let you write reusable code that stays
                            type-safe. They reduce casting, prevent common
                            runtime errors, and make your intent obvious.
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

export default Generics;
