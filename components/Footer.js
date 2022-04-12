import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row bg-almostBlack dark:bg-shine text-white dark:text-almostBlack px-8 py-10 md:py-20 lg:py-30 lg:px-40 justify-between md:items-start">
      <h3
        className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
        style={{ lineHeight: '1.5rem' }}>
        Latin Shine
        <br />
        Dance Company
      </h3>
      <p className="my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-2/5">
        Latin Shine - come and join us for weekly Bachata classes in
        High Wycombe, Buckinghamshire.
      </p>
      <div className="gap-5">
        <SocialIcons />
        <div className="flex flex-row justify-center">
          <a className="hover:underline hover:text-shine" href="mailto:latinshinedance@outlook.com?subject = Website&body = Hi Latin Shine,">
            latinshinedance@outlook.com
          </a>
        </div>
      </div>
    </footer>
  );
}
