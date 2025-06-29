import HeroImg from '../../assets/img/landing/test2.jpg'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'
import { FaGlobeAmericas, FaMoneyBillWave } from 'react-icons/fa'

const Hero = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 my-5 md:my-12 px-4 py-8 bg-gradient-to-br from-indigo-100 via-white to-white ">
            <div className="max-w-xl">
                <h1 className="text-5xl md:text-7xl font-bold mx-1 my-8 md:mb-4">
                    Build Your Financial Future with a Trusted Investment Partner
                </h1>
                <p className="text-lg mb-8 text-gray-700">
                    Our Kuwait-based investment firm empowers you to grow your wealth through expert insights, secure technology, and a proven track record. Join a global community of investors shaping a better tomorrow.
                </p>

                <button className="bg-indigo-600 cursor-pointer text-white py-2 px-6 rounded-full hover:bg-gray-200 hover:text-indigo-600 transition duration-300">
                    Start Investing Now
                </button>

                <div className="flex flex-wrap gap-3 mt-6">
                    <div className="flex items-center gap-2 bg-gray-400 text-white py-2 px-4 rounded-full text-sm hover:bg-gray-500 transition duration-300">
                        <AiOutlineSafetyCertificate className="text-white" size={18} />
                        <span>Regulated and Secure</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-400 text-white py-2 px-4 rounded-full text-sm hover:bg-gray-500 transition duration-300">
                        <FaGlobeAmericas className="text-white" size={18} />
                        <span>100k+ Clients Worldwide</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-400 text-white py-2 px-4 rounded-full text-sm hover:bg-gray-500 transition duration-300">
                        <FaMoneyBillWave className="text-white" size={18} />
                        <span>120M+ Managed Assets</span>
                    </div>
                </div>
            </div>

            <div className="h-[30rem] hidden md:block px-5  w-full">
                <img src={HeroImg} alt="hero img" className="h-full rounded-md  object-contain" />
            </div>
        </section>
    )
}

export default Hero
// This code defines a Hero component for a landing page, featuring a title, description, call-to-action button, and icons representing security, global reach, and managed assets. The layout is responsive, adapting to different screen sizes with a gradient background and rounded corners.
// The component uses Tailwind CSS for styling, ensuring a modern and clean design. The icons