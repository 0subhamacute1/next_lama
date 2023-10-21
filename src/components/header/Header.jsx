import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="row1">
  
        <Link href="/">home</Link>
    
     
      <div >
        <Link href="/about">about</Link>&nbsp;
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
};

export default Header;
