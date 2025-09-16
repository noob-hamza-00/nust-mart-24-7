import React, { useState } from 'react';
import './App.css';

// Updated items list with images and prices
const staticItems = [
  { id: 1, name: 'Murree Brewery Drink Lemon Malt Can 250 ML', price: 'Rs.80', img: 'https://i.imgur.com/1.png' },
  { id: 2, name: 'Gatorade Drink Tropical Fruit Bottle 500 ML', price: 'Rs.100', img: 'https://i.imgur.com/2.png' },
  { id: 3, name: 'Taste of Nature Fruti Mango Juice Glass Bottle', price: 'Rs.1,680', img: 'https://i.imgur.com/3.png' },
  { id: 4, name: 'Dayfresh Flavoured Milk Belgian Chocolate 225ML', price: 'Rs.1,680', img: 'https://i.imgur.com/4.png' },
  { id: 5, name: 'Dayfresh Flavoured Milk Nutelicious Hazelnut', price: 'Rs.140', img: 'https://i.imgur.com/5.png' },
  { id: 6, name: 'Murree Brewery Malt 79 Tin 250 ML', price: 'Rs.80', img: 'https://i.imgur.com/6.png' },
  { id: 7, name: 'Cindy Carbonated Malt Drink', price: 'Rs.80', img: 'https://i.imgur.com/7.png' },
  { id: 8, name: 'Coca Cola Local Tin 250 ML', price: 'Rs.105', img: 'https://i.imgur.com/8.png' },
  { id: 9, name: 'Coca Cola Local Can 250 ML – Carton', price: 'Rs.1,260', img: 'https://i.imgur.com/9.png' },
  { id: 10, name: 'Coke Zero Slim Tin 250 ML', price: 'Rs.105', img: 'https://i.imgur.com/10.png' },
  // ...add more items as needed, using real image URLs
];

export default function App() {
  const [items] = useState(staticItems);
  return (
    <div style={{ maxWidth: 1200, margin: '2rem auto', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1 style={{ fontSize: 36, fontWeight: 700, marginBottom: 32 }}>Nust Mart Drinks & Juices</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 24,
        justifyItems: 'center',
        marginBottom: 40,
      }}>
        {items.map(item => (
          <div key={item.id} className="item-card" style={{
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 2px 12px #0001',
            padding: 18,
            width: 220,
            transition: 'transform 0.2s',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <img src={item.img} alt={item.name} style={{ width: '100%', height: 140, objectFit: 'contain', marginBottom: 12, borderRadius: 8 }} />
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>{item.name}</div>
            <div style={{ color: '#25D366', fontWeight: 600, fontSize: 15, marginBottom: 8 }}>{item.price}</div>
            <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
              <span style={{ background: '#25D366', color: 'white', borderRadius: '50%', width: 32, height: 32, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>+</span>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://wa.me/c/923169626873"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: '#25D366',
          color: 'white',
          padding: '10px 18px',
          borderRadius: 8,
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 18,
          marginTop: 24,
          boxShadow: '0 2px 8px #0001',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{marginRight: 8}}><path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.58 1.38 5.07L2.05 21.95l4.88-1.33A9.953 9.953 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18c-1.61 0-3.13-.39-4.45-1.08l-.32-.17-2.9.79.78-2.83-.2-.33A7.96 7.96 0 0 1 4 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8Zm4.13-5.47c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.09-.66-.59-1.1-1.31-1.23-1.53-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.07-.11-.5-1.21-.68-1.66-.18-.44-.36-.38-.5-.39-.13-.01-.28-.01-.43-.01-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.9 0 1.12.82 2.2.94 2.35.12.15 1.61 2.46 3.91 3.36.55.24.98.38 1.31.49.55.18 1.05.15 1.44.09.44-.07 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.05-.09-.2-.15-.42-.26Z" fill="white"/></svg>
        View Nust Mart
      </a>
    </div>
  );
}
