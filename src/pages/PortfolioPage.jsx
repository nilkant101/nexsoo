import { useState } from "react";

const PortfolioPage = () => {
  const tabs = [
    { id: "reels", label: "Reels & Shorts (9:16)" },
    { id: "youtube", label: "YouTube Ads (16:9)" },
    { id: "feed", label: "Social Feed Ads (1:1)" },
  ];

  const videos = {
    reels: [
      {
        id: 4,
        title: "Sangli- krushi pradhan",
        src: "https://drive.google.com/file/d/1y-pvyq6E9jNnKswQUWqh-aNfCup9EEwr/preview",
        ratio: "9/16",
      },
      {
        id: 1,
        title: "Reel Ad – Fitness Brand",
        src: "https://www.youtube.com/embed/ibBi9vbS51w?si=ualDQ_3Nqi-VRv5j?controls=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1",
        ratio: "9/16",
      },
      {
        id: 2,
        title: "Liver – Pharmaceuticals pvt.Ltd",
        src: "https://drive.google.com/file/d/1zMNxu2mMGbIB8RH_B3DwUdQCpWj9QNGv/preview",
        ratio: "9/16",
      },
      {
        id: 3,
        title: "Podhinda - fertilizer",
        src: "https://drive.google.com/file/d/1uAG6r3METhFx29TUjlQqylViQsosbDOX/preview",
        ratio: "9/16",
      },
      {
        id: 5,
        title: "POshinda- Prome Fertilizer",
        src: "https://drive.google.com/file/d/1ll82JHxjXpx37R6xHUXoQIpBCKzjiY-Y/preview",
        ratio: "9/16",
      },
      {
        id: 6,
        title: "RealEstate-Meghraj",
        src: "https://drive.google.com/file/d/127hK2YdAzl04I8AyQorBGoRkCCsw680u/preview",
        ratio: "9/16",
      },
      {
        id: 7,
        title: "School-pimpri",
        src: "https://drive.google.com/file/d/1ngoXN1qUg9PD2qyQSjYMzr89_zksxlHZ/preview",
        ratio: "9/16",
      },
      {
        id: 8,
        title: "Cafe-Cream",
        src: "https://drive.google.com/file/d/1jUKzg9gPmuPjJDDEveFXyN7HPRBa0_Ts/preview",
        ratio: "9/16",
      },
      {
        id: 9,
        title: "AP Biryani House - pune,Mumbai Highway",
        src: "https://drive.google.com/file/d/1_UwI-9FvtDYcBJBKHGybnCVcREla92Zt/preview",
        ratio: "9/16",
      },
      {
        id: 10,
        title: "ExcelAaNeel - Mutual Funnd ",
        src: "https://drive.google.com/file/d/12POzT1Mo8z0wercymu1E7k4qZjkgOawI/preview",
        ratio: "9/16",
      },
      {
        id: 101,
        title: "international Clint - travel creative ",
        src: "https://drive.google.com/file/d/1q17J0GB7mdeeUwuBjoWEPPt0eAEoRgVE/preview",
        ratio: "9/16",
      },
      {
        id: 102,
        title: "Hotel Patil Wada -OLd Sangvi Pune ",
        src: "https://drive.google.com/file/d/1nSVVPuezX9P2KMLgyGNsW5MPJtLIcK-r/preview",
        ratio: "9/16",
      },
    ],
    feed: [
      {
        id: 3,
        title: "Feed Ad – Restaurant",
        src: "https://drive.google.com/file/d/1FRwzlCszPDJVjYIajBUtmz590rPTP1Gq/preview",
        ratio: "1/1",
      },
      {
        id: 4,
        title: "Square Ad – Clinic",
        src: "https://drive.google.com/file/d/1NHGmCK-Z1GXL0YvgLPOstd5Nl4a9i8L8/preview",
        ratio: "1/1",
      },
      {
        id: 5,
        title: "Excel – Finantial information",
        src: "https://drive.google.com/file/d/16EdL-CyJ40ZLj6znROdMQH05R4c4sg03/preview",
        ratio: "1/1",
      },
      {
        id: 17,
        title: "PCOD - Gajanana Hospital",
        src: "https://drive.google.com/file/d/1YMWGdmujD3M4buyQiu9bh98Ziq9-jdQd/preview",
        ratio: "1/1",
      },
      {
        id: 8,
        title: "Digital Shiva- Be Your Own Boss",
        src: "https://drive.google.com/file/d/1dsye51plaUHqYV_CDyJxGRqqzbvIng_M/preview",
        ratio: "1/1",
      },
    ],
    youtube: [
      {
        id: 25,
        title: "Shuddha Bite - Ghee ",
        src: "https://drive.google.com/file/d/1h4x1mvWnVZH1rCovkdIn3EY5zJSdR0zS/preview",
        ratio: "16/9",
      },
      {
        id: 5,
        title: "Telvision – Cofex",
        src: "https://drive.google.com/file/d/1ex-ArKb8GD2dCNq7SP9QDRmNwOIueU0h/preview",
        ratio: "16/9",
      },
      {
        id: 6,
        title: "Protek Lozenge – Ashwamedh",
        src: "https://drive.google.com/file/d/1FSgN3m_ErIxFn5DlXfPO5KcMggmPBoA5/preview",
        ratio: "16/9",
      },
      {
        id: 7,
        title: "Radiance 24K Gold & Saffron Serum",
        src: "https://drive.google.com/file/d/1wa9l8o7m0dIiyJfhDYvImEw1cnIWdRi_/preview",
        ratio: "16/9",
      },
      {
        id: 8,
        title: "Jumbo green – Pet adv",
        src: "https://drive.google.com/file/d/1eSr16sMNGRF9YBLi6eeid3ZJawy3yE-E/preview",
        ratio: "16/9",
      },
      {
        id: 9,
        title: "Herbified – Delhi",
        src: "https://drive.google.com/file/d/1BgWec-DrwpDz6El2bjS1f-WbyOVR-fTc/preview",
        ratio: "16/9",
      },
      {
        id: 10,
        title: "Knee Regeneration Therapy",
        src: "https://drive.google.com/file/d/1VXYnJGSIp7ddTY3k78IKOBNNsNrtZLNV/preview",
        ratio: "16/9",
      },
      {
        id: 11,
        title: "Tatvamasi-Country",
        src: "https://drive.google.com/file/d/1AEq2Y6jLMx8X3bkAeKrZ8fN3QBxCVLTX/preview",
        ratio: "16/9",
      },{
        id: 10,
        title: "Brand Film – Startup",
        src: "https://www.youtube.com/embed/9If6Gns9sR8?si=_Pb4jExlvUDFiCQl",
        ratio: "16/9",
      },{
        id: 10,
        title: "personal Film",
        src: "https://drive.google.com/file/d/1npwIcN11sN9A11VRANuQt8eDkCOoyX5s/preview",
        ratio: "16/9",
      },{
        id: 10,
        title: "Biomi - product adv",
        src: "https://drive.google.com/file/d/1-lxyzc1y_x2Y_Jwfecbya3oyFj0aUC3H/preview",
        ratio: "16/9",
      },{
        id: 10,
        title: "Matrika Green - product adv",
        src: "https://drive.google.com/file/d/1dagfGtwiCuya5x8zhPgLnlAJJ3BFNaFm/preview",
        ratio: "16/9",
      },
      {
        id: 11,
        title: "Baby Product",
        src: "https://drive.google.com/file/d/1Oip-fVoPzMfd0i9-DGPKIIChCUp3mOEd/preview",
        ratio: "16/9",
      },
      {
        id: 12,
        title: "Moringa Powder - Ai video ",
        src: "https://drive.google.com/file/d/1aN6lDxh_9KzpVm0s5aX6IhNnP5uDjyg5/preview",
        ratio: "16/9",
      },
      {
        id: 13,
        title: "Msafe Organic - Dealership ",
        src: "https://drive.google.com/file/d/1PFaULE7k7czPv5f-L61DwDjs9mRFLAQH/preview",
        ratio: "16/9",
      },
    ],
  };

  const [activeTab, setActiveTab] = useState("reels");

  const getAspectClass = (ratio) => {
    if (ratio === "9/16") return "aspect-[9/16]";
    if (ratio === "1/1") return "aspect-square";
    return "aspect-video"; // 16:9
  };

  return (
    <section id="portfolio" className="scroll-mt-24 py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-light">
            Our <span className="text-[#2ED3A7]">Portfolio</span>
          </h2>
          <p className="mt-4 text-[#9CA3AF]">
            A selection of video creatives crafted for different platforms
            and performance goals.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-full text-sm transition
                ${
                  activeTab === tab.id
                    ? "bg-[#2ED3A7] text-black"
                    : "border border-white/10 text-[#9CA3AF] hover:text-white"
                }
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos[activeTab].map((video) => (
            <div
              key={video.id}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div
                className={`relative w-full ${getAspectClass(video.ratio)}`}
              >
                <iframe
                loading="lazy"
                  src={video.src}
                  title={video.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Caption */}
              <div className="p-4">
                <p className="text-sm text-[#9CA3AF]">
                  {video.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioPage;
