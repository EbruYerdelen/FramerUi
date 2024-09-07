import CommentIcon from "../Utils/Icons/CommentIcon";


const Comments = () => {
  return (
    <div className="mt-32">
      <div className="flex flex-col justify-center sm:items-center items-start font-medium  pl-5  uppercase">
        <div className="flex flex-row items-end sm:gap-x-10 gap-x-3">
          <p className="sm:text-8xl text-6xl">What</p>
          <div className="flex flex-col">
            <p className="sm:text-normal text-xs">I'm happy to call</p>
            <p className="sm:text-normal text-xs">some of them friends</p>
          </div>
        </div>

        <div>
          <div>
            <p className="sm:text-8xl text-6xl pl-1 sm:pl-24">People Say</p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-12">
        <div className="flex flex-col border-2 border-darkLine">
          <div className="w-full border-b-2 border-b-darkLine uppercase flex flex-row justify-between text-sm leading-4 p-3">
            <div className="w-1/2 flex sm:flex-row sm:items-center flex-col sm:justify-between md:pr-[6%] sm:pr-[4%] sm:gap-x-9 gap-y-4">
              <p className="pl-3">
                <span className="font-bold">Name:</span> Frazer Hurrell
              </p>
              <p className="pl-3">
                <span className="font-bold">Role:</span> Creative Technologist
              </p>
            </div>
            <div className="w-1/2 flex sm:flex-row sm:items-center flex-col sm:justify-between md:pl-[6%] sm:pl-[4%] pl-16 sm:gap-x-9 gap-y-4">
              <p>
                <span className="font-bold">Company:</span> Yahoo!
              </p>
              <p className="sm:pr-4">
                <span className="font-bold">Project:</span> British Airways
              </p>
            </div>
          </div>

          <div className="w-full flex lg:flex-row lg:gap-y-0 flex-col gap-y-10 p-4">
            <div className="pt-5 lg:w-1/2 lg:h-1/3 md:w-10/12 md:h-4/6 w-full h-full self-center">
              <img src="assets/images/commenter1.png" alt="Frazer Hurrell" />
            </div>

            <div className="flex flex-col justify-center lg:w-1/2 w-full p-5 ">
              <div className="pb-9 md:pl-3 lg:pl-0">
                <CommentIcon />
              </div>
              <p className="text-2xl leading-8 md:p-8 p-5">
                From the initial meeting to the final delivery, Ethan has
                created a feeling of trust and delivered everything we asked of
                him. The quality of his work speaks for itself and he is able to
                execute at a pace. He is an excellent Webflow developer and we
                will be calling on his services again, very soon.
              </p>
            </div>
          </div>

          <div className="border-t-2 border-darkLine p-7 flex justify-center">
            <p>01/04</p>
          </div>
        </div>
      </div>



    </div>
  );
}

export default Comments