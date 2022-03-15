import Link from "next/link";

function ButtonB({ path, title }) {
  return (
    <Link href={path} passHref>
      <div
        onClick={() => console.log("clicked")}
        className="absolute top-0 flex cursor-pointer md:ml-8 lg:ml-40 group h-btn"
      >
        <div className="flex items-center justify-center px-6 transition group-hover:bg-almostBlack bg-gold">
          <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
            <path stroke="#FFF" fill="none" d="M9 24 1 12 9 0" />
          </svg>
        </div>
        <a className="flex items-center justify-center px-6 font-extrabold text-white uppercase transition bg-almostBlack group-hover:bg-gold font-bigShoulder text-button">
          {title}
        </a>
      </div>
    </Link>
  );
}

export default ButtonB;
