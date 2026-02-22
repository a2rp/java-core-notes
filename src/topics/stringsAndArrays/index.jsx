import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiType,
    FiEdit3,
    FiShield,
    FiList,
    FiGrid,
    FiTool,
} from "react-icons/fi";

const StringsAndArrays = () => {
    const [open, setOpen] = useState(false);

    const cards = useMemo(() => {
        return [
            {
                id: "string-vs-builders",
                icon: <FiType />,
                title: "String vs StringBuilder vs StringBuffer",
                summary:
                    "String is immutable. StringBuilder is mutable and fast. StringBuffer is mutable and thread-safe (slower).",
                points: [
                    "String - immutable, stored in string pool for literals.",
                    "StringBuilder - mutable, best for single-threaded string building.",
                    "StringBuffer - mutable and synchronized, safer in multi-threading but slower.",
                    "Rule - use String for fixed text, StringBuilder for loops and concatenations.",
                ],
                code: `public class Demo {
    public static void main(String[] args) {
        // String (immutable)
        String s = "java";
        s = s + " core"; // creates new String objects

        // StringBuilder (mutable)
        StringBuilder sb = new StringBuilder("java");
        sb.append(" core").append(" notes");
        System.out.println(sb.toString());

        // StringBuffer (thread-safe)
        StringBuffer bf = new StringBuffer("java");
        bf.append(" core");
        System.out.println(bf.toString());
    }
}`,
                note: "In loops, prefer StringBuilder to avoid creating many temporary String objects.",
            },
            {
                id: "common-string-methods",
                icon: <FiEdit3 />,
                title: "Common String methods",
                summary:
                    "Most String operations return a new String because String is immutable.",
                points: [
                    "length(), charAt(i), substring(a,b)",
                    "toUpperCase(), toLowerCase(), trim()",
                    "equals(), equalsIgnoreCase(), compareTo()",
                    "contains(), startsWith(), endsWith()",
                    "indexOf(), lastIndexOf(), replace()",
                    "split() and join() patterns",
                ],
                code: `public class StringMethods {
    public static void main(String[] args) {
        String s = "  Java Core Notes  ";

        System.out.println(s.length());          // includes spaces
        System.out.println(s.trim());            // removes outer spaces
        System.out.println(s.toLowerCase());     // java core notes
        System.out.println(s.contains("Core"));  // true
        System.out.println(s.startsWith("  J")); // true

        String t = "java";
        System.out.println(t.equals("Java"));         // false
        System.out.println(t.equalsIgnoreCase("Java"));// true

        String u = "a,b,c";
        String[] parts = u.split(",");
        System.out.println(parts.length); // 3

        String r = "hello".replace("l", "L"); // heLLo
        System.out.println(r);
    }
}`,
                note: "Use equals() for content comparison. == compares references.",
            },
            {
                id: "arrays-basics",
                icon: <FiList />,
                title: "Arrays basics",
                summary:
                    "An array is a fixed-size container that stores elements of the same type.",
                points: [
                    "Arrays have a fixed length once created.",
                    "Index starts at 0.",
                    "Use arr.length (property) - not length().",
                    "Enhanced for loop is clean for reading elements.",
                ],
                code: `public class ArrayBasics {
    public static void main(String[] args) {
        int[] nums = new int[3];
        nums[0] = 10;
        nums[1] = 20;
        nums[2] = 30;

        System.out.println(nums.length); // 3

        for (int i = 0; i < nums.length; i++) {
            System.out.println(nums[i]);
        }

        for (int n : nums) {
            System.out.println(n);
        }

        String[] names = {"Ash", "Neha", "Niraj"};
        System.out.println(names[1]); // Neha
    }
}`,
                note: "If you need dynamic size, use ArrayList instead of arrays.",
            },
            {
                id: "multi-dimensional",
                icon: <FiGrid />,
                title: "Multi dimensional arrays",
                summary:
                    "A 2D array is an array of arrays. Rows can have different lengths (jagged arrays).",
                points: [
                    "int[][] matrix is the common 2D form.",
                    "matrix.length gives number of rows.",
                    "matrix[row].length gives number of columns in that row.",
                    "Jagged arrays are allowed in Java.",
                ],
                code: `public class TwoDArray {
    public static void main(String[] args) {
        int[][] grid = {
            {1, 2, 3},
            {4, 5, 6}
        };

        System.out.println(grid.length);      // rows = 2
        System.out.println(grid[0].length);   // cols in row 0 = 3

        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[r].length; c++) {
                System.out.print(grid[r][c] + " ");
            }
            System.out.println();
        }

        // jagged array
        int[][] jag = new int[2][];
        jag[0] = new int[]{1, 2};
        jag[1] = new int[]{3, 4, 5};
        System.out.println(jag[1].length); // 3
    }
}`,
                note: "2D arrays are useful, but for large data consider specialized structures.",
            },
            {
                id: "arrays-utility",
                icon: <FiTool />,
                title: "Arrays utility class",
                summary:
                    "java.util.Arrays provides helpers for printing, sorting, searching, filling, and copying.",
                points: [
                    "Arrays.toString() is the easiest way to print an array.",
                    "Arrays.sort() sorts in ascending order.",
                    "Arrays.binarySearch() works only on a sorted array.",
                    "Arrays.copyOf() is useful for resizing or copying.",
                    "Arrays.equals() checks values, not references.",
                ],
                code: `import java.util.Arrays;

public class ArraysUtilDemo {
    public static void main(String[] args) {
        int[] nums = {4, 2, 9, 1};

        System.out.println(Arrays.toString(nums)); // [4, 2, 9, 1]

        Arrays.sort(nums);
        System.out.println(Arrays.toString(nums)); // [1, 2, 4, 9]

        int idx = Arrays.binarySearch(nums, 4);
        System.out.println(idx); // index of 4

        int[] copy = Arrays.copyOf(nums, nums.length);
        System.out.println(Arrays.equals(nums, copy)); // true

        int[] bigger = Arrays.copyOf(nums, 6);
        System.out.println(Arrays.toString(bigger)); // [1, 2, 4, 9, 0, 0]
    }
}`,
                note: "binarySearch needs sorted array, otherwise result is unpredictable.",
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
                            <FiType />
                        </div>

                        <div className="titleBlock">
                            <div className="title">Strings and Arrays</div>
                            <div className="subtitle">
                                Immutability, performance, and core data storage
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
                            Strings are everywhere in Java, and arrays are the
                            base for many data structures. Learn when to use
                            StringBuilder, how immutability impacts performance,
                            and how to work confidently with arrays.
                        </div>

                        <div className="grid">
                            {cards.map((it) => (
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

export default StringsAndArrays;
