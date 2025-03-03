import { Button } from '@/components/Button'

import { Container } from '@/components/Container'
import { Gradient } from '@/components/Gradient'
import { Heading, Lead, Subheading } from '@/components/Text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Companies all over the world have closed millions of deals with Radiant. Sign up today and start selling smarter.',
}

const tiers = [
  {
    name: 'Standard' as const,
    slug: 'Standard',
    description: '开始自由互联网所需的一切',
    priceMonthly: 9,
    href: 'https://portal.arcline.io',
    highlights: [
      { description: '套餐有效期内共可用 64 GB 云流量' },
      { description: '稳定解锁流媒体平台及人工智能应用' },
      { description: '支持主流代理应用，最高 3 设备在线' },
      { description: '限速 512M 峰值带宽，高稳定性保障' },
      { description: '无任何退款政策，禁止任何违规业务', disabled: true },
    ],
  },
  {
    name: 'Enhanced' as const,
    slug: 'Enhanced',
    description: '为您的流媒体服务提供所有云流量',
    priceMonthly: 15,
    href: 'https://portal.arcline.io',
    highlights: [
      { description: '套餐有效期内共可用 128 GB 云流量' },
      { description: '稳定解锁流媒体平台及人工智能应用' },
      { description: '支持主流代理应用，最高 5 设备在线' },
      { description: '限速 1024M 峰值带宽，高稳定性保障' },
      { description: '无任何退款政策，禁止任何违规业务', disabled: true },
    ],
  },
  {
    name: 'Premium' as const,
    slug: 'Premium',
    description: '增加灵活性，无需考虑任何限制',
    priceMonthly: 25,
    href: 'https://portal.arcline.io',
    highlights: [
      { description: '套餐有效期内共可用 256 GB 云流量' },
      { description: '稳定解锁流媒体平台及人工智能应用' },
      { description: '支持主流代理应用，最高 8 设备在线' },
      { description: '限速 2048M 峰值带宽，高稳定性保障' },
      { description: '无任何退款政策，禁止任何违规业务', disabled: true },
    ],
  },
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">一个简单的订阅，比较套餐和定价</Heading>
      <Lead className="mt-6 max-w-3xl">安全。隐私。自由。对于每个人。</Lead>
    </Container>
  )
}

function PricingCards() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, tierIndex) => (
            <PricingCard key={tierIndex} tier={tier} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function PricingCard({ tier }: { tier: (typeof tiers)[number] }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Subheading>{tier.name}</Subheading>
          <p className="mt-2 text-sm/6 text-gray-950/75">{tier.description}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="text-5xl font-medium text-gray-950">
              ¥{tier.priceMonthly}
            </div>
            <div className="text-sm/5 text-gray-950/75">
              <p>CNY</p>
              <p>每月</p>
            </div>
          </div>
          <div className="mt-8">
            <Button href={tier.href}>立即开始</Button>
          </div>
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">套餐包括：</h3>
            <ul className="mt-3 space-y-3">
              {tier.highlights.map((props, featureIndex) => (
                <FeatureItem key={featureIndex} {...props} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 text-gray-950/75 data-[disabled]:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <PlusIcon className="size-[0.9375rem] shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

function PlusIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 15 15" aria-hidden="true" {...props}>
      <path clipRule="evenodd" d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z" />
    </svg>
  )
}

export function Pricing() {
  return (
    <main className="overflow-hidden">
      <Header />
      <PricingCards />
    </main>
  )
}
