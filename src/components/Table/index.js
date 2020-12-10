import React, {Fragment} from "react";
import './table.css';

const generateData = () => {
    let dataArray = [];
    for (let i = 1; i <= 5; i++) {
        let rowArray = [];
        for (let j = 1; j <= 100; j++) {
            rowArray.push(i * j);
        }
        dataArray.push(rowArray);
    }
    return dataArray;
}

const onCellClick = (event) => {
    let target = event.target;
    if (target.tagName != 'TD') return;
    highlight(target);
}

const highlight = (td) => {
    console.log(td.classList.value);
    if (td.classList.value === 'highlight') {
        td.classList.remove('highlight');
        return;
    }
    td.classList.add('highlight');
}

function Table() {

    return (
        <Fragment>
            <table onClick={(event) => onCellClick(event)}>
                <tbody>
                {generateData().map((row, index) =>
                    <tr key={index}>
                        {row.map((element, index) => <td key={index}>{element}</td>)}
                    </tr>
                )}
                </tbody>
            </table>

        </Fragment>
    );
}

export default Table;
