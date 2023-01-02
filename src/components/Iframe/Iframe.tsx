import Image                   from 'next/image'
import React, { FC, useState } from 'react'
import style                   from './Iframe.module.scss'
import { IframeProps }         from './IframeProps'


const Iframe: FC<IframeProps> = ({ embed }) => {
	const [ imageClicked, setImageClicked ] = useState(false)

	const onThumbnailClick = () => {
		setImageClicked(true)
	}

	return (
		<div className={ style.iframe }>
			{ !imageClicked ?
				<div className={ style.iframePoster } onClick={ onThumbnailClick }>
					<Image
						src={ `https://img.youtube.com/vi/${ embed }/sddefault.jpg` }
						layout="fill"
						objectFit="cover"
						alt="yt thumbnail"
						priority
					/>
				</div>
				:
				<iframe
					frameBorder="1"
					allowFullScreen
					src={
						imageClicked
							? `https://www.youtube.com/embed/${ embed }?rel=0&showinfo=0&autoplay=1`
							: ''
					}
					title="youtube video"
				/>
			}
		</div>
	)
}
export default Iframe