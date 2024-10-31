const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
  <div className="text-center text-2xl py-10 font-bold">Contact Me</div>
  <p className="text-gray-900 -mt-6 dark:text-white/80 text-center">
    Feel free to contact me directly through this form.
  </p>
  <div className="flex justify-center items-center">
    <form className="w-[600px] lg:w-[400px] sm:w-full flex flex-col gap-3">
      <div className="w-full flex lg:flex-col gap-x-3 lg:gap-3">
        <input
          type="text"
          className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
          placeholder="Your Email"
        />
      </div>
      <input
        type="text"
        className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
        placeholder="Subject"
      />
      <textarea
        name="write"
        placeholder="Write Me..."
        className="max-h-[250px] min-h-[150px] border-yellow-700 rounded-md bg-zinc-100 px-4 py-2 text-sm tracking-wider text-gray-500 outline-none"
      ></textarea>
      <input
        type="submit"
        className="w-full border border-yellow-500 rounded-md bg-yellow-600 px-4 py-2 text-sm font-light tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer"
        value="Send Message"
      />
    </form>
  </div>
</div>

  );
};
export default Contact;
