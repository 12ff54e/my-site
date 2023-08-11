import Gallery from '@/components/gallery';
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.center}>
                <p>Projects Showcase</p>
            </div>
            <Gallery
                src={[
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec',
                ].map((m) => `/images/${m}.jpg`)}
            ></Gallery>
            <div className={styles.description}>
                <p>
                    A fork of{' '}
                    <a href="https://codepen.io/jh3y/pen/xxjxqOL">
                        Jhey's work
                    </a>
                    , images are from unsplash.
                </p>
            </div>
        </main>
    );
}
