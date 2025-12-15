import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function QNA() {
  return (
   <>
   <div className="max-w-[1500px] m-auto">
    <div className="my-20 mx-40">
    <div className="text-center mb-15 ">
    <h1 className="text-5xl font-medium text-[hsl(202,100%,55%)]">Frequently Asked Questions</h1>
<p className="font-medium text-text mt-5">Have questions? We’ve answered the most common ones below.</p>

</div>
    <Accordion
      type="single"
      collapsible
      className="flex flex-col gap-4"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1" className="p-5 bg-[rgba(255,255,255,.05)] rounded-3xl">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
     <AccordionItem value="item-2" className="p-5 bg-[rgba(255,255,255,.05)] rounded-3xl">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="p-5 bg-[rgba(255,255,255,.05)] rounded-3xl">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
       <AccordionItem value="item-4" className="p-5 bg-[rgba(255,255,255,.05)] rounded-3xl">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
       <AccordionItem value="item-5" className="p-5 bg-[rgba(255,255,255,.05)] rounded-3xl">
        <AccordionTrigger>Product Information</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
          <p>
            Our flagship product combines cutting-edge technology with sleek
            design. Built with premium materials, it offers unparalleled
            performance and reliability.
          </p>
          <p>
            Key features include advanced processing capabilities, and an
            intuitive user interface designed for both beginners and experts.
          </p>
        </AccordionContent>
      </AccordionItem>
      </Accordion>
    </div>
    </div>
   </>
  )
}
