import step1 from '../../assets/svg/undraw_access-account_aydp.svg';
import step2 from '../../assets/svg/undraw_digital-currency_u5p6.svg';
import step3 from '../../assets/svg/undraw_progress-data_gvcq.svg';
import step4 from '../../assets/svg/undraw_stock-prices_8nuz.svg';

const steps = [
  {
    title: 'Open Account',
    description: 'Create your account and verify your identity.',
    image: step1,
  },
  {
    title: 'Fund Wallet',
    description: 'Deposit securely using multiple payment options.',
    image: step2,
  },
  {
    title: 'Trade & Invest',
    description: 'Explore assets and start investing immediately.',
    image: step3,
  },
  {
    title: 'Grow Wealth',
    description: 'Track your growth and withdraw profits anytime.',
    image: step4,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-bold text-indigo-600">How it works</h2>
        <p className="text-gray-600 md:text-lg mt-4 max-w-xl mx-auto">
          Start your journey in just a few simple steps — from signing up to growing your wealth.
        </p>
      </div>

      <div className="relative overflow-x-auto">
        {/* Connecting Dots Path (SVG) */}
        <div className="absolute top-16 left-0 right-0 h-6 hidden md:block">
          <svg viewBox="0 0 1000 60" preserveAspectRatio="none" className="w-full h-full">
            <path
              d="M0,30 C250,0 750,60 1000,30"
              stroke="#CBD5E0"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5,5"
            />
          </svg>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-4">
                <img src={step.image} alt={step.title} className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-md text-gray-600 mt-2 max-w-[200px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
