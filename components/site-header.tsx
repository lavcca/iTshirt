'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="MORROW home" onClick={closeMenu}>
        MORROW<span>®</span>
      </Link>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="주요 메뉴">
        <Link href="/#about" onClick={closeMenu}>ABOUT</Link>
        <Link href="/#values" onClick={closeMenu}>VALUES</Link>
        <Link href="/#journal" onClick={closeMenu}>JOURNAL</Link>
        <Link href="/#contact" onClick={closeMenu}>CONTACT</Link>
        <Link href="/careers" className="careers-nav" onClick={closeMenu}>
          채용정보
        </Link>
      </nav>
      <button
        className="menu-toggle"
        type="button"
        aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  )
}
