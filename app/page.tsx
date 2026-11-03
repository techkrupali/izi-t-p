'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PrivacyPolicy() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      content:
        'IziMorocco ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "Service").\n\nPlease read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our application.',
    },
    {
      id: 'information-collected',
      title: 'Information We Collect',
      content: `We collect information in several ways:\n\n**Account Registration:**\n- Full name\n- Email address\n- Phone number\n- Password (encrypted and hashed)\n\n**Game Activity:**\n- Scores and rankings\n- Answers submitted to game questions\n- Tasks completed and game progress\n- Game history and statistics\n\n**Device Information:**\n- Device model and manufacturer\n- Operating system version\n- Device identifiers\n\n**Location Data:**\n- Real-time GPS coordinates during active gameplay\n- Precise location (latitude/longitude) when permission is granted\n\n**Content:**\n- Photos selected from your device gallery for QR code scanning (not stored on our servers unless you choose to share them in game)\n- QR code scan data (game ID, activation codes, player ID)`,
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      content: `We use the collected information for:\n\n- **Account Management:** Creating and managing your user account and authentication\n- **Game Functionality:** Delivering location-based game content and tracking your progress\n- **Leaderboards:** Displaying your scores and rankings on leaderboards\n- **Analytics:** Understanding user behavior to improve our service\n- **Communication:** Sending you updates, notifications, and support messages\n- **Safety and Security:** Detecting fraud and ensuring service security\n- **Legal Compliance:** Meeting legal obligations and enforcing our terms of service`,
    },
    {
      id: 'permissions-explained',
      title: 'Device Permissions Explained',
      content: `IziMorocco requests the following Android permissions:\n\n**ACCESS_FINE_LOCATION (Required)**\nProvides precise GPS location to trigger game tasks based on your real-world position.\n\n**ACCESS_COARSE_LOCATION (Required)**\nProvides approximate location when precise location is unavailable.\n\n**ACCESS_BACKGROUND_LOCATION (Optional)**\nAllows proximity detection to game markers while the app runs in the background.\n\n**CAMERA (Required)**\nNeeded to scan QR codes to join games and complete tasks.\n\n**RECORD_AUDIO (Optional)**\nUsed for audio-based game tasks and voice interactions within games.\n\n**READ_EXTERNAL_STORAGE / READ_MEDIA_IMAGES (Required)**\nAllows selecting images from your device gallery for QR code scanning.\n\n**WRITE_EXTERNAL_STORAGE (Optional)**\nUsed for storing game-related files on your device.\n\n**VIBRATE (Optional)**\nProvides haptic feedback when scanning QR codes successfully.\n\n**INTERNET (Required)**\nRequired for all app functionality including game data syncing and authentication.`,
    },
    {
      id: 'third-party-services',
      title: 'Third-Party Services',
      content: `We integrate with the following third-party services:\n\n**Mapbox**\nProvides interactive maps and location rendering for game displays. Mapbox may collect location data as per their privacy policy.\n\n**QR Server API (api.qrserver.com)**\nWe send QR images to this service temporarily for decoding purposes only. These images are not stored by the QR Server.\n\n**YouTube**\nEmbedded videos in game tasks via WebView. YouTube may collect data as per their privacy policy.\n\n**IziMorocco Backend Servers**\nYour game data, account information, and scores are stored on our secure servers.\n\nPlease review the privacy policies of these services to understand their data practices.`,
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing',
      content: `**What we share:**\n- Location and game activity data are transmitted to IziMorocco backend servers to provide game functionality\n- QR images are temporarily sent to api.qrserver.com for decoding only\n- Leaderboard data (usernames and scores) may be displayed publicly within the app\n\n**What we do not share:**\n- We do not sell your personal data to third parties\n- We do not share your contact information without your consent\n- We do not disclose passwords or payment information\n\n**Legal requirements:**\nWe may disclose your information if required by law, court order, or government request.`,
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      content: `**Account Data:**\nYour account information (name, email, phone, password) is retained as long as your account remains active. You can delete your account at any time, which will permanently remove all associated data within 30 days.\n\n**Game Results:**\nYour game scores, completion records, and leaderboard positions are retained indefinitely to maintain your game history and progress unless you request deletion.\n\n**Location Data:**\nLocation data collected during gameplay is retained for the duration of that game session. Historical location data is not stored long-term.\n\n**Deleted Data:**\nAfter account deletion, we retain anonymized analytics data that cannot be linked to your identity.`,
    },
    {
      id: 'your-rights',
      title: 'Your Rights',
      content: `**Access:**\nYou can access and review your account information anytime through the app settings.\n\n**Update:**\nYou can update your profile information (name, email, phone) directly in the app.\n\n**Delete Account:**\nYou can request account deletion by contacting our support team at elvaigh@gmail.com. We will permanently delete all your personal data within 30 days.\n\n**Location Control:**\nYou can enable or disable location permissions through your device settings at any time.\n\n**Communication Preferences:**\nYou can opt-out of marketing communications in your account settings.\n\n**GDPR Compliance:**\nIf you reside in the EU, you have additional rights under GDPR, including the right to data portability and objection to processing.`,
    },
    {
      id: 'childrens-privacy',
      title: "Children's Privacy",
      content: `IziMorocco is not intended for children under 13 years old. We do not knowingly collect personal information from children under 13. If we discover that we have collected data from a child under 13 without parental consent, we will delete such information immediately.\n\nFor users under 18, parental or guardian consent is recommended. Parents or guardians concerned about their child's use of IziMorocco should contact us directly.`,
    },
    {
      id: 'security',
      title: 'Data Security',
      content: `We implement industry-standard security measures to protect your information:\n\n- Passwords are encrypted using bcrypt\n- Data in transit is protected using SSL/TLS encryption\n- Access to personal data is restricted to authorized personnel only\n- Regular security audits are conducted\n\nHowever, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security of your data.`,
    },
    {
      id: 'policy-changes',
      title: 'Changes to This Policy',
      content: `We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. We will notify you of significant changes via email or through the app.\n\nYour continued use of IziMorocco after changes means you accept the updated Privacy Policy. Please review this page regularly for updates.`,
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:\n\n**Email:** elvaigh@gmail.com\n\n**Mailing Address:**\nIziMorocco Privacy Team\n[Company Address]\nMorocco\n\nWe will respond to your request within 14 days.`,
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary-foreground rounded-lg flex items-center justify-center text-primary font-bold text-xl">
              IM
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">IziMorocco</h1>
          </div>
          <h2 className="text-xl md:text-2xl font-semibold opacity-95">Privacy Policy</h2>
        </div>
      </header>

      {/* Last Updated */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-border">
        <p className="text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="border border-border rounded-lg overflow-hidden bg-card hover:shadow-sm transition-shadow">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-muted/50 transition-colors text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-foreground pr-4">{section.title}</h3>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-primary transition-transform duration-200 ${
                    openSections[section.id] ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openSections[section.id] && (
                <div className="px-4 md:px-6 pb-4 md:pb-6 border-t border-border bg-muted/30">
                  <div className="prose prose-sm max-w-none text-foreground space-y-3">
                    {section.content.split('\n\n').map((paragraph, idx) => {
                      // Check if paragraph contains markdown-style formatting
                      if (paragraph.includes('**')) {
                        const parts = paragraph.split(/\*\*(.*?)\*\*/);
                        return (
                          <p key={idx} className="leading-relaxed">
                            {parts.map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
                          </p>
                        );
                      }
                      return (
                        <p key={idx} className="leading-relaxed whitespace-pre-wrap">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            This Privacy Policy is provided for information purposes and is required for distribution on the Google Play Store. For the most current version, please check back regularly. By using IziMorocco, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border mt-12 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-foreground mb-3">IziMorocco</h4>
              <p className="text-sm text-muted-foreground">Location-based outdoor game platform</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <button className="hover:text-primary transition-colors">Privacy Policy</button>
                </li>
                <li>
                  <button className="hover:text-primary transition-colors">Terms of Service</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Contact</h4>
              <p className="text-sm text-muted-foreground">elvaigh@gmail.com</p>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} IziMorocco. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
