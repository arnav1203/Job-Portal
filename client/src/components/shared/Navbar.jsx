import { Popover, PopoverContent } from "@radix-ui/react-popover";
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#F83002]">Portal</span>
          </h1>
        </div>
        <div>
          <ul className="flex font-medium items-center gap-5">
            <li>Home</li>
            <li>Jobs</li>
            <li>Browse</li>
          </ul>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <h1>Hello</h1>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
