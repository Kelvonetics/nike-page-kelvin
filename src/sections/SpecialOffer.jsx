import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="Show Promotion" width={773} height={687}
        className="object-contain w-full" />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red"> Special </span>
          Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefine your experience with unbeatable deals. From premium selections to incredible savings.
          We offer unparalleled value that sets us apart.
        </p>

        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <button type="button" className="coral-btn bg-white border border-slate-gray text-slate-gray">
            Learn more  <img src={arrowRight} alt="arrow icon" />
          </button>
         
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer