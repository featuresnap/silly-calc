export default {
    render(props) {
        console.log('led-display::render() called');
        return `${this.html(props)}
                ${this.css(props)}`;
    },

    html(p) { return `
    <div class="display">
        <led-digit></led-digit>
        <led-digit></led-digit>
        <led-digit></led-digit>
        <led-digit></led-digit>
        <led-digit></led-digit>
        <led-digit></led-digit>
        <led-digit></led-digit>
        <led-digit></led-digit>
        <led-digit></led-digit>
        <led-digit></led-digit>
        <led-digit></led-digit>
        <led-digit></led-digit>
    </div>`; },

    css(p) { return `
        <style>
            .display {
                background-color: black;
                display: flex;
                flex-direction: row;
                justify-content: flex-end;
                min-height: 4em;
                height: inherit;
                width: inherit;
            }
            
            led-digit {
                width: 8.33%;
                height: 100%;
            }
        </style>`; 
    }
} 