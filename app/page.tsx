import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>NEKOPVP</h1>
          <p className={styles.description}>
            NEKOPVPの公式サイトです。遊び方・ランクシステムの詳細・最新情報を取り扱っています。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={3600}
          height={1200}
          priority
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>What is NEKOPVP?</h2>
            <p className={styles.sectionTitleJa}>NEKOPVPって何？</p>
            <p className={styles.sectionDescription}>
              hirokoriの運営する、運営公認の民間イベントです。
            </p>
          </div>
          <Image
            className={styles.businessImg}
            src="/img-inpvp.png"
            alt=""
            width={1024}
            height={1024}
          />
        </div>
      </section>
      <div className={styles.aboutus}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <Image
              className={styles.aboutusImg}
              src="/img-inpvp.png"
              alt=""
              width={6000}
              height={4000}
            />
            <div>
              <h2 className={styles.sectionTitleEn}>What is NEKOPVP?</h2>
              <p className={styles.sectionTitleJa}>NEKOPVPって何？</p>
              <p className={styles.sectionDescription}>
                hirokoriの運営する、運営公認の民間イベントです。
              </p>
              <div className="flex flex-row h-full items-baseline">
                <Image width={100} height={120} alt="" src="/hirokori.png"></Image>
                <p className={`${styles.sectionDescription}`}>←hirokoriのマインクラフトスキン</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>We are hiring</h2>
            <p className={styles.sectionTitleJa}>採用情報</p>
            <p className={styles.sectionDescription}>
              当社では、チャレンジ精神を持った人材を求めています。
              <br />
              新しいアイデアを出し合い、成長する環境で活躍したい方は、ぜひご応募ください。当社でのキャリアを築きながら、技術の最前線で力を発揮しましょう。
            </p>
            <ButtonLink href="">採用情報へ</ButtonLink>
          </div>
          <Image
            className={styles.hiringImg}
            src="/img-hiring.jpg"
            alt=""
            width={960}
            height={960}
          />
        </div>
      </section>
    </>
  );
}
