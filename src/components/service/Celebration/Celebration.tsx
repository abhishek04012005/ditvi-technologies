'use client'
import { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight } from 'react-icons/fi'
import styles from './Celebration.module.css'
import Heading from '@/custom/heading/Heading'
import Button from '@/custom/buttons/Button'
import GetQuotePopup from '@/custom/getquotepopup/GetQuotePopup'
import BirthdayImage from '../../../assets/celebration/birthday.jpg'
import WeddingImage from '../../../assets/celebration/wedding.jpg'
import AnniversaryImage from '../../../assets/celebration/anniversary.jpg'

interface CelebrationService {
    id: number
    title: string
    subtitle: string
    description: string
    image: string | StaticImageData
    features: Array<{
        icon: string
        title: string
    }>
    stats: {
        events: number
        clients: number
        satisfaction: number
    }
    price: string
    path: string
}

const celebrationServices: CelebrationService[] = [
    {
        id: 1,
        title: "Celebration Birthday",
        subtitle: "Make your birthday celebrations extraordinary",
        description: "Create unforgettable birthday memories with our premium digital invitation designs, custom themes, and complete event documentation services.",
        image: BirthdayImage,
        features: [
            {
                icon: "🎨",
                title: "Theme & Branding",
            },
            {
                icon: "🌐",
                title: "Birthday Website",
            },
            {
                icon: "💌",
                title: "Digital Invitations",
            },
            {
                icon: "📱",
                title: "Social Media Promotion",
            },
            {
                icon: "🎥",
                title: "Live Streaming & Virtual Access",
            },
            {
                icon: "📸",
                title: "Post‑Event Memories",
            },
        ],
        stats: {
            events: 200,
            clients: 180,
            satisfaction: 98
        },
        price: "Starts from ₹4,999",
        path: "/services/celebration-birthday"
    },
    {
        id: 2,
        title: "Celebration Wedding",
        subtitle: "Your dream wedding, digitally enhanced",
        description: "Transform your wedding into a digital fairytale with elegant e-invitations, live streaming, and comprehensive documentation services.",
        image: WeddingImage,
        features: [
            {
                icon: "🎨",
                title: "Theme & Branding",
            },
            {
                icon: "🌐",
                title: "Birthday Website",
            },
            {
                icon: "💌",
                title: "Digital Invitations",
            },
            {
                icon: "📱",
                title: "Social Media Promotion",
            },
            {
                icon: "🎥",
                title: "Live Streaming & Virtual Access",
            },
            {
                icon: "📸",
                title: "Post‑Event Memories",
            },
        ],
        stats: {
            events: 150,
            clients: 140,
            satisfaction: 99
        },
        price: "Starts from ₹4,999",
        path: "/services/wedding-celebration"
    },
    {
        id: 3,
        title: "Celebration Anniversary",
        subtitle: "Celebrate timeless love, digitally",
        description: "Make your anniversary unforgettable with personalized digital invites, live streaming, and beautifully curated memory albums that capture your journey together.",
        image: AnniversaryImage,
        features: [
            {
                icon: "🎨",
                title: "Theme & Branding",
            },
            {
                icon: "🌐",
                title: "Birthday Website",
            },
            {
                icon: "💌",
                title: "Digital Invitations",
            },
            {
                icon: "📱",
                title: "Social Media Promotion",
            },
            {
                icon: "🎥",
                title: "Live Streaming & Virtual Access",
            },
            {
                icon: "📸",
                title: "Post‑Event Memories",
            },
        ],
        stats: {
            events: 120,
            clients: 110,
            satisfaction: 98
        },
        price: "Starts from ₹4,999",
        path: "/services/celebration-anniversary"
    }

]

interface CelebrationCardProps {
    service: CelebrationService
    isReversed: boolean
    index: number
}

const CelebrationCard: React.FC<CelebrationCardProps> = ({ service, isReversed, index }) => {
    const [showQuotePopup, setShowQuotePopup] = useState(false)
    const controls = useAnimation()
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [controls, inView])

    return (
        <>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={{
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, delay: index * 0.2 }
                    }
                }}
                className={`${styles.celebrationCard} ${isReversed ? styles.reversed : ''}`}
            >
                <div className={styles.imageContainer}>
                    <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className={styles.serviceImage}
                        priority={index === 0}
                    />
                    <div className={styles.imageBg}></div>
                </div>

                <div className={styles.contentContainer}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <h4 className={styles.serviceSubtitle}>{service.subtitle}</h4>
                    <p className={styles.serviceDescription}>{service.description}</p>

                    <div className={styles.featuresGrid}>
                        {service.features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.featureItem}
                                initial={{ opacity: 0, x: -20 }}
                                animate={controls}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { delay: 0.3 + idx * 0.1 }
                                    }
                                }}
                            >
                                <span className={styles.featureIcon}>{feature.icon}</span>
                                <div className={styles.featureContent}>
                                    <h5 className={styles.featureTitle}>{feature.title}</h5>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.statsContainer}>
                        <div className={styles.pricing}>
                            <span className={styles.priceValue}>{service.price}</span>
                        </div>
                    </div>

                    <div className={styles.cta}>
                        <Button href={service.path} className={styles.buttonItem} variant='primary'>
                            Learn More <FiArrowRight />
                        </Button>
                        <Button
                            onClick={() => setShowQuotePopup(true)}
                            className={styles.buttonItem}
                            variant='secondary'
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </motion.div>

            <GetQuotePopup
                isOpen={showQuotePopup}
                onClose={() => setShowQuotePopup(false)}
                selectedService={service.title}
            />
        </>
    )
}

const Celebration: React.FC = () => {
    return (
        <section className={styles.celebrations} id="celebrations">
            <div className={styles.container}>
                <Heading
                    subtitle="Celebration Services"
                    title="Create Memorable"
                    titleHighlight="Digital Celebrations"
                />

                <div className={styles.celebrationsGrid}>
                    {celebrationServices.map((service, index) => (
                        <CelebrationCard
                            key={service.id}
                            service={service}
                            isReversed={index % 2 !== 0}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Celebration