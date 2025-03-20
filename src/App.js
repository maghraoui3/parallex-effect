import { useEffect, useState } from 'react';
import './App.css'
import NavBar from './components/NavBar';

const data = [
  {distance: 200, name: 'bg', speedX: 0.3, speedY: 0.38, speedZ: 0, rotation: 0, path: './img/background.png', alt: 'bg'},
  {distance: 200, name: 'title', speedX: 0.07, speedY: 0.07, speedZ: 0, rotation: 0.11, title: ['CHINA', 'ZHANGJIAJIE']},
  // mountains
  {distance: 200, name: 'mountain', speedX: 0.027, speedY: 0.018, speedZ: 0.53, rotation: 0.2, path: './img/mountain_1.png', alt: 'img'},
  {distance: 200, name: 'mountain', speedX: 0.0235, speedY: 0.013, speedZ: 0.42, rotation: 0.15, path: './img/mountain_2.png', alt: 'img'},
  {distance: 200, name: 'mountain', speedX: 0.04, speedY: 0.018, speedZ: 0.32, rotation: 0.05, path: './img/mountain_3.png', alt: 'img'},
  {distance: 200, name: 'mountain', speedX: 0.059, speedY: 0.024, speedZ: 0.35, rotation: 0.14, path: './img/mountain_4.png', alt: 'img'},
  {distance: 200, name: 'mountain', speedX: 0.08, speedY: 0.03, speedZ: 0.13, rotation: 0.1, path: './img/mountain_5.png', alt: 'img'},
  {distance: 200, name: 'mountain', speedX: 0.065, speedY: 0.138, speedZ: 0.05, rotation: 0.12, path: './img/mountain_6.png', alt: 'img'},
  {distance: 200, name: 'mountain', speedX: 0.1, speedY: 0.1, speedZ: 0, rotation: 0.09, path: './img/mountain_7.png', alt: 'img'},
  {distance: 200, name: 'mountain', speedX: 0.1, speedY: 0.11, speedZ: 0, rotation: 0.02, path: './img/mountain_8.png', alt: 'img'},
  {distance: 200, name: 'mountain', speedX: 0.125, speedY: 0.155, speedZ: 0.15, rotation: 0.02, path: './img/mountain_9.png', alt: 'img'},
  {distance: 200, name: 'mountain', speedX: 0.195, speedY: 0.305, speedZ: 0, rotation: 0, path: './img/mountain_10.png', alt: 'img'},
  // fogs
  {distance: 200, name: 'shadow', speedX: 0.3, speedY: 0.38, speedZ: 0, rotation: 0, path: './img/black_shadow.png', alt: 'img'},
  {distance: 200, name: 'fog', speedX: 0.12, speedY: 0.01, speedZ: 0, rotation: 0, path: './img/fog_1.png', alt: 'img'},
  {distance: 200, name: 'fog', speedX: 0.15, speedY: 0.0115, speedZ: 0, rotation: 0, path: './img/fog_2.png', alt: 'img'},
  {distance: 200, name: 'fog', speedX: 0.11, speedY: 0.018, speedZ: 0, rotation: 0, path: './img/fog_3.png', alt: 'img'},
  {distance: 200, name: 'fog', speedX: 0.135, speedY: 0.04, speedZ: 0, rotation: 0, path: './img/fog_4.png', alt: 'img'},
  {distance: 200, name: 'fog', speedX: 0.16, speedY: 0.105, speedZ: 0, rotation: 0, path: './img/fog_5.png', alt: 'img'},
  {distance: 200, name: 'fog', speedX: 0.25, speedY: 0.28, speedZ: 0, rotation: 0, path: './img/fog_6.png', alt: 'img'},
  {distance: 200, name: 'fog', speedX: 0.27, speedY: 0.32, speedZ: 0, rotation: 0, path: './img/fog_7.png', alt: 'img'},
]

function App() {

  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(0);

  useEffect(() => {
    document.addEventListener('contextmenu', event => event.preventDefault());
  })

  useEffect(() => {
    function handleMouseMove(e) {
      setValueX(e.clientX - window.innerWidth / 2);
      setValueY(e.clientY - window.innerHeight / 2);
    }

    document.getElementById('App').addEventListener('mousemove', handleMouseMove);

    return () => {
      document.getElementById('App').removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach((element, index) => {
      element.style.transform = `translateX(calc(-50% + ${-valueX * data[index].speedX}px)) translateY(calc(-50% + ${-valueY * data[index].speedY}px))`;
    });
  }, [valueX, valueY]);

  useEffect(() => {
    const cursorTracker = document.getElementById('cursorTracker');
    let elementX = cursorTracker.clientTop - window.innerWidth / 2
    let elementY = cursorTracker.clientLeft - window.innerWidth / 2
    console.log(elementX, elementY);
    cursorTracker.style.transform = `translateX(${valueX - elementX}px) translateY(${valueY - elementY - 450}px)`
  })

  return (
    <div id='App' className="App" >
      <div id='cursorTracker' className='cursorTracker' />
      <NavBar/>
      <div className='homePage'>
        <div className='vignette'/>

        {/* elements */}
        {data.map((item, index) => (
          index === 0
          ? <img className='background parallax' src={require(`${item.path}`)} alt={item.alt} />
          : index === 1 ? <div className='title-container parallax'>{item.title.map((item2, index) => <div className={`title-${index + 1}`}>{item2}</div>)}</div>
          : <img className={`${item.name}-${index-2} parallax`} src={require(`${item.path}`)} alt={item.alt} />
        ))}

        <div id='cursorTracker' className='cursor-tracker'/>

      </div>
    </div>
  );
}

export default App;
