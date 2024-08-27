const Footer = () => {
  return (
    <div className="bg-gray-700 relative z-10 text-white p-4 ">
      <div className="flex justify-center  space-x-4">
        <a
          href="https://github.com/deveshtuteja"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <img
            className="h-8 w-8"
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
          />
        </a>

        <a
          href="https://linkedin.com/in/devesh-tuteja"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <img
            className="h-8 w-8"
            src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"
            alt="LinkedIn"
          />
        </a>
      </div>

      <p className="text-center mt-4">
        Made By{" "}
        <a
          href="https://linkedin.com/in/devesh-tuteja/"
          className="text-white hover:text-gray-300"
        >
          Devesh Tuteja
        </a>
      </p>
    </div>
  );
};

export default Footer;
