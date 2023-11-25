import React from "react";
import Title from "./../assets/Title";
import { RxCalendar } from "react-icons/rx";
import { useForm, ValidationError } from "@formspree/react";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xzbowwea");
  if (state.succeeded) {
    alert("Got your message we will get back to you as soon as possible");
  }
  return (
    <section className="rounded-lg shadow-md" id="contact">
      <div className="flex items-center gap-1">
        <RxCalendar size={30} color="white" />
        <Title title="Contact Page" />
      </div>
      <p className="mb-8 font-secondary text-base">
        Have questions or want to get in touch? Feel free to reach out using the
        contact form or the provided contact details.
      </p>

      <div className="mb-7 lg:flex items-center justify-center gap-5 flex-wrap">
        <form
          className="grid grid-cols-2 gap-5 mt-2"
          onSubmit={handleSubmit}
          data-aos="fade-left"
        >
          <div>
            <label htmlFor="name" className="block text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full rounded border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="Your Name"
              required
            />
            <ValidationError prefix="name" field="name" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="email" className="block text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full rounded border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="you@example.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="message" className="block text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full rounded border-gray-300 focus:ring focus:ring-blue-200"
              placeholder="Your message here..."
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="col-span-2 text-right">
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-wide"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className="bg-[#4e3d87] p-3 rounded-2xl">
        <h2 className="text-xl font-semibold mb-2">Contact Details</h2>
        <p className="font-secondary text-base">
          You can also reach me at{" "}
          <a
            href="mailto:gmali2809@gmail.com"
            className="hover:underline hover:text-black"
          >
            hello@example.com
          </a>
          . Feel free to drop a message or connect on social media!
        </p>
      </div>
    </section>
  );
};

export default ContactPage;
