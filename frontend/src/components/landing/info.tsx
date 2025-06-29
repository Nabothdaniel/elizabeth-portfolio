import { LuChartSpline } from "react-icons/lu";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { CiBitcoin } from "react-icons/ci";
import type { IconType } from "react-icons";

type cardsType = {
    title: string, desc: string, icon: IconType
}

const cards: cardsType[] = [
    { title: 'Stock Exchange', desc: 'Access to the global markets', icon: LuChartSpline },
    { title: 'Cryptocurrencies', desc: 'Trade all types of crypto currencies', icon: CiBitcoin },
    { title: 'Currency exchange', desc: 'Global currency trading', icon: PiCurrencyCircleDollar },
]
const Info = () => {
    return (
        <section className="bg-white py-16 px-4 md:px-0">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">

                {/* Left content */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-5xl font-bold text-indigo-600 mb-6">
                        Strategic Wealth Management for a Secure Future
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        At <span className="font-semibold text-indigo-600">KIC</span>, we specialize in transforming short-term financial success into long-term wealth. Through expert investment strategies, risk management, and personalized planning, we empower you to make informed decisions that align with your future goals. Discover a smarter, more secure path to building and sustaining wealth.
                    </p>

                    <button className="bg-indigo-600 text-lg cursor-pointer my-5 text-white py-2 px-6 rounded-full hover:bg-gray-200 hover:text-indigo-600 transition duration-300">
                        Learn More about us
                    </button>
                </div>


                {/* Right cards */}
                <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="p-5 border border-indigo-100 rounded-lg shadow-sm hover:shadow-md transition"
                        >
                            <card.icon className="w-8 h-8 mx-0 md:mx-auto  text-gray-400 mb-4" />
                            <h3 className="text-indigo-600 font-semibold text-xl mb-2">{card.title}</h3>
                            <p className="text-gray-600 text-md">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Info
