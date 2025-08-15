const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-10">
      <div className="container p-4 flex justify-between items-center mx-auto ">
        <h1 className="text-2xl">TxBody</h1>
        <div className="flex gap-x-4 text-base">
          <a href="/" className="text-lg">
            Github
          </a>
          <a href="/about" className="text-lg">
            Contact Us
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
