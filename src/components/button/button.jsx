
const Button = ({ color, backgroundColor, text, size, borderRadius }) => {
    return (
        <button
            type="button"
            style={{ backgroundColor: backgroundColor, color, borderRadius }}
            className={`text-${size} p-3 hover:drop-shadow-xl`}
        >
            {text}
        </button>
    )
}

export default Button;