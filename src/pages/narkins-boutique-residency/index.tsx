import Navigation from "@/components/navigation/navigation";
import VideoPlayer from "@/components/video-player/video-player";
import 'smart-webcomponents-react/source/styles/smart.default.css';
import { Tab } from "@headlessui/react";
import { MagnifyingGlassCircleIcon, XCircleIcon } from "@heroicons/react/20/solid";
import { useState, Fragment } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Footer from "@/components/footer/footer";
import { Lightbox } from "@/components/lightbox/lightbox";
import Link from "next/link";
import Head from "next/head";
const people = [
    'Durward Reynolds',
    'Kenton Towne',
    'Therese Wunsch',
    'Benedict Kessler',
    'Katelyn Rohan',
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Carousel = dynamic(() => import('smart-webcomponents-react/carousel').then(d => d.Carousel), { ssr: false });
const categories = ['2 Bed', '3 Bed', '4 Bed'];
const cards = [[
    { title: '2 Bed Gold', size: '1547 Square Feet', location: 'Heritage Club & Danzoo Safari View', image: 'https://narkinsbuilders.com/wp-content/uploads/2024/04/7.Gold-Heritage-club-and-danzoo-safari-view-removebg-preview.png' },
], [
    { title: '3 Bed Diamond Corner', size: '2184 Square Feet', location: 'Heritage Club & Theme Park View', image: 'https://narkinsbuilders.com/wp-content/uploads/2024/04/6.Diamond-Corner-Heritage-club-and-danzoo-safari-view.png' },
    { title: '3 Bed Diamond-A', size: '2121 Square Feet', location: 'Jinnah & Theme Park View', image: 'https://narkinsbuilders.com/wp-content/uploads/2024/04/5.Diamond-A-jinnah-and-theme-park-view.webp' },
], [
    { title: '4 Bed Platinum-A', size: '2597 Feet', location: 'Jinnah & Theme Park View', image: 'https://narkinsbuilders.com/wp-content/uploads/2024/04/4.Platinum-A-jinnah-and-theme-park-view.png' },
    { title: '4 Bed Platinum A-1 Corner', size: '2670 Square Feet', location: 'Jinnah & Danzoori Safari View', image: 'https://narkinsbuilders.com/wp-content/uploads/2024/04/3.Platinum-A-1-Corner-jinnah-and-danzoo-safari-view.webp' },
    { title: '4 Bed Platinum A-1 Corner', size: '2670 Square Feet', location: 'Jinnah & Theme Park View', image: 'https://narkinsbuilders.com/wp-content/uploads/2024/04/1.-Platinum-A-1-Corner-jinnah-and-theme-park-view.webp' },
    { title: '4 Bed Platinum A-1', size: '2486 Square Feet', location: 'Jinnah & Theme Park View', image: 'https://narkinsbuilders.com/wp-content/uploads/2024/04/2.Platinum-A-1-jinnah-and-danzoo-safari-view.webp' },
]];

export default function NarkinsBoutiqueResidency() {
    const [lightbox, setLightbox] = useState({
        open: false, image: ''
    });
    const openLightbox = ({ image }: { image: string }) => {
        setLightbox({ ...lightbox, open: true, image });
    }
    const [query, setQuery] = useState('')
    const matches = useMediaQuery('(min-width: 768px)');

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) => {
                return person.toLowerCase().includes(query.toLowerCase())
            })

    return (
        <main>
            <Head>
                <title>Narkin's Boutique Residency</title>
            </Head>
            <Navigation />
            <Lightbox {...lightbox} onClose={() => setLightbox({ ...lightbox, open: false, image: '' })} />
            <div className="bg-white pt-[6rem]">
                <div className="px-4 bg-neutral-50 relative md:xl:px-0 w-full h-auto max-w-7xl z-index-0 bg-transparent mx-auto my-8 rounded-xl overflow-hidden -md:lg:rounded-none">
                    <VideoPlayer src="https://narkinsbuilders.com/wp-content/uploads/2024/04/8bdf4bb0-ee43-4993-8b80-de600c75c624.mp4" poster={'https://narkinsbuilders.com/wp-content/uploads/2024/04/Screenshot-32.jpg'} />
                </div>
                <div className="relative isolate overflow-hidden py-20 pt-5 sm:py-[28px]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h2 className="text-4xl font-bold tracking-tight text-black sm:text-7xl">{`Narkin's Boutique Residency`}</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-800">
                                Welcome to Narkin's Boutique Residency, where luxury meets bespoke design in the heart of Bahria Town Karachi's Heritage Commercial area. Crafted by "Talent & Taste," our premium high-rise apartments redefine upscale living with their exquisite attention to detail.
                                <br /><br />
                                Nestled in the esteemed Heritage Commercial area, Narkin's Boutique Residency offers residents unparalleled access to a wealth of amenities and attractions. From exclusive luxury farmhouses and the prestigious Heritage Club to the convenience of Imtiaz Mega, shopping malls, and a bustling food street, everything you desire is just a walk away. Additionally, the 24/7 Shop Stop & PSO ensures your daily needs are effortlessly met.
                                <br /><br />
                                With ground + 29 floors, Narkin's Boutique Residency presents a selection of 2, 3, and 4-bedroom luxury apartments, each boasting panoramic views of Bahria Town Karachi. Experience the epitome of sophistication as you unwind in your designer Apartment.
                                <br /><br />
                                But the luxury extends beyond your residence. As a resident of Narkin's Boutique Residency, you'll enjoy exclusive access to over 10+ premium amenities designed to enrich your lifestyle. From state-of-the-art fitness facilities to indoor swimming pool and recreational areas, every amenity is tailored to cater to your needs and desires.
                                <br />
                                Elevate your lifestyle to new heights with Narkin's Boutique Residency.
                            </p>
                        </div>
                        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                                {[{ name: 'Project Info', href: "#our-offerings" }].map((link) => (
                                    <Link key={link.name} className="text-black" href={link.href}>
                                        {link.name} <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                ))}
                            </div>
                            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">

                                {/* {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))} */}
                            </dl>
                        </div>
                    </div>
                </div>
                <section className=" bg-black">
                    <div className="mx-auto max-w-7xl py-[5rem] lg:px-8">
                        <div className="mx-auto px-6 max-w-2xl lg:mx-0">
                            <h3 className="text-3xl font-bold tracking-tight text-white sm:text-7xl capitalize">Our offerings</h3>
                        </div>
                        <Tab.Group>
                            <Tab.List className="flex space-x-1 gap-2 px-6 my-5 mb-5 border-b-neutral-900 rounded-xl bg-neutral-900/20 p-1">
                                {categories.map(category => (
                                    <Tab
                                        key={category}
                                        className={({ selected }) =>
                                            classNames(
                                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                                'ring-white/60 ring-offset-2 ring-offset-neutral-400 focus:outline-none focus:ring-2',
                                                selected
                                                    ? 'bg-neutral-400 text-neutral-700 shadow'
                                                    : 'text-neutral-100 hover:bg-white/[0.12] hover:text-white'
                                            )
                                        }>
                                        {category}
                                    </Tab>
                                ))}
                            </Tab.List>
                            <Tab.Panels className="mt-2">
                                {cards.map((items, idx) => (
                                    <Tab.Panel
                                        key={idx}
                                    >
                                        <div className="grid mt-[5rem] overflow-hidden grid-cols-1 md:lg:grid-cols-3 gap-y-[2.5rem]">
                                            {items.map((item, index) => (
                                                <div key={index} onClick={() => openLightbox({ image: item.image })} className="hover:filter group block rounded-xl overflow-hidden hover:scale-[1.025] -hover:bg-neutral-900 hover:brightness-[110%] px-6 duration-[.5s] transition hover:duration-[.5s]">
                                                    <div
                                                        className={classNames(
                                                            'bg-neutral-900 p-3 rounded-lg group relative',
                                                            'ring-white/60 ring-offset-2 ring-offset-neutral-400 focus:outline-none focus:ring-2'
                                                        )}>
                                                        <img src={item.image} alt="" className="w-full h-auto" loading="lazy" />
                                                        <div className="duration-[.5s] transition group-hover:duration-[.5s] invisible group-hover:visible left-[85%] top-[85%] absolute">
                                                            <MagnifyingGlassCircleIcon width={'3rem'} height={'3rem'} color="white" />
                                                        </div>
                                                    </div>
                                                    <div className="py-2 ">
                                                        <h1 className="mt-1 text-1xl font-semibold text-white">{item.title}</h1>
                                                        {/* <p className="text-neutral-400">Our Magnificent and eminent master piece is located at 29-30A Jinnah Avenue,</p> */}
                                                        <p className="text-sm my-2 leading-4 font-medium text-white">
                                                            <strong>Size</strong>: {item.size}, <strong>Location</strong>: {item.location}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </Tab.Group>
                    </div>
                </section>
                <section className="bg-white py-5 mx-auto max-w-7xl py-[5rem] lg:px-8">
                    <div className="mx-auto px-6 my-5 max-w-2xl lg:mx-0">
                        <h3 className="text-3xl font-bold tracking-tight text-black sm:text-7xl capitalize">Our Amenities</h3>
                        <p className="mt-6 text-lg leading-8 text-gray-800">
                            Top-notch Amenities at Your Doorstep
                        </p>
                    </div>
                    <div className="max-w-7xl w-full px-5 mx-auto overflow-hidden">
                        <Carousel
                            id='carousel'
                            swipe hideArrows={!matches} autoPlay={false} slideShow={false} loop={false}
                            hideIndicators={false} className="w-full rounded-xl h-[30rem]" displayMode="default"
                            dataSource={[
                                "https://narkinsbuilders.com/wp-content/uploads/2024/04/Reception.webp",
                                "https://narkinsbuilders.com/wp-content/uploads/2024/04/Seating.webp",
                                "https://narkinsbuilders.com/wp-content/uploads/2024/04/Snooker.webp",
                                "https://narkinsbuilders.com/wp-content/uploads/2024/04/Grand-Lobby-1.webp",
                                "https://narkinsbuilders.com/wp-content/uploads/2024/04/Gym-1.webp",
                                "https://narkinsbuilders.com/wp-content/uploads/2024/04/Play-Area.webp",
                                "https://narkinsbuilders.com/wp-content/uploads/2024/04/Pool.webp"
                            ].map((i, _) => ({ image: i, /*label: ['Reception', 'Prayer Area', 'Snooker', 'Grand Lobby', 'Gym', 'Play Area', 'Pool'][_]*/ }))}
                        />
                    </div>
                </section>
                <section className="bg-neutral-100 px-5 py-[4rem] lg:px-8">
                    <div className="py-5 mx-auto max-w-7xl">
                        <div className="mx-auto -px-6 my-5 max-w-2xl lg:mx-auto">
                            {/* <h3 className="text-3xl font-bold tracking-tight text-black sm:text-7xl capitalize">Gallery</h3> */}
                        </div>
                        <div className="max-w-7xl mt-5 mx-auto w-full overflow-hidden">
                            <Carousel
                                id='carousel'
                                swipe hideArrows={false} autoPlay={true} slideShow={true} loop={true}
                                hideIndicators={true} className={`w-full rounded-xl ${!matches ? 'aspect-video' : 'h-[40rem]'}`} displayMode="default"
                                dataSource={[
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/IMG_0763-1.webp",
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/IMG_0776-1.webp",
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/IMG_0787-1.webp",
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/IMG_0797-1.webp",
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/vlcsnap-2024-02-22-04h12m09s908-1-scaled.webp",
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/IMG_0763-1.webp",
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/IMG_0771-1.webp",
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/IMG_0774-1.webp"
                                ].map(i => ({ image: i }))}
                            />
                        </div>
                    </div>
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                            {[
                                [
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/IMG_0763-1.webp",
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/IMG_0776-1.webp",
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/IMG_0787-1.webp"
                                ],
                                [
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/IMG_0797-1.webp",
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/vlcsnap-2024-02-22-04h12m09s908-1-scaled.webp",
                                    "https://narkinsbuilders.com/wp-content/uploads/2024/04/IMG_0763-1.webp"
                                ],
                            ]
                                .map((images, index) => (
                                    <div className="grid gap-4" key={images.join()}>
                                        {images.slice(0, 2).map((src) => <div key={src} className="px-4" onClick={() => openLightbox({ image: src })}>
                                            <img className={`h-auto max-w-full rounded-lg`} src={src} alt="" />
                                        </div>)}
                                    </div>
                                ))}
                        </div>
                    </div>
                </section>
                <section className="bg-neutral-100 border-t -px-5 lg:px-8 py-[4rem]">
                    <div className="py-5 -px-5 mx-auto max-w-7xl">
                        <div className="mx-auto px-5 my-5 max-w-2xl lg:mx-0">
                            <h3 className="text-3xl font-bold tracking-tight text-black sm:text-7xl capitalize">Testimonials</h3>
                        </div>
                        <div className="grid mb-8 px-5 max-w-7xl mt-5 lg:mb-12 gap-2 gap-y-2 lg:grid-cols-2">
                            {[
                                {
                                    name: "Saad Arshad",
                                    stars: [true, true, true, true, "half"],
                                    testimonial:
                                        "Highly committed to delivering in timelines, I wholeheartedly recommend considering investment in projects by Narkin’s Builders.",
                                },
                                {
                                    name: "Arsalan",
                                    stars: [true, true, true, true, true],
                                    testimonial:
                                        "Smooth booking experience, very transparent throughout the process.",
                                },
                                {
                                    name: "Umair Iqrar",
                                    stars: [true, true, true, true, false],
                                    testimonial:
                                        "I decided to invest during the initial launch phase, and after just two years, I’ve seen substantial returns. It’s been a fantastic investment opportunity!",
                                },
                            ].map((item, index) => (
                                <figure key={index} className="flex border hover:bg-[#FAFAFA] transition transition-duration-100 cursor-pointer flex-col justify-center items-center p-8 text-center bg-white border-b border-gray-200 md:p-12 lg:border rounded-xl">
                                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">

                                        </h3>
                                        <ul className="flex justify-center my-4">
                                            {item.stars.map((star, starIndex) => (
                                                <li key={starIndex}>
                                                    <i
                                                        className={`fas ${star === true
                                                            ? "fa-star text-yellow-400"
                                                            : star === "half"
                                                                ? "fa-star-half-alt text-yellow-400"
                                                                : "far fa-star text-yellow-400"
                                                            }`}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="my-4">
                                            {item.testimonial}
                                        </p>
                                    </blockquote>
                                    <figcaption className="flex justify-center items-center space-x-3">
                                        {/* <img
                    className="w-9 h-9 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                    alt="profile picture"
                  /> */}
                                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                                            <div>{item.name}</div>
                                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                                                Client
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                        {/* <div className="text-center">
            <a href="#" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show more...</a>
          </div> */}
                    </div>
                </section>
            </div>
            <Footer map={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.564164811388!2d67.31885989999999!3d25.0149214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb34bad638fbbb1%3A0x4aa67ba370e4667b!2sNarkins%20Boutique%20Residency!5e0!3m2!1sen!2s!4v1714296380913!5m2!1sen!2s'} />
        </main>
    )
}