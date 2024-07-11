'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import Logo from '../public/logo-2.svg';
import Image from 'next/image';
import links from '@/utils/links';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const SideBar = () => {

  const pathName = usePathname();

  return (
    <aside className='py-4 px-8 bg-muted h-full'>
      <Image
        className="mx-auto max-w-40"
        src={Logo} alt="logo"
        width={80}
        height={80}
      />

      <div className='flex flex-col mt-20 gap-y-4'>
        {links.map((link) => (
          <Button asChild key={link.href}
          variant={pathName === link.href ? 'default' : 'link'}
          >
            <Link href={link.href}
              className="flex items-center gap-x-2">
              {link.icon} <span className='capitalize'>{link.label}</span>
            
            </Link>
              
          </Button>
        ))}
      </div>

    </aside>
  )
};

export default SideBar;
