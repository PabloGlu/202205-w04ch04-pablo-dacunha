import { ReactNode, useState } from 'react';
import { Actions } from './actions';
import { Keyboard } from './keyboard';

export function Info() {
    const [displayNumber, setDisplayNumber] = useState('');
    function introduceNumber(numberInput: string) {
        const newDisplayNumber =
            numberInput === 'delete'
                ? displayNumber.substring(0, displayNumber.length - 1)
                : displayNumber + numberInput;
        setDisplayNumber(
            newDisplayNumber.length === 10 ? displayNumber : newDisplayNumber
        );
    }
    const template = (
        <div className="container">
            {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
            <span className="message">Calling...</span>
            <main className="phone">
                <Keyboard handleKeys={introduceNumber} />
                <Actions displayNumber={displayNumber} />
            </main>
        </div>
    );
    return template;
}
