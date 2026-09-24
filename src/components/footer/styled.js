import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 18px 15px;
        border-top: 1px solid var(--color-border);
        color: var(--color-text-muted);
        font-size: 12px;

        .brand { display: inline-flex; align-items: center; gap: 9px; color: var(--color-text-primary); font-weight: 700; }
        .brand img { width: 30px; height: 30px; object-fit: contain; }
        .links { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px; }
        .links a { display: grid; width: 32px; height: 32px; place-items: center; border: 1px solid var(--color-border); border-radius: 9px; color: var(--color-text-secondary); transition: border-color 180ms ease, box-shadow 180ms ease, text-shadow 180ms ease; }
        .links a:hover, .links a:focus-visible { border-color: var(--color-border-light); box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent); text-shadow: 0 0 10px color-mix(in srgb, var(--color-primary) 70%, transparent); }
        .copyright a { color: var(--color-text-secondary); font-weight: 700; }

        @media (width < 760px) {
            flex-direction: column;
            justify-content: center;
        }
    `,
};
