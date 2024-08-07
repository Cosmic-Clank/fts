import Link from 'next/link'
import IntegrationAnimation from './IntegrationAnimation'

const Integration = () => {
  return (
    <section className="bg-white pb-150  dark:bg-dark-300 max-md:pb-20">
      <div className="container relative z-10">
        <div className="mx-auto max-w-[620px] text-center">
          {/* <p className="section-tagline">Top Integration</p> */}

          <h2 className="my-8">Technologies We Use</h2>
          <p className="mb-10">
            At Faieq Technology Solutions, we leverage the latest technologies to provide cutting-edge web and AI
            solutions. Our tech stack is designed to ensure scalability, performance, and innovation in every project.
          </p>

          <Link href="/contact" className="btn-outline">
            Start Your Journey
          </Link>
        </div>
        <IntegrationAnimation />
      </div>
    </section>
  )
}

export default Integration
