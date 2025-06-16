import { useState } from "react";

const InformationForm = () => {
  const [selectedGender, setSelectedGender] = useState(null);

  const genders = [
    {
      label: "Male",
      icon: "/img/free-neutration/male.svg",
    },
    {
      label: "Female",
      icon: "/img/free-neutration/female.svg",
    },
  ];

  const years = Array.from(
    { length: 100 },
    (_, i) => new Date().getFullYear() - i
  );
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const nationalities = [
    "India",
    "United Arab Emirates",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "China",
    "Brazil",
    "South Africa",
  ];

  const countryCodes = [
    { code: "+91", flag: "🇮🇳" },
    { code: "+971", flag: "🇦🇪" },
    { code: "+1", flag: "🇺🇸" },
    { code: "+44", flag: "🇬🇧" },
    { code: "+61", flag: "🇦🇺" },
    { code: "+81", flag: "🇯🇵" },
  ];

  return (
    <div className="text-center space-y-8">
      <h3 className="text-2xl font-bold text-gray-800">
        Enter Your Information
      </h3>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div>
          <label className="block text-left font-semibold mb-2 text-xs">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your First Name..."
            className="w-full rounded-full border-1 border-green-500 px-5 py-3 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-left font-semibold mb-2 text-xs">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter your Last Name..."
            className="w-full rounded-full border-1 border-green-500 px-5 py-3 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-left font-semibold mb-2 text-xs">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your Email Address..."
            className="w-full rounded-full border-1 border-green-500 px-5 py-3 focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <select className="rounded-full border-1 border-green-500 px-4 py-3 text-sm">
            {countryCodes.map(({ code, flag }) => (
              <option key={code} value={code}>
                {flag} {code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            placeholder="Enter number"
            className="w-full rounded-full border-1 border-green-500 px-5 py-3 focus:outline-none"
          />
        </div>
      </div>

      {/* Nationality and DOB */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div>
          <label className="block text-left font-semibold mb-2 text-xs">
            Nationality
          </label>
          <select className="w-full rounded-full border-1 border-green-500 px-5 py-3 focus:outline-none">
            <option>Select Nationality...</option>
            {nationalities.map((nation) => (
              <option key={nation}>{nation}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-left font-semibold mb-2 text-xs">
            Date of Birth
          </label>
          <div className="flex gap-2">
            <select className="flex-1 rounded-full border-1 border-green-500 px-4 py-2">
              <option>YYYY</option>
              {years.map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
            <select className="flex-1 rounded-full border-1 border-green-500 px-4 py-2">
              <option>MM</option>
              {months.map((m, i) => (
                <option key={i + 1} value={i + 1}>
                  {m}
                </option>
              ))}
            </select>
            <select className="flex-1 rounded-full border-1 border-green-500 px-4 py-2">
              <option>DD</option>
              {days.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Gender */}
      <div className="max-w-2xl mx-auto">
        <label className="block text-left font-semibold mb-4 text-xs">
          Gender
        </label>
        <div className="flex justify-center gap-8">
          {genders.map((g, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedGender(idx)}
              className={`w-40 h-48 rounded-2xl border-1 flex flex-col items-center justify-center transition-all shadow-md ${
                selectedGender === idx
                  ? "border-green-600 bg-green-50 scale-105 shadow-lg"
                  : "border-gray-300 bg-white hover:bg-green-50"
              }`}
            >
              <img src={g.icon} alt={g.label} className="w-16 h-16 mb-4" />
              <span className="font-semibold text-lg text-gray-800">
                {g.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformationForm;
