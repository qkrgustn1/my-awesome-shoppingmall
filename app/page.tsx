"use client"

import { MenuIcon, Zap, Heart, Award } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-border">
        <div className="text-2xl font-bold tracking-tight">ÉLÉGANCE</div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm hover:text-accent transition">
            회사소개
          </a>
          <a href="#collection" className="text-sm hover:text-accent transition">
            컬렉션
          </a>
          <a href="#philosophy" className="text-sm hover:text-accent transition">
            철학
          </a>
          <a href="#contact" className="text-sm hover:text-accent transition">
            연락처
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition"
        >
          <MenuIcon size={20} />
        </button>

        {menuOpen && (
          <div className="absolute top-20 right-6 md:hidden bg-card border border-border rounded-lg p-4 flex flex-col gap-4 z-50">
            <a href="#about" className="text-sm hover:text-accent transition">
              회사소개
            </a>
            <a href="#collection" className="text-sm hover:text-accent transition">
              컬렉션
            </a>
            <a href="#philosophy" className="text-sm hover:text-accent transition">
              철학
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition">
              연락처
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0 min-h-[600px] md:min-h-[700px]">
          {/* Left Column - Content */}
          <div className="bg-background flex flex-col justify-center px-6 md:px-12 py-12 md:py-0">
            <div className="max-w-md">
              <p className="text-sm tracking-widest text-muted-foreground mb-4 uppercase">프리미엄 패션</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
                우아함이
                <br />
                깃든 스타일
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                최고의 소재와 장인 정신으로 만든 프리미엄 의류. 당신의 개성을 표현하는 완벽한 옷을 찾아보세요.
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition inline-block">
                컬렉션 보기
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="bg-secondary relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=700&fit=crop"
              alt="Premium fashion collection"
              width={800}
              height={700}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-12 py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">우리 이야기</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="text-balance">20년의 패션 경험,</span>
            <br />
            <span className="text-accent">완벽한 품질의 약속</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ÉLÉGANCE는 2004년 창립 이래 세계 최고의 소재를 엄선하여 프리미엄 의류를 제작해왔습니다. 각 제품은 전통적
                장인정신과 현대적 디자인이 완벽하게 조화된 작품입니다.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                우리의 목표는 고객님께 단순한 옷이 아닌, 삶의 격을 높이는 경험을 제공하는 것입니다.
              </p>
            </div>

            <div className="bg-secondary rounded-lg p-8 border border-border">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=320&fit=crop"
                alt="Premium fabric"
                width={800}
                height={320}
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <p className="text-sm text-muted-foreground">세계 최고 수준의 친환경 소재를 사용합니다</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="px-6 md:px-12 py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">컬렉션</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="text-balance">계절별 최신 컬렉션</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "스프링 컬렉션",
                desc: "자유로운 영감으로 만든 봄 패션",
                image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=400&fit=crop",
              },
              {
                title: "서머 컬렉션",
                desc: "시원한 감촉의 여름 의류",
                image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=400&fit=crop",
              },
              {
                title: "윈터 컬렉션",
                desc: "따뜻함과 우아함이 어우러진 겨울 옷",
                image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=400&fit=crop",
              },
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden rounded-lg mb-4 bg-secondary border border-border">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="px-6 md:px-12 py-16 md:py-24 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm tracking-widest text-muted-foreground uppercase mb-4">우리의 가치</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            <span className="text-balance">세 가지 핵심 철학</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "최고의 품질",
                desc: "세계 최고의 소재와 완벽한 제조 공정으로 최상의 품질을 보장합니다.",
              },
              {
                icon: Heart,
                title: "지속가능성",
                desc: "환경을 생각하는 친환경 소재와 윤리적인 생산 방식을 추구합니다.",
              },
              {
                icon: Zap,
                title: "혁신 디자인",
                desc: "전통과 현대가 만나 독특하고 세련된 디자인을 창작합니다.",
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="border border-border rounded-lg p-8 hover:bg-secondary transition">
                  <Icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="px-6 md:px-12 py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">당신의 완벽한 스타일을 찾아보세요</h2>
          <p className="text-lg mb-8 opacity-90 text-balance">
            ÉLÉGANCE의 프리미엄 컬렉션에서 당신의 개성을 표현할 수 있는 옷을 만나보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-medium hover:opacity-90 transition">
              지금 쇼핑하기
            </button>
            <button className="border-2 border-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary-foreground hover:text-primary transition">
              더 알아보기
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background px-6 md:px-12 py-12 border-t border-foreground/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">ÉLÉGANCE</h3>
              <p className="text-sm opacity-75">프리미엄 패션의 세계</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">쇼핑</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    신상품
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    컬렉션
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    세일
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">고객센터</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    배송정보
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    교환/반품
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm">연락처</h4>
              <p className="text-sm opacity-75">contact@elegance.com</p>
              <p className="text-sm opacity-75">02-XXXX-XXXX</p>
            </div>
          </div>
          <div className="border-t border-foreground/20 pt-8 text-sm text-center opacity-75">
            <p>&copy; 2025 ÉLÉGANCE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
