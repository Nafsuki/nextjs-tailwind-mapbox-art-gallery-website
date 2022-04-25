function ButtonC({ action, title, disabled }) {
  return (
    <div className="pt-2 top-0 flex cursor-pointer group h-btn justify-end" onClick={(e) => {if (!disabled) action(e);}}>
      {disabled ? (
        <>
        <a className="transition opacity-30 flex items-center justify-center px-6 font-extrabold text-white uppercase bg-shine font-bigShoulder text-button">
          {title}
        </a>
        <div className="opacity-10 flex items-center justify-center px-6 transition group-hover:bg-shineDark bg-shine">
            <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" />
            </svg>
          </div>
        </>
      ) : (
        <>
          <a className="flex items-center justify-center px-6 font-extrabold text-white uppercase transition bg-shine group-hover:bg-shineDark font-bigShoulder text-button">
            {title}
          </a>
          <div className="flex items-center justify-center px-6 transition group-hover:bg-shineDark bg-shine">
            <svg width="10" height="24" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#FFF" fill="none" d="m1 0 8 12-8 12" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

export default ButtonC;
