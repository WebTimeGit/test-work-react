import styles from './Footer.module.scss'
import Image  from 'next/image'


const Footer = () => {
	return (
		<footer className={ `footer ${ styles.footer }` }>
			<div className={ `container ${ styles.content }` }>
				<p>developed WebTime</p>
				<span className={ styles.logo }>
          <Image src="/vercel.svg" alt="Vercel Logo" width={ 72 } height={ 16 }/>
        </span>
			</div>
		</footer>
	)
}

export default Footer