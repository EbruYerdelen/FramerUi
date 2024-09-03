import AwardsDivSvg from "./AwardsDivSvg"

const Awards = () => {
  return (
    <div className=" mt-48 w-full flex flex-col gap-y-24 ">
      <div className="flex flex-col justify-center sm:items-center items-start font-medium  pl-5  uppercase">
        <div>
          <p className="sm:text-8xl text-6xl pr-20 sm:pr-14">Humble</p>
        </div>

        <div className="flex flex-row items-end sm:gap-7 gap-3">
          <div>
            <p className="sm:text-8xl text-6xl">Brag</p>
          </div>
          <div className="flex flex-col">
            <p className="sm:text-normal text-sm">I won some awards</p>
            <p className="sm:text-normal text-sm">along the way</p>
          </div>
        </div>
      </div>
      <AwardsDivSvg
        src="/div.svg"
        svgProps={{
          className: "award-svg",
          viewBox: "0 0 1200 500",
        }}
      />

      {/*you can try mapping over the data instead*/}
      <div className="w-full flex justify-center main-wrap">
        <div className="sm:w-[70%] w-full flex flex-col pt-32 ml-auto uppercase text-darkLine font-medium text-[0.9rem]">
          <div className="w-full flex flex-row justify-start border-x-0 border-t-[1px] border-solid p-4 hover:bg-slate-100 cursor-pointer">
            <div className="flex min-w-[32%] items-center justify-start">
              houston exponential
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              css design awards
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              honors
            </div>
            <div className="flex items-center justify-start">2022</div>
          </div>

          <div className="w-full flex flex-row justify-between border-x-0 border-y-[1px] border-solid p-4 hover:bg-slate-100 cursor-pointer">
            <div className="flex min-w-[32%] items-center justify-start">
              houston exponential
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              awwards
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              ui / ux /i nnovation
            </div>
            <div className="flex items-center justify-start">2021</div>
          </div>

          <div className="w-full flex flex-row justify-between p-4 hover:bg-slate-100 cursor-pointer">
            <div className="flex min-w-[32%] items-center justify-start">
              atomle
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              css design awards
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              nominee
            </div>
            <div className="flex  items-center justify-start">2022</div>
          </div>

          <div className="w-full flex flex-row justify-between border-x-0 border-y-[1px] border-solid p-4 hover:bg-slate-100 cursor-pointer">
            <div className="flex min-w-[32%] items-center justify-start">
              atomle
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              awwards
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              ui / ux /i nnovation
            </div>
            <div className="flex items-center justify-start">2022</div>
          </div>

          <div className="w-full flex flex-row justify-between p-4 hover:bg-slate-100 cursor-pointer">
            <div className="flex min-w-[32%] items-center justify-start">
              Thin reel media
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              css design awards
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              nominee
            </div>
            <div className="flex items-center justify-start">2021</div>
          </div>

          <div className="w-full flex flex-row justify-between border-x-0 border-y-[1px] border-solid p-4 hover:bg-slate-100 cursor-pointer">
            <div className="flex min-w-[32%] items-center justify-start">
              Thin reel media
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              css design awards
            </div>
            <div className="flex min-w-[32%] items-center justify-start">
              ui / ux /i nnovation
            </div>
            <div className="flex items-center justify-start">2021</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards
