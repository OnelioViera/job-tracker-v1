'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import { DropdownMenu, DropdownMenuTrigger } from '@/components//ui/dropdown-menu';

const ThemeToggle = () => {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild></DropdownMenuTrigger>
    </DropdownMenu>
  )
};

export default ThemeToggle;
