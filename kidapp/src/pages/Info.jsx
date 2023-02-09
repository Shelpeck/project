import React, {useState} from 'react';

const Info = () => {
    const [child, setChild] = useState('')
    const [mother, setMother] = useState('')
    const [father, setFather] = useState('')

    return (
        <div className="info">
            <input type="text" className="info--input"
                   value={child}
                   onChange={event => setChild(event.target.value)}
                   placeholder="Напишмте имя ребенка"/>
            <input type="text" className="info--input"
                   value={mother}
                   onChange={event => setMother(event.target.value)}
                   placeholder="Напишмте имя матери"/>
            <input type="text" className="info--input"
                   value={father}
                   onChange={event => setFather(event.target.value)}
                   placeholder="Напишмте имя отца"/>
        </div>
    );
};

export default Info;