import type { Metadata } from 'next'
import { Callout, Item, LEGAL as POLICY, LegalPage, List, type LegalSection } from '@/components/legal-page'

const LAST_UPDATED = '3 August 2026'

export const privacyMetadata: Metadata = {
  title: `Privacy Policy — ${POLICY.appName} Treasure Hunt App`,
  description: `How ${POLICY.appName} collects, uses, shares and protects your data — location, camera, photos, microphone and gameplay information.`,
  openGraph: {
    title: `Privacy Policy — ${POLICY.appName}`,
    description: `Learn what data the ${POLICY.appName} treasure-hunt app collects, why, and the rights you have over it.`,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Privacy Policy — ${POLICY.appName}`,
    description: `Learn what data the ${POLICY.appName} treasure-hunt app collects, why, and the rights you have over it.`,
  },
}

const sections: LegalSection[] = [
  {
    id: 'about',
    nav: `About ${POLICY.appName}`,
    title: `About ${POLICY.appName} (The Project & Business)`,
    body: (
      <>
        <p>
          {POLICY.appName} is a location-based treasure-hunt gaming application (&quot;{POLICY.appName}&quot;, the
          &quot;App&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operated by {POLICY.companyName}, a
          business registered in {POLICY.companyCountry}. The App invites players to explore real-world locations
          across Morocco, discover hidden treasures, scan QR codes, complete challenges, and track their progress on an
          interactive map, celebrating Morocco&apos;s rich culture and history.
        </p>
        <p>
          Our business provides this interactive entertainment experience and manages player accounts, teams, and
          gameplay content. This Privacy Policy explains what personal information we collect, why we collect it, how
          we use and share it, and the rights you have. By creating an account or using the App, you agree to the
          practices described in this Privacy Policy.
        </p>
        <Callout>If you do not agree with this policy, please do not use the App.</Callout>
      </>
    ),
  },
  {
    id: 'collect',
    nav: 'Information We Collect',
    body: (
      <>
        <h3 className="text-base font-semibold text-foreground">a) Information you provide directly</h3>
        <List>
          <Item label="Account information:">
            your name, email address, phone number, and password (passwords are stored in encrypted/hashed form).
          </Item>
          <Item label="Profile & team data:">
            player ID, chosen avatar, and team information you create or join.
          </Item>
          <Item label="Communications:">any messages you send us for support or inquiries.</Item>
        </List>
        <h3 className="pt-2 text-base font-semibold text-foreground">b) Information collected automatically</h3>
        <List>
          <Item label="Location data:">
            with your permission, we collect precise (GPS) and approximate location — including while the App is in
            use — to track your progress on the treasure-hunt map, calculate your distance from hidden treasures, and
            enable core gameplay. Gameplay is not possible without location access.
          </Item>
          <Item label="Camera:">
            with your permission, we access your camera to scan QR codes and to capture photos during the treasure
            hunt.
          </Item>
          <Item label="Photo library:">
            with your permission, we access your photo library so you can upload QR-code images and save captured
            photos.
          </Item>
          <Item label="Microphone:">
            with your permission, we access the microphone to record video during certain in-game activities.
          </Item>
          <Item label="Device & usage information:">
            device model, operating system version, unique device identifiers, app version, and diagnostic/usage data
            used to operate and improve the App.
          </Item>
          <Item label="Gameplay data:">QR codes scanned, activation codes, games joined, scores, and progress.</Item>
        </List>
      </>
    ),
  },
  {
    id: 'use',
    nav: 'How We Use Your Information',
    body: (
      <>
        <p>We use the information we collect to:</p>
        <List>
          <Item>
            Create and manage your account and verify your identity (including email one-time-password verification);
          </Item>
          <Item>
            Provide core gameplay — maps, location tracking, treasure discovery, QR scanning, and team features;
          </Item>
          <Item>Send transactional communications such as verification codes and account notifications;</Item>
          <Item>Maintain security, prevent fraud and abuse, and enforce our terms;</Item>
          <Item>Analyze, troubleshoot, and improve the App&apos;s performance and features;</Item>
          <Item>Comply with legal obligations.</Item>
        </List>
      </>
    ),
  },
  {
    id: 'legal-bases',
    nav: 'Legal Bases for Processing',
    body: (
      <p>
        Where applicable (e.g., under GDPR), we process personal data on the basis of: your consent (location, camera,
        photos, microphone), performance of a contract (providing the game and account), legitimate interests
        (security, improvement of the service), and legal obligations.
      </p>
    ),
  },
  {
    id: 'share',
    nav: 'How We Share Your Information',
    body: (
      <>
        <p>We do not sell your personal information. We share data only with:</p>
        <List>
          <Item label="Service providers">
            who help us operate the App, including:
            <ul className="mt-2 space-y-1.5 pl-4">
              <li>Mapbox — map and location display services;</li>
              <li>SendGrid (Twilio) — sending verification and transactional emails;</li>
              <li>Cloudinary — image storage and delivery;</li>
              <li>Cloud hosting provider (e.g., Render) — hosting our servers and databases;</li>
              <li>QR-decoding service — decoding QR-code images you upload from your gallery.</li>
            </ul>
          </Item>
          <Item label="Legal and safety disclosures">
            — when required by law, regulation, legal process, or to protect the rights, safety, and security of our
            users and business.
          </Item>
          <Item label="Business transfers">
            — in connection with a merger, acquisition, or sale of assets, subject to this Privacy Policy.
          </Item>
        </List>
        <p>These providers process data on our behalf and are bound to protect it.</p>
      </>
    ),
  },
  {
    id: 'retention',
    nav: 'Data Retention',
    body: (
      <p>
        We retain your personal information for as long as your account is active or as needed to provide the service,
        comply with legal obligations, resolve disputes, and enforce our agreements. When no longer required, we
        delete or anonymize it.
      </p>
    ),
  },
  {
    id: 'security',
    nav: 'Data Security',
    body: (
      <p>
        We use reasonable technical and organizational measures — including encryption of passwords and secure
        (HTTPS/TLS) transmission — to protect your information. However, no method of transmission or storage is
        completely secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: 'rights',
    nav: 'Your Rights and Choices',
    body: (
      <>
        <p>Depending on your location, you may have the right to:</p>
        <List>
          <Item>Access, correct, or update your personal information;</Item>
          <Item>Request deletion of your account and personal data;</Item>
          <Item>
            Withdraw consent for permissions (location, camera, photos, microphone) at any time via your device
            settings;
          </Item>
          <Item>Object to or restrict certain processing;</Item>
          <Item>Request a copy of your data (data portability).</Item>
        </List>
        <p>
          To exercise these rights, contact us at{' '}
          <a className="text-primary underline" href={`mailto:${POLICY.email}`}>
            {POLICY.email}
          </a>
          . You may also disable permissions at any time in your device&apos;s Settings; note that disabling location
          will prevent core gameplay.
        </p>
      </>
    ),
  },
  {
    id: 'children',
    nav: "Children's Privacy",
    body: (
      <p>
        {POLICY.appName} is not directed to children under {POLICY.minimumAge}. We do not knowingly collect personal
        information from children below this age. If you believe a child has provided us personal data, contact us and
        we will delete it.
      </p>
    ),
  },
  {
    id: 'transfers',
    nav: 'International Data Transfers',
    body: (
      <p>
        Your information may be processed and stored on servers located outside your country of residence. Where we
        transfer data internationally, we take steps to ensure it receives an adequate level of protection.
      </p>
    ),
  },
  {
    id: 'permissions',
    nav: 'App Permissions Summary',
    title: 'App Permissions Summary (iOS & Android)',
    body: (
      <>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted">
              <tr>
                <th className="px-4 py-3 font-semibold text-foreground">Permission</th>
                <th className="px-4 py-3 font-semibold text-foreground">Why we use it</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Location (When In Use)', 'Map tracking, treasure discovery, distance calculation'],
                ['Camera', 'Scan QR codes, capture photos'],
                ['Photo Library', 'Upload QR images, save photos'],
                ['Microphone', 'Record video during gameplay'],
              ].map(([permission, reason]) => (
                <tr key={permission} className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-foreground">{permission}</td>
                  <td className="px-4 py-3">{reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>You can grant or revoke each permission at any time in your device settings.</p>
      </>
    ),
  },
  {
    id: 'third-party',
    nav: 'Third-Party Services',
    body: (
      <p>
        The App relies on third-party services listed in Section 5, each governed by its own privacy policy. We
        encourage you to review their policies. We are not responsible for the privacy practices of third parties.
      </p>
    ),
  },
  {
    id: 'changes',
    nav: 'Changes to This Policy',
    title: 'Changes to This Privacy Policy',
    body: (
      <p>
        We may update this Privacy Policy from time to time. We will post the updated version with a new &quot;Last
        Updated&quot; date and, where appropriate, notify you within the App. Your continued use after changes take
        effect constitutes acceptance.
      </p>
    ),
  },
  {
    id: 'contact',
    nav: 'Contact Us',
    body: (
      <>
        <p>Questions about this policy or your data? Reach the {POLICY.appName} privacy team:</p>
        <List>
          <Item label="Email:">
            <a className="text-primary underline" href={`mailto:${POLICY.email}`}>
              {POLICY.email}
            </a>
          </Item>
          <Item label="Phone:">
            <a className="text-primary underline" href={`tel:${POLICY.phoneHref}`}>
              {POLICY.phone}
            </a>
          </Item>
        </List>
      </>
    ),
  },
]

export function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your treasure hunt runs on real-world data. Here is exactly what we collect, why we need it, and how you stay in control."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  )
}
