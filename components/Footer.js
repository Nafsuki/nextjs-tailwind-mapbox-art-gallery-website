import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row bg-almostBlack dark:bg-gold text-white dark:text-almostBlack px-8 py-10 md:py-20 lg:py-30 lg:px-40 justify-between md:items-start">
      <h3
        className="text-bodyM font-black uppercase font-bigShoulder cursor-pointer"
        style={{ lineHeight: "1.5rem" }}
      >
        Latin Shine
        <br />
        Dance Company
      </h3>
      <p className="my-12 md:m-0 font-light font-outfit text-bodyXS md:text-bodyS md:w-2/5">
        Latin Shine - come and join us for weekly Bachata and Salsa classes in High Wycombe, Buckinghamshire.
      </p>
      <div className="flex gap-5 items-center">
        <Link href="https://www.facebook.com/LatinShineDance" passHref>
          <svg
            className="fill-white dark:fill-almostBlack dark:hover:fill-white hover:fill-gold transition-colors cursor-pointer"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0Z" />
          </svg>
        </Link>
        <Link href="https://www.instagram.com/latinshinedance/" passHref>
          <svg
            className="dark:fill-almostBlack dark:hover:fill-white fill-white hover:fill-gold transition-colors cursor-pointer"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058ZM10 0C7.284 0 6.944.012 5.877.06 2.246.227.227 2.242.061 5.877.01 6.944 0 7.284 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0Zm0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
}
