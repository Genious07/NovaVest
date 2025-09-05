export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <article className="prose prose-invert lg:prose-xl mx-auto">
        <h1>NovaVest — Terms of Use</h1>
        <p><strong>Effective date:</strong> September 5, 2025</p>
        <p>Thank you for choosing <strong>NovaVest</strong> — <em>“Socratic investing, beautifully interactive.”</em> These Terms of Use (&quot;Terms&quot;) govern your access to and use of the NovaVest website, web UI, applications, services, features, and content (collectively, the “Service”). By using the Service you agree to be bound by these Terms. If you do not agree, do not use the Service.</p>
        
        <hr />

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the Service you confirm that you are at least 18 years old (or the age of majority in your jurisdiction) and that you accept and agree to these Terms and any policies referenced herein (including the Privacy Policy and Community Guidelines). If you use the Service on behalf of an organization, you represent you have authority to bind that organization to these Terms.</p>
        
        <hr />

        <h2>2. Changes to Terms and the Service</h2>
        <p>We may revise or update these Terms from time to time. When we do, we will post the revised Terms with a new effective date. Your continued use of the Service after the effective date constitutes acceptance of the updated Terms. We may also modify, suspend, or discontinue the Service (or any part of it) at any time without liability.</p>
        
        <hr />

        <h2>3. Description of the Service</h2>
        <p>NovaVest provides a dark-themed, viridian-accented interactive web interface and chat experience that connects users with an AI-based investment-assistant (“the Bot”). The Service includes a homepage, a streaming chat interface that recognizes special <code>&lt;think&gt;</code> tags to style streaming content, UI animations (GSAP, anime.js, Three.js, Typed.js, ScrollReveal/ScrollMagic, ReactBits), and related features. The Service may rely on third-party libraries and services whose licenses and terms apply.</p>
        
        <hr />

        <h2>4. No Financial or Professional Advice; Educational Purposes Only</h2>
        <p>The content, responses, suggestions, and any other information provided by NovaVest (including AI-generated content) are <strong>for informational and educational purposes only</strong> and do <strong>not</strong> constitute financial, investment, tax, legal, or professional advice. You should not rely on the Service as a substitute for professional advice tailored to your circumstances. Always conduct your own due diligence and consult a qualified professional before making financial decisions. NovaVest is not a broker, financial advisor, or registered investment adviser.</p>
        
        <hr />

        <h2>5. User Accounts &amp; Responsibility</h2>
        <p>If the Service requires creation of an account:</p>
        <ul>
            <li>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</li>
            <li>You agree to provide accurate, current, and complete information and to keep that information updated.</li>
            <li>Immediately notify us of any unauthorized use or security breach.</li>
        </ul>
        <p>You are responsible for your use of the Service and for any content you upload, send, or create while using the Service.</p>

        <hr />

        <h2>6. Acceptable Use &amp; Prohibited Conduct</h2>
        <p>You must not use the Service in ways that:</p>
        <ul>
            <li>Violate applicable laws or third-party rights.</li>
            <li>Facilitate any illegal activity, fraud, or deception.</li>
            <li>Interfere with the operation, security, or integrity of the Service (including attempts to reverse-engineer or manipulate streaming protocols).</li>
            <li>Circumvent or tamper with usage limits, rate limits, or security features.</li>
            <li>Attempt to extract, scrape, copy, or otherwise obtain unauthorized access to the underlying models, datasets, or source code.</li>
            <li>Post, transmit, or store material that is unlawful, defamatory, infringing, obscene, hateful, or otherwise objectionable.</li>
        </ul>
        <p>We reserve the right to suspend or terminate access for violations of these Terms.</p>

        <hr />

        <h2>7. Streaming Content, Parsing &amp; Security</h2>
        <p>The Service supports streaming responses and recognizes a single custom tag: <code>&lt;think&gt;...&lt;/think&gt;</code>. The frontend parses these tags to render “thinking” styling while content streams. You acknowledge that:</p>
        <ul>
            <li>The Service will only treat <code>&lt;think&gt;</code> tags as formatting instructions; all other angle-bracket content is treated as literal text and not executed as HTML.</li>
            <li>The Service implements sanitization, but you should not submit content intended to break or exploit the parser.</li>
            <li>We may buffer or batch streamed content for performance reasons; UI behavior (italicized thinking state, shimmer effects) is an implementation detail and may change.</li>
        </ul>

        <hr />

        <h2>8. Third-Party Libraries &amp; Services</h2>
        <p>The Service uses third-party libraries (for example: GSAP, anime.js, Three.js, Typed.js, ScrollReveal/ScrollMagic, ReactBits, and others). Those libraries are governed by their separate licenses and terms. Your use of any third-party service or library is also subject to that third party’s terms and policies.</p>

        <hr />

        <h2>9. User Content &amp; Intellectual Property</h2>
        <p><strong>Your content.</strong> You retain ownership of content you submit to the Service. By submitting content, you grant NovaVest a worldwide, non-exclusive, royalty-free license to host, display, transmit, and otherwise use that content to provide and improve the Service and for analytics (subject to the Privacy Policy).</p>
        <p><strong>Our content.</strong> The UI, code, illustrations, logos, fonts, designs, text, and other materials provided by NovaVest are our property or licensed to us and are protected by copyright, trademark, and other laws. You may not copy, reproduce, distribute, or create derivative works without express written permission, except as expressly permitted by these Terms.</p>
        <p><strong>Feedback.</strong> If you provide suggestions or feedback, you grant us a perpetual, irrevocable license to use them without obligation.</p>

        <hr />
        
        <h2>10. Privacy &amp; Data Handling</h2>
        <p>Use of personal data is governed by our Privacy Policy. By using the Service you consent to our collection, use, storage, and sharing of information as described in that policy. The Service may provide options to opt out of analytics or non-essential tracking.</p>

        <hr />

        <h2>11. Analytics, Logging &amp; Retention</h2>
        <p>We may collect usage metrics and logs to operate, secure, and improve the Service. We will not share personally identifiable content with third parties for advertising unless you explicitly consent. Retention periods for logs, transcripts, and usage data are set according to our internal policies; contact us for data deletion requests and export options (subject to legal limits and verification).</p>

        <hr />
        
        <h2>12. Security; No Guarantees</h2>
        <p>We use administrative, technical, and physical measures intended to protect user data. However, no service is perfectly secure. We disclaim any liability for unauthorized access, data loss, or breaches to the maximum extent permitted by law. You must not upload highly sensitive personal data (e.g., full financial account numbers, passwords, or health data) unless expressly permitted via a secure, supported flow.</p>

        <hr />

        <h2>13. Termination &amp; Suspension</h2>
        <p>We may suspend or terminate your access for cause (including breach of these Terms) or without cause. Upon termination, your right to use the Service ends, but provisions that by their nature survive (intellectual property, disclaimers, limitation of liability, indemnity) will continue in effect.</p>

        <hr />

        <h2>14. Warranty Disclaimer</h2>
        <p>THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE.” TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NOVAVEST AND ITS AFFILIATES DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.</p>

        <hr />

        <h2>15. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, NOVAVEST, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, SUPPLIERS, AND LICENSORS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, LOSS OF PROFITS, OR LOSS OF DATA ARISING OUT OF OR RELATED TO THESE TERMS OR YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR AGGREGATE LIABILITY FOR DIRECT DAMAGES SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO NOVAVEST IN THE PRIOR TWELVE (12) MONTHS, OR ONE HUNDRED DOLLARS (USD $100), WHICHEVER IS GREATER.</p>

        <hr />

        <h2>16. Indemnification</h2>
        <p>You agree to indemnify and hold harmless NovaVest and its affiliates from any claims, liabilities, damages, losses, or expenses (including reasonable attorneys’ fees) arising from your breach of these Terms or your unauthorized use of the Service.</p>

        <hr />

        <h2>17. Dispute Resolution &amp; Governing Law</h2>
        <p>These Terms will be governed by the laws of the jurisdiction where NovaVest is organized or operates. If you prefer, contact us at the email below for details about governing law and dispute procedures specific to your region. Any dispute arising under or in connection with these Terms shall be resolved in the courts of that jurisdiction, subject to mandatory local rules.</p>
        
        <hr />

        <h2>18. DMCA and Copyright Infringement</h2>
        <p>If you believe your copyrighted work has been used in a way that constitutes infringement, please provide a written notice to our designated agent (include identification of the copyrighted work, location of the allegedly infringing material, contact information, and a statement under penalty of perjury). We will respond according to applicable law.</p>

        <hr />

        <h2>19. Notices</h2>
        <p>We may provide notices via email or by posting on the Service. Notice will be effective when sent or posted.</p>
        
        <hr />

        <h2>20. Miscellaneous</h2>
        <ul>
            <li><strong>Entire Agreement.</strong> These Terms, together with our Privacy Policy and any other referenced policies, constitute the entire agreement regarding the Service.</li>
            <li><strong>Severability.</strong> If any provision is held unenforceable, the remainder of the Terms will remain in effect.</li>
            <li><strong>Waiver.</strong> Our failure to enforce any right is not a waiver of that right.</li>
        </ul>

        <hr />

        <h2>21. Contact Us</h2>
        <p>For questions, notices, or requests, contact:<br />
        <strong>Support:</strong> <a href="mailto:satwiks788@gmail.com">satwiks788@gmail.com</a><br />
        </p>
      </article>
    </div>
  );
}
