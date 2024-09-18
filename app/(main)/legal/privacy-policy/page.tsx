import BlurFade from "@/app/components/magicui/blur-fade";
import { Button } from "@/app/components/ui/button";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | The Automation Co.",
};

export default function Page() {
  return (
    <BlurFade>
      <h1 className="text-3xl font-bold mt-12 mb-6">Privacy Policy</h1>
      <ScrollArea className="h-[60vh] border-2 border-neutral-800 p-4 mb-6">
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to The Automation Company. We are committed to protecting
              your privacy and ensuring that your personal data is handled
              securely. This Privacy Policy outlines how we collect, use, and
              safeguard your data in accordance with applicable Indian and
              international data protection regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Important Information and Who We Are
            </h2>
            <p>
              The Automation Company provides AI-driven automation solutions,
              including chatbots, voice bots, and database reactivation
              campaigns. All services are subject to the terms and conditions
              outlined in this document.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. The Data We Collect About You
            </h2>
            <p>
              We collect various types of personal data including, but not
              limited to:
            </p>
            <ul className="ml-5 list-disc mt-2">
              <li>
                <b>Identity Data</b> (e.g., name, username, or similar
                identifier)
              </li>
              <li>
                <b>Contact Data</b> (e.g., billing and email addresses){" "}
              </li>
              <li>
                <b>Technical Data</b> (e.g., IP address, browser type)
              </li>
              <li>
                <b>Usage Data</b>
                (e.g., how you use our website, products, and services)
              </li>
            </ul>
            <p></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. How Is Your Personal Data Collected?
            </h2>
            <p>
              We collect data through direct interactions (e.g., account
              registration) and automated technologies (e.g., tracking website
              visits via cookies). This helps us provide tailored services and
              enhance user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. How We Use Your Personal Data
            </h2>
            <p>
              We only use your personal data where it is lawful to do so. Common
              uses include:
            </p>
            <ul className="list-disc ml-5">
              <li>Fulfilling our contractual obligations</li>
              <li>Managing your account</li>
              <li>Improving our services</li>
              <li>Compliance with legal requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
            <p>
              We take appropriate technical and organizational security measures
              to protect your personal data from unauthorized access,
              alteration, disclosure, or destruction. These safeguards align
              with both Indian and international data protection standards.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to
              fulfill the purposes outlined in this policy, in accordance with
              legal and regulatory obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Your Legal Rights</h2>
            <p>
              Under Indian law and global data protection regulations, you have
              the right to:
            </p>
            <ul className="list-disc ml-5">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to processing of your personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              9. International Transfers
            </h2>
            <p>
              In cases where personal data is transferred across borders, we
              ensure that appropriate safeguards are in place to protect your
              data in line with applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              10. Third-Party Links
            </h2>
            <p>
              Our services may link to third-party websites not operated by us.
              We are not responsible for the content or privacy practices of
              such external sites.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">11. Contact Details</h2>
            <p>
              If you have any questions regarding this Privacy Policy or our
              practices, please contact us at:
            </p>
            <address className="not-italic">
              <a href="mailto:admin@automationcompany.tech">
                Email: admin@theautomationcompany.com
              </a>{" "}
              <br />
              Address: 110025, Jamia Nagar, New Delhi, India
            </address>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              12. Changes to the Privacy Policy
            </h2>
            <p>
              We may update this policy from time to time. Any changes will be
              posted on this page, and your continued use of the service after
              the changes are made constitutes your acceptance of the updated
              terms.
            </p>
          </section>
        </div>
      </ScrollArea>
      <div className="flex justify-between items-center">
        <Button variant="ghost">
          <Link href="/">Back to Home</Link>
        </Button>
        <Link href="/legal/terms-of-service">
          <Button variant="default">Our Terms of Service</Button>
        </Link>
      </div>
    </BlurFade>
  );
}
