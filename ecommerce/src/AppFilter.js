import React from 'react';

const names = ['James', 'John', 'Paul', 'Ringo', 'Rinku', 'George'];

function App() {
  return (
    <div>
      {names.filter(name => name.includes('R'))
            .map(filteredName => (
              <li key={filteredName}>{filteredName}</li>
            ))}
    </div>
  );
}

export default App;

