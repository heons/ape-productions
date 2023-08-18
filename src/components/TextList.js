import './TextList.css';
import React from 'react';

const TextList = ({ textList, width, height }) => {
  // const [idxMouseOver, setIdxMouseOver] = React.useState(0)

  const styleNoraml = {
    fontSize: '100%',
    color: 'white',
    margin: '0px',
    padding: '0px',
  };
  // const styleMouseOver = {
  //     'fontSize': '130%',
  //     'color': 'white',
  //     'margin': '0px',
  //     'padding': '0px',
  //     'border': '1px solid #ddd',
  // };

  return (
    <div>
      <div
        className="TextList"
        style={{
          width: width,
          height: height,
        }}>
        {textList.map((company, idx) => (
          <h4
            key={company + idx}
            style={styleNoraml}
            // style={idx === idxMouseOver ? styleMouseOver : styleNoraml}
            // onMouseOver={() => setIdxMouseOver(idx)}
          >
            {company}
          </h4>
        ))}
      </div>
    </div>
  );
};

export default TextList;
