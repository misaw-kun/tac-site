import BlurFade from "@/app/components/magicui/blur-fade";
import { Button } from "@/app/components/ui/button";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function Page() {
  return (
    <BlurFade>
      <h1 className="text-3xl font-bold mt-12 mb-6">Terms of Service</h1>
      <ScrollArea className="h-[60vh] border-2 border-neutral-800 p-4 mb-6">
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              Welcome to The Automation Company. These Terms of Service
              (“Terms”) govern your access to and use of our website and
              services, including AI Automation solutions and database
              reactivation. By accessing or using our service, you agree to be
              bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Services Provided</h2>
            <p>
              The Automation Company provides AI-driven automation solutions,
              including chatbots, voice bots, and database reactivation
              campaigns. All services are subject to the terms and conditions
              outlined in this document.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify users of any changes by posting the updated Terms on this
              site. Continued use of the service after such changes constitutes
              your acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Account Registration and Use
            </h2>
            <p>
              To access certain features of our services, you may be required to
              create an account. You agree to provide accurate and current
              information during the registration process and to keep your
              account information up-to-date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Privacy Policy</h2>
            <p>
              Our Privacy Policy, which explains how we handle personal data, is
              available on our website and forms part of these Terms. By using
              our service, you agree to the practices described in our Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. User Conduct</h2>
            <p>
              You agree to use our services only for lawful purposes and in
              compliance with all applicable laws. You must not misuse our
              service, including but not limited to unauthorized access,
              interference with other users&apos; use of the service, or
              violation of our security measures.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              7. Intellectual Property
            </h2>
            <p>
              All intellectual property rights related to our services and
              content, including AI models and automations, are the exclusive
              property of The Automation Company or its licensors. You may not
              use any content without prior permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              8. Third-Party Services
            </h2>
            <p>
              Our services may include links to third-party websites or
              services, which are not controlled by The Automation Company. We
              are not responsible for the content, privacy policies, or
              practices of any third-party websites or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Termination</h2>
            <p>
              We may terminate or suspend your access to our services at any
              time, without prior notice, for any reason, including breach of
              these Terms. Upon termination, your right to use the service will
              immediately cease.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India, without regard to its conflict of law
              provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              11. Changes to Service
            </h2>
            <p>
              We reserve the right to modify, suspend, or discontinue our
              service or any feature within it at any time without prior notice.
              We are not liable if any part of our service is unavailable at any
              time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              12. Disclaimer and Limitation of Liability
            </h2>
            <p>
              Our services are provided “as is” without any warranties, either
              expressed or implied. The Automation Company is not liable for any
              indirect, incidental, or consequential damages arising from your
              use of our services, including but not limited to loss of profits,
              data, or goodwill.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
            <address className="not-italic">
              For any questions or concerns about these Terms, please contact us
              at: <br />
              <a
                className="text-secondary"
                href="mailto:admin@theautomationcompany.tech"
              >
                Email: admin@theautomationcompany.com
              </a>{" "}
              <br />
              Address: Jamia Nagar, <br />
              110025, New Delhi, India
            </address>
          </section>
        </div>
      </ScrollArea>
      <div className="flex justify-between items-center">
        <Button variant="ghost">
          <Link href="/">Back to Home</Link>
        </Button>
        <Link href="/legal/privacy-policy">
          <Button variant="default">Our Privacy Policy</Button>
        </Link>
      </div>
    </BlurFade>
  );
}
