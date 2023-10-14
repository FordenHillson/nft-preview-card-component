import Image from "next/image";

const Index = () => {
  return (
    <div className="bg-very-dark-blue-bg font-outfit h-screen flex align-middle items-center justify-center">
      <div className="bg-very-dark-blue-card rounded-2xl m-6 md:m-2 my-14 md:mt-0 drop-shadow-2xl h-fit w-80">
        <div className="p-6">
          <button className="group relative overflow-hidden">
            <img
              src="/images/image-equilibrium.jpg"
              alt="img-nft"
              className="group-hover:opacity-50 rounded-lg"
            />
            <div className="group-hover:bg-Cyan absolute inset-0 opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
            <div className="w-full h-full">
              <img
                src="/images/icon-view.svg"
                alt="icon-view"
                className="group-hover:opacity-100 absolute m-auto left-0 right-0 top-28 opacity-0 hover:opacity-100 transition-opacity duration-250"
              />
            </div>
          </button>
        </div>

        <div className="flex flex-col justify-start text-white px-6 md:px-6">
          <p className="text-xl font-semibold md:font-medium hover:text-Cyan cursor-pointer">
            Equilibrium #3429
          </p>
          <p className="mt-5 text-base font-thin text-soft-blue">
            Our Equilibrium collection promotes balance and calm.
          </p>

          <div className="mt-5 pb-4 flex justify-between border-b border-very-dark-blue-line">
            <div className="flex justify-start items-center">
              <img
                src="/images/icon-ethereum.svg"
                alt="icon-ethereum"
                className="w-2 mr-1"
              />
              <p className="text-Cyan font-semibold text-base">0.041 ETH</p>
            </div>

            <div className="flex justify-start items-center">
              <img
                src="/images/icon-clock.svg"
                alt="icon-clock"
                className="w-4 mr-2"
              />
              <p className="font-thin text-soft-blue">3 days left</p>
            </div>
          </div>

          <div className="my-4 flex justify-start items-center mb-6 md:mb-8">
            <img
              src="/images/image-avatar.png"
              alt="img-avatar"
              className="w-8 border border-white rounded-full mr-4"
            />
            <p className="font-thin text-soft-blue mr-1">Creation of</p>
            <p className="font-thin hover:text-Cyan cursor-pointer">
              Jules Wyvern
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
