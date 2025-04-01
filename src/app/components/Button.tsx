interface ButtonProps {
    onClick: () => void;
    label: string;
    disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, disabled }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full px-4 py-2 hover:bg-blue-600 ${disabled ? "bg-gray-400" : "bg-blue-500"} text-white rounded-md`}
    >
        {label}
    </button>
);

export default Button;