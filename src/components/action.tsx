export function Action({
    anchor,
    className,
    label,
    clickHandler,
}: {
    anchor: string;
    className: string;
    label: string;
    clickHandler: () => void;
}) {
    const template = (
        <a onClick={clickHandler} href={anchor} className={className}>
            {label}
        </a>
    );
    return template;
}
