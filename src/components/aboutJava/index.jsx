import React from "react";
import { Styled } from "./styled";

const AboutJava = () => {
    const buildISO = __APP_BUILD_ISO__;

    const formattedDateTime = new Date(buildISO).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
    });

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <h2 className="heading">About Java</h2>

                <p>
                    Java is a class-based, object-oriented programming language
                    designed for portability, reliability, and scalability. Code
                    is compiled into bytecode and executed by the Java Virtual
                    Machine, allowing applications to run consistently across
                    platforms.
                </p>

                <p>
                    The JVM manages memory allocation, garbage collection, class
                    loading, and runtime execution. Concepts such as object
                    lifecycle, heap and stack memory, exception handling,
                    collections, multithreading, and concurrency form the
                    foundation of robust Java applications.
                </p>

                <p>
                    The java-core-notes project is a structured revision system.
                    It organizes core syntax, OOP principles, JVM fundamentals,
                    collections framework, Java 8+ features, and concurrency
                    essentials into a clean single-page reference built for
                    clarity and strong conceptual grounding.
                </p>

                <div className="meta">
                    <span className="metaLabel">Last build:</span>
                    <span className="metaValue">{formattedDateTime} hrs</span>
                </div>
            </Styled.Content>
        </Styled.Wrapper>
    );
};

export default AboutJava;
