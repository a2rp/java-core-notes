import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiLayers,
    FiList,
    FiGrid,
    FiMap,
    FiShuffle,
    FiHash,
    FiCpu,
} from "react-icons/fi";
import { IoMdGitCompare } from "react-icons/io";

const CollectionsFramework = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "hierarchy",
                icon: <FiLayers />,
                title: "Collection hierarchy overview",
                summary:
                    "Collection is for groups of items. Map is for key-value pairs and is not a Collection.",
                points: [
                    "Collection interface -> List, Set, Queue",
                    "Map interface -> HashMap, LinkedHashMap, TreeMap",
                    "Most collections store objects, primitives get autoboxed",
                ],
                code: `// Very quick mental map
// Collection
//   - List (ordered, duplicates allowed)
//   - Set (no duplicates)
//   - Queue (processing order, FIFO usually)
//
// Map (key-value)
//   - keys are unique
//   - values can repeat`,
                note: "Interview shortcut - if you need key lookup, think Map. Otherwise think Collection.",
            },
            {
                id: "list",
                icon: <FiList />,
                title: "List (ArrayList, LinkedList)",
                summary:
                    "List keeps order and allows duplicates. Pick ArrayList for reads, LinkedList for frequent inserts in middle (rare in real apps).",
                points: [
                    "ArrayList -> dynamic array, fast random access, slow middle inserts",
                    "LinkedList -> nodes, slow random access, faster inserts if you already have the node",
                    "Use ArrayList by default unless you have a strong reason",
                ],
                code: `import java.util.*;

public class ListDemo {
    public static void main(String[] args) {
        List<String> a = new ArrayList<>();
        a.add("A");
        a.add("B");
        a.add("B");
        System.out.println(a); // [A, B, B]

        List<String> b = new LinkedList<>();
        b.add("X");
        b.add("Y");
        System.out.println(b); // [X, Y]
    }
}`,
                note: "Most interviewers expect you to default to ArrayList unless proven otherwise.",
            },
            {
                id: "set",
                icon: <FiGrid />,
                title: "Set (HashSet, LinkedHashSet, TreeSet)",
                summary:
                    "Set does not allow duplicates. HashSet is fastest, LinkedHashSet keeps insertion order, TreeSet keeps sorted order.",
                points: [
                    "HashSet -> hashing, no order guarantee, fast add and contains",
                    "LinkedHashSet -> maintains insertion order",
                    "TreeSet -> sorted set, log(n) operations, uses natural order or Comparator",
                ],
                code: `import java.util.*;

public class SetDemo {
    public static void main(String[] args) {
        Set<Integer> a = new HashSet<>();
        a.add(3); a.add(1); a.add(3);
        System.out.println(a); // order not guaranteed

        Set<Integer> b = new LinkedHashSet<>();
        b.add(3); b.add(1); b.add(3);
        System.out.println(b); // [3, 1]

        Set<Integer> c = new TreeSet<>();
        c.add(3); c.add(1); c.add(3);
        System.out.println(c); // [1, 3]
    }
}`,
                note: "TreeSet requires elements that can be compared (Comparable) or a Comparator.",
            },
            {
                id: "map",
                icon: <FiMap />,
                title: "Map (HashMap, LinkedHashMap, TreeMap)",
                summary:
                    "Map stores key-value pairs. Keys are unique. HashMap is default, LinkedHashMap keeps insertion order, TreeMap keeps sorted keys.",
                points: [
                    "HashMap -> average O(1) put/get, no order guarantee",
                    "LinkedHashMap -> preserves insertion order (or access order if configured)",
                    "TreeMap -> sorted by key, O(log n) put/get",
                ],
                code: `import java.util.*;

public class MapDemo {
    public static void main(String[] args) {
        Map<String, Integer> m = new HashMap<>();
        m.put("a", 1);
        m.put("b", 2);
        m.put("a", 9); // overwrites
        System.out.println(m.get("a")); // 9

        Map<String, Integer> lm = new LinkedHashMap<>();
        lm.put("b", 2);
        lm.put("a", 1);
        System.out.println(lm); // {b=2, a=1}

        Map<String, Integer> tm = new TreeMap<>();
        tm.put("b", 2);
        tm.put("a", 1);
        System.out.println(tm); // {a=1, b=2}
    }
}`,
                note: "If you override equals, you must override hashCode for keys in HashMap.",
            },
            {
                id: "queue-deque",
                icon: <FiShuffle />,
                title: "Queue and Deque",
                summary:
                    "Queue is for processing order. Deque can act as both queue and stack. Prefer ArrayDeque over Stack.",
                points: [
                    "Queue usually FIFO -> add (offer), remove (poll), peek",
                    "Deque supports both ends -> addFirst, addLast, pollFirst, pollLast",
                    "ArrayDeque is fast and recommended for stack style operations",
                ],
                code: `import java.util.*;

public class QueueDemo {
    public static void main(String[] args) {
        Queue<Integer> q = new ArrayDeque<>();
        q.offer(10);
        q.offer(20);
        System.out.println(q.poll()); // 10
        System.out.println(q.peek()); // 20

        Deque<Integer> d = new ArrayDeque<>();
        d.addFirst(1);
        d.addLast(2);
        System.out.println(d.pollLast()); // 2

        // stack style
        d.push(5);
        System.out.println(d.pop()); // 5
    }
}`,
                note: "Stack class is old. Use ArrayDeque for stack behavior.",
            },
            {
                id: "comparable-comparator",
                icon: <IoMdGitCompare />,
                title: "Comparable vs Comparator",
                summary:
                    "Comparable defines natural order inside the class. Comparator defines custom order outside.",
                points: [
                    "Comparable -> implement compareTo, used for default sorting",
                    "Comparator -> custom sorting logic, can have multiple strategies",
                    "TreeSet and TreeMap rely on ordering",
                ],
                code: `import java.util.*;

class User implements Comparable<User> {
    int age;
    String name;

    User(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public int compareTo(User other) {
        return Integer.compare(this.age, other.age); // natural order by age
    }

    @Override
    public String toString() {
        return name + ":" + age;
    }
}

public class SortDemo {
    public static void main(String[] args) {
        List<User> list = new ArrayList<>();
        list.add(new User("A", 30));
        list.add(new User("B", 20));

        Collections.sort(list); // uses Comparable
        System.out.println(list); // [B:20, A:30]

        list.sort((u1, u2) -> u1.name.compareTo(u2.name)); // Comparator
        System.out.println(list); // [A:30, B:20]
    }
}`,
                note: "Comparator is more flexible. Comparable is good for a default natural ordering.",
            },
            {
                id: "equals-hashcode",
                icon: <FiHash />,
                title: "equals and hashCode contract",
                summary:
                    "If two objects are equal by equals, they must have the same hashCode. This is critical for HashMap and HashSet.",
                points: [
                    "equals checks logical equality",
                    "hashCode decides bucket placement in hash-based collections",
                    "Breaking contract causes missing lookups and duplicate set entries",
                ],
                code: `import java.util.*;

class Key {
    int id;
    Key(int id) { this.id = id; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Key key = (Key) o;
        return id == key.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}

public class ContractDemo {
    public static void main(String[] args) {
        Map<Key, String> map = new HashMap<>();
        map.put(new Key(1), "one");
        System.out.println(map.get(new Key(1))); // one (works only if contract is correct)
    }
}`,
                note: "For Map keys and Set elements, always implement equals and hashCode together.",
            },
            {
                id: "hashmap-internal",
                icon: <FiCpu />,
                title: "Internal working of HashMap",
                summary:
                    "HashMap uses hashCode to pick a bucket and equals to match the exact key. Collisions are handled inside the bucket.",
                points: [
                    "Step 1 - compute hash from key.hashCode()",
                    "Step 2 - map hash to bucket index",
                    "Step 3 - if bucket has entries, compare keys using equals",
                    "Collisions happen when different keys land in same bucket",
                    "Resizing happens when load factor threshold is crossed",
                ],
                code: `// High level put flow (conceptual)
// put(key, value)
// 1) int h = hash(key.hashCode())
// 2) int idx = (n - 1) & h
// 3) if bucket[idx] empty -> place entry
// 4) else traverse entries in bucket
//    - if existing key equals new key -> overwrite value
//    - else add new entry (collision handling)
// 5) if size exceeds threshold -> resize (rehash)`,
                note: "Interview focus - hashCode selects bucket, equals confirms the key match.",
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
                            <div className="title">Collections Framework</div>
                            <div className="subtitle">
                                This section alone can get jobs
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
                            Collections decide how your data is stored,
                            searched, sorted, and processed. Know the tradeoffs
                            and you will write cleaner and faster Java.
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

export default CollectionsFramework;
