import React, { useState }from 'react'

const TextList = ({ textList, width, height }) =>{
    
    const [idxMouseOver, setIdxMouseOver] = useState(0)

    const styleNoraml = {
        'fontSize': '100%',
        'color': 'white',
        'margin': '0px',
        'padding': '0px',
    };
    const styleMouseOver = {
        'fontSize': '130%',
        'color': 'white',
        'margin': '0px',
        'padding': '0px',
        'border': '1px solid #ddd',
    };

    return (
        <div>
            <div
                style={{width: width, height: height, 'overflowY': 'scroll'}}
            >
                {textList.map((company, idx) => (
                    <h4
                        key={company+idx}
                        style={idx === idxMouseOver ? styleMouseOver : styleNoraml}
                        onMouseOver={() => setIdxMouseOver(idx)}
                    >
                        {company}
                    </h4>
                ))}
            </div>
        </div>
        
    )
}

export default TextList

