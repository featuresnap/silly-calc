export default {
    render(props) {
        return `${this.html(props)}
                ${this.css(props)}`;
    },

    html(p) { return `
    <div class="digit-container">
        <div class="top segment"></div>
        <div class="top-left segment"></div>
        <div class="top-right segment"></div>
        <div class="center segment"></div>
        <div class="bottom-left segment"></div>
        <div class="bottom-right segment"></div>
        <div class="bottom segment"></div>
        <div class="decimal segment"></div>
    </div>`; },

    css(p) { return `
        <style>
            .digit-container {
                display: grid;
                width: 6em;
                height: 9em;
                background-color: black;
                grid-template-rows: 10% 35% 10% 35% 10%;
                grid-template-columns: 5% 10% 45% 10% 5% 20%;
            }

            .segment {
                background-color: #440000;
                border-radius: .5em;
                --interior-radius: 1em;
            }

            .segment.on {
                background-color: red;
            }

            .segment.top {
                grid-column-start: 2;
                grid-column-end: span 3;
                grid-row: 1;
                border-bottom-right-radius: var(--interior-radius);
                border-bottom-left-radius: var(--interior-radius);
            }

            .segment.top-left {
                grid-column-start: 1;
                grid-column-end: span 2;
                grid-row: 2;
                border-top-right-radius: var(--interior-radius);
                border-bottom-right-radius: var(--interior-radius);
            }

            .segment.top-right {
                grid-column-start: 4;
                grid-column-end: span 2;
                grid-row: 2;
                border-top-left-radius: var(--interior-radius);
                border-bottom-left-radius: var(--interior-radius);
            }

            .segment.center {
                grid-column-start: 2;
                grid-column-end: span 3;
                grid-row: 3;
                border-radius: var(--interior-radius);
            }

            .segment.bottom-left {
                grid-column-start: 1;
                grid-column-end: span 2;
                grid-row: 4;
                border-top-right-radius: var(--interior-radius);
                border-bottom-right-radius: var(--interior-radius);
            }

            .segment.bottom-right {
                grid-column-start: 4;
                grid-column-end: span 2;
                grid-row: 4;
                border-top-left-radius: var(--interior-radius);
                border-bottom-left-radius: var(--interior-radius);
            }

            .segment.bottom {
                grid-row: 5;
                grid-column-start: 2;
                grid-column-end: span 3;
                border-top-left-radius: var(--interior-radius);
                border-top-right-radius: var(--interior-radius);
            }

            .segment.decimal {
                grid-row: 5;
                grid-column: 6;
                border-radius: 50%;
                margin-left: 15%;
            }
        </style>`; 
    }
} 