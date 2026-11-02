import LegalPage, { LegalSection, legalMetadata } from '@/components/LegalPage';

export const metadata = legalMetadata(
  'Privacy Policy',
  'How Zennero, LLC collects, uses, and protects information through zennero.com.',
  '/privacy/'
);

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="January 1, 2025">
      <p className="mt-8">
        Zennero, LLC (&ldquo;Zennero,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) runs the website zennero.com. This
        policy explains what information we collect through the website, how we use it, and the choices you have.
      </p>

      <LegalSection title="1. Information you give us">
        <p>
          When you email us, call us, or contact us on LinkedIn, we receive the information you choose to share. That
          may include your name, email address, phone number, company, job title, and your message. When you send us an
          inquiry, we add your name and email address to our mailing list. Please do not send confidential or sensitive
          information this way unless we have agreed on a secure method first.
        </p>
      </LegalSection>

      <LegalSection title="2. Information collected automatically">
        <p>
          When you visit the website, your browser sends standard technical details, such as your IP address, browser
          type, device type, and the page you asked for. Our hosting provider, Netlify, receives these details so it can
          deliver and protect the website. The website also loads fonts from Google Fonts, so Google receives your IP
          address and browser details when a page loads.
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies and tracking">
        <p>
          The website does not use cookies, analytics tools, advertising tags, or tracking pixels. We do not track your
          activity across other websites. For this reason, the website does not respond differently to browser
          &ldquo;Do Not Track&rdquo; signals.
        </p>
      </LegalSection>

      <LegalSection title="4. Chat box">
        <p>
          The chat box on the website is in testing. Messages you type stay in your browser. They are not sent to us and
          we do not store them. To reach us, email <a href="mailto:info@zennero.com">info@zennero.com</a> or call{' '}
          <a href="tel:+19728005552">+1 (972) 800-5552</a>.
        </p>
      </LegalSection>

      <LegalSection title="5. How we use information">
        <p>We use the information you share to:</p>
        <ul>
          <li>Reply to your questions and requests</li>
          <li>Discuss, deliver, and improve our services</li>
          <li>Keep the website running and secure</li>
          <li>Meet our legal, tax, and accounting duties</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. How we share information">
        <p>
          We do not sell your personal information. We do not share it for advertising. We share it only:
        </p>
        <ul>
          <li>
            With service providers that help us run our business, such as website hosting, email, and our mailing list
            service. They must protect it.
          </li>
          <li>When the law, a court order, or the need to protect our rights, our clients, or others requires it</li>
          <li>As part of a merger, sale, or transfer of our business, with notice to you where required</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Links to other websites">
        <p>
          The website links to other sites, such as LinkedIn. Those sites have their own privacy practices. Please read
          their policies.
        </p>
      </LegalSection>

      <LegalSection title="8. How long we keep information">
        <p>
          We keep inquiries and mailing list details for 30 days, then delete them. If you become a client, or the law
          requires us to keep records longer, such as for tax purposes, we keep only what we need for that purpose.
        </p>
      </LegalSection>

      <LegalSection title="9. Security">
        <p>
          We take reasonable steps to protect information. No website or email system is fully secure, so we cannot
          guarantee security.
        </p>
      </LegalSection>

      <LegalSection title="10. Your choices and rights">
        <p>
          You can ask us to remove you from our mailing list at any time. Email{' '}
          <a href="mailto:info@zennero.com">info@zennero.com</a>, and we will process your request within 10 business days.
          You can also ask us what personal information we hold about you, and ask us to correct or delete it. Depending
          on where you live, privacy laws may give you more rights. We will not treat you differently for using them.
        </p>
      </LegalSection>

      <LegalSection title="11. Children">
        <p>
          The website is for businesses. It is not meant for children under 13, and we do not knowingly collect their
          information.
        </p>
      </LegalSection>

      <LegalSection title="12. Changes to this policy">
        <p>
          We may update this policy. When we do, we will post the new version on this page and change the effective
          date at the top.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact us">
        <p>
          Zennero, LLC
          <br />
          605 Saint James Pl, Coppell, TX 75019
          <br />
          Email: <a href="mailto:info@zennero.com">info@zennero.com</a>
          <br />
          Phone: <a href="tel:+19728005552">+1 (972) 800-5552</a>
        </p>
      </LegalSection>
    </LegalPage>
  );
}
