import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiFileText,
    FiFolder,
    FiCode,
    FiEdit3,
    FiBookOpen,
} from "react-icons/fi";

const FileHandling = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "file-class",
                icon: <FiFolder />,
                title: "File class",
                summary:
                    "File represents file and directory paths. It can check existence, create folders, list files, but it does not read file content by itself.",
                points: [
                    "File works with paths and metadata (exists, isFile, isDirectory).",
                    "Use it for basic path operations and directory listing.",
                    "For modern file I/O, prefer java.nio.file (Path, Files).",
                ],
                code: `import java.io.File;

public class FileDemo {
    public static void main(String[] args) {
        File f = new File("data/info.txt");

        System.out.println(f.exists());
        System.out.println(f.isFile());
        System.out.println(f.getName());
        System.out.println(f.getAbsolutePath());

        File dir = new File("data");
        if (!dir.exists()) {
            dir.mkdirs();
        }
    }
}`,
                note: "File is mainly path + checks. Content read or write is done via streams or java.nio.",
            },
            {
                id: "path-files",
                icon: <FiFileText />,
                title: "Path and Files",
                summary:
                    "Path is the modern representation of a path. Files provides utility methods for creating, reading, writing, copying, and listing.",
                points: [
                    "Path is in java.nio.file and is more flexible than File.",
                    "Files has one-liners for reading and writing small files.",
                    "Works well with exceptions and modern APIs.",
                ],
                code: `import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;

public class PathFilesDemo {
    public static void main(String[] args) throws Exception {
        Path p = Paths.get("data", "notes.txt");

        if (!Files.exists(p.getParent())) {
            Files.createDirectories(p.getParent());
        }

        if (!Files.exists(p)) {
            Files.createFile(p);
        }

        System.out.println("Exists: " + Files.exists(p));
        System.out.println("Size: " + Files.size(p));
    }
}`,
                note: "Paths.get creates Path. Files does the real work.",
            },
            {
                id: "read-write-files",
                icon: <FiEdit3 />,
                title: "Reading and writing files",
                summary:
                    "For small files, Files.readString, readAllLines and writeString are the cleanest approach.",
                points: [
                    "Use readString or readAllLines when the file is not huge.",
                    "Use writeString or write to replace or create content quickly.",
                    "For large files, prefer buffered streaming (next topic).",
                ],
                code: `import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class ReadWriteDemo {
    public static void main(String[] args) throws Exception {
        Path p = Paths.get("data", "message.txt");

        Files.createDirectories(p.getParent());

        Files.writeString(p, "Hello Java\\nLine 2", StandardCharsets.UTF_8);

        String text = Files.readString(p, StandardCharsets.UTF_8);
        System.out.println(text);

        List<String> lines = Files.readAllLines(p, StandardCharsets.UTF_8);
        System.out.println("Lines: " + lines.size());
    }
}`,
                note: "For real apps, always handle exceptions properly and validate file paths.",
            },
            {
                id: "bufferedreader-bufferedwriter",
                icon: <FiBookOpen />,
                title: "BufferedReader and BufferedWriter",
                summary:
                    "BufferedReader and BufferedWriter are best for large files. They read and write efficiently using an internal buffer.",
                points: [
                    "Use try-with-resources to auto close streams.",
                    "Read line by line with readLine for memory safety.",
                    "Write with write and newLine for clean output.",
                ],
                code: `import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;

public class BufferedDemo {
    public static void main(String[] args) {
        String inputPath = "data/input.txt";
        String outputPath = "data/output.txt";

        try (
            BufferedReader br = new BufferedReader(new FileReader(inputPath));
            BufferedWriter bw = new BufferedWriter(new FileWriter(outputPath))
        ) {
            String line;

            while ((line = br.readLine()) != null) {
                bw.write(line.toUpperCase());
                bw.newLine();
            }

            System.out.println("Done");
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}`,
                note: "Buffered approach is the go-to when file size can be large.",
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
                            <FiCode />
                        </div>

                        <div className="titleBlock">
                            <div className="title">File Handling</div>
                            <div className="subtitle">
                                Read, write, and manage files using core Java
                                APIs
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
                            File handling in Java is usually done in two styles
                            - classic java.io (File, Reader, Writer) and modern
                            java.nio (Path, Files). Use Files for clean
                            utilities, and buffered streams for large files.
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

export default FileHandling;
