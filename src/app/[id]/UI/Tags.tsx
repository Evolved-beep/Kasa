import React from "react";

interface Itag {
  tag:string[]
}

const Tags = ({ tag }: Itag) => {
  return(
    <div className="flex flex-wrap">
        {tag.map((el:string, index:any) => {
            return(
                <div className="border rounded-lg mx-2 my-1" key={index}>
                <span className="m-2 text-[#717171]">{el}</span>
                </div>
            )
        })}
    </div>
  )
};

export default Tags;
