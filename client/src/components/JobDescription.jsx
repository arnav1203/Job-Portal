import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const JobDescription = () => {
  const isApplied = true;
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">Title</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"} variant={"ghost"}>
              12 Positions
            </Badge>
            <Badge className={"text-[#F83002] font-bold"} variant={"ghost"}>
              Part Time
            </Badge>
            <Badge className={"text-[#7209b7] font-bold"} variant={"ghost"}>
              24Lpa
            </Badge>
          </div>
        </div>
        <Button>{isApplied ? "Already Applied" : "Apply Now"}</Button>
      </div>
    </div>
  );
};

export default JobDescription;
