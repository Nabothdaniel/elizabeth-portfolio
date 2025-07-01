import { motion } from "framer-motion";

// Example testimonials
const testimonials = [
  {
    name: "Fatima Al-Hamad",
    username: "@fatima_h",
    quote:
      "Kuwait Investments transformed the way we approach long-term wealth. Their strategic insights helped secure my family’s future.",
    image: "/avatars/fatima.jpg",
  },
  {
    name: "Mohammad Al-Farsi",
    username: "@moh_farsi",
    quote:
      "Professional, insightful, and dedicated — Kuwait Investments helped diversify my portfolio beyond expectations.",
    image: "/avatars/mohammad.jpg",
  },
  {
    name: "Layla Youssef",
    username: "@layla_y",
    quote:
      "As a first-time investor, Kuwait Investments gave me the tools and confidence to start building wealth with clarity.",
    image: "/avatars/layla.jpg",
  },
  {
    name: "Salem Nasser",
    username: "@salem_n",
    quote:
      "Their customer support and financial advisory services are unmatched. Highly recommend to serious investors.",
    image: "/avatars/salem.jpg",
  },
  {
    name: "Aisha Rahman",
    username: "@aisha_rahman",
    quote:
      "Kuwait Investments is more than just a firm — it’s a partner in your financial journey.",
    image: "/avatars/aisha.jpg",
  },
  {
    name: "Omar Khalid",
    username: "@omar_k",
    quote:
      "Trustworthy, transparent, and result-driven. I’ve seen real growth thanks to their expert strategies.",
    image: "/avatars/omar.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="text-center mb-14">
        <p className="text-sm font-medium text-gray-500 uppercase">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          What Our Investors Are Saying
        </h2>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Hear directly from our valued clients at Kuwait Investment Company.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
            className="bg-gray-50 rounded-xl shadow-md p-6 space-y-4"
          >
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-12 h-12 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.username}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{testimonial.quote}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
