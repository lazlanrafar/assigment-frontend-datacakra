import { ICStar } from "../../../assets";

export default function AppNavbarBanner() {
  return (
    <div className="h-[58px] w-full bg-primary lg:top-0 lg:h-[35px] top-0">
      <div className="h-full bg-[#27125C99]">
        <div className="flex h-full flex-col items-center justify-center gap-[2px] lg:flex-row lg:gap-2">
          <div className="relative flex">
            <img src={ICStar} alt="Icon Star" width={15} />
            <div className="text-center text-xs font-bold text-white lg:text-[13px]">New to Tourist?</div>
          </div>
          <div className="hidden h-[1px] w-2 bg-white lg:block"></div>
          <div className="text-[11px] leading-[14.3px] text-white lg:text-xs lg:leading-[15.6px]">
            Learn more about our <span className="font-bold">Travel Agent Program</span>
          </div>
        </div>
      </div>
    </div>
  );
}
