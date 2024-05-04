import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar>
        <NavbarBrand>
            <p className="font-extrabold text-2xl ">Akif Mursalov</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem isActive>
            <Link href="#" aria-current="page">
                Scientific Works
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#">
                Industrial Works
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#">
                Industrial Works
            </Link>
            </NavbarItem>
            <NavbarItem>
            <Link color="foreground" href="#">
                About Me
            </Link>
            </NavbarItem>
            <NavbarItem>
                <Link color="foreground" href="#">
                    Contact
                </Link>
            </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
            </NavbarItem>
            <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
            </Button>
            </NavbarItem>
        </NavbarContent>
    </Navbar>
  );
}
