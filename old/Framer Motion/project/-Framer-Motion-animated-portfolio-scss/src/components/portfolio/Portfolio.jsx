

import './portfolio.scss'

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/416179/pexels-photo-416179.jpeg",
        desc: "Motion for React (previously Framer Motion) is a React animation library for building smooth, production-grade UI an"
    },
    {
        id: 2,
        title: "Next js Commerce",
        img: "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg",
        desc: "UI animations. You can start with simple prop-based animations before growing to layout, gesture and scroll animations."
    },
    {
        id: 3,
        title: "Css Commerce",
        img: "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg",
        desc: "n's unique hybrid engine delivers 120fps animations by combining native browser APIs like Web Animations API "
    },
    {
        id: 4,
        title: "HTML Commerce",
        img: "https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg",
        desc: "Mn this guide, we'll learn why and when you should use Motion, how to install it, and give you an overview of its main features."
    },
]

const Single = ({ item }) => {
    return (
        <section>
            {item.title}
        </section>
    )
}
const Portfolio = () => {
    return (
        <div className='portfolio'>
            {
                items.map((item) => (
                    <Single key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default Portfolio
