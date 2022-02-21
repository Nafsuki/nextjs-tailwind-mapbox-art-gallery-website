import FooterB from '../components/FooterB';
import LocationMap from '../components/LocationMap';

const Location = () => {
	return (
		<div className=''>
			<LocationMap />
			{/* <div className='w-screen bg-center bg-no-repeat bg-mobileMap sm:bg-tabletMap md:bg-desktopMap h-550 md:h-600'>
				<ButtonB path='/' title='Back to Home' />
			</div> */}

			<div className='px-4 py-10 bg-almostBlack md:px-8 lg:px-40 md:py-24 md:flex md:space-x-24 lg:justify-between'>
				<h2 className='mt-5 mb-12 font-black text-white uppercase font-bigShoulder text-headingM md:text-headingMM lg:text-headingL lg:w-350 md:mt-0'>
					Our Location
				</h2>
				<div className='space-y-7 lg:w-2/5'>
					<h4 className='font-black uppercase font-bigShoulder text-gold text-headingXS'>
						99 King Street
					</h4>
					<div className='space-y-1 font-light text-white font-outfit text-bodyS'>
						<div className='my-5'>
							<p>Newport</p>
							<p>RI 02840</p>
							<p>United States of America</p>
						</div>
						<p className='my-8'>
							Our newly opened gallery is located near the Edward King House on
							99 King Street, the Modern Art Gallery is free to all visitors and
							open seven days a week from 8am to 9pm.
						</p>
					</div>
				</div>
			</div>
			<FooterB />
		</div>
	);
};

export default Location;
