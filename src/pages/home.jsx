import toast from "solid-toast";
import { Title } from "@solidjs/meta";
import { createSignal, Show } from "solid-js";
import bg_image from "../public/20250602_2154_Darkened Red Gradient_remix_01jwrzszpvfspaqyczyapmjvpj.png";

const submitBooking = async (data) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  const backendAPI = "https://freedomloisa.pythonanywhere.com";

  const url = `${backendAPI}/api/v1/book-a-call`;

  try {
    const response = await fetch(url, options);

    const res = await response.json();

    if (response.status >= 400) {
      const message = res?.detail
        ? res?.detail
        : getErrorMessage(response.status);

      return {
        status: response.status,
        message,
      };
    }

    return res;
  } catch (err) {
    throw new Error("Something went wrong: " + err);
  }
};

function Home(props) {
  const [isLoading, setIsLoading] = createSignal(false);

  const [formData, setFormData] = createSignal({
    name: "",
    email: "",
    phone: "",
    message: "",
    scheduled_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData(), [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form...");

    setIsLoading(true);

    if (typeof Email === "undefined") {
      console.error("Email object is undefined");
      toast.error("Email service not available. Please try again later.");
      setIsLoading(false);
      return;
    }

    try {
      const data = { ...formData() };

      if (data.scheduled_date) {
        data.scheduled_date = new Date(data.scheduled_date).toISOString();
      }

      const result = await submitBooking(data);

      if (result.status && result.status >= 400) {
        toast.error(result.message);
      } else {
        toast.success(result?.message);
      }
    } catch (error) {
      toast.error("Error: " + error.message);
      console.error("Send error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Title>Home | Vanguard Horizon</Title>

      <div
        className="min-h-screen mx-4 flex justify-center items-center"
        // style={{ "background-image": `url(${bg_image})` }}
        id="cta"
      >
        <div
          className="bg-base-200 rounded-box p-8 text-center bg-cover bg-center text-white shadow"
          style={{ "background-image": `url(${bg_image})` }}
        >
          <h1 className="text-4xl font-bold leading-tight">
            We Build, Automate, & Grow <br />
            Brands That Scale
          </h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Full service Web Design, Automation, Marketing, and Business Growth
            Solutions for Entrepreneurs, Creators & Companies Ready to Level Up.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a href="/#book-a-call" className="btn btn-error">
              Book a Free Strategy Call
            </a>
            <a href="/#services" className="btn btn-outline">
              View Service Packages
            </a>
          </div>
        </div>
      </div>

      <div className="min-h-screen" id="services">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left text-sm w-4/6 mx-auto">
          {/* Web Design & Dev */}
          <div className="m-4">
            <h2 className="font-bold text-lg mb-2">Web Design & Development</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Custom Website Design & UX/UI</li>
              <li>Website Redesigns</li>
              <li>E-commerce Development (Shopify, WooCommerce)</li>
              <li>Funnel & Landing Page Creation</li>
              <li>Back-End Cleanup & Optimization</li>
              <li>Website Maintenance & Performance Tuning</li>
            </ul>
            <p className="mt-2 text-gray-500">
              Modern, responsive, and conversion-driven websites tailored to
              your brand and business goals.
            </p>
          </div>

          {/* Lead Advertising & Growth */}
          <div className="m-4">
            <h2 className="font-bold text-lg mb-2">
              Lead Advertising & Growth Marketing
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>B2B & B2C Lead Gen.roreration</li>
              <li>Inbound/Outbound Lead Nurturing</li>
              <li>Appointment Setting & CRM Sync</li>
              <li>SEO & Content Strategy</li>
              <li>Retargeting & ConversionOptimizati.on</li>
              <li>Social Media Strategy & Scheduling</li>
            </ul>
            <p className="mt-2 text-gray-500">
              We bring the leads. You close the deals. Or we can do both.
            </p>
          </div>

          {/* Automation */}
          <div className="m-4">
            <h2 className="font-bold text-lg mb-2">
              Automation & Workflow Systems
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>CRM, Email, & Sales Automation</li>
              <li>Business Process Automation (Zapier, Make, custom)</li>
              <li>Onboarding & Client Experience Automation</li>
              <li>AI Chatbots & Booking Systems</li>
              <li>Custom Dashboards & Reporting</li>
            </ul>
          </div>

          {/* Business Dev */}
          <div className="m-4">
            <h2 className="font-bold text-lg mb-2">
              Business Development & Scaling Support
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Brand Strategy & Identity Development</li>
              <li>Sales Funnel Mapping & Optimization</li>
              <li>Market Research & KPI Tracking</li>
              <li>Pitch Decks, Business Plans & Investment Prep</li>
              <li>Affiliate & Partnership Program Setup</li>
            </ul>
            <p className="mt-2 text-gray-500">
              From startup to scale-up, we help you build the systems that grow
              your business.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 flex justify-center items-center pb- 0 lg:pb-32 pt-32">
        <div
          className="bg-base-200 rounded-box p-8 text-center bg-cover bg-center text-white shadow"
          style={{ "background-image": `url(${bg_image})` }}
        >
          <h2 className="text-2xl font-semibold mb-2">
            Let’s Build What’s Next for Your Brand
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Book a free call and discover what’s possible with a team that
            handles design, automation, growth & systems.
          </p>
        </div>
      </div>

      <div
        className="min-h-screen mx-4 flex justify-center items-center"
        id="book-a-call"
      >
        <fieldset className="fieldset bg-base-100 rounded-box w-full lg:w-2/5 shadow p-4">
          <legend className="fieldset-legend">Book a call</legend>

          <form onSubmit={handleSubmit}>
            <label className="label">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData().name}
              className="input w-full mb-4"
              placeholder="Full Name"
              onInput={handleChange}
              required
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              value={formData().email}
              className="input w-full mb-4"
              placeholder="Email"
              onInput={handleChange}
              required
            />

            <label className="label">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData().phone}
              className="input w-full mb-4"
              placeholder="Phone Number"
              onInput={handleChange}
              required
            />

            <label className="label">Date & Time</label>
            <input
              type="datetime-local"
              name="scheduled_date"
              value={formData().scheduled_date}
              className="input w-full mb-4"
              placeholder="Phone Number"
              onInput={handleChange}
              required
            />

            <label className="label">Message</label>
            <textarea
              name="message"
              value={formData().message}
              className="textarea input w-full mb-4"
              placeholder="How may we help you?"
              onInput={handleChange}
              required
            ></textarea>

            <button type="submit" className="btn btn-error w-full mt-4">
              Submit{" "}
              <Show when={isLoading()}>
                <span className="loading loading-spinner loading-sm"></span>
              </Show>
            </button>
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default Home;
