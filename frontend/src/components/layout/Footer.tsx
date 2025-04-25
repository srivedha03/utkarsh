import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Github } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { useState } from "react";

const NewsletterBox = ({
  translate,
}: {
  translate: (key: string) => string;
}) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      setSubscribed(true);
      setEmail("");
    }
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div>
      <h4 className="font-medium text-base mb-4">
        {translate("footer.newsletterhead")}
      </h4>
      <p className="text-sm text-muted-foreground mb-4">
        {translate("footer.newsletterdesc")}
      </p>
      <div className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={translate("footer.youremail")}
          className="flex-1 rounded-l-md border border-border bg-background px-3 py-2 text-sm"
          required
        />
        <button
          onClick={handleSubscribe}
          disabled={!isValidEmail(email)}
          className={`rounded-r-md px-4 py-2 text-sm font-medium ${
            isValidEmail(email)
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          {translate("footer.subscribe")}
        </button>
      </div>

      {subscribed && (
        <p className="text-green-600 text-sm mt-2">
          {" "}
          Subscribed Successfully ✅
        </p>
      )}
    </div>
  );
};

const Footer = () => {
  const { translate } = useLanguage();

  return (
    <footer className="bg-card border-t py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-primary">
              UTKARSH
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              {translate("footer.discoverheritage")}
            </p>
          </div>

          {/* Column 2 */}

          {/* Column 3 */}
          {/* <div>
            <h4 className="font-medium text-base mb-4">
              {translate("footer.resourceshead")}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://bento.me/cosmics"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                >
                  {translate("footer.aboutus")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {translate("footer.ourmission")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {translate("footer.termsofservice")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {translate("footer.privacypolicy")}
                </a>
              </li>
              <li>
                <a
                  href="mailto:kishoresr01@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {translate("footer.contactus")}
                </a>
              </li>
            </ul>
          </div> */}

          {/* Column 4 - Newsletter */}
          {/* <NewsletterBox translate={translate} /> */}
        </div>

        <div className="mt-12 pt-8 border-t text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>
            {/* © {new Date().getFullYear()} UTKARSH.{" "}
            {translate("footer.allrightsreserved")} */}
          </p>
          <p className="mt-4 md:mt-0">{translate("footer.madewith")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
