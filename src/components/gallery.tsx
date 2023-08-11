import path from 'path';
import styles from './gallery.module.css';
import Image from 'next/image';

export default function Gallery(props: { src: string[] }) {
    const createListItem = (link: string) => (
        <li className={styles.slide}>
            <a className={styles.link} href="#">
                <Image
                    className={styles.img}
                    src={link}
                    width={500}
                    height={500}
                    alt={path
                        .basename(link)
                        .slice(0, -path.extname(link).length)}
                />
            </a>
        </li>
    );

    return (
        <div className={styles.container}>
            <ul className={styles.gallery}>{props.src.map(createListItem)}</ul>
        </div>
    );
}
