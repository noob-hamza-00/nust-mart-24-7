import React, { useState } from 'react';

// Static items list for public view only
const staticItems = [
  { id: 1, name: 'Milk', category: 'grocery' },
  { id: 2, name: 'Chips', category: 'snacks' },
  { id: 3, name: 'Banana', category: 'fruits' },
  // Add more items as needed
];

export default function App() {
  const [items] = useState(staticItems);
  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Daily Items List (Read Only)</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} <em>({item.category})</em></li>
        ))}
      </ul>
      <p style={{color: 'gray', fontSize: 14}}>This is a public, read-only list. To allow live adding/editing, a backend is required.</p>
    </div>
  );
}
