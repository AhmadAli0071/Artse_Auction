import { Body, Caption, Container, Title } from "../../router";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { commonClassNameOfInput } from "../../components/common/Design";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

export const ProductsDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <section className="pt-24 px-8">
        <Container>
          <div className="flex justify-between gap-8">
            <div className="w-1/2">
              <div className="h-[70vh]">
                <img src="https://artesauctions.com/wp-content/uploads/2016/11/Chiocchi-Cello-PG-6.2016-scaled.jpg" alt="Violin" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
            <div className="w-1/2">
              <Title level={2} className="capitalize">
                Fine Italian Violin by Gaetano Chiocchi
              </Title>
              <div className="flex gap-5">
                <div className="flex text-green ">
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStarHalf size={20} />
                  <IoIosStarOutline size={20} />
                </div>
                <Caption>(2 customer reviews)</Caption>
              </div>
              <br />
              <Body>This exquisite violin, crafted by renowned Italian luthier Gaetano Chiocchi, showcases exceptional craftsmanship and tonal quality. Made from high-quality spruce and maple, it features a beautifully varnished finish and a rich, resonant sound ideal for professional musicians and collectors alike.</Body>
              <br />
              <Caption>Item condition: Excellent</Caption>
              <br />
              <Caption>Item Verified: Yes</Caption>
              <br />
              <Caption>Time left:</Caption>
              <br />
              <div className="flex gap-8 text-center">
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>149</Title>
                  <Caption>Days</Caption>
                </div>
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>12</Title>
                  <Caption>Hours</Caption>
                </div>
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>36</Title>
                  <Caption>Minutes</Caption>
                </div>
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>51</Title>
                  <Caption>Seconds</Caption>
                </div>
              </div>
              <br />
              <Title className="flex items-center gap-2">
                Auction ends:
                <Caption>December 31, 2024 12:00 am</Caption>
              </Title>
              <Title className="flex items-center gap-2 my-5">
                Timezone: <Caption>UTC 0</Caption>
              </Title>
              <Title className="flex items-center gap-2 my-5">
                Starting Price:<Caption>30000 CHF </Caption>
              </Title>
              <Title className="flex items-center gap-2">
                Current bid:<Caption className="text-3xl">60000 CHF </Caption>
              </Title>
              <div className="p-5 px-10 shadow-s3 py-8">
                <form className="flex gap-3 justify-between">
                  <input className={commonClassNameOfInput} type="number" name="price" />
                  <button type="button" className="bg-gray-100 rounded-md px-5 py-3">
                    <AiOutlinePlus />
                  </button>
                  <button type="submit" className={`py-3 px-8 rounded-lg ${"bg-gray-400 text-gray-700 cursor-not-allowed"}`}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="details mt-8">
            <div className="flex items-center gap-5">
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "description" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("description")}>
                Description
              </button>
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "auctionHistory" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("auctionHistory")}>
                Auction History
              </button>
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "reviews" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("reviews")}>
                Reviews(2)
              </button>
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "moreProducts" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("moreProducts")}>
                More Products
              </button>
            </div>

            <div className="tab-content mt-8">
              {activeTab === "description" && (
                <div className="description-tab shadow-s3 p-8 rounded-md">
                  <Title level={4}>Product Overview</Title>
                  <br />
                  <Caption className="leading-7">
                    A masterpiece from the late 19th century, this Gaetano Chiocchi violin embodies the pinnacle of Italian violin-making tradition. The instrument delivers an outstanding balance of power, warmth, and clarity, making it highly sought after by collectors and concert performers worldwide.
                  </Caption>
                  <br />
                  <Title level={4}>Specifications</Title>
                  <div className="flex justify-between gap-5">
                    <div className="mt-4 capitalize w-1/2">
                      <div className="flex justify-between border-b py-3">
                        <Title>Maker</Title>
                        <Caption>Gaetano Chiocchi</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>Year</Title>
                        <Caption>1880</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>Body Length</Title>
                        <Caption>355 mm</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>Condition</Title>
                        <Caption>Excellent</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>Starting Bid</Title>
                        <Caption>$5,000</Caption>
                      </div>
                      <div className="flex justify-between border-b py-3">
                        <Title>Estimated Value</Title>
                        <Caption>30,000 CHF - 70,000 CHF</Caption>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
