import React from 'react'
interface AboutProps  {}

const AboutPage = (props: AboutProps) => {
  return (
    <section className="main__error error">
    <div className="container">
        <div className="error__inner">
            <h1 className="error__title">
                About
            </h1>
            <div className="container">
                <div className="blog-section__inner">
                    <div className="blog-section__box blog-section-box">
                        <div className="blog-section-box__content blog-section-box-content">
                            <p className="blog-section-box-content__text">
                               A Platform built OF you, FOR you, BY you!!
                            </p>
                            <p className="blog-section-box-content__text">
                               An innovative online platform revolutionizing education, enabling people to learn and practically implement. 
                               Offering diverse courses, interactive content, and expert guidance, it empowers learners globally. Through accessible technology, 
                            it fosters lifelong learning,skill development, and knowledge exchange, transforming education into a personalized, engaging experience.
                            </p>
                            <p className="blog-section-box-content__text">
                                A social networking platform connects people worldwide, fostering friendships, sharing ideas, and creating communities.
                                   Users engage through profiles, posts, and multimedia, enhancing communication and collaboration. 
                                It promotes global interaction, enabling diverse cultural exchanges and meaningful connections, enriching lives in the digital age.
                            </p>
                            <p className="blog-section-box-content__text">
                                A collaborative platform fosters teamwork and innovation by enabling individuals to share ideas, resources, and expertise. 
                                Through seamless communication and file sharing, people from diverse backgrounds collaborate effectively, driving creativity and productivity.
                                Such platforms empower users to collectively achieve goals and solve problems, promoting a sense of community and achievement.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="related__inner mt-4">
                    <div className="related__card card">
                        <div className="card__inner">
                            <a className="card-box__poster" href="#">
                                <img className="card-box__poster-img" src="/images/1.png" alt="img"/>
                            </a>
                            <a className="card__title" href="blog-page.html">
                                Mission
                            </a>
                            <p className="card__description">
                                Igniting curiosity, mastering technologies and amplifying connections. We aim to craft a holistic journey full of knowledge where students  not only code but collaborate and create the wonders to come!
                            </p>
                        </div>
                    </div>
                    <div className="related__card card" >
                        <div className="card__inner">
                            <a className="card-box__poster" href="blog-page.html">
                                <img className="card-box__poster-img" src="/images/2.png" alt="img"/>
                            </a>
                            <a className="card__title" href="blog-page.html">
                                Vision
                            </a>
                            <p className="card__description">
                                More than just EDUCATION! We aspire to tailor a supportive net woven together with the power of the latest technologies that builds and grows together, sparking a revolution beyond the classroom!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default AboutPage