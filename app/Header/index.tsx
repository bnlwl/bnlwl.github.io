'use client'

import Banner from "@/app/Header/Banner";
import Nav from "@/app/Header/Nav";

const Header = () => {
  return <div className="h-20 text-white box-border text-center shadow-2xl">
    <Banner
      text="中华人民共和国万岁，中国共产党万岁!"
      className="h-10 leading-10 bg-[#c02c38] text-shadow-sm px-4 font-bold"
    />
    <Nav className="h-10 leading-10" />
  </div>
}

export default Header
