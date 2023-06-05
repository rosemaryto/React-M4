  //REFACTORING ELEMENTS (JSX) & displaying them
  let zak = 'Zak Ruvalcaba'
  let sally = 'Sally Smith'
  let holly = 'Holly Unlikely'
  let amol = 'Amol Shookup'
  let robin = 'Robin Banks'
  let aaron = 'Arron D. Tyres'
  let rosemary = 'Rosemary To'
  let leslie = 'Leslie Mann'
  let john = 'John George'
  let james = 'James Dean'
  const element = (
      <ul style={{'color': 'blue', 'fontSize': '24px'}}>
          <li>{zak}</li>
          <li>{sally}</li>
          <li>{holly}</li>
          <li>{amol}</li>
          <li>{robin}</li>
          <li>{aaron}</li>
          <li>{rosemary}</li>
          <li>{leslie}</li>
          <li>{john}</li>
          <li>{james}</li>
      </ul>
      )
      ReactDOM.render(element,document.getElementById('content'))

