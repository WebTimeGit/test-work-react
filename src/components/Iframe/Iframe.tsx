import Image                          from "next/image";
import React, { useState } from "react";
import style               from './Iframe.module.scss';


const embedID = "RK1K2bCg4J8";

const Iframe = () => {
	const [ imageClicked, setImageClicked ] = useState(false);

	const onThumbnailClick = () => {
		setImageClicked(true);
	};

	return (
		<div className={ style.iframe }>
			{ !imageClicked ?
				<div className={style.iframePoster} onClick={ onThumbnailClick }>
					<Image
						src={`https://img.youtube.com/vi/${ embedID }/sddefault.jpg`}
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
							? `https://www.youtube.com/embed/${ embedID }?rel=0&showinfo=0&autoplay=1`
							: ""
					}
					title="youtube video"
				/>
			}
		</div>
	)
}
export default Iframe;