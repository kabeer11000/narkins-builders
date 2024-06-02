import React, { useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

const AdsCampaign: React.FC = ({
  headline,
  features,
}: {
  headline: string;
  features: Array<string>;
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [residency, setResidency] = useState("Narkins Boutique Residency");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("_wpcf7", "245");
    formData.append("_wpcf7_version", "5.9.5");
    formData.append("_wpcf7_locale", "en_US");
    // formData.append("_wpcf7_unit_tag", "wpcf7-f245-p634-o1");
    formData.append("_wpcf7_container_post", "634");
    formData.append("your-name", name);
    formData.append("your-number", number);
    formData.append("your-email", email);
    formData.append("your-property", residency);

    try {
      const response = await fetch(
        "https://admin.narkinsbuilders.com/wp-json/contact-form-7/v1/contact-forms/245/feedback",
        {
          credentials: "include",
          headers: {
            "Content-Type": "multipart/form-data",
          },
          referrer: "https://admin.narkinsbuilders.com/634-2/",
          body: formData,
          method: "POST",
          mode: "cors",
        },
      );

      const data = await response.json();

      if (data.status === "mail_sent") {
        setResponseMessage(data.message);
      } else {
        setResponseMessage("There was an error sending your message.");
      }
    } catch (error) {
      setResponseMessage("There was an error sending your message.");
    }
  };

  return (
    <div className="container border my-5 rounded bg-white mx-auto py-5 p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="image-column">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKae8kU5_6tMlx_wVGwVbbPTMbhekm6x__Sg&s"
            alt="Residency"
            className="w-full rounded h-auto mb-4"
          />
        </div>
        <div className="text-center">
          <h2 className="text-2xl tracking-tight mb-2 text-black sm:text-1xl">
            {headline}
          </h2>
          <h2 className="text-2xl font-bold tracking-tight text-black sm:text-4xl">
            {`Available on easy installment plans`}
          </h2>
          <div className="p-2 bg-neutral-100 border my-4 rounded-xl hover:bg-neutral-200">
            Bahria Town Karachi
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-800">
            <ul className="list-disc text-sm text-left pl-5 space-y-2">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </p>
        </div>
        <div className="form-column">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="number"
                id="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                placeholder="Your Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                placeholder="Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="residency"
                className="block text-sm font-medium text-gray-700"
              >
                Residency
              </label>
              <select
                id="residency"
                name="residency"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black sm:text-sm"
                value={residency}
                onChange={(e) => setResidency(e.target.value)}
              >
                <option value="Narkins Boutique Residency">
                  Narkins Boutique Residency
                </option>
                <option value="Hill Crest Residency">
                  Hill Crest Residency
                </option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                I am interested
              </button>
            </div>
          </form>
          {responseMessage && (
            <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              {responseMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdsCampaign;
