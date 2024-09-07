import { faqItem } from "../types/type";
import CrossIcon from "../Utils/Icons/CrossIcon";


type faqProps = {
    faqs:faqItem[],
  }


const Faq = ({faqs}:faqProps) => {
  return (
    <div className="mt-32">
      <div className="sm:pl-0 pl-5 flex flex-col justify-center sm:items-center items-start font-medium  uppercase">
        <div className="flex flex-row items-end sm:gap-x-10 gap-x-3">
          <p className="sm:text-8xl text-5xl md:pl-12 sm:pl-8">Common</p>
          <div className="flex flex-col">
            <p className="sm:text-normal text-xs">Some Questions </p>
            <p className="sm:text-normal text-xs">People Usually Ask</p>
          </div>
        </div>

        <div>
          <div>
            <p className="sm:text-8xl text-5xl md:pr-5 sm:pr-7 ">Questions</p>
          </div>
        </div>
      </div>

      <div className="w-full sm:mt-24 mt-12 p-6 flex flex-col items-end border-">
        <div className="md:w-4/5 w-full ml-auto border-b-[0.5px] border-b-lightGray">
          {faqs.map((faq, index) => (
            <div
              className="p-4 border-t-[0.5px] border-t-lightGray hover:bg-slate-100 cursor-pointer"
              key={index}
            >
              <div className="flex flex-row justify-between items-center">
                <p>{faq.question}</p>
                <div>
                  <CrossIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq
