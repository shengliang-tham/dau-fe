import { ethers } from "ethers";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Dropdown } from "@nextui-org/react";

export default function Navbar() {
  const [isAuthenticated, setAuthentication] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [walletBalance, setWalletBalance] = useState("");

  useEffect(() => {
    // authenticate();
    const walletAddress = localStorage.getItem("walletAddress");
    console.log(walletAddress);
    if (walletAddress) {
      setWalletAddress(walletAddress);
      setAuthentication(true);
    }
  }, []);

  const authenticate = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    setAuthentication(true);
    const signer = provider.getSigner();
    const walletAddress = await signer.getAddress();
    const walletBalance = await signer.getBalance();
    setWalletAddress(walletAddress);
    setWalletBalance(ethers.utils.formatUnits(walletBalance, 18));

    localStorage.setItem("walletAddress", walletAddress);
  };

  const disconnect = async () => {
    setAuthentication(false);
    setWalletAddress("");
    setWalletBalance("");
    localStorage.setItem("walletAddress", "");
  };

  // const retrieveWalletAddress = async () => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   return await signer.getAddress();
  // };

  const unauthenticatedNavbar = () => {
    return (
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">MetaLearn</span>
            </a>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/all-courses">
              <a class="mr-5 hover:text-gray-900">Browse All Courses</a>
            </Link>

            <div class="mr-5">
              <Dropdown>
                <Dropdown.Button light>Community</Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions">
                  <Dropdown.Item key="governance">
                    <Link href="/governance" className="">
                      <a class="mr-5 text-gray-900">Governance</a>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="events">
                    <Link href="/events" className="">
                      <a class="mr-5 text-gray-900">Events</a>
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </nav>
          <button
            onClick={authenticate}
            class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Authenticate
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    );
  };

  const authenticatedNavbar = () => {
    return (
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">MetaLearn</span>
            </a>
          </Link>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/my-courses">
              <a class="mr-5 hover:text-gray-900">My Courses</a>
            </Link>
            <Link href="/profile">
              <a class="mr-5 hover:text-gray-900">Profile</a>
            </Link>
          </nav>

          <Dropdown>
            <Dropdown.Button flat>{walletAddress}</Dropdown.Button>
            <Dropdown.Menu aria-label="Static Actions">
              <Dropdown.Item key="new" description={`${walletBalance} LEARN`}>
                Balance
              </Dropdown.Item>
              <Dropdown.Item key="delete" withDivider color="default">
                <div onClick={disconnect}> Disconnect</div>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            {walletAddress}
          </button> */}
        </div>
      </header>
    );
  };

  return (
    <div>
      {isAuthenticated ? authenticatedNavbar() : unauthenticatedNavbar()}
    </div>
  );
}
