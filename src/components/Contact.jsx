import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const { scrollYProgress } = useScroll();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_25kecsc",
        "template_ga8x03h",
        form.current,
        "iwiCbJAoKtVVWTs6i"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsMessageSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const closeModal = () => {
    setIsMessageSent(false);
  };

  const handleClick = () => {
    setIsButtonClicked(true);
    setTimeout(() => {
      setIsButtonClicked(false);
    }, 500);
  };

  return (
    <div className={`flex justify-center items-center h-screen pt-60 mb-10`}>
      <motion.div
        style={{ scaleX: scrollYProgress }} 
        className="glass-effect p-20 rounded-2xl max-sm:p-10 max-sm:mb-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <form
          ref={form}
          onSubmit={sendEmail}
          className='flex flex-col gap-4 w-80 max-sm:w-60'
        >
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name="from_name"
              value={form.name}
              placeholder="What's your name?"
              className='bg-black py-4 px-6 placeholder:text-primary text-sm text-primary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name="reply_to" 
              placeholder="What's your email address?"
              className='bg-black py-4 px-6 placeholder:text-primary text-sm text-primary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Your Message</span>
            <textarea
              rows={5}
              name="message"
              placeholder='What would you say?'
              className='bg-black py-4 px-6 placeholder:text-primary text-sm text-primary rounded-lg outline-none border-none font-medium'
            />
          </label>
          <motion.button
            type="submit"
            value="Send"
            className={`bg-[#ffaa00] text-white [#666666]-gradient w-22 h-10 rounded-full flex justify-center items-center shadow-md shadow-primary cursor-pointer ${
              isButtonClicked ? "button-clicked" : ""
            }`}
            onClick={handleClick}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>
        </form>
      </motion.div>

      {isMessageSent && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-xl text-[#666666] font-bold mb-4">Message Sent!</h2>
            <p className="text-m text-[#666666]">Your message has been successfully sent.</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-[#666666] text-white rounded-lg hover:bg-[#d6aecd]-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
