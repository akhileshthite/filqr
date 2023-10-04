import React from "react";

function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font shadow-md">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-600 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-blue-500 sm:py-2 sm:mt-0 mt-4">
            © 2023 FilQR | All rights reserved | Made with 💙 by
            <a
              href="https://twitter.com/akhileshthite_"
              class="text-blue-500 ml-1 hover:underline text-gray-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              @akhileshthite_
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
