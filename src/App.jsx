import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "flowbite";
import Svg from "./components/Svg";
function App() {
  const brands = [
    { id: 1, text: "CoinGecko" },
    { id: 2, text: "OKX" },
    { id: 3, text: "Binance" },
    { id: 4, text: "CoinBase" },
    { id: 5, text: "Bitget" },
    { id: 6, text: "Bybit" },
    { id: 7, text: "Solana" },
  ];

  return (
    <>
      <div>
        <Navbar />

        <section className="bg-gray-900 pt-20 flex-wrap">
          <div className="py-8 px-6 mx-auto max-w-screen-xl text-center lg:py-16 ">
            <h1
              id="jumbotron"
              className="mb-12 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
            >
              Welcome to <span>Leo,</span> <br /> Your Gateway to the Web3
              World!
            </h1>
            <p className="mb-12 text-lg font-normal lg:text-xl sm:px-16 lg:px-60 text-white">
              Unlock the true potential of the internet with Leo. Embrace the
              revolutionary world of blockchain and decentralized applications.
            </p>
            <div className="flex flex-col space-y-4 gap-3 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <button className="btn-start font-body inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-3xl  focus:ring-2 focus:ring-pink-100 ">
                START BUILDING
              </button>
              <button className="font-body inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-3xl border border-white focus:ring-2 focus:ring-gray-100 text-white ">
                GET STARTED
              </button>
            </div>
            <div className="mt-24">
              <p className="font-body text-pink-500 underline font-semibold">
                Your security is our top priority. Leo employs state of the art
                security measures to safeguard your digital assets and data.
              </p>
            </div>
            <div className="mt-32">
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7">
                {brands.map((brand) => (
                  <li key={brand.id} className="font-body text-white font-bold">
                    {brand.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default App;
