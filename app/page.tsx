'use client';

import React from 'react';
import Card from "@/app/components/Card";

const list = [
  {
    id:'1',
    title:'江城子·乙卯正月二十日夜记梦',
    user:'苏轼',
    type:'词',
    content:`十年生死两茫茫，不思量，自难忘。
千里孤坟，无处话凄凉。
纵使相逢应不识，尘满面，鬓如霜。
夜来幽梦忽还乡，小轩窗，正梳妆。
相顾无言，惟有泪千行。
料得年年断肠处，明月夜，短松冈。`
  },
  {
    id:'2',
    title:'破阵子·为陈同甫赋壮词以寄之',
    user:'辛弃疾',
    type:'词',
    content:`醉里挑灯看剑，梦回吹角连营。
八百里分麾下炙，五十弦翻塞外声，沙场秋点兵。
马作的卢飞快，弓如霹雳弦惊。
了却君王天下事，赢得生前身后名，可怜白发生。`
  },
  {
    id:'3',
    title:'凉州词',
    user:'王翰',
    type:'诗',
    content:`葡萄美酒夜光杯。
欲饮琵琶马上催。
醉卧沙场君莫笑。
古来征战几人回。`
  }
]

const Home: React.FC = () => {
  return <div className="box-border px-8 p-4 flex flex-wrap gap-8 justify-start">
    {
      list.map(item => <Card
        key={item.id}
        title={item.title}
        user={item.user}
        content={item.content}
        type={item.type}
      />)
    }

  </div>
};

export default Home;
