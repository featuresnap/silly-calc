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
                display: inline-block;
            }
            
            led-digit {
                display: inline-block;
            }
        </style>`; 
    }
} 