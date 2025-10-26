export default function MembershipPage() {
  const plans = [
    {
      name: 'Basic',
      price: '$9/month',
      features: [
        'Ad-free reading',
        'Basic content access',
        'Weekly newsletter'
      ]
    },
    {
      name: 'Premium',
      price: '$29/month',
      featured: true,
      features: [
        'All Basic benefits',
        'Exclusive articles',
        'Early content access',
        'Premium newsletter'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: [
        'All Premium benefits',
        'Dedicated support',
        'Content consulting'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Choose Your Premium Plan
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl p-8 shadow-lg ${plan.featured ? 'ring-2 ring-blue-500 bg-white' : 'bg-white'}`}
            >
              <h2 className="text-2xl font-bold mb-2 text-gray-900">
                {plan.name}
              </h2>
              <p className="text-3xl font-bold mb-6 text-blue-600">
                {plan.price}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block text-center px-6 py-3 rounded-lg font-semibold ${plan.featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
