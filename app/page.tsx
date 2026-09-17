'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'

const chapters = [
  { number: '01', title: '입는 사람의 하루를 연구합니다', copy: '옷은 특별한 날을 위해서만 존재하지 않습니다. 우리는 매일의 움직임과 감정에서 출발해 오래 입을수록 더 좋아지는 옷을 만듭니다.' },
  { number: '02', title: '소재의 본질을 지킵니다', copy: '좋은 원단이 좋은 실루엣을 만듭니다. 자연스러운 촉감과 정교한 봉제, 시간이 지나도 변하지 않는 품질을 기준으로 선택합니다.' },
  { number: '03', title: '다음 세대를 생각합니다', copy: '덜 만들고, 더 오래 쓰는 방식. 생산부터 포장까지 우리가 선택하는 모든 과정에 책임의 기준을 세웁니다.' },
]

export default function Page() {
  const [openChapter, setOpenChapter] = useState(0)

  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-topline"><span>CONTEMPORARY CLOTHING / SEOUL</span><span>EST. 2018</span></div>
        <div className="hero-title-wrap">
          <p className="eyebrow">A QUIET ATTITUDE</p>
          <h1>Dress<br /><em>your</em> day.</h1>
          <p className="hero-description">MORROW는 지금의 삶을 가장 나답게 살아가는 사람들을 위한 컨템포러리 클로딩 브랜드입니다.</p>
        </div>
        <div className="hero-meta"><span>SCROLL TO EXPLORE</span><span className="scroll-line" aria-hidden="true" /></div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-label"><span>01</span><span>OUR POINT OF VIEW</span></div>
        <div className="intro-content">
          <h2>좋은 옷은<br /><em>조용하게</em> 오래 남습니다.</h2>
          <div className="intro-copy"><p>우리는 유행보다 태도를 믿습니다. MORROW의 옷은 드러내기 위한 장식이 아니라, 입는 사람의 움직임과 취향을 자연스럽게 완성하는 일상의 도구입니다.</p><a className="text-link" href="#values">더 알아보기 <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section className="image-feature" id="journal">
        <div className="feature-image"><img src="/founder-editorial.png" alt="콘크리트 공간에 서 있는 MORROW의 모델" /></div>
        <div className="feature-note"><span>FIG. 01</span><p>한 벌의 옷이<br />하루의 태도가 되는 순간.</p></div>
      </section>

      <section className="values-section" id="values">
        <div className="section-label"><span>02</span><span>WHAT WE BELIEVE</span></div>
        <div className="values-heading"><h2>우리가 만드는 것은<br /><em>옷 이상의 것</em>입니다.</h2><p>매일의 선택이 조금 더 선명해지도록.<br />MORROW가 지키는 세 가지 기준.</p></div>
        <div className="chapters">
          {chapters.map((chapter, index) => <div className={`chapter ${openChapter === index ? 'active' : ''}`} key={chapter.number}>
            <button type="button" className="chapter-toggle" onClick={() => setOpenChapter(openChapter === index ? -1 : index)} aria-expanded={openChapter === index}><span>{chapter.number}</span><strong>{chapter.title}</strong><ChevronDown size={18} /></button>
            <div className="chapter-copy"><p>{chapter.copy}</p></div>
          </div>)}
        </div>
      </section>

      <section className="closing-section" id="contact">
        <p className="eyebrow">COME AS YOU ARE</p><h2>당신의 내일에<br /><em>MORROW</em>를 입혀보세요.</h2><a className="circle-link" href="mailto:hello@morrow.kr">CONTACT US <ArrowUpRight size={18} /></a>
      </section>

      <footer className="site-footer"><a className="wordmark" href="#top">MORROW<span>®</span></a><p>Clothing for the considered life.</p><div><a href="#top">INSTAGRAM</a><a href="/careers">채용정보</a><a href="mailto:hello@morrow.kr">EMAIL</a></div><small>© 2025 MORROW. ALL RIGHTS RESERVED.</small></footer>
    </main>
  )
}
