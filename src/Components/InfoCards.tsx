import { InfoCardItem } from "../types/type";

type InfoCardProps = {
  cards:InfoCardItem[],
}


const InfoCards = ({cards}:InfoCardProps) => {
  return (
    <div className="mt-20 flex flex-col gap-y-24">
      <div className="flex flex-col justify-center sm:items-end items-start font-medium md:pr-36 sm:pr-14 pl-5  uppercase">
        <div>
          <p className="sm:text-7.5xl text-5xl">thoughtful</p>
        </div>

        <div className="flex flex-row items-baseline sm:gap-7 gap-3">
          <div>
            <p className="sm:text-8xl text-5xl">process</p>
          </div>
          <div>
            <p className="sm:text-normal text-xs">I think a lot</p>
          </div>
        </div>
      </div>

      <div className=" m-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            className="border-2 border-darkLine p-6 flex flex-col gap-y-9"
            key={index}
          >
            <div className="h-80 relative text-normal">
              <p className="absolute h-full">{card.letter}</p>
              <p className="absolute pl-8 h-full">{card.letter}</p>
              <p className="absolute  pl-4 h-full">{card.letter}</p>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex font-medium uppercase">
                <p className="text-sm leading-3 text-darkLine2">{card.order}</p>
                <h3 className="text-2xl leading-6">{card.header}</h3>
              </div>
              <p className="font-normal text-lg leading-6">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoCards