import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiPackage,
    FiLock,
    FiDownload,
    FiLayers,
} from "react-icons/fi";

const ModulesAndPackaging = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "packages",
                icon: <FiPackage />,
                title: "Packages",
                summary:
                    "Packages group related classes and interfaces together to avoid naming conflicts and improve organization.",
                points: [
                    "Packages create a namespace for classes.",
                    "Folder structure must match package name.",
                    "Helps in modular structure and clean architecture.",
                ],
                code: `package com.example.app;

public class User {
    String name;
}`,
                note: "Convention: use reverse domain name format like com.company.project.",
            },
            {
                id: "access-modifiers",
                icon: <FiLock />,
                title: "Access modifiers",
                summary:
                    "Access modifiers control visibility of classes, methods, and variables.",
                points: [
                    "public → accessible everywhere.",
                    "protected → accessible within package and subclasses.",
                    "default (no modifier) → package-private.",
                    "private → accessible only inside the class.",
                ],
                code: `public class Demo {

    private int id;
    String name;        // default
    protected int age;
    public String city;

}`,
                note: "Encapsulation depends on correct use of access modifiers.",
            },
            {
                id: "import",
                icon: <FiDownload />,
                title: "Import",
                summary:
                    "Import allows using classes from other packages without fully qualifying them.",
                points: [
                    "You can import specific class or entire package.",
                    "Wildcard import does not import sub-packages.",
                    "java.lang package is imported automatically.",
                ],
                code: `import java.util.ArrayList;
import java.util.*;

public class Test {
    ArrayList<String> list = new ArrayList<>();
}`,
                note: "Prefer explicit imports over wildcard in production code.",
            },
            {
                id: "modular-system",
                icon: <FiLayers />,
                title: "Modular system overview",
                summary:
                    "Java 9 introduced module system to improve strong encapsulation and scalability.",
                points: [
                    "Each module has a module-info.java file.",
                    "Modules explicitly declare required dependencies.",
                    "Improves security and reduces classpath issues.",
                ],
                code: `module com.example.app {
    requires java.sql;
    exports com.example.app.service;
}`,
                note: "Modules help large enterprise systems manage dependencies cleanly.",
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
                            <FiPackage />
                        </div>

                        <div className="titleBlock">
                            <div className="title">Modules and Packaging</div>
                            <div className="subtitle">
                                Structure controls clarity in large systems
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
                            Clean packaging separates beginners from structured
                            developers. Organization reduces chaos in large
                            projects.
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

export default ModulesAndPackaging;
