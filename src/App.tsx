import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Reume';
import './components/Cutout.css';

function App() {
  const [activeRoute, setActiveRoute] = useState('home');

  // on page load, get the current path and set the active route
  useEffect(() => {
    const path = window.location.pathname.slice(1);
    setActiveRoute(path || 'home');
  }, []);

  // when the active route changes, update the path
  const handleRouteChange = (key: string) => {
    setActiveRoute(key);
    window.history.pushState(null, '', `/${key}`);
  };

  const routes = [
    {
      order: 1,
      key: 'home',
      label: 'Home',
      component: <Home />,
    },
    {
      order: 2,
      key: 'about',
      label: 'About',
      component: <About />,
    },
    {
      order: 3,
      key: 'resume',
      label: 'Resume',
      component: <Resume />,
    },
  ];

  const translateClassByActiveRouteOrder = () => {
    const order = routes.find(({ key }) => key === activeRoute)?.order;
    switch (order) {
      case 1:
        return 'translate-x-0';
      case 2:
        return '-translate-x-1/4';
      case 3:
        return '-translate-x-2/4';
      default:
        return 'translate-x-0';
    }
  };

  const gradientClass =
    'bg-gradient-to-tl from-green-200 via-green-300 to-blue-500';

  const overlayBgClass = 'bg-slate-600 bg-opacity-90';

  return (
    <>
      <NavBar
        routes={routes}
        activeRoute={activeRoute}
        setActiveRoute={handleRouteChange}
      />
      <main className='w-full basis-full overflow-hidden relative'>
        <div
          className={`flex h-full w-[400%] transform transition-transform duration-500 ease-in-out relative ${translateClassByActiveRouteOrder()}`}
        >
          <div
            className={`absolute top-0 left-0 w-full h-full z-10 pointer-events-none ${gradientClass}`}
          ></div>
          {routes.map(({ key, component }) => (
            <div key={key} className='flex w-1/4 h-full z-20 p-20'>
              {/* <div className={`w-full text-center`}>{component}</div> */}
              <div className='w-8/12'></div>
              <div className='w-1/4 h-1/2 translate-y-1/2 grid place-items-center'>
                {component}
              </div>
            </div>
          ))}
        </div>
        <div className='w-full h-full absolute p-20 flex top-0 left-0 z-40 bg-blend-saturation pointer-events-none'>
          <div className={`w-8/12 rounded-s-lg ${overlayBgClass}`}></div>
          {/* <div className='flex flex-col w-3/12'>
            <div className={`basis-1/4 ${overlayBgClass}`}></div>
            <div className='basis-3/4 bg-transparent rounded-2xl overflow-hidden outline outline-8 outline-sky-300 z-50'></div>
            
            <div className={`basis-1/4 ${overlayBgClass}`}>C</div>
          </div> */}
          <div id='box' className='w-1/4 h-full m-auto relative '>
            <div
              id='innerbox'
              className={`absolute inset-0 ${overlayBgClass}`}
              style={{
                // mask: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><path d="M 103.169 -153.293 L 390.142 -155.603 C 421.206 -155.807 448.957 -135.693 448.957 -104.136 L 448.842 479.239 C 447.995 510.676 432.369 532.22 394.533 531.905 L 95.316 531.07 C 63.746 531.204 41.307 507.62 41.913 472.746 L 42.985 -99.276 C 42.985 -130.834 71.023 -152.523 103.169 -153.293 Z" /></svg>') 0/100% 100%, linear-gradient(#fff, #fff)`,
                mask: `url('data:image/svg+xml;utf8,<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><path d="M 103.169 -153.293 L 390.142 -155.603 C 421.206 -155.807 448.957 -135.693 448.957 -104.136 L 448.842 479.239 C 447.995 510.676 432.369 532.22 394.533 531.905 L 95.316 531.07 C 63.746 531.204 41.307 507.62 41.913 472.746 L 42.985 -99.276 C 42.985 -130.834 71.023 -152.523 103.169 -153.293 Z" /></svg>') 0/100% 100%, linear-gradient(#fff, #fff)`,
                maskComposite: 'exclude',
              }}
            ></div>
          </div>
          <div className={`w-1/12 rounded-e-lg ${overlayBgClass}`}></div>
        </div>
      </main>
    </>
  );
}

export default App;
