import type { Metadata } from 'next'
import Layout from '@/components/layout/Layout'
import { ShieldCheck, Eye, FileText, Users, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | Special Pumps - Industrial Pump Solutions',
  description: 'Privacy Policy for Special Pumps. Learn how we protect your data and maintain confidentiality in our industrial pump services.',
  keywords: ['privacy policy', 'data protection', 'Special Pumps', 'industrial pumps', 'GDPR compliance'],
  robots: 'index, follow',
  openGraph: {
    title: 'Privacy Policy | Special Pumps',
    description: 'Privacy Policy for Special Pumps industrial pump solutions',
    url: 'https://special-pumps.vercel.app/privacy-policy',
    siteName: 'Special Pumps',
    type: 'website',
  },
}

const sections = [
  { icon: Eye, title: 'Information We Collect', id: 'information-collection' },
  { icon: FileText, title: 'How We Use Your Information', id: 'information-usage' },
  { icon: ShieldCheck, title: 'Data Protection & Security', id: 'data-protection' },
  { icon: Users, title: 'Third Party Services', id: 'third-parties' },
]

export default function PrivacyPolicy() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Privacy Policy | Special Pumps',
    url: 'https://special-pumps.vercel.app/privacy-policy',
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'Special Pumps',
      url: 'https://special-pumps.vercel.app',
    },
    dateModified: new Date().toISOString(),
    description:
      'Privacy Policy for Special Pumps. Learn how we protect your data and maintain confidentiality in our industrial pump services.',
  }

  return (
    <Layout headerStyle={4} footerStyle={4}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-neutral-50">
        <section className="mx-auto max-w-6xl px-4 py-12">
          <header className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900">Privacy Policy</h1>
            <p className="mt-2 text-sm text-neutral-500">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="mt-4 text-neutral-600">
              At Special Pumps, we are committed to protecting your privacy and maintaining the confidentiality of your industrial project information.
            </p>
          </header>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <section.icon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-900">{section.title}</span>
                </a>
              ))}
            </div>
          </div>

          <article className="space-y-8">
            {/* Company Information */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900 flex items-center">
                <ShieldCheck className="h-6 w-6 text-blue-600 mr-3" />
                Who we are
              </h2>
              <div className="mt-4 bg-slate-50 rounded-lg p-6 border-l-4 border-blue-600">
                <p className="text-neutral-700 mb-4">
                  <strong>Special Pumps</strong> is a manufacturer based in Coimbatore, delivering industrial pumps for process, 
                  chemical, hot oil, slurry, filtration, and dewatering applications. We specialize in custom pump solutions for 
                  diverse industrial requirements across manufacturing, petrochemical, and processing industries.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-600">
                  <div><strong>Location:</strong> Coimbatore, Tamil Nadu, India</div>
                  <div><strong>Industry:</strong> Industrial Pump Manufacturing</div>
                  <div><strong>Website:</strong> special-pumps.vercel.app</div>
                  <div><strong>Contact:</strong> Available on request</div>
                </div>
              </div>
            </section>

            {/* Information Collection */}
            <section id="information-collection">
              <h2 className="text-xl font-semibold text-neutral-900 flex items-center">
                <Eye className="h-6 w-6 text-blue-600 mr-3" />
                Data we collect
              </h2>
              <ul className="mt-2 list-disc pl-5 text-neutral-700 space-y-1">
                <li>
                  <span className="font-medium">Technical specifications:</span> Fluid type, viscosity, temperature, corrosiveness, flow rate, head requirements, NPSH values, and operating conditions.
                </li>
                <li>
                  <span className="font-medium">Project details:</span> Application requirements, installation conditions, site specifications, timeline, and procurement needs.
                </li>
                <li>
                  <span className="font-medium">Contact information:</span> Name, designation, company details, email, phone number, business address, and industry type.
                </li>
                <li>
                  <span className="font-medium">Quote requests:</span> Technical drawings, specifications, quantity requirements, and delivery preferences.
                </li>
                <li>
                  <span className="font-medium">Website usage:</span> IP address, browser type, device information, pages viewed, time spent, and referral sources (via analytics/cookies).
                </li>
                <li>
                  <span className="font-medium">Support interactions:</span> Service requests, maintenance schedules, technical queries, and feedback.
                </li>
              </ul>
            </section>

            {/* Information Usage */}
            <section id="information-usage">
              <h2 className="text-xl font-semibold text-neutral-900 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                How we use data
              </h2>
              <ul className="mt-2 list-disc pl-5 text-neutral-700 space-y-1">
                <li>Provide technical consultation and accurate pump selection recommendations.</li>
                <li>Generate detailed quotes, proposals, and technical documentation.</li>
                <li>Coordinate installation, commissioning, and maintenance services.</li>
                <li>Offer ongoing technical support and troubleshooting assistance.</li>
                <li>Improve our product offerings and service quality through project analysis.</li>
                <li>Communicate important updates, service notifications, and industry information.</li>
                <li>Comply with manufacturing, safety, and regulatory requirements.</li>
                <li>Maintain business records for warranty, service, and documentation purposes.</li>
                <li>Send relevant product updates or technical information (only with consent; opt-out available).</li>
              </ul>
            </section>

            {/* Legal Bases */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Legal bases</h2>
              <p className="mt-2 text-neutral-700">
                We process data to fulfill contractual obligations (pump supply and services), with your consent (marketing, 
                technical newsletters where required), to comply with legal obligations (quality standards, safety regulations, 
                tax requirements), and for legitimate business interests (prevent fraud, improve technical solutions, maintain 
                customer relationships).
              </p>
            </section>

            {/* Third Party Services */}
            <section id="third-parties">
              <h2 className="text-xl font-semibold text-neutral-900 flex items-center">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                Sharing & transfers
              </h2>
              <ul className="mt-2 list-disc pl-5 text-neutral-700 space-y-1">
                <li>
                  <span className="font-medium">Service partners:</span> Installation contractors, maintenance service providers, 
                  and technical specialists—bound by confidentiality agreements.
                </li>
                <li>
                  <span className="font-medium">Technology vendors:</span> Cloud hosting, analytics platforms, email services, 
                  and technical documentation systems—under strict data processing agreements.
                </li>
                <li>
                  <span className="font-medium">Manufacturing partners:</span> Component suppliers and testing facilities receive 
                  only specifications necessary for pump production and quality assurance.
                </li>
                <li>
                  <span className="font-medium">Legal compliance:</span> Regulatory authorities, quality certification bodies, 
                  and legal requirements as mandated by industrial standards.
                </li>
                <li>
                  <span className="font-medium">Business transitions:</span> As part of a merger, acquisition, or asset transfer 
                  with appropriate data protection safeguards.
                </li>
              </ul>
            </section>

            {/* Data Security */}
            <section id="data-protection">
              <h2 className="text-xl font-semibold text-neutral-900">Data security</h2>
              <div className="mt-4 bg-slate-900 rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Our Commitment to Security</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-3">Technical Measures</h4>
                    <ul className="space-y-1 text-slate-300 list-disc pl-4">
                      <li>Encrypted data transmission and storage</li>
                      <li>Regular security audits and system updates</li>
                      <li>Multi-factor authentication and access controls</li>
                      <li>Secure server infrastructure and firewalls</li>
                      <li>Regular backups and disaster recovery procedures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-200 mb-3">Organizational Measures</h4>
                    <ul className="space-y-1 text-slate-300 list-disc pl-4">
                      <li>Staff training on data protection protocols</li>
                      <li>Confidentiality agreements with all personnel</li>
                      <li>Limited access on need-to-know basis</li>
                      <li>Regular privacy impact assessments</li>
                      <li>Incident response and breach notification procedures</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-slate-300 text-sm">
                  While no method is 100% secure, we implement industry-standard practices and continuously monitor 
                  our systems to protect your technical and business information.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Data retention</h2>
              <p className="mt-2 text-neutral-700">
                Technical specifications and project records are retained for up to 7 years for warranty, service, and 
                regulatory compliance purposes. Support and maintenance logs: up to 5 years. Marketing communications: 
                until you unsubscribe or for 3 years after last interaction. Customer relationship data: maintained during 
                active business relationship plus 2 years. We then securely delete or anonymize data as appropriate.
              </p>
            </section>

            {/* Cookies & Tracking */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Cookies & tracking</h2>
              <p className="mt-2 text-neutral-700">
                We use essential cookies for website functionality and technical consultations, and (with consent) analytics 
                cookies to understand user preferences and improve our technical resources. You can manage cookies via browser 
                settings and our cookie preferences. We do not use tracking for advertising purposes.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Your rights</h2>
              <div className="mt-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">Data Subject Rights</h3>
                    <ul className="space-y-1 text-blue-800 text-sm list-disc pl-4">
                      <li>Access and review your personal and technical data</li>
                      <li>Correct or update your information and specifications</li>
                      <li>Request deletion of your data (subject to legal retention requirements)</li>
                      <li>Object to or restrict certain data processing activities</li>
                      <li>Withdraw consent for marketing communications</li>
                      <li>Request a copy of your data in portable format</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-3">How to Exercise Rights</h3>
                    <p className="text-blue-800 text-sm mb-3">
                      Contact us using the details below with your request. We will respond within 30 days and may 
                      need to verify your identity for security purposes. Note that some technical data may need to 
                      be retained for safety and regulatory compliance.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Children */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Professional services</h2>
              <p className="mt-2 text-neutral-700">
                Our services are directed to industrial professionals and businesses. We do not knowingly collect 
                information from individuals under 18. If you believe a minor provided data, contact us to remove it.
              </p>
            </section>

            {/* Third-party Links */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Third‑party links</h2>
              <p className="mt-2 text-neutral-700">
                Our website may link to technical resources, industry standards, or partner websites. Their privacy 
                practices are their own; please review their policies before sharing information.
              </p>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900">International transfers</h2>
              <p className="mt-2 text-neutral-700">
                If data is processed outside India for technical consulting or support purposes, we use appropriate 
                safeguards such as standard contractual clauses and vendor security assessments to protect your information.
              </p>
            </section>

            {/* Policy Changes */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Changes to this policy</h2>
              <p className="mt-2 text-neutral-700">
                We may update this policy to reflect changes in our services or legal requirements. The "Last updated" 
                date reflects the latest revision. Significant changes will be communicated to active customers.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Contact us</h2>
              <div className="mt-4 bg-slate-100 rounded-lg p-6 border-2 border-slate-200">
                <div className="text-center">
                  <p className="text-neutral-700 mb-4">For privacy-related questions or to exercise your rights, please contact us:</p>
                  <div className="bg-white rounded-lg p-4 inline-block shadow-sm">
                    <div className="space-y-1 text-sm text-neutral-600">
                      <p><strong className="text-neutral-900">Special Pumps</strong></p>
                      <p>Industrial Pump Solutions</p>
                      <p>Coimbatore, Tamil Nadu, India</p>
                      <p>Email: <a href="mailto:privacy@special-pumps.com" className="text-blue-600 hover:underline">privacy@special-pumps.com</a></p>
                      <p>Phone: Available on request</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section>
              <h2 className="text-xl font-semibold text-neutral-900">Frequently Asked Questions</h2>
              
              <details className="mt-4 rounded-lg border bg-white p-4">
                <summary className="cursor-pointer font-medium">Do you sell technical data to third parties?</summary>
                <p className="mt-2 text-neutral-700">
                  No. We do not sell personal data or technical specifications. Your pump requirements and project 
                  details remain confidential and are used solely for providing our services.
                </p>
              </details>

              <details className="mt-2 rounded-lg border bg-white p-4">
                <summary className="cursor-pointer font-medium">How do I request deletion of my project data?</summary>
                <p className="mt-2 text-neutral-700">
                  Contact us at privacy@special-pumps.com with your request. Note that some technical records may 
                  need to be retained for warranty, safety, or regulatory compliance purposes even after account deletion.
                </p>
              </details>

              <details className="mt-2 rounded-lg border bg-white p-4">
                <summary className="cursor-pointer font-medium">Is my technical information secure?</summary>
                <p className="mt-2 text-neutral-700">
                  Yes. We use industry-standard encryption and security measures. Technical specifications are treated 
                  as confidential business information and protected accordingly. Access is limited to authorized personnel only.
                </p>
              </details>

              <details className="mt-2 rounded-lg border bg-white p-4">
                <summary className="cursor-pointer font-medium">Do you share pump specifications with competitors?</summary>
                <p className="mt-2 text-neutral-700">
                  Absolutely not. Your technical requirements and project specifications are strictly confidential. 
                  We maintain competitive confidentiality and do not share customer information with other clients or competitors.
                </p>
              </details>

              <details className="mt-2 rounded-lg border bg-white p-4">
                <summary className="cursor-pointer font-medium">How long do you keep my technical consultation data?</summary>
                <p className="mt-2 text-neutral-700">
                  Technical specifications are retained for up to 7 years for warranty and service purposes. 
                  General inquiry data is kept for 3 years. You can request deletion of non-essential data at any time.
                </p>
              </details>
            </section>
          </article>
        </section>
      </main>
    </Layout>
  )
}
