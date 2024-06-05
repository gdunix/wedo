import { Card, CardBody, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import DatePicker from "@/components/ui/datePicker";
import Button from "@/components/ui/button";

const Contact: React.FC = () => {
  return (
    // JSX markup goes here
    <Card className="w-full md:w-fit">
      <CardHeader className="text-lg text-primary">Message Vendor</CardHeader>
      <CardBody>
        <form className="flex flex-col gap-4 w-full">
          <div className="flex flex-col md:flex-row gap-4">
            <Input label="First Name" className="w-full md:w-64" />
            <Input label="Last Name" className="w-full md:w-64" />
          </div>
          <div>
            <Input type="email" label="Email" className="w-full" />
          </div>
          <div>
            <Input type="email" label="Email" className="w-full" />
          </div>
          <div>
            <DatePicker label="Wedding Date" className="w-full" />
          </div>
          <Button className="w-full bg-primary text-white" variant="bordered">
            Send Message
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};

export default Contact;
