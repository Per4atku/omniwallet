import SectionBadge from "./SectionBadge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "What makes The OmniWallet unique?",
    answer:
      "Unlike traditional banking or crypto apps, The OmniWallet unifies all your finances in one place. From cash to crypto, investments to payments — everything is connected and optimized by AI.",
  },
  {
    question: "Is my money secure?",
    answer:
      "Absolutely. Security is our top priority. The OmniWallet uses bank-grade encryption, decentralized storage, and multi-factor authentication to keep your assets safe at all times.",
  },
  {
    question: "Do I need to know about crypto to use it?",
    answer:
      "Not at all. The OmniWallet is designed to be intuitive for everyone. You can manage crypto as easily as your bank account — the app handles the complexity in the background.",
  },
  {
    question: "Can I really solve any financial problem?",
    answer:
      "Yes. Whether you need to pay bills, save for goals, rebalance investments, or convert currencies, the Wallet’s AI assistant finds the best solution instantly.",
  },
  {
    question: "Does it work worldwide?",
    answer:
      "Yes! The OmniWallet supports multiple currencies and integrates with global banks, exchanges, and payment systems, so you can stay connected wherever you are.",
  },
  {
    question: "How does collaboration work?",
    answer:
      "You can share wallets with family, business partners, or teams. Set permissions, track transactions, and manage finances together in real-time.",
  },
];

export default function Faqs() {
  return (
    <section id="faq" className="flex flex-col gap-8 items-center mt-32">
      <SectionBadge>FAQs</SectionBadge>
      <h1 className="text-6xl text-center font-medium lg:text-7xl">
        Questions? We've <br /> got{" "}
        <span className="text-lime-400">answers</span>
      </h1>
      <Accordion
        type="single"
        collapsible
        className="w-full mt-8"
        defaultValue="item-1"
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            className="p-3 max-w-[500px] mx-auto"
            key={faq.answer}
            value={`item-${index + 1}`}
          >
            <AccordionTrigger className="text-lg p-2">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-lg p-2">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
