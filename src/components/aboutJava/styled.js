import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 70px 20px;
    `,

    Content: styled.div`
        max-width: 1440px;
        width: 100%;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 20px;
        padding: 50px;
        box-shadow: 0 12px 32px var(--color-shadow);
        position: relative;
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;

        &:hover {
            transform: translateY(-4px);
            box-shadow: 0 20px 50px var(--color-shadow);
        }

        .heading {
            font-size: 34px;
            margin-bottom: 28px;
            color: var(--color-primary);
            letter-spacing: 0.6px;
            font-weight: 800;
        }

        p {
            font-size: 16px;
            line-height: 1.8;
            margin-bottom: 20px;
            color: var(--color-text-secondary);
        }

        .meta {
            margin-top: 34px;
            padding-top: 20px;
            border-top: 1px solid var(--color-border);
            display: flex;
            gap: 12px;
            font-size: 14px;
            color: var(--color-text-muted);
        }

        .metaLabel {
            font-weight: 700;
            color: var(--color-text-secondary);
        }

        .metaValue {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-accent);
        }
    `,
};
