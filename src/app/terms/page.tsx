import LegalPage, { LegalSection, legalMetadata } from '@/components/LegalPage';

export const metadata = legalMetadata(
  'Terms of Service',
  'The terms that apply to your use of zennero.com, run by Zennero, LLC.',
  '/terms/'
);

export default function TermsOfService() {
  return (
    <LegalPage title="Terms of Service" effectiveDate="January 1, 2025">
      <p className="mt-8">
        These Terms of Service (&ldquo;Terms&rdquo;) apply to your use of zennero.com (the &ldquo;website&rdquo;), run
        by Zennero, LLC (&ldquo;Zennero,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By using the website, you agree to
        these Terms. If you do not agree, please do not use the website.
      </p>

      <LegalSection title="1. About the website">
        <p>
          The website gives general information about Zennero and our services. It is not professional, legal,
          financial, or technical advice for your situation. Any services we provide are covered by a separate written
          agreement. If that agreement differs from these Terms, the agreement controls.
        </p>
      </LegalSection>

      <LegalSection title="2. Results and examples">
        <p>
          Client results on the website, such as fewer process steps, come from specific engagements. Your results
          depend on your situation and may differ. We do not promise any specific result.
        </p>
      </LegalSection>

      <LegalSection title="3. Using the website">
        <p>You agree to use the website only for lawful purposes. You agree not to:</p>
        <ul>
          <li>Try to break into, disrupt, or overload the website</li>
          <li>
            Copy large parts of the website, or collect its content with automated tools, without our written
            permission
          </li>
          <li>Use the website to send spam or harmful code</li>
          <li>Pretend to be someone else</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Our content and trademarks">
        <p>
          The website&rsquo;s text, design, images, and logo belong to Zennero or our licensors and are protected by
          law. You may view and share pages for personal or internal business use, with a link back to the website.
          Other uses need our written permission. SAP, SAP S/4HANA, SAP BTP, SAP Joule, SAP Signavio, RISE with SAP,
          Claude, and other product names on the website are trademarks of their owners. Naming them does not mean
          their owners endorse Zennero.
        </p>
      </LegalSection>

      <LegalSection title="5. Chat box">
        <p>
          The chat box is in testing and does not send messages to us. Do not use it for urgent or confidential
          matters.
        </p>
      </LegalSection>

      <LegalSection title="6. Links to other websites">
        <p>
          Links to other websites are for your convenience. We do not control those sites and are not responsible for
          them.
        </p>
      </LegalSection>

      <LegalSection title="7. Disclaimer">
        <p>
          The website is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; To the fullest extent the law
          allows, we make no warranties of any kind, express or implied. That includes warranties of accuracy, fitness
          for a particular purpose, and noninfringement.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of liability">
        <p>
          To the fullest extent the law allows, Zennero is not liable for any indirect, incidental, special, or
          consequential damages, or for lost profits, revenue, or data, arising from your use of the website. Nothing in
          these Terms limits liability that the law does not allow to be limited.
        </p>
      </LegalSection>

      <LegalSection title="9. Indemnity">
        <p>
          You agree to cover Zennero for claims and costs, including reasonable legal fees, that result from your
          misuse of the website or your breach of these Terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Governing law">
        <p>
          These Terms are governed by the laws of the State of Texas, without regard to its conflict of law rules. Any
          dispute will be heard in the state or federal courts located in Dallas County, Texas.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to these Terms">
        <p>
          We may update these Terms. When we do, we will post the new version on this page with a new effective date.
          Using the website after that means you accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="12. Contact us">
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
