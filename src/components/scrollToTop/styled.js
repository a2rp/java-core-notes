import styled from "styled-components";

export const Styled = {
    Button: styled.button`
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 60;
        display: grid;
        width: 42px;
        height: 42px;
        place-items: center;
        border: 1px solid var(--color-border-light);
        border-radius: 50%;
        color: var(--color-text-primary);
        background: var(--color-surface-2);
        box-shadow: 0 10px 24px var(--color-shadow);
        cursor: pointer;
        opacity: 0;
        pointer-events: none;
        transition: opacity 180ms ease, border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease;

        &.isVisible { opacity: 1; pointer-events: auto; }
        &:hover, &:focus-visible { border-color: var(--color-primary); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent), 0 12px 26px var(--color-shadow); text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 70%, transparent); }
    `,
};
