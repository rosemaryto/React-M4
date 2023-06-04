//REFACTORING ELEMENTS (JSX) & displaying them
let zak = 'Zak Ruvalcaba';
let sally = 'Sally Smith';
let holly = 'Holly Unlikely';
let amol = 'Amol Shookup';
let robin = 'Robin Banks';
let aaron = 'Arron D. Tyres';
let rosemary = 'Rosemary To';
let leslie = 'Leslie Mann';
let john = 'John George';
let james = 'James Dean';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, zak), /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol), /*#__PURE__*/React.createElement("li", null, robin), /*#__PURE__*/React.createElement("li", null, aaron), /*#__PURE__*/React.createElement("li", null, rosemary), /*#__PURE__*/React.createElement("li", null, leslie), /*#__PURE__*/React.createElement("li", null, john), /*#__PURE__*/React.createElement("li", null, james));
ReactDOM.render(element, document.getElementById('content'));