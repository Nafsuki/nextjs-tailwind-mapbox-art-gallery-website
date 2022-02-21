import Map, { Marker, NavigationControl } from 'react-map-gl';
import ButtonB from './ButtonB';
import Image from 'next/image';

export default function LocationMap() {
	return (
		<div className='relative w-screen h-550 md:h-600'>
			<Map
				initialViewState={{
					longitude: -71.31041,
					latitude: 41.48131,
					zoom: 14,
					scrollZoom: false,
				}}
				width='100%'
				height='100%'
				mapStyle={process.env.NEXT_PUBLIC_MAP_BOX_STYLE_URL}
				mapboxAccessToken={process.env.NEXT_PUBLIC_MAP_BOX_ACCESS_TOKEN}
			>
				<Marker longitude={-71.31041} latitude={41.48131} anchor='center'>
					<div className='cursor-pointer animate-bounce'>
						<Image
							src='/icon-location.svg'
							width={66}
							height={88}
							alt='location icon'
						/>
					</div>
				</Marker>
				<NavigationControl />
			</Map>
			<ButtonB path='/' title='Back to Home' />
			{/* <Image
				src='/icon-location.svg'
				width={66}
				height={88}
				alt='location icon'
			/> */}
		</div>
	);
}
