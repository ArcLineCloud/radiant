import { BentoSection } from '@/components/BentoSection'
import { Button } from '@/components/Button'
import { CaseStudies } from '@/components/CaseStudies'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Gradient } from '@/components/Gradient'
import { Navbar } from '@/components/Navbar'
import { Pricing } from '@/components/Price'
import { Screenshot } from '@/components/Screenshot'
import { Testimonials } from '@/components/Testimonials'
import { Heading } from '@/components/Text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Arcline Cloud - 致力于为全球用户提供高速、安全和匿名的全球加速服务。',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-7xl pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-center text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Arcline Cloud.
          </h1>
          <p className="mt-8 text-center text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            高速、安全和匿名的全球加速服务，在线体验真正的自由。
            <br />
            通过快速安全的代理服务，可以不受限制地访问全球内容，阻止烦人的广告并保护您的隐私。
          </p>
          <div className="mt-12 flex flex-col justify-center gap-x-6 gap-y-4 sm:flex-row">
            <Button href="https://portal.arcline.io">立即开始</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
        {/* <FeatureSection /> */}
        <CaseStudies />
        <BentoSection />
        <Pricing />
      </div>
      <Testimonials />
      <Footer />
    </div>
  )
}
