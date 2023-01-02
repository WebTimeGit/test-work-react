import styles          from './Banner.module.scss'
import Iframe          from '../Iframe/Iframe'
import { FC }          from 'react'
import { BannerProps } from './BannerProps'


const Banner: FC<BannerProps> = ({ banner }) => {
	return (
		<section className={ styles.banner }>
			<div className={ `container ${ styles.bannerContainer }` }>
				<div className={ styles.text }>
					<h1>embed { banner?.embed }</h1>

					<p>
						{ banner?.text }
					</p>

					<a href={ banner?.link }>{ banner?.link }</a>
				</div>

				<Iframe embed={ banner?.embed }/>
			</div>
		</section>
	)
}

export default Banner