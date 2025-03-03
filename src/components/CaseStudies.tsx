import { Container } from '@/components/Container'
import { Heading, Subheading } from '@/components/Text'

export function CaseStudies() {
  let caseStudies = [
    {
      key: '1',
      title: '无日志政策',
      description:
        '连接 Arcline Cloud 后，您都在做什么？无人知晓。我们的 VPN 不会监控、跟踪或存储您的网上活动。您所做的一切仅限于您自己知道。',
    },
    {
      key: '2',
      title: '高科技',
      description:
        '尽管 Arcline Cloud 看上去非常简单，但内部功能却十分强大。我们只提供业界领先的连接协议，让您的连接速度快而不会牺牲安全性。',
    },
    {
      key: '3',
      title: '多设备支持',
      description:
        '在设法平衡您的家庭和工作生活吗？您可以带到任何地方的在线安全保护。您可以使用一个 Arcline Cloud 账号连接所有设备，无论您身在何处。',
    },
    {
      key: '4',
      title: '加强您的安全守护',
      description:
        'Arcline Cloud 的服务器遍布全世界 30 多个国家/地区，其中大部分服务器均拥有 10 Gbps 端口，您随时都能在附近找到并不拥挤的服务器。',
    },
    {
      key: '5',
      title: '绕过各种强制性审核',
      description:
        '有些政府会严格监管互联网的使用情况。VPN 可以帮助您绕过这些限制，畅享万维网所提供的无穷世界。',
    },
    {
      key: '6',
      title: '加密链接',
      description:
        '当您连接到 VPN 时，将生成一个加密密钥，该密钥用于对数据进行编码和解码。除了您之外，没有人拥有该密钥。',
    },
  ]

  return (
    <>
      <Container className="mt-16">
        <Subheading>Arcline Cloud</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl">
          令人期待的优势
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.key} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <p className="font-display mt-6 text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </>
  )
}
