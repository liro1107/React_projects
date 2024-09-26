import React from 'react'

export const App = () => {
    const marks = [20, 30, 40, 50, 60]
    const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry']

    return (
        <div>
            <h1>Marks List</h1>
            <ul>
                {marks.map((mark, index) => (
                    <li key={index}>{mark}</li>
                ))}
            </ul>
        
            <h1>Fruits List</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    )
}

export default App;
