import { LogoWhite, ParticleBottom, ParticleTop } from "../../assets";

export default function BannerAuth() {
  const company = [
    "https://e7.pngegg.com/pngimages/14/790/png-clipart-travel-company-logo.png",
    "https://png.pngtree.com/png-clipart/20190604/original/pngtree-creative-company-logo-png-image_1197025.jpg",
    "https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png",
  ];

  return (
    <div className="hidden max-h-screen md:flex h-screen">
      <div className="relative flex w-full flex-col items-center overflow-y-auto bg-primary bg-cover px-10 py-6 md:py-9">
        <a className="z-10 self-start" href="/">
          <img src={LogoWhite} className="h-6" />
        </a>
        <img className="absolute left-0 top-0" src={ParticleTop} alt="particle" />
        <img className="absolute bottom-0 right-0" src={ParticleBottom} alt="particle" />

        <div className="relative mt-[115px] min-w-full">
          <div className="absolute z-10 text-2xl font-bold text-white InfoSection_text_shadow__SsUmv">
            Let 750+ destination approach you with
            <br />
            <span className="text-[#FEE156]">Tourist</span>
          </div>
          <div className="absolute left-[3px] top-[3px] text-2xl font-bold text-black InfoSection_text_shadow__SsUmv">
            Let 750+ destination approach you with <br />
            Tourist
          </div>
          <div className="h-[96px]"></div>
        </div>
        <div className="mt-[27px] grid w-full grid-cols-3 gap-[9px]">
          {company.map((item, index) => (
            <div className="relative h-[56px]" key={index}>
              <div className="absolute left-1 top-1 h-[56px] w-full rounded border border-neutral-100 bg-[#FEE156]"></div>
              <div className="absolute z-10 flex h-[56px] w-full items-center justify-center rounded border border-neutral-100 bg-white p-2">
                <img src={item} className="h-full w-full object-contain"></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
