'use client'

import { useState, useEffect } from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import styles from './Signature.module.css'
import Heading from '@/custom/heading/Heading'
import Button from '@/custom/buttons/Button'
import GetQuotePopup from '@/custom/getquotepopup/GetQuotePopup'
import BiodataImage from '../../../assets/services/signature.jpg'
import ResumeImage from '../../../assets/services/signature.jpg'

interface SignatureService {
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
        clients: number
        satisfaction: number
    }
    price: string
    path: string
}

const signatureServices: SignatureService[] = [
    {
        id: 1,
        title: "Ditvi Biodata",
        subtitle: "Professional Digital Biodata Services",
        description: "Create impressive biodatas with our premium digital design services. Perfect for marriage proposals and personal profiles.",
        image: BiodataImage,
        features: [
            {
                icon: "🎨",
                title: "Custom Design",
            },
            {
                icon: "📱",
                title: "Mobile Friendly",
            },
            {
                icon: "🔄",
                title: "Quick Updates",
            },
            {
                icon: "📊",
                title: "Multiple Formats",
            },
            {
                icon: "🎯",
                title: "ATS Optimized",
            },
            {
                icon: "🔒",
                title: "Privacy Protected",
            },
        ],
        stats: {
            clients: 500,
            satisfaction: 98
        },
        price: "Starts from ₹101",
        path: "/services/ditvi-biodata"
    },
    {
        id: 2,
        title: "Ditvi Resume",
        subtitle: "Professional Digital Resume Services",
        description: "Stand out in the job market with our professionally designed digital resumes that highlight your skills and experiences.",
        image: ResumeImage,
        features: [
            {
                icon: "🎨",
                title: "Modern Design",
            },
            {
                icon: "📱",
                title: "Digital Format",
            },
            {
                icon: "🎯",
                title: "ATS Friendly",
            },
            {
                icon: "📊",
                title: "Multiple Layouts",
            },
            {
                icon: "🔄",
                title: "Easy Updates",
            },
            {
                icon: "📈",
                title: "Skills Analysis",
            },
        ],
        stats: {
            clients: 750,
            satisfaction: 99
        },
        price: "Starts from ₹101",
        path: "/services/ditvi-resume"
    }
]

interface SignatureCardProps {
    service: SignatureService
    isReversed: boolean
    index: number
}

const SignatureCard: React.FC<SignatureCardProps> = ({ service, isReversed, index }) => {
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
                className={`${styles.signatureCard} ${isReversed ? styles.reversed : ''}`}
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

const Signature: React.FC = () => {
    return (
        <section className={styles.signature} id="signature">
            <div className={styles.container}>
                <Heading
                    subtitle="Signature Services"
                    title="Professional"
                    titleHighlight="Digital Identity"
                />

                <div className={styles.signatureGrid}>
                    {signatureServices.map((service, index) => (
                        <SignatureCard
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

export default Signature