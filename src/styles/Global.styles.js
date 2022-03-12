import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ${  ({
        theme
        }) => `
            *,
            *::before,
            *::after{
                margin: ${theme.sizing.size_0};
                padding: ${theme.sizing.size_0};
            }
            body {
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
                    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
                    sans-serif;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: ${theme.color.scaffold.text.secondary};
                background-color: ${theme.color.background.bg};
                user-select:none; // used to block selection of text 
                webkit-user-select: none;
            }

            html {
                scroll-behavior: smooth;
            }

            code {
                font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
                monospace;
            }

            a {
                color: inherit;
                all: unset;
            }
            .underlined:after{
                content: '';
                height: 2px;
                transform: scaleX(0);
                transition: transform 0.25s ease;
                transform-origin: left;
                left: 0;
                bottom: -4px;
                width: 100%;
                display: block;
                position: absolute;
            }
        `
    }
`;

export default GlobalStyles;
