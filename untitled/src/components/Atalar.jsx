import React, {useContext, useEffect, useState} from 'react';
import {Tree} from 'react-tree-graph';



const Atalar = () => {

    const db = {1: {'mother': 3, 'father': 2, 'name': 'Adilbek', 'gender': 'female'},
        2: {'mother': null, 'father': null, 'name': 'Shrek', 'gender': 'male'},
        3: {'mother': null, 'father': 4, 'name': 'Leila', 'gender': 'female'},
        4: {'mother': null, 'father': null, 'name': 'Askar', 'gender': 'male'}};

    const isAuth=1
    console.log(db[1]['mother'])
    function getData(person) {
        const temp = [];
        console.log('ahaha')
        if (db[person]['mother'] !== null) {
            temp.push(getData(db[person]['mother']));
        }
        if (db[person]['father'] !== null) {
            temp.push(getData(db[person]['father']));
        }
        return {'name': db[person]['name'], 'children': temp};
    }

    return (
        <div>
            <Tree data = {getData(1)}
                  height={1000}
                  width={1000}
                  direction={'rtl'}
                  nodeProps={{'r': 15}}
            />
        </div>
    );
};

export default Atalar;