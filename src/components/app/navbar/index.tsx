import { Disclosure } from "@headlessui/react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

import AppNavbarMenuProfile from "./menu-profile";
import { ICStar, Logo } from "../../../assets";

export default function AppNavbar() {
  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div className="h-[58px] w-full bg-primary lg:top-0 lg:h-[35px] top-0">
        <div className="h-full bg-[#27125C99]">
          <div className="flex h-full flex-col items-center justify-center gap-[2px] lg:flex-row lg:gap-2">
            <div className="relative flex">
              <img src={ICStar} alt="Icon Star" width={15} />
              <div className="text-center text-xs font-bold text-white lg:text-[13px]">New to Dealls?</div>
            </div>
            <div className="hidden h-[1px] w-2 bg-white lg:block"></div>
            <div className="text-[11px] leading-[14.3px] text-white lg:text-xs lg:leading-[15.6px]">
              Learn how we revolutionize job–seeking for Indonesia{" "}
            </div>
          </div>
        </div>
      </div>
      <Disclosure as="nav" className="bg-white shadow-md">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-primary  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <CloseOutlined className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuOutlined className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img className="h-6 w-auto" src={Logo} alt="Logo" />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-primary underline  font-semibold"
                              : "hover:text-primary hover:underline",
                            "rounded-md px-3 py-2 text-sm underline-offset-8 decoration-2"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <AppNavbarMenuProfile />
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? "text-primary underline  font-semibold" : "hover:text-primary hover:underline",
                      "block rounded-md px-3 py-2 text-base underline-offset-8 decoration-2"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
