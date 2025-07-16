import React from "react";
import { MdHeight } from "react-icons/md";
import { TfiAngleDoubleRight } from "react-icons/tfi";


const branches = [
  {
    title: "Main branch Surat",
    address: `Beside IT Park, Opp. Shell Petrol Pump, Near AR Mall, Panvel Point, Mota Varachha.`,
    phones: ["+91 98983 54000", "+91 98984 54000"],
  },
  {
    title: "Vanmali Punagam branch",
    address: `Shiv Campuse, Vanmali Junction, BRTS Rd, Opp Pramukh Park Society, Mad Over Grill Road, Puna Gam, Surat.`,
    phones: ["+91 98988 53000", "+91 95744 57457"],
  },
  {
    title: "Nana Varachha Branch",
    address: `Nandanvan Row-house Beside Aanganvadi, near Silver Point, Nana Varachha, Surat.`,
    phones: ["+91 7802042594", "+91 7990107838"],
  },
  {
    title: "Katargam",
    address: `Beside Mad Over Grill, Near Bhaktinandann Farm, Near Dabholi Char Rasta, Katargam, Surat 395004`,
    phones: ["+91 91045 17937"],
  },
];

const Branches = () => {
  return (
    <div className="bg-[#c6a874] py-12 text-center bg-col">
      <h2 className="text-4xl font-bold mb-10 text-black tracking-wider">OUR BRANCHES</h2>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="border-[10px] border-yellow-800 bg-black text-white p-6 w-full sm:w-[280px] md:w-[260px] rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4">{branch.title}</h3>
            <p className="mb-4 whitespace-pre-wrap text-sm">{branch.address}</p>
            <div className="text-left">
              <p className="font-bold">Mobile:</p>
              {branch.phones.map((phone, i) => (
                <p key={i} className="text-blue-300">{phone}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 m-5 px-4 py-3 bg-black welcom font-semibold rounded hover:bg-gray-800 transition-all">
        View More <TfiAngleDoubleRight />
      </button>
    </div>
  );
};

export default Branches;
