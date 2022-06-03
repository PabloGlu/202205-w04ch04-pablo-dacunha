import { Key } from './key';

export function Keyboard({
    handleKeys,
}: {
    handleKeys: (number: string) => void;
}) {
    const keys = [
        { className: 'key', label: '1' },
        { className: 'key', label: '2' },
        { className: 'key', label: '3' },
        { className: 'key', label: '4' },
        { className: 'key', label: '5' },
        { className: 'key', label: '6' },
        { className: 'key', label: '7' },
        { className: 'key', label: '8' },
        { className: 'key', label: '9' },
        { className: 'key', label: '0' },
        { className: 'key big', label: 'delete' },
    ];
    const template = (
        <div className="keyboard-container">
            <ol className="keyboard">
                {keys.map((key) => (
                    <li key={key.label}>
                        <Key
                            className={key.className}
                            label={key.label}
                            handleClick={handleKeys}
                        />
                    </li>
                ))}
            </ol>
        </div>
    );
    return template;
}
