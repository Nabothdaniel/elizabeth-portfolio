import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import Ceo1 from '../../assets/img/landing/ceo1.jpg'
import Ceo2 from '../../assets/img/landing/ceo2.jpg'
import Ceo3 from '../../assets/img/landing/ceo3.jpg'
import Ceo4 from '../../assets/img/landing/ceo4.jpg'

// Example team data — replace with your actual team info
const teamMembers = [
  {
    name: "Sophia Munn",
    role: "Chief Financial Officer",
    image: Ceo1,
  },
  {
    name: "Mia de Silva",
    role: "Content Lead",
    image: Ceo2,
  },
  {
    name: "Jackson Love",
    role: "Sales Manager",
    image: Ceo3,
  },
  {
    name: "Cassandra Maven",
    role: "Head of CX",
    image: Ceo4,
  },

];

const Teams = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600">
          We are the people who make up Kuwait Investment Company
        </h2>
        <p className="text-gray-600 text-lg mt-4">Meet our passionate and talented team</p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="group rounded-lg bg-gray-50 p-4 hover:shadow-md transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative w-full h-56 mb-4 overflow-hidden rounded-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition"
              />

              <ArrowUpRight className="absolute bottom-2 right-2 text-white bg-black p-1 rounded-full w-6 h-6 opacity-0 group-hover:opacity-100 transition" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Teams;
