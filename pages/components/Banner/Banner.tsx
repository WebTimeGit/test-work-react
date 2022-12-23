import styles from './Banner.module.scss'


const Banner = () => {
	return (
		<section className={ styles.banner }>
			<div className={ `container` }>
				<div className={ styles.text }>
					<h1>embed RK1K2bCg4J8</h1>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa deserunt dignissimos enim ?
					</p>

					<a href="https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s">https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s</a>
				</div>

				<div className={ styles.iframe }>
					<iframe data-src="RK1K2bCg4J8"></iframe>
				</div>
			</div>
		</section>
	)
}

export default Banner