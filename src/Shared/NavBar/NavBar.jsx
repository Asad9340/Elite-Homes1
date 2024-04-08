import React, { useContext } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Firebase/AuthProvider';

function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center font-display text-white">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center font-display text-white">
          Update Profile
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center font-display text-white">
          User Profile
        </a>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full  px-4 py-2 lg:px-8 lg:py-4 shadow-none bg-primary rounded-t-md rounded-b-none ">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography className="mr-4 cursor-pointer py-1.5 font-semibold font-display lg:font-bold text-xl md:text-2xl text-white">
              Elite<span className="text-red-700">H</span>omes
            </Typography>
          </Link>
          <div className="flex items-center justify-between gap-8">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {!user ? (
              <div className="flex items-center gap-x-2">
                <Link to="/login">
                  <Button
                    variant="filled"
                    size="md"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign In</span>
                  </Button>
                </Link>
                <Link to="/register">
                  <Button
                    variant="filled"
                    size="md"
                    className="hidden lg:inline-block"
                  >
                    <span>Sign Up</span>
                  </Button>
                </Link>
              </div>
            ) : (
              <Button
                variant="filled"
                size="md"
                className="hidden lg:inline-block"
              >
                <span onClick={handleLogOut}>LogOut</span>
              </Button>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-4">
            <Link className="w-full" to="/login">
              <Button fullWidth variant="filled" size="sm" className="">
                <span>Log In</span>
              </Button>
            </Link>
            <Link className="w-full" to="/register">
              <Button fullWidth variant="filled" size="sm" className="">
                <span>Sign Up</span>
              </Button>
            </Link>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;
