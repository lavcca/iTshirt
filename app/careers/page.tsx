import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'

export const metadata = {
  title: '채용정보 — MORROW',
  description: 'MORROW 패션 MD 채용 안내와 자격 요건.',
}

export default function CareersPage() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="careers-hero">
        <p className="eyebrow">CAREERS / SEOUL</p>
        <h1>
          함께 입을
          <br />
          <em>내일</em>을 고릅니다.
        </h1>
        <p className="careers-lead">
          MORROW는 매일의 옷장을 기획하는 패션 MD를 찾습니다. 유행보다 태도를 읽고, 오래 남는 상품을 고를 수 있는 분을 기다립니다.
        </p>
      </section>

      <section className="careers-body">
        <div className="section-label">
          <span>OPEN</span>
          <span>FASHION MD</span>
        </div>

        <article className="job-sheet">
          <header className="job-sheet-head">
            <h2>
              패션 MD
              <br />
              <em>Merchandiser</em>
            </h2>
            <p>
              시즌 상품을 기획하고, 판매 흐름을 읽으며, MORROW의 옷장이 늘 선명하도록 지키는 역할입니다.
            </p>
          </header>

          <div className="job-grid">
            <section>
              <h3>담당 업무</h3>
              <ul>
                <li>시즌별 상품 기획, 구성, 수급 일정 관리</li>
                <li>판매 데이터와 재고를 보고 리오더·할인 시점 판단</li>
                <li>브랜드 톤에 맞는 컬러, 실루엣, 가격대 셀렉션</li>
                <li>생산·협력 업체와 납기, 품질 이슈 조율</li>
              </ul>
            </section>

            <section>
              <h3>자격 요건</h3>
              <ul>
                <li>패션, 유통, 마케팅 전공 또는 동등한 실무 경험</li>
                <li>MD, 바잉, 상품 기획 경력 2년 이상</li>
                <li>판매 숫자와 고객 반응을 보고 의사결정할 수 있을 것</li>
                <li>트렌드를 따르기보다, 우리 고객의 하루를 상상할 수 있을 것</li>
                <li>생산·영업·디자인 팀과 막힘없이 소통할 수 있을 것</li>
              </ul>
            </section>

            <section>
              <h3>우대 사항</h3>
              <ul>
                <li>컨템포러리 또는 라이프스타일 브랜드 MD 경험</li>
                <li>온라인 몰과 오프라인 매장을 함께 운영해 본 경험</li>
                <li>해외 소싱 또는 영어 커뮤니케이션 가능</li>
              </ul>
            </section>
          </div>

          <a className="circle-link" href="mailto:careers@morrow.kr">
            지원하기 <ArrowUpRight size={18} />
          </a>
        </article>
      </section>

      <footer className="site-footer">
        <a className="wordmark" href="/">
          MORROW<span>®</span>
        </a>
        <p>Clothing for the considered life.</p>
        <div>
          <a href="/">HOME</a>
          <a href="/careers">채용정보</a>
          <a href="mailto:careers@morrow.kr">EMAIL</a>
        </div>
        <small>© 2025 MORROW. ALL RIGHTS RESERVED.</small>
      </footer>
    </main>
  )
}
