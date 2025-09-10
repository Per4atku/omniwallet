import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import SectionBadge from "./SectionBadge";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

export default function Faqs() {
  return (
    <section className="flex flex-col gap-8 items-center mt-32">
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
