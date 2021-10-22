import React from 'react';
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header class="flex flex-wrap">
      <section class="mx-auto">
        <nav class="flex justify-between bg-gray-900 text-white w-screen">
          <div class="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
            <Link class="text-3xl font-bold font-heading" to="/">
              <img class="h-9" src="logo.png" alt="logo"/>
            </Link>
            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li><Link class="hover:text-gray-200" to="/">Home</Link></li>
              <li><Link class="hover:text-gray-200" to="/">About</Link></li>
              <li><Link class="hover:text-gray-200" to="/">Contact</Link></li>
              <li><Link class="hover:text-gray-200" to="/">Write</Link></li>
            </ul>
          <div class="flex items-center space-x-5 items-center">
          <Link class="navbar-burger self-center mr-12 hidden xsm:flex lg:hidden" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          </Link>
          <Link class="hidden flex items-center hover:text-gray-200  lg:flex " to="/">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
          </Link>
          <Link class="hidden navbar-burger self-center mr-12   lg:flex" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                <path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/>
                </svg>
          </Link>
          </div>
          
        </div>

        
        </nav>
        
      </section>
    </header>
  );
}

export default Header;