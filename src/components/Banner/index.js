import styles from './Banner.module.css';

function Banner(){
    return(
        <section className={styles.BannerMain}>
            <div className={styles.Banner}>
                <div className={styles.BannerText}>
                    <button className={styles.BannerBtn}>Front End</button>
                    <h2>SEO com React</h2>
                    <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
                </div>
                <div className={styles.BannerCard}>
                    <iframe className={styles.BannerVideo}
                        src="https://www.youtube.com/embed/c8mVlakBESE?si=-WsuPQNz3JM92b6P"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default Banner;