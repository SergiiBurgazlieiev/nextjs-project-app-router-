import Link from 'next/link';

import MealsGrid from '@/components/meals/meals-grid';
import styles from './page.module.css';

const MealsPage = () => {
	return (
		<>
			<header className={styles.header}>
				<h1>
					Delicious meals, created
					<span className={styles.highlight}>by you</span>
				</h1>
				<p>Choose your own recipe and cook it yourself.</p>
				<p className={styles.cta}>
					<Link href='/meals/share'>Share Your Favorite Recipe</Link>
				</p>
			</header>
			<main className={styles.main}>
				<MealsGrid meals={[]} />
			</main>
		</>
	);
};

export default MealsPage;
