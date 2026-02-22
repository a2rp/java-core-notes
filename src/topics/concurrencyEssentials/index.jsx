import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiCpu,
    FiLayers,
    FiClock,
    FiDatabase,
} from "react-icons/fi";

const ConcurrencyEssentials = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "executor-framework",
                icon: <FiCpu />,
                title: "Executor framework",
                summary:
                    "High level API for managing threads without manually creating them.",
                points: [
                    "Introduced to simplify thread management.",
                    "Separates task submission from thread execution.",
                    "Improves scalability and resource control.",
                ],
                code: `import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorDemo {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);

        executor.submit(() -> {
            System.out.println("Task executed by thread");
        });

        executor.shutdown();
    }
}`,
                note: "Prefer ExecutorService over manually creating threads.",
            },
            {
                id: "callable-future",
                icon: <FiClock />,
                title: "Callable and Future",
                summary:
                    "Callable returns a result. Future represents the result of an asynchronous computation.",
                points: [
                    "Runnable does not return value, Callable does.",
                    "Future allows retrieving result using get().",
                    "get() blocks until result is available.",
                ],
                code: `import java.util.concurrent.*;

public class CallableDemo {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newSingleThreadExecutor();

        Callable<Integer> task = () -> {
            return 10 + 20;
        };

        Future<Integer> future = executor.submit(task);

        System.out.println(future.get()); // 30

        executor.shutdown();
    }
}`,
                note: "Use Callable when you need computation result from a thread.",
            },
            {
                id: "thread-pools",
                icon: <FiLayers />,
                title: "Thread pools",
                summary:
                    "Thread pool reuses fixed number of threads to execute multiple tasks efficiently.",
                points: [
                    "Reduces overhead of creating threads repeatedly.",
                    "Fixed thread pool → fixed number of threads.",
                    "Cached thread pool → dynamic thread count.",
                ],
                code: `ExecutorService fixedPool =
    Executors.newFixedThreadPool(3);

ExecutorService cachedPool =
    Executors.newCachedThreadPool();

fixedPool.submit(() -> {
    System.out.println("Running task");
});

fixedPool.shutdown();`,
                note: "Choose pool type based on workload characteristics.",
            },
            {
                id: "concurrent-collections",
                icon: <FiDatabase />,
                title: "Concurrent collections",
                summary:
                    "Thread-safe collections designed for concurrent access without heavy synchronization.",
                points: [
                    "Avoid using synchronized collections manually.",
                    "ConcurrentHashMap is highly scalable.",
                    "CopyOnWriteArrayList is useful for read-heavy scenarios.",
                ],
                code: `import java.util.concurrent.*;

public class ConcurrentCollectionDemo {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> map =
            new ConcurrentHashMap<>();

        map.put("A", 1);
        map.put("B", 2);

        System.out.println(map.get("A"));
    }
}`,
                note: "Use concurrent collections in multi-threaded environments.",
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
                            <div className="title">Concurrency Essentials</div>
                            <div className="subtitle">
                                Managing threads and parallel execution
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
                            Concurrency enables parallel execution and
                            scalability. Understanding thread management
                            separates intermediate from advanced Java
                            developers.
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

export default ConcurrencyEssentials;
