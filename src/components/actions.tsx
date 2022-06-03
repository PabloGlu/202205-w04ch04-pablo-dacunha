import { useState } from 'react';
import { Action } from './action';
import { Display } from './display';

export function Actions({ displayNumber }: { displayNumber: string }) {
    const [callStatus, setCallStatus] = useState(false);
    const actionsData = [
        {
            anchor: '#',
            className: `call ${displayNumber.length === 9 && ' active'} ${
                callStatus && 'off'
            }`,
            label: 'Call',
            clickHandler: makeCall,
        },
        {
            anchor: '#',
            className: `hang active ${!callStatus && 'off'}`,
            label: 'Hang',
            clickHandler: hang,
        },
    ];

    function makeCall() {
        setCallStatus(true);
        setTimeout(() => setCallStatus(false), 5000);
    }

    function hang() {
        setCallStatus(false);
    }

    const template = (
        <div className="actions">
            <Display dNumber={displayNumber} />
            {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
                <!-- el número de teléfono tiene 9 cifras -->
                Call button
                <!-- Sólo se tiene que ver un botón u otro --> 
                Hang button*/}
            {actionsData.map((action) => (
                <Action
                    key={action.label}
                    anchor={action.anchor}
                    className={action.className}
                    label={action.label}
                    clickHandler={action.clickHandler}
                />
            ))}
        </div>
    );

    return template;
}
