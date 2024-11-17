"use client";

import { DarkThemeToggle, Flowbite, Avatar, Dropdown, Navbar } from "flowbite-react";


export default function NavbarComponent(props = {}) {
  return (
    <Flowbite theme={{ mode: 'dark' }}>
      <Navbar fluid rounded>
        <Navbar.Brand href="#">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-dark">Sean Stoves</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
            <DarkThemeToggle className="mr-3" />
            <Dropdown
            arrowIcon={false}
            inline
            label={
                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
            >
            <Dropdown.Header>
                <span className="block text-sm">Sean Stoves</span>
                <span className="block truncate text-sm font-medium">name@email.com</span>
            </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link href="#" active>
            Home
            </Navbar.Link>
            <Navbar.Link href="#">Blog</Navbar.Link>
            <Navbar.Link href="#">Portfolio</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
    </Flowbite>
    
  );
}