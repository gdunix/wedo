import { Image } from "@nextui-org/react";
import Form from "./form";

const MastHead: React.FC = () => (
  <section className="bg-main-light  min-h-[220px] w-full relative">
    <div className="bg-my_bg_image bg-cover opacity-20 absolute h-full w-full" />
    <div className="max-w-[1360px] py-10 mx-auto my-0 flex flex-col px-20 items-center relative">
      <div className="text-12xl">Your Wedding Starts Here</div>
      <Form />
    </div>
  </section>
);

export default MastHead;
