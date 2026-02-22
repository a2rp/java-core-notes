import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiCpu,
    FiPlay,
    FiRepeat,
    FiActivity,
    FiLock,
    FiAlertTriangle,
} from "react-icons/fi";

const MultithreadingBasics = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "thread-class",
                icon: <FiPlay />,
                title: "Thread class",
                summary:
                    "Create a thread by extending Thread and overriding run(). Start it with start(), not run().",
                points: [
                    "start() creates a new call stack and runs run() on a new thread.",
                    "Calling run() directly runs on the same thread (no new thread).",
                    "Use Thread when you need a quick demo, Runnable is usually preferred in real code.",
                ],
                code: `class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("Running in: " + Thread.currentThread().getName());
    }
}

public class Demo {
    public static void main(String[] args) {
        MyThread t = new MyThread();
        t.start(); // new thread starts here
        // t.run(); // runs on main thread if called directly
    }
}`,
                note: "Rule of thumb: start() makes it concurrent, run() is just a normal method call.",
            },
            {
                id: "runnable-interface",
                icon: <FiRepeat />,
                title: "Runnable interface",
                summary:
                    "Create a task by implementing Runnable, then pass it to a Thread.",
                points: [
                    "Runnable separates the task from the thread that runs it.",
                    "This is more flexible than extending Thread.",
                    "You can reuse the same Runnable with different threads if needed.",
                ],
                code: `class MyTask implements Runnable {
    @Override
    public void run() {
        System.out.println("Task running in: " + Thread.currentThread().getName());
    }
}

public class Demo {
    public static void main(String[] args) {
        Thread t = new Thread(new MyTask(), "worker-1");
        t.start();
    }
}`,
                note: "In production, you will usually use thread pools (ExecutorService), but Runnable is the foundation.",
            },
            {
                id: "thread-lifecycle",
                icon: <FiActivity />,
                title: "Thread lifecycle",
                summary:
                    "A thread moves through states like NEW, RUNNABLE, BLOCKED, WAITING, TIMED_WAITING, TERMINATED.",
                points: [
                    "NEW: created but not started.",
                    "RUNNABLE: ready to run (or running) depending on CPU scheduling.",
                    "BLOCKED/WAITING: not running because it is waiting for a monitor or condition.",
                    "TERMINATED: run() finished or crashed.",
                ],
                code: `public class Demo {
    public static void main(String[] args) throws Exception {
        Thread t = new Thread(() -> {
            System.out.println("State inside run: " + Thread.currentThread().getState());
        });

        System.out.println("Before start: " + t.getState()); // NEW
        t.start();
        System.out.println("After start: " + t.getState());  // RUNNABLE (most of the time)
        t.join(); // wait for completion
        System.out.println("After join: " + t.getState());   // TERMINATED
    }
}`,
                note: "State can change quickly. getState() is a snapshot, not a promise.",
            },
            {
                id: "synchronization",
                icon: <FiLock />,
                title: "Synchronization",
                summary:
                    "Synchronization protects shared mutable data so only one thread updates it at a time.",
                points: [
                    "Race condition happens when multiple threads update shared state without coordination.",
                    "synchronized enforces mutual exclusion using a monitor (lock).",
                    "Without synchronization, results can be wrong even if code looks correct.",
                ],
                code: `class Counter {
    private int count = 0;

    public void incrementUnsafe() {
        count++; // race condition here
    }

    public synchronized void incrementSafe() {
        count++; // protected by monitor lock on 'this'
    }

    public int getCount() { return count; }
}

public class Demo {
    public static void main(String[] args) throws Exception {
        Counter c = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) c.incrementSafe();
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 100000; i++) c.incrementSafe();
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println(c.getCount()); // expected 200000
    }
}`,
                note: "Synchronization is about correctness first, performance second.",
            },
            {
                id: "synchronized-keyword",
                icon: <FiLock />,
                title: "synchronized keyword",
                summary:
                    "Use synchronized on methods or blocks. The lock can be this, a class, or a dedicated lock object.",
                points: [
                    "synchronized instance method locks on this.",
                    "synchronized static method locks on ClassName.class.",
                    "synchronized block locks on the object you specify.",
                ],
                code: `class Locker {
    private final Object lock = new Object();
    private int value = 0;

    public void incWithBlock() {
        synchronized (lock) {
            value++;
        }
    }

    public synchronized void incWithMethod() {
        value++; // locks on this
    }

    public static synchronized void staticLock() {
        // locks on Locker.class
    }
}`,
                note: "Prefer a dedicated lock object for fine control and to avoid accidental external locking.",
            },
            {
                id: "volatile",
                icon: <FiCpu />,
                title: "volatile",
                summary:
                    "volatile ensures visibility of changes across threads. It does not make compound operations atomic.",
                points: [
                    "Use volatile for flags and status variables shared across threads.",
                    "volatile guarantees reads see the latest write (visibility).",
                    "count++ is not atomic even if count is volatile.",
                ],
                code: `public class Demo {
    private static volatile boolean running = true;

    public static void main(String[] args) throws Exception {
        Thread worker = new Thread(() -> {
            while (running) {
                // do work
            }
            System.out.println("Stopped");
        });

        worker.start();

        Thread.sleep(500);
        running = false; // worker will observe this change
    }
}`,
                note: "volatile is for visibility, synchronized is for mutual exclusion and atomicity.",
            },
            {
                id: "deadlock",
                icon: <FiAlertTriangle />,
                title: "Deadlock concept",
                summary:
                    "Deadlock occurs when two threads hold locks the other needs, and both wait forever.",
                points: [
                    "Classic cause: acquiring locks in different orders.",
                    "Prevention: consistent lock ordering, timeouts, reduce lock scope.",
                    "Deadlocks are hard to debug, design to avoid them.",
                ],
                code: `public class Demo {
    private static final Object lockA = new Object();
    private static final Object lockB = new Object();

    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            synchronized (lockA) {
                sleep(50);
                synchronized (lockB) {
                    System.out.println("t1 acquired A then B");
                }
            }
        });

        Thread t2 = new Thread(() -> {
            synchronized (lockB) {
                sleep(50);
                synchronized (lockA) {
                    System.out.println("t2 acquired B then A");
                }
            }
        });

        t1.start();
        t2.start();
    }

    static void sleep(long ms) {
        try { Thread.sleep(ms); } catch (Exception ignored) {}
    }
}`,
                note: "Fix: always lock A then B everywhere. Never mix the order.",
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
                            <div className="title">Multithreading Basics</div>
                            <div className="subtitle">
                                Threads, synchronization, visibility, and
                                deadlocks
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
                            Multithreading is powerful but dangerous without
                            discipline. Most bugs here are timing bugs, which
                            means they appear and disappear randomly.
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

export default MultithreadingBasics;
