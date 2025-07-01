export default function ContactForm() {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="bg-white max-w-xl w-full rounded-2xl shadow-xl p-6 sm:p-10 space-y-6">
                <div>
                    <p className="text-sm font-semibold text-gray-500 uppercase">Contact</p>
                    <h2 className="text-3xl font-bold text-indigo-600 mt-1">
                        Let’s talk investments
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm">
                        We’d love to hear from you. Reach out with questions about our services or investment plans.
                    </p>
                </div>

                <form className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                            <input
                                type="text"
                                required
                                className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                required
                                className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone (Optional)</label>
                            <input
                                type="tel"
                                className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                            <input
                                type="text"
                                className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            What service are you interested in?
                        </label>
                        <select
                            className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>Select a plan</option>
                            <option>Short-term</option>
                            <option>Annual plan</option>
                            <option>Retirement plan</option>
                            <option>Inheritance plan</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            How can we help you? <span className="text-xs text-gray-400">(Max. 500 characters)</span>
                        </label>
                        <textarea
                            rows={4}
                            maxLength={500}
                            className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                            placeholder="Tell us more about your investment goals..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            How did you hear about us?
                        </label>
                        <input
                            type="text"
                            className="w-full rounded-md border border-gray-300 px-4 py-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                        />
                    </div>

                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-md shadow"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
