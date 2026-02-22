import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    `,

    Container: styled.div`
        width: 100%;
        max-width: 1440px;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-left: 5px solid var(--color-primary);
        border-radius: 18px;
        box-shadow: 0 12px 30px var(--color-shadow);
        overflow: hidden;
        transition: all 0.22s ease;

        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 45px var(--color-shadow);
        }

        &.isOpen {
            box-shadow: 0 20px 55px var(--color-shadow);
        }
    `,

    Header: styled.button`
        width: 100%;
        border: 0;
        background: var(--color-surface-2);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 26px 34px;
        cursor: pointer;
        transition: background 0.18s ease;

        &:hover {
            background: color-mix(
                in srgb,
                var(--color-surface-2) 85%,
                var(--color-primary)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .badge {
            width: 38px;
            height: 38px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            color: var(--color-primary);
        }

        .title {
            font-size: 22px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        .subtitle {
            font-size: 13px;
            color: var(--color-text-muted);
            margin-top: 4px;
        }

        .right {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .hint {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .chev {
            font-size: 18px;
            color: var(--color-primary);
        }
    `,

    Content: styled.div`
        padding: 28px 34px 34px;

        .topNote {
            margin-bottom: 18px;
            padding: 14px;
            border: 1px solid var(--color-border);
            border-radius: 12px;
            background: var(--color-surface-2);
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
        }

        .card {
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            padding: 18px;
            transition: all 0.2s ease;

            &:hover {
                transform: translateY(-3px);
                box-shadow: 0 16px 40px var(--color-shadow);
            }
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            color: var(--color-primary);
        }

        .cardTitle {
            font-size: 16px;
            font-weight: 800;
            color: var(--color-text-primary);
        }

        .cardSummary {
            font-size: 14px;
            margin-bottom: 10px;
            color: var(--color-text-secondary);
        }

        .list {
            padding-left: 18px;
            margin-bottom: 12px;

            li {
                list-style: disc;
                margin-bottom: 6px;
                font-size: 14px;
                color: var(--color-text-secondary);
            }
        }

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            padding: 14px;
            border-radius: 12px;
            overflow-x: auto;
            font-size: 13px;
            margin-bottom: 10px;
        }

        .note {
            font-size: 13px;
            color: var(--color-text-muted);
        }

        @media (max-width: 900px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `,
};
