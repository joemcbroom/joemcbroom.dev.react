// import logo from '@/assets/img/logo.png';

type Route = {
  key: string;
  label: string;
};

const NavBar = ({
  routes,
  setActiveRoute,
  activeRoute,
}: {
  routes: Route[];
  setActiveRoute: (key: string) => void;
  activeRoute: string;
}) => {
  return (
    <nav className='basis-1/12 bg-sky-900 flex justify-end items-center gap-4 px-24'>
      <div className='rounded-full bg-sky-500 p-1 mr-auto shadow-md'>
        <img src='./logo.png' alt='logo' className='w-12 h-12 object-contain' />
      </div>
      {routes.map(({ key, label }) => (
        <button
          // className={`${
          //   activeRoute === key
          //     ? 'text-teal-300 border-slate-300 border-b-2 border-opacity-100'
          //     : 'text-slate-300 border-slate-50'
          // } border-b-2 border-opacity-0 hover:border-opacity-100 transition-all duration-300 ease-in-out`}
          className={`nav-link px-2 hover:text-teal-300 ${
            activeRoute === key ? 'active text-teal-300' : 'text-slate-300'
          }`}
          key={key}
          onClick={() => setActiveRoute(key)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default NavBar;
