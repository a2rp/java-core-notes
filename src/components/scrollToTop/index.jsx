import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { Styled } from "./styled";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const scrollArea = document.getElementById("notes-main");
        if (!scrollArea) return undefined;
        const handleScroll = () => setVisible(scrollArea.scrollTop > 220);
        handleScroll();
        scrollArea.addEventListener("scroll", handleScroll, { passive: true });
        return () => scrollArea.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Styled.Button className={visible ? "isVisible" : ""} type="button" aria-label="Scroll to top" onClick={() => document.getElementById("notes-main")?.scrollTo({ top: 0, behavior: "smooth" })}>
            <FiArrowUp aria-hidden="true" />
        </Styled.Button>
    );
};

export default ScrollToTop;
