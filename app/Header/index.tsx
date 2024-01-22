'use client'

import Link from 'next/link'
import {HOME_ROUTE_PATH,DASHBOARD_ROUTE_PATH} from '@/app/constant/router'
import Button from "@/app/components/Button";

const HeaderLayout = () => {
  return <div className="box-border py-4 px-8 flex items-center justify-start gap-8 relative">
    <Link href={HOME_ROUTE_PATH}>
      <Button>首页</Button>
    </Link>
    <Link href={DASHBOARD_ROUTE_PATH}>
      <Button>777</Button>
    </Link>
  </div>
}

export default HeaderLayout
