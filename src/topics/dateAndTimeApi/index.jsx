import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiChevronUp,
    FiCalendar,
    FiClock,
    FiActivity,
    FiTrendingUp,
    FiType,
} from "react-icons/fi";

const DateTimeApi = () => {
    const [open, setOpen] = useState(false);

    const items = useMemo(() => {
        return [
            {
                id: "localdate",
                icon: <FiCalendar />,
                title: "LocalDate",
                summary:
                    "Date without time and timezone. Perfect for birthdays, deadlines, invoice dates.",
                points: [
                    "Stores only year-month-day.",
                    "Immutable and thread-safe.",
                    "Use now(), of(), parse() and plusDays(), minusWeeks().",
                ],
                code: `import java.time.LocalDate;

public class Demo {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        LocalDate dob = LocalDate.of(2000, 1, 15);
        LocalDate fromText = LocalDate.parse("2026-02-22");

        System.out.println(today);
        System.out.println(dob);
        System.out.println(fromText);

        System.out.println(today.plusDays(7));
        System.out.println(today.minusMonths(1));
    }
}`,
                note: "Use LocalDate when time is not needed. Clean and safe.",
            },
            {
                id: "localtime",
                icon: <FiClock />,
                title: "LocalTime",
                summary:
                    "Time without date and timezone. Useful for daily schedules, store timings, alarms.",
                points: [
                    "Stores only hour-minute-second-nano.",
                    "Immutable and thread-safe.",
                    "Use now(), of(), parse() and plusMinutes(), minusHours().",
                ],
                code: `import java.time.LocalTime;

public class Demo {
    public static void main(String[] args) {
        LocalTime now = LocalTime.now();
        LocalTime meeting = LocalTime.of(10, 30);
        LocalTime fromText = LocalTime.parse("18:45:00");

        System.out.println(now);
        System.out.println(meeting);
        System.out.println(fromText);

        System.out.println(meeting.plusMinutes(20));
        System.out.println(meeting.minusHours(1));
    }
}`,
                note: "LocalTime is great for repeating daily time logic.",
            },
            {
                id: "localdatetime",
                icon: <FiActivity />,
                title: "LocalDateTime",
                summary:
                    "Date + time without timezone. Useful for logs, events, and timestamps inside a system.",
                points: [
                    "Combines LocalDate and LocalTime.",
                    "No timezone attached. It represents a local timestamp.",
                    "Use now(), of(), parse() and plusHours(), plusDays().",
                ],
                code: `import java.time.LocalDateTime;

public class Demo {
    public static void main(String[] args) {
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime launch = LocalDateTime.of(2026, 2, 22, 10, 0);

        System.out.println(now);
        System.out.println(launch);

        System.out.println(launch.plusDays(2));
        System.out.println(launch.plusHours(5));
    }
}`,
                note: "If you need timezone, use ZonedDateTime or OffsetDateTime later.",
            },
            {
                id: "period-duration",
                icon: <FiTrendingUp />,
                title: "Period and Duration",
                summary:
                    "Period measures date-based amount (years-months-days). Duration measures time-based amount (hours-minutes-seconds).",
                points: [
                    "Period is for dates. Example: age, subscription months.",
                    "Duration is for time. Example: job runtime, timeout.",
                    "Use between() and add/subtract with plus() methods.",
                ],
                code: `import java.time.LocalDate;
import java.time.LocalTime;
import java.time.Period;
import java.time.Duration;

public class Demo {
    public static void main(String[] args) {
        LocalDate startDate = LocalDate.of(2026, 1, 1);
        LocalDate endDate = LocalDate.of(2026, 2, 22);
        Period p = Period.between(startDate, endDate);
        System.out.println("Period: " + p.getMonths() + " months, " + p.getDays() + " days");

        LocalTime startTime = LocalTime.of(10, 0);
        LocalTime endTime = LocalTime.of(12, 45);
        Duration d = Duration.between(startTime, endTime);
        System.out.println("Duration minutes: " + d.toMinutes());
    }
}`,
                note: "Rule of thumb - Period for calendar math, Duration for clock math.",
            },
            {
                id: "formatting",
                icon: <FiType />,
                title: "Formatting",
                summary:
                    "Use DateTimeFormatter to format and parse dates/times safely and consistently.",
                points: [
                    "Avoid old Date and SimpleDateFormat for new code.",
                    "DateTimeFormatter is immutable and thread-safe.",
                    "Format using pattern or built-in constants like ISO_LOCAL_DATE.",
                ],
                code: `import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Demo {
    public static void main(String[] args) {
        LocalDate d = LocalDate.of(2026, 2, 22);
        DateTimeFormatter f1 = DateTimeFormatter.ofPattern("dd MMM yyyy");
        System.out.println(d.format(f1)); // 22 Feb 2026

        LocalDateTime dt = LocalDateTime.of(2026, 2, 22, 10, 30);
        DateTimeFormatter f2 = DateTimeFormatter.ofPattern("dd MMM yyyy HH:mm");
        System.out.println(dt.format(f2)); // 22 Feb 2026 10:30

        LocalDate parsed = LocalDate.parse("22-02-2026", DateTimeFormatter.ofPattern("dd-MM-yyyy"));
        System.out.println(parsed); // 2026-02-22
    }
}`,
                note: "Pick one format style for the app and keep it consistent everywhere.",
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
                            <FiCalendar />
                        </div>

                        <div className="titleBlock">
                            <div className="title">Date and Time API</div>
                            <div className="subtitle">
                                Modern Java date-time basics for real apps
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
                            Use java.time classes for clean, safe date-time
                            handling. They are immutable, readable, and built
                            for production use.
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

export default DateTimeApi;
