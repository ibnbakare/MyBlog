"use client"
import Link from 'next/link';
import React from 'react'
import styles from "./navbar.module.css"
import Darktoggleicon from '../darktoggle/Darktoggleicon';
import { signOut, useSession } from 'next-auth/react';

  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

  
  const Navbar = () => {
    const {status} = useSession()
    
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
        <Link href="/" >Hello</Link>
        </div>
        <div className={styles.links}>
          {/* <DarkToggle /> */}
        <Darktoggleicon />
          {links.map(link =>(

            <Link href={link.url} key={link.id}>
            {link.title}
            </Link>

          ))}
{status == "authenticated" &&
          <button className={styles.logout}
          onClick={signOut}>Log out</button>
          }
        </div>
      </div>
    )
  }
  
  export default Navbar
