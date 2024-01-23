'use client';

import React from 'react';
import Card from "@/app/components/Card";

const list = [
  {
    id:'1',
    title:'江城子·乙卯正月二十日夜记梦',
    user:'苏轼',
    content:`十年生死两茫茫，不思量，自难忘。
千里孤坟，无处话凄凉。
纵使相逢应不识，尘满面，鬓如霜。
夜来幽梦忽还乡，小轩窗，正梳妆。
相顾无言，惟有泪千行。
料得年年断肠处，明月夜，短松冈。`
  }
]

const Home: React.FC = () => {
  return <div className="box-border p-4 flex flex-wrap gap-8 justify-center">
    {
      list.map(item => <Card
        key={item.id}
        title={item.title}
        user={item.user}
        content={item.content}
      />)
    }

  </div>
};

export default Home;
