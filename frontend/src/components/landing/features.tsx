
import { FaShieldAlt, FaRegCheckCircle, FaMoneyCheckAlt } from "react-icons/fa";
import verified from "../../assets/img/landing/brand1.jpg";
import security from "../../assets/img/landing/brand2.jpg";
import payments from "../../assets/img/landing/brand3.jpg";

const features = [
    {
        title: "Licensed & Regulated",
        description: "Fully compliant with international financial regulations",
        image: verified,
        icon: <FaRegCheckCircle className="text-green-600 text-3xl mb-2 mx-auto" />,
    },
    {
        title: "Bank-Level Security",
        description: "Advanced encryption and multi-layer protection",
        image: security,
        icon: <FaShieldAlt className="text-blue-600 text-3xl mb-2 mx-auto" />,
    },
    {
        title: "Secure Transactions",
        description: "Protected payment processing and instant withdrawals.",
        image: payments,
        icon: <FaMoneyCheckAlt className="text-purple-600 text-3xl mb-2 mx-auto" />,
    },
];


const Features = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className=" text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700">
                    Your Financial Future with Confidence
                </h2>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    At kryptoblock investment Network, we combine cutting-edge technology with expert market analysis to deliver exceptional investment opportunities.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
                    >
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 text-center">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
