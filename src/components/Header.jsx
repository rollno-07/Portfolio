import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Vivek<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap">
                  <Nav />
                  <Link href="/contact">
                      <Button>
                          Hire Me
                      </Button>
                  </Link>
              </div>
              <div className="xl:hidden">Mobile Nav</div>
      </div>
    </header>
  );
};

export default Header;
