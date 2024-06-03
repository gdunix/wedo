import { Accordion, AccordionItem } from "@/components/ui/accordion";

const Accordions = () => {
  return (
    <Accordion>
      <AccordionItem key="details" aria-label="Details" title="Details">
        Details
      </AccordionItem>
      <AccordionItem key="pricing" aria-label="Pricing" title="Pricing">
        Pricing
      </AccordionItem>
      <AccordionItem key="reviews" aria-label="Reviews" title="Reviews">
        Reviews
      </AccordionItem>
    </Accordion>
  );
};

export default Accordions;
