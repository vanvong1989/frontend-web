import { BiSupport } from "react-icons/bi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdCurrencyExchange } from "react-icons/md";
import { TbPackageImport } from "react-icons/tb";

const Features = () => {
  return (
    <section className="max-padd-container bg-primary mt-16 xl:mt-18 py-8 rounded-xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <div className="flexCenter gap-x-4" >
          <LiaShippingFastSolid className="text-4xl" />
          <div>
          <h5 className="medium-18">Free Shopping</h5>
          <p>On above $100 order</p>
          </div>
        </div>
        <div className="flexCenter gap-x-4" >
          <MdCurrencyExchange className="text-4xl" />
          <div>
          <h5 className="medium-18">Free Shopping</h5>
          <p>On above $100 order</p>
          </div>
        </div>
        <div className="flexCenter gap-x-4" >
          <BiSupport className="text-4xl" />
          <div>
          <h5 className="medium-18">Free Shopping</h5>
          <p>On above $100 order</p>
          </div>
        </div>
        <div className="flexCenter gap-x-4" >
          <TbPackageImport className="text-4xl" />
          <div>
          <h5 className="medium-18">Free Shopping</h5>
          <p>On above $100 order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
