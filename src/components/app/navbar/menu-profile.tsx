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
          <p className="text-lg font-medium mt-2">{data?.name}</p>
          <p className="text-gray-500">{data?.email}</p>
        </div>
      </Modal>
    </>
  );
}
