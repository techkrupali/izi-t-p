import type { Metadata } from 'next'
import { Callout, Item, LEGAL, LegalPage, List, TextLink, type LegalSection } from '@/components/legal-page'

const LAST_UPDATED = '3 November 2026'

export const termsMetadata: Metadata = {
  title: 'Terms and Conditions — IZI Morocco Treasure Hunt App',
  description:
    'The terms for using the IZI Morocco app and playing its outdoor treasure-hunt Adventures — accounts, activation codes, teams, safety and your rights.',
  openGraph: {
    title: 'Terms and Conditions — IZI Morocco',
    description: 'The rules for using the IZI Morocco treasure-hunt app and playing its Adventures.',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions — IZI Morocco',
    description: 'The rules for using the IZI Morocco treasure-hunt app and playing its Adventures.',
  },
}

const supportLink = <TextLink href={`mailto:${LEGAL.supportEmail}`}>{LEGAL.supportEmail}</TextLink>

const sections: LegalSection[] = [
  {
    id: 'service',
    nav: 'The service',
    body: (
      <p>
        IZI Morocco turns heritage sites in Morocco into outdoor escape games. Using your smartphone, you follow a
        story, move between real-world checkpoints on an interactive map, solve puzzles and questions, scan QR codes
        and complete photo or video challenges, alone or as a team.
      </p>
    ),
  },
  {
    id: 'eligibility',
    nav: 'Who can use the App',
    body: (
      <p>
        You must be at least 13 years old to create an account. If you are under 18, you may use the App only with
        the permission of a parent or legal guardian. That parent or guardian is responsible for your use of the App
        and should accompany you during Adventures.
      </p>
    ),
  },
  {
    id: 'account',
    nav: 'Your account',
    body: (
      <List>
        <Item>
          To play, you must create an account with your name, email address and a password. A phone number is
          optional.
        </Item>
        <Item>We verify your email address with a one-time code.</Item>
        <Item>Provide accurate information and keep it up to date.</Item>
        <Item>
          Keep your password confidential. You are responsible for all activity on your account. If you think someone
          has used your account without permission, tell us immediately at {supportLink}.
        </Item>
        <Item>Your account is personal. You may not share, sell or transfer it.</Item>
      </List>
    ),
  },
  {
    id: 'access-codes',
    nav: 'Access passes and activation codes',
    body: (
      <List>
        <Item>
          Adventures are unlocked with an activation code or its QR code. Codes come with an access pass bought on
          izimorocco.com, or are provided directly by IZI Morocco, for example for events or team building.
        </Item>
        <Item>
          The App itself does not sell anything or process payments. Prices, payment, cancellations and refunds for
          access passes are governed by the conditions shown at the time of purchase on izimorocco.com and by
          applicable law.
        </Item>
        <Item>Unless stated otherwise at purchase, one access pass covers one participant.</Item>
        <Item>
          Each code is valid for one specific Adventure. Once a code is used, it is linked to the account that used it
          and cannot be used by another account.
        </Item>
        <Item>Codes may have an expiry date. An expired code can no longer be used.</Item>
        <Item>
          Each Adventure has a playing time, shown in the App. The App controls how long your access lasts once you
          start.
        </Item>
        <Item>Once an Adventure is finished, it cannot be replayed with the same code.</Item>
        <Item>
          Codes are for personal use. You may not resell, publish or share codes, or try to guess or generate them. We
          may cancel codes obtained or used in breach of these Terms.
        </Item>
        <Item>If you lose your code, contact us with your order confirmation email.</Item>
      </List>
    ),
  },
  {
    id: 'playing',
    nav: 'Playing an Adventure',
    body: (
      <List>
        <Item label="Location.">
          The App needs your device&apos;s location to show your position on the map and unlock checkpoints. You
          cannot play without location access. GPS accuracy depends on your device and surroundings.
        </Item>
        <Item label="Camera, photos and microphone.">
          Some features ask for camera, photo library or microphone access, to scan QR codes, take photos or record
          videos for challenges. You can refuse or withdraw these permissions in your device settings, but some
          challenges may then be unavailable.
        </Item>
        <Item label="Internet connection.">
          You need an internet connection to sign in, start an Adventure and send your results. Some content is saved
          on your device so you can keep playing with a weak connection. Your progress is sent to our servers when you
          are back online. If you uninstall the App or clear its data before your progress has been sent, that
          progress may be lost.
        </Item>
        <Item>Mobile data, roaming and battery use are at your own cost.</Item>
      </List>
    ),
  },
  {
    id: 'teams',
    nav: 'Teams',
    body: (
      <List>
        <Item>You can create a team, or join an existing team using its name. A team can have up to 5 players.</Item>
        <Item>
          Team names must be unique. They must not be offensive or misleading, or infringe anyone&apos;s rights. We
          may rename or remove a team that breaks this rule.
        </Item>
        <Item>Other members of your team may be able to see your name.</Item>
        <Item>
          If the team owner deletes their account, the team is deleted. A member who deletes their account is removed
          from the team.
        </Item>
      </List>
    ),
  },
  {
    id: 'safety',
    nav: 'Safety in the real world',
    body: (
      <>
        <p>
          Adventures take place outdoors, in public streets and at heritage sites. You play at your own risk. You are
          responsible for your own safety and behaviour, and for any children in your care. In particular:
        </p>
        <List>
          <Item>
            Stay aware of your surroundings. Never look at your phone while crossing a road, driving or cycling.
          </Item>
          <Item>
            Respect traffic rules, opening hours, signs and closed or restricted areas. Never enter private property.
          </Item>
          <Item>
            Respect residents, worshippers, monuments and local customs. Do not damage, climb on or remove anything
            from a site.
          </Item>
          <Item>No challenge ever requires you to take a risk. If a step seems unsafe or inaccessible, skip it.</Item>
          <Item>Plan for the weather: carry water, protect yourself from the sun and wear suitable shoes.</Item>
          <Item>Follow the instructions of site staff and local authorities.</Item>
        </List>
        <p>
          Routes and sites may change or close without notice, for example because of works, events or weather. We are
          not responsible for such closures.
        </p>
      </>
    ),
  },
  {
    id: 'acceptable-use',
    nav: 'Acceptable use',
    body: (
      <>
        <p>You agree not to:</p>
        <List>
          <Item>
            cheat, for example by faking your location (GPS spoofing), sharing answers publicly or using automated
            tools;
          </Item>
          <Item>copy, modify, reverse engineer or extract the App&apos;s code, stories, puzzles or answers;</Item>
          <Item>
            access, or try to access, our servers or other players&apos; accounts without permission, or disrupt the
            App;
          </Item>
          <Item>
            submit content that is illegal, offensive, violent, sexual or discriminatory, or that infringes the rights
            of others;
          </Item>
          <Item>
            photograph or film people without their consent where consent is required, or publish anyone&apos;s
            personal information;
          </Item>
          <Item>use the App for commercial purposes without our written permission.</Item>
        </List>
        <p>We may suspend or close accounts that break these rules.</p>
      </>
    ),
  },
  {
    id: 'your-content',
    nav: 'Your content',
    body: (
      <>
        <p>
          Photos, videos, answers and other content you submit during an Adventure (&quot;Your Content&quot;) remain
          yours. You grant IZI Morocco a non-exclusive, royalty-free licence to store, display and use Your Content to
          run the Adventure, check challenges, provide support and improve the service. We will not use Your Content in
          advertising without your consent.
        </p>
        <p>
          You confirm that you have the right to submit Your Content and that it respects these Terms. We may remove
          any content that breaks these Terms.
        </p>
      </>
    ),
  },
  {
    id: 'our-content',
    nav: 'Our content',
    body: (
      <>
        <p>
          The App and all Adventure content belong to IZI Morocco or its licensors and are protected by intellectual
          property laws. This includes stories, characters (such as Aziza), puzzles, questions, maps, texts, images,
          videos, sounds, logos and the IZI Morocco name.
        </p>
        <p>
          We grant you a personal, limited, non-exclusive and non-transferable licence to use the App on your own
          devices for private, non-commercial play. All other rights are reserved.
        </p>
      </>
    ),
  },
  {
    id: 'third-party',
    nav: 'Third-party services',
    body: (
      <p>
        The App uses third-party services, such as Mapbox for maps. It may also show content hosted by others, such as
        puzzle pages and embedded videos (for example from YouTube). These services have their own terms and privacy
        policies. We are not responsible for third-party content or services.
      </p>
    ),
  },
  {
    id: 'availability',
    nav: 'Changes and availability',
    body: (
      <p>
        We work to keep the App available and accurate, but we cannot guarantee that it will always be available,
        uninterrupted or error-free. We may update the App, change or remove Adventures or features, or suspend the
        service for maintenance. Some features are offered during a pilot phase and may change.
      </p>
    ),
  },
  {
    id: 'deleting',
    nav: 'Deleting your account',
    body: (
      <>
        <p>
          You can delete your account at any time in the App, under{' '}
          <strong className="text-foreground">Settings &gt; Delete Account</strong>. This permanently deletes your
          account, your game history and any team you own. It cannot be undone. Activation codes that have already been
          used are not restored or refunded when you delete your account.
        </p>
        <p>
          We may suspend or close your account if you seriously or repeatedly break these Terms, if the law requires
          it, or to protect other players or the service.
        </p>
      </>
    ),
  },
  {
    id: 'liability',
    nav: 'Liability',
    body: (
      <>
        <p>
          The App and Adventures are provided &quot;as is&quot;. To the extent permitted by law, IZI Morocco is not
          liable for:
        </p>
        <List>
          <Item>indirect or consequential losses, or loss of data;</Item>
          <Item>damage or injury that results from your failure to follow these Terms or the safety guidance above;</Item>
          <Item>events outside our reasonable control;</Item>
          <Item>third-party services.</Item>
        </List>
        <p>
          Nothing in these Terms excludes or limits any liability that cannot be excluded or limited by law. Nothing in
          these Terms limits your rights as a consumer under applicable law, including Moroccan Law No. 31-08 on
          consumer protection.
        </p>
      </>
    ),
  },
  {
    id: 'app-stores',
    nav: 'App stores',
    body: (
      <>
        <p>If you downloaded the App from the Apple App Store or Google Play:</p>
        <List>
          <Item>
            These Terms are between you and IZI Morocco only, not Apple or Google. IZI Morocco, not Apple or Google, is
            responsible for the App and its content, for maintenance and support, and for handling any claims relating
            to the App.
          </Item>
          <Item>You must also follow the app store&apos;s own terms of service.</Item>
          <Item>
            To the maximum extent permitted by law, Apple has no warranty obligation for the App. If the App fails to
            conform to an applicable warranty, you may notify Apple, which will refund the purchase price of the App,
            if any.
          </Item>
          <Item>
            You confirm that you are not located in a country subject to a U.S. Government embargo, and that you are
            not listed on any U.S. Government list of prohibited or restricted parties.
          </Item>
          <Item>
            Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.
          </Item>
        </List>
      </>
    ),
  },
  {
    id: 'changes',
    nav: 'Changes to these Terms',
    body: (
      <p>
        We may update these Terms. We will post the new version with a new &quot;Last updated&quot; date and, for
        important changes, let you know in the App. If you keep using the App after the changes take effect, you
        accept the updated Terms.
      </p>
    ),
  },
  {
    id: 'governing-law',
    nav: 'Governing law',
    body: (
      <p>
        These Terms are governed by the laws of the Kingdom of Morocco. If a dispute arises, please contact us first so
        we can try to resolve it amicably. If we cannot reach an agreement, the dispute will be submitted to the
        competent courts of Morocco. This does not affect any mandatory consumer rights you have in your country of
        residence.
      </p>
    ),
  },
  {
    id: 'contact',
    nav: 'Contact us',
    body: (
      <>
        <p>Questions about these Terms? Contact us:</p>
        <List>
          <Item label="Email:">
            <TextLink href={`mailto:${LEGAL.email}`}>{LEGAL.email}</TextLink>
          </Item>
          <Item label="Phone:">
            <TextLink href={`tel:${LEGAL.phoneHref}`}>{LEGAL.phone}</TextLink>
          </Item>
        </List>
      </>
    ),
  },
]

export function TermsAndConditions() {
  return (
    <LegalPage
      title="Terms and Conditions"
      intro="The rules of the adventure: how the App works, what we expect from every player, and how to play safely and fairly."
      lastUpdated={LAST_UPDATED}
      preamble={
        <>
          <p>
            Welcome to IZI Morocco. These Terms and Conditions (&quot;Terms&quot;) govern your use of the IZI Morocco
            mobile application (the &quot;App&quot;) and the outdoor treasure-hunt adventures you play through it (the
            &quot;Adventures&quot;). The App is operated by IZI Morocco (&quot;IZI Morocco&quot;, &quot;we&quot;,
            &quot;us&quot; or &quot;our&quot;).
          </p>
          <p>
            By creating an account or using the App, you agree to these Terms and to our{' '}
            <TextLink href="/privacy">Privacy Policy</TextLink>.
          </p>
          <Callout>If you do not agree, please do not use the App.</Callout>
        </>
      }
      sections={sections}
    />
  )
}
