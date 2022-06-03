export function Key({
    className,
    label,
    handleClick,
}: {
    className: string;
    label: string;
    handleClick: (label: string) => void;
}) {
    const template = (
        <button onClick={() => handleClick(label)} className={className}>
            {label}
        </button>
    );
    return template;
}
