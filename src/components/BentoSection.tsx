'use client'

import { BentoCard } from '@/components/BentoCard'
import { Container } from '@/components/Container'
import { Heading, Subheading } from '@/components/Text'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Mark } from './Logo'

function Marker({
  src,
  top,
  offset,
  delay,
}: {
  src: string
  top: number
  offset: number
  delay: number
}) {
  return (
    <motion.div
      variants={{
        idle: { scale: 0, opacity: 0, rotateX: 0, rotate: 0, y: 0 },
        active: { y: [-20, 0, 4, 0], scale: [0.75, 1], opacity: [0, 1] },
      }}
      transition={{ duration: 0.25, delay, ease: 'easeOut' }}
      style={{ '--offset': `${offset}px`, top } as React.CSSProperties}
      className="absolute left-[calc(50%+var(--offset))] size-[38px] drop-shadow-[0_3px_1px_rgba(0,0,0,.15)]"
    >
      <svg fill="none" viewBox="0 0 38 38" className="absolute size-full">
        <path
          d="M29.607 5.193c5.858 5.857 5.858 15.355 0 21.213l-9.9 9.9-.707.706-.708-.708-9.899-9.898c-5.857-5.858-5.857-15.356 0-21.213 5.858-5.858 15.356-5.858 21.214 0Z"
          className="fill-black/5"
        />
        <path
          d="m28.9 25.698-9.9 9.9-9.9-9.9C3.634 20.232 3.634 11.367 9.1 5.9 14.569.432 23.433.432 28.9 5.9c5.467 5.468 5.467 14.332 0 19.8Z"
          className="fill-white"
        />
      </svg>
      <img
        alt=""
        src={src}
        className="absolute top-[4px] left-[7px] size-6 rounded-full"
      />
    </motion.div>
  )
}

export function Map() {
  return (
    <div aria-hidden="true" className="relative size-full">
      <div className="absolute inset-0 bg-[url(/map.png)] bg-[length:530px_430px] bg-[center_-75px] bg-no-repeat [mask-image:linear-gradient(to_bottom,black_50%,transparent)]" />
      <div className="absolute inset-0">
        <Marker src="/map/1.jpg" top={96} offset={-128} delay={0.15} />
        <Marker src="/map/2.jpg" top={160} offset={-16} delay={0.4} />
        <Marker src="/map/3.jpg" top={144} offset={96} delay={0.3} />
        <Marker src="/map/4.jpg" top={192} offset={64} delay={0.6} />
        <Marker src="/map/5.jpg" top={224} offset={-32} delay={0.8} />
      </div>
    </div>
  )
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative">
      <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-white/15 from-[2px] to-[2px] bg-[length:12px_100%]" />
      <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-white/5 from-[2px] to-[2px] bg-[length:12px_100%] group-last:hidden" />
      {children}
    </div>
  )
}

function Info({
  label,
  src,
  className,
}: {
  label: string
  src?: string
  className: string
}) {
  return (
    <div
      className={clsx(
        className,
        src && 'grid grid-cols-[1rem,1fr] gap-2',
        'absolute top-2 items-center px-3 py-1 whitespace-nowrap',
        'rounded-full bg-gradient-to-t from-gray-800 from-50% to-gray-700 ring-1 ring-white/10 ring-inset',
        '[--move-x-from:-100%] [--move-x-to:calc(100%+100cqw)] [animation-iteration-count:infinite] [animation-name:move-x] [animation-play-state:paused] [animation-timing-function:linear] group-hover:[animation-play-state:running]',
      )}
    >
      {src && <img alt="" src={src} className="size-4" />}

      <span className="text-sm/6 font-medium text-white">{label}</span>
    </div>
  )
}

export function LogoTimeline() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <div className="absolute inset-0 top-8 z-10 flex items-center justify-center">
        <div
          className="absolute inset-0 backdrop-blur-md"
          style={{
            maskImage: `url('data:image/svg+xml,<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="96" height="96" rx="12" fill="black"/></svg>')`,
            maskPosition: 'center',
            maskRepeat: 'no-repeat',
          }}
        />
        <div className="relative flex size-24 items-center justify-center rounded-xl bg-gradient-to-t from-white/5 to-white/25 shadow ring-1 ring-white/10 outline outline-offset-[-5px] outline-white/5 ring-inset">
          <Mark className="h-9 fill-white" />
        </div>
      </div>
      <div className="[container-type:inline-size] absolute inset-0 grid grid-cols-1 pt-8">
        <Row>
          <Info
            label="Akari Networks LLC"
            className="[animation-delay:-26s] [animation-duration:30s]"
          />
          <Info
            label="Eons Data Communications Limited"
            className="[animation-delay:-8s] [animation-duration:30s]"
          />
        </Row>
        <Row>
          <Info
            label="Cogent Communications"
            className="[animation-delay:-40s] [animation-duration:40s]"
          />
          <Info
            label="PCCW Global, Inc."
            className="[animation-delay:-20s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          <Info
            label="JINX CO., LIMITED"
            className="[animation-delay:-10s] [animation-duration:40s]"
          />
          <Info
            label="Datacamp Limited"
            className="[animation-delay:-32s] [animation-duration:40s]"
          />
        </Row>
        <Row>
          <Info
            label="Misaka Network, Inc."
            className="[animation-delay:-45s] [animation-duration:45s]"
          />
          <Info
            label="China Telecom Backbone"
            className="[animation-delay:-23s] [animation-duration:45s]"
          />
        </Row>
        <Row>
          <Info
            label="China Unicom Backbone"
            className="[animation-delay:-55s] [animation-duration:60s]"
          />
          <Info
            label="China Mobile Backbone"
            className="[animation-delay:-20s] [animation-duration:60s]"
          />
        </Row>
        <Row>
          <Info
            label="TATA Communications (America) Inc"
            className="[animation-delay:-9s] [animation-duration:40s]"
          />
          <Info
            label="AT&T Services, Inc."
            className="[animation-delay:-28s] [animation-duration:40s]"
          />
        </Row>
      </div>
    </div>
  )
}

function Circle({
  size,
  delay,
  opacity,
}: {
  size: number
  delay: number
  opacity: string
}) {
  return (
    <motion.div
      variants={{
        idle: { width: `${size}px`, height: `${size}px` },
        active: {
          width: [`${size}px`, `${size + 10}px`, `${size}px`],
          height: [`${size}px`, `${size + 10}px`, `${size}px`],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: 'easeInOut',
            delay,
          },
        },
      }}
      style={{ '--opacity': opacity } as React.CSSProperties}
      className={clsx(
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full',
        'bg-[radial-gradient(circle,transparent_25%,color-mix(in_srgb,_theme(colors.blue.500)_var(--opacity),transparent)_100%)]',
        'ring-1 ring-blue-500/[8%] ring-inset',
      )}
    />
  )
}

function Circles() {
  return (
    <div className="absolute inset-0">
      <Circle size={528} opacity="3%" delay={0.45} />
      <Circle size={400} opacity="5%" delay={0.3} />
      <Circle size={272} opacity="5%" delay={0.15} />
      <Circle size={144} opacity="10%" delay={0} />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-35%" />
    </div>
  )
}

function MainLogo() {
  return (
    <div className="absolute top-32 left-44 flex size-16 items-center justify-center rounded-full bg-white shadow ring-1 ring-black/5">
      <Mark className="h-9 fill-black" />
    </div>
  )
}

function Logo({
  src,
  left,
  top,
  hover,
}: {
  src: string
  left: number
  top: number
  hover: { x: number; y: number; rotate: number; delay: number }
}) {
  return (
    <motion.img
      variants={{
        idle: { x: 0, y: 0, rotate: 0 },
        active: {
          x: [0, hover.x, 0],
          y: [0, hover.y, 0],
          rotate: [0, hover.rotate, 0],
          transition: {
            duration: 0.75,
            repeat: Infinity,
            repeatDelay: 1.25,
            ease: 'easeInOut',
            delay: hover.delay,
          },
        },
      }}
      alt=""
      src={src}
      style={{ left, top } as React.CSSProperties}
      className="absolute size-16 rounded-full bg-white shadow ring-1 ring-black/5"
    />
  )
}

export function LogoCluster() {
  return (
    <div aria-hidden="true" className="relative h-full overflow-hidden">
      <Circles />
      <div className="absolute left-1/2 h-full w-[26rem] -translate-x-1/2">
        <MainLogo />
        <Logo
          src="/logo-cluster/surge.png"
          left={320}
          top={144}
          hover={{ x: 6, y: 1, rotate: 5, delay: 0.38 }}
        />
        <Logo
          src="/logo-cluster/loon.png"
          left={285}
          top={20}
          hover={{ x: 4, y: -5, rotate: 6, delay: 0.3 }}
        />
        <Logo
          src="/logo-cluster/stash.png"
          left={255}
          top={250}
          hover={{ x: 3, y: 5, rotate: 3, delay: 0.2 }}
        />
        <Logo
          src="/logo-cluster/shadowsocket.png"
          left={144}
          top={40}
          hover={{ x: -2, y: -5, rotate: -6, delay: 0.15 }}
        />
        <Logo
          src="/logo-cluster/mihomo-party.png"
          left={36}
          top={96}
          hover={{ x: -4, y: -5, rotate: -6, delay: 0.35 }}
        />
        <Logo
          src="/logo-cluster/clash-rev.png"
          left={96}
          top={216}
          hover={{ x: -3, y: 5, rotate: 3, delay: 0.15 }}
        />
      </div>
    </div>
  )
}

export function BentoSection() {
  return (
    <div className="mx-2 mt-24 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Arcline Cloud</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          隐私的最佳代理应用
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6">
          <BentoCard
            dark
            eyebrow="Network"
            title="众多的网络"
            description="我们与全球多家网络合作，为您提供最先进的网络连接服务。"
            graphic={<LogoTimeline />}
            className="z-10 !overflow-visible lg:col-span-2 lg:rounded-l-4xl"
          />
          <BentoCard
            dark
            eyebrow="Application"
            title="可用的代理应用"
            description="无论您使用何种设备，都可以选择 Arcline Cloud 的代理应用程序。"
            graphic={<LogoCluster />}
            className="lg:col-span-2"
          />
          <BentoCard
            dark
            eyebrow="Server"
            title="智能服务器"
            description="从 Arcline Cloud 的上百台超快速服务器中进行选择,该服务器覆盖30多个国家/地区。"
            graphic={<Map />}
            className="lg:col-span-2 lg:rounded-r-4xl"
          />
        </div>
      </Container>
    </div>
  )
}
