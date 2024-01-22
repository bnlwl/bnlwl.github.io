'use client';

import React, {useEffect} from 'react';
import Link from "next/link";

const Home: React.FC = () => {
  useEffect(() => {
    console.log('444');
  },[])

  return <div>
    <Link href="/dashboard">Dashboard</Link>
  </div>
};

export default Home;
