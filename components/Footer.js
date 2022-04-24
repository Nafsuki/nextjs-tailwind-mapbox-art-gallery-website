import Link from 'next/link';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row bg-almostBlack dark:bg-shine text-white dark:text-almostBlack px-8 py-10 md:py-20 lg:py-30 lg:px-30 xl:px-40 justify-between md:items-start">
      <h3
        className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
        style={{ lineHeight: '1.5rem' }}>
        Latin Shine
        <br />
        Dance Company
        <br />
        <span className="text-[10px]">© All Rights Reserved</span>
      </h3>
      <p className="my-12 md:m-0 font-light font-outfit text-bodyXS md:w-2/5">
        Wednesday Bachata classes in High Wycombe, Buckinghamshire.
        <br />
        <Link href="/terms"><a className="underline text-white hover:text-shine" target="_self">Terms and Conditions</a></Link>
        {' | '}
        <Link href="/privacy"><a className="underline text-white hover:text-shine" target="_self">Privacy Policy</a></Link>
        {/* {' | '} */}
        {/* <Link href="/dataprotection"><a className="underline text-white hover:text-shine" target="_self">Data Protection</a></Link> */}
      </p>

      <div className="gap-5">
        <SocialIcons />
        <div className="flex flex-row justify-center">
          <a className="hover:underline hover:text-shine" href="mailto:latin_shine@outlook.com?subject = Website&body = Hi Latin Shine,">
            latin_shine@outlook.com
          </a>
        </div>
        
      </div>
    </footer>
  );
}
