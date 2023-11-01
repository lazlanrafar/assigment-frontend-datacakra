import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Cookies from "js-cookie";
import { useGetUserByIdQuery } from "../../../store/services/app";
import { Avatar, Modal } from "antd";

export default function AppNavbarMenuProfile() {
  const id = Cookies.get("id");
  const { data } = useGetUserByIdQuery(id);

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("name");
    Cookies.remove("email");

    window.location.href = "/login";
  };

  return (
    <>
      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img className="h-10 w-10 rounded-full" src={data?.avatar} alt="" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={handleOpenModal}
                  className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                >
                  Your Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  onClick={handleLogout}
                  className={classNames(
                    active ? "bg-gray-100 text-red-500 font-medium" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Sign out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>

      <Modal title="Profile" open={showModal} onCancel={handleCloseModal} footer={[]}>
        <div className="text-center">
          <Avatar size={100} src={data?.avatar} />
          <h1 className="relative mx-auto text-center text-xl font-bold leading-[130%] text-black md:text-[25px]">
            <span className="relative">
              <svg
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 top-0 ml-[-30px] mt-[-16px] h-[30px] w-[30px] md:-left-4 md:-top-2 md:ml-[-27px] md:h-[46px] md:w-[46px]"
              >
                <path
                  d="M40.914 17.3247C41.5376 17.5348 42.1353 17.7192 42.6857 17.8785C42.1356 18.0379 41.5382 18.2223 40.9149 18.4324C38.2584 19.3279 34.9942 20.7341 32.9811 22.7489C30.9679 24.7637 29.5645 28.0291 28.6712 30.6864C28.4616 31.3099 28.2777 31.9074 28.1188 32.4576C27.959 31.9074 27.7741 31.3099 27.5635 30.6864C26.6657 28.0291 25.2568 24.7637 23.2403 22.7489C21.2237 20.7341 17.9572 19.3279 15.2991 18.4324C14.532 18.1739 13.8042 17.9544 13.1554 17.7725C13.7795 17.5571 14.4799 17.3066 15.2208 17.0261C17.8327 16.0374 21.033 14.6464 23.1421 13.0857C24.2834 12.2411 25.1937 10.9753 25.9182 9.61849C26.6472 8.25308 27.2171 6.73993 27.6525 5.34235C27.8486 4.71314 28.0184 4.10372 28.164 3.53705C28.3073 4.02016 28.469 4.53586 28.6497 5.07064C29.5474 7.72794 30.9563 10.9933 32.9729 13.0081C34.9894 15.023 38.2559 16.4291 40.914 17.3247Z"
                  fill="#FEE156"
                  stroke="black"
                  stroke-width="1.6"
                ></path>
                <path
                  d="M12.7594 34.2277C13.9646 35.4319 15.8822 36.253 17.4032 36.7674C15.8831 37.2817 13.9669 38.1028 12.7636 39.307C11.5604 40.5113 10.7409 42.4282 10.2278 43.9488C9.71221 42.4282 8.88955 40.5113 7.68426 39.307C6.4722 38.096 4.53982 37.2725 3.0148 36.7587C2.93393 36.7315 2.85382 36.705 2.77461 36.6792C2.8432 36.6537 2.9125 36.6277 2.98243 36.6012C4.47699 36.0354 6.34413 35.2272 7.59005 34.3052C8.29966 33.7801 8.84885 33.0073 9.27429 32.2105C9.69568 31.4213 10.024 30.5545 10.2746 29.7572C10.7931 31.2481 11.5989 33.0682 12.7594 34.2277Z"
                  fill="#FEE156"
                  stroke="black"
                  stroke-width="1.6"
                ></path>
              </svg>
              Profile <span className="text-primary">{data?.name}</span>
            </span>
          </h1>{" "}
          <p className="text-gray-500">{data?.email}</p>
        </div>
      </Modal>
    </>
  );
}
