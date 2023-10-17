import { useRef, useState } from 'react';
import './App.css';

const App = () => {
  const itemsRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const brands = [
    { id: 1, name: 'apple', src: '/apple.svg' },
    { id: 2, name: 'apple', src: '/apple.svg' },
    { id: 3, name: 'apple', src: '/apple.svg' },
    { id: 4, name: 'apple', src: '/apple.svg' },
    { id: 5, name: 'apple', src: '/apple.svg' },
    { id: 6, name: 'apple', src: '/apple.svg' },
    { id: 7, name: 'apple', src: '/apple.svg' },
    { id: 8, name: 'apple', src: '/apple.svg' },
    { id: 9, name: 'apple', src: '/apple.svg' },
    { id: 10, name: 'apple', src: '/apple.svg' },
    { id: 11, name: 'apple', src: '/apple.svg' },
    { id: 12, name: 'apple', src: '/apple.svg' },
    { id: 13, name: 'apple', src: '/apple.svg' },
    { id: 14, name: 'apple', src: '/apple.svg' },
    { id: 15, name: 'apple', src: '/apple.svg' },
    { id: 16, name: 'apple', src: '/apple.svg' },
    { id: 17, name: 'apple', src: '/apple.svg' },
    { id: 18, name: 'apple', src: '/apple.svg' },
    { id: 19, name: 'apple', src: '/apple.svg' },
    { id: 20, name: 'apple', src: '/apple.svg' },
    { id: 21, name: 'apple', src: '/apple.svg' },
    { id: 22, name: 'apple', src: '/apple.svg' }
  ];

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - itemsRef.current.offsetLeft);
    setScrollLeft(itemsRef.current.scrollLeft);
    const clickedElement = e.target.closest('.brand'); // Find the closest ancestor with class 'brand'
    if (clickedElement) {
      const brandName = clickedElement.querySelector('.brandName').textContent;
      console.log('Clicked Brand:', brandName);
    }
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemsRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust the multiplication factor for the speed of movement
    itemsRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="ChooseBrand" ref={itemsRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {brands.map((brand) => (
        <div className='brand' key={brand.id}>
          <div className='brandImage' >
            <img src={brand.src} alt={brand.name} />
          </div>
          <div className='brandName' >
            {brand.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
