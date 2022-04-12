import Image from 'next/image';
import ButtonA from '../components/ButtonA';
import SocialIcons from './SocialIcons';

const HeroLogo = ({hero}) => {
  const emailLink = `mailto:${hero.email}?subject=Interested!`;
  return (
    <div className="hidden lg:block lg:absolute lg:top-[89px] lg:right-0 text-center mr-20">
        <div className="p-[0px] border-2 border-white">
          <div className="ml-[30px] mt-[40px]">
            <Image
              src="/desktop/logo.png"
              width={500}
              height={170}
              // layout="responsive"
              alt="Latin Shine Dance Company Logo"
              priority="true"
            />
          </div>
          <div className="ml-[76px] text-shine font-light text-5xl mb-10 mr-[61px]">
            {hero.logoText.split('_').map((item, id) => {
              return (
                <p key={`item-${id}`}>
                  {item}
                </p>
              );
            })}
          </div>
          <div className="ml-[76px] text-white font-light text-bodyM mb-20  mr-[61px]">
            {hero.logoWhite.split('_').map((item, id) => {
              return (
                <p key={`item-${id}`}>
                  {item}
                </p>
              );
            })}
            <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href={emailLink}>{hero.email}</a>
          </div>
        </div>
        <p className="font-outfit text-white font-light text-bodyM w-[550px] mb-10">
          {hero.description}
        </p>
        <div className="flex">
          <div className="flex-1">
            <ButtonA path="/location" title="Our Location" />
          </div>
          <div className="flex-1">
            <ButtonA path="/reserve" title="Reserve your spot" />
          </div>
        </div>
      </div>
  )
}

export default HeroLogo