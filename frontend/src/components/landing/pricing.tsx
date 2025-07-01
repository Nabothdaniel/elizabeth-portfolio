import { CheckCircle } from "lucide-react";
import { motion,easeOut } from "framer-motion";

const plans = [
    {
        name: "Starter",
        label: "Short-term Plan",
        price: "$150 Minimum",
        deposit: "$150 - Above",
        features: [
            "10% Weekly Profit",
            "24/7 Support",
            "Basic Analytics",
            "Weekly Reports",
            "Email Notifications",
        ],
        roi: "40% Monthly ROI",
        withdrawal: "24h Withdrawal",
        gradient: "to-green-100 from-white",
    },
    {
        name: "Annual Plan",
        label: "Most Popular",
        price: "$1,000 Above",
        deposit: "Fixed / One-time Deposit",
        features: [
            "15% Weekly Profit",
            "Priority Support",
            "Advanced Analytics",
            "Daily Reports",
            "Mobile App Access",
            "Portfolio Diversification",
        ],
        roi: "60% Monthly ROI",
        withdrawal: "12h Withdrawal",
        highlight: true,
        gradient: "from-indigo-100 to-white",
    },
    {
        name: "Retirement Plan",
        label: "Advanced",
        price: "$5,000 Above",
        deposit: "Fixed / One-time Deposit",
        features: [
            "20% Weekly Profit",
            "VIP Support",
            "Premium Analytics",
            "Real-time Reports",
            "1-on-1 Consultation",
            "Risk Management",
        ],
        roi: "80% Monthly ROI",
        withdrawal: "6h Withdrawal",
        gradient: "from-purple-100 to-white",
    },
    {
        name: "Inheritance Plan",
        label: "Premium",
        price: "$5,000 Above",
        deposit: "Fixed / One-time Deposit",
        features: [
            "25% Weekly Profit",
            "Dedicated Manager",
            "Custom Strategies",
            "Instant Reports",
            "Priority Investment",
            "Wealth Management",
        ],
        roi: "100% Monthly ROI",
        withdrawal: "1h Withdrawal",
        gradient: "from-pink-100 to-white",
    },
];

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
            duration: 0.5,
            ease: easeOut,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const PricingSection = () => {
    return (
        <motion.section
            className="py-20 px-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600">
                    Your Path to Success
                </h2>
                <p className="mt-3 text-gray-600 text-lg max-w-xl mx-auto">
                    Select the perfect investment plan that matches your goals
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        className={`rounded-2xl border border-gray-200 bg-gradient-to-br ${plan.gradient} p-6 shadow-sm relative hover:shadow-md transition-shadow`}
                        variants={cardVariants}
                        whileHover={{ scale: 1.02 }}
                    >
                        {plan.highlight && (
                            <span className="absolute -top-4 left-6 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                                {plan.label}
                            </span>
                        )}

                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">
                                {plan.name}
                            </h3>
                            <span className="text-2xl font-bold text-gray-900">
                                {plan.price}
                            </span>
                        </div>

                        <p className="text-sm text-gray-500 mb-3">{plan.deposit}</p>

                        <ul className="mb-4 space-y-2">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center text-gray-700 text-sm">
                                    <CheckCircle className="w-4 h-4 text-indigo-600 mr-2" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4 border-t pt-4">
                            <p className="font-semibold text-green-600">{plan.roi}</p>
                            <p className="text-sm text-gray-500">{plan.withdrawal}</p>
                        </div>

                        <div className="mt-6">
                            <button className="w-full cursor-pointer bg-indigo-600 text-white py-3 rounded-full text-sm font-semibold hover:bg-indigo-700 transition">
                                Get Started
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default PricingSection;
