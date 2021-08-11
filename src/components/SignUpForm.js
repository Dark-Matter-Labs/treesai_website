const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <div className="sm:max-w-xl sm:mx-auto lg:mx-0">
      <div className="sm:flex">
        <div className="min-w-0 flex-1">
          {status === "sending" && (
            <div style={{ color: "blue" }}>sending...</div>
          )}
          {status === "error" && (
            <div
              style={{ color: "red" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          {status === "success" && (
            <div
              style={{ color: "green" }}
              dangerouslySetInnerHTML={{ __html: message }}
            />
          )}
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
            ref={(node) => (email = node)}
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
            onClick={submit}
          >
            Get notified when we launch
          </button>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
        We hate spam too. By providing your email, you agree to our{" "}
        <a
          href="https://treesai.netlify.app/"
          className="font-medium text-white"
        >
          terms or service
        </a>
        .
      </p>
    </div>
  );
};

export default CustomForm;
