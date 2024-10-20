'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const linkData = [
  { name: 'Performance', path: '/performance' },
  { name: 'Reliability', path: '/reliability' },
  { name: 'Scale', path: '/scale' }
]

const accessLink = ['/', '/performance', '/reliability', '/scale']

export default function Header() {
  const pathname = usePathname()
  if (!accessLink.includes(pathname)) {
    return null
  }
  return (
    <div>
      <div className='absolute w-full z-10'>
        <div className='flex justify-between container mx-auto text-white p-8 items-center'>
          <Link className='text-3x-l font-bold' href='/'>
            {' '}
            Home
          </Link>
          <div className='text-x1 space-x-4'>
            {linkData.map((link) => (
              <Link
                key={link.path}
                className={pathname === link.path ? 'text-purple-500' : ''}
                href={link.path}
              >
                {link.name}
              </Link>
            ))}

            {/* <Link className={pathname === "/performance" ? "text-purple-500":""} href='/performance'>Performance</Link>
            <Link className={pathname === "/reliability" ? "text-purple-500":""} href='/reliability'>Reliability</Link>
            <Link className={pathname === "/scale" ? "text-purple-500":""} href='/scale'>Scale</Link> */}
          </div>
        </div>
      </div>
    </div>
  )
}
