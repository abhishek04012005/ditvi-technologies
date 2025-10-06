'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight } from 'react-icons/fi'
import styles from './Service.module.css'
import Heading from '@/custom/heading/Heading'
import Button from '@/custom/buttons/Button'
import { services, ServiceItem } from '../../json/services'
import GetQuotePopup from '@/custom/getquotepopup/GetQuotePopup'

interface ServiceCardProps {
    service: ServiceItem
    isReversed: boolean
    index: number
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isReversed, index }) => {
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

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2
            }
        }
    }

    return (
        <>
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className={`${styles.serviceCard} ${isReversed ? styles.reversed : ''}`}
            >
                <div className={styles.imageContainer}>
                    <Image
                        src={service.image}
                        alt={service.title}
                        width={600}
                        height={400}
                        className={styles.serviceImage}
                        priority={index < 2}
                    />
                    <div className={styles.imageBg}></div>
                </div>

                <div className={styles.contentContainer}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <h4 className={styles.serviceSubtitle}>{service.subtitle}</h4>
                    <p className={styles.serviceDescription}>{service.description}</p>

                    {/* Key Offerings Preview */}
                    <div className={styles.offeringsPreview}>
                        {service.offerings.slice(0, 9).map((offering, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={controls}
                                variants={{
                                    visible: {
                                        opacity: 1,
                                        x: 0,
                                        transition: { delay: 0.3 + idx * 0.1 }
                                    }
                                }}
                                className={styles.offeringItem}
                            >
                                <span className={styles.offeringIcon}>{offering.icon}</span>
                                <span className={styles.offeringTitle}>{offering.title}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Quick Stats */}
                    <div className={styles.statsContainer}>
                        <div className={styles.pricing}>
                            <span className={styles.priceValue}>{service.startingPrice}</span>
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

const Services: React.FC = () => {
    const filteredServices = services.filter(service =>
        ![8, 4, 5, 7, 6].includes(service.id)
    );
    return (
        <section className={styles.services} id="services">
            <div className={styles.container}>
                <Heading
                    subtitle='Our Services'
                    title='Shaping Future with'
                    titleHighlight='Digital Empowerment'
                />

                <div className={styles.servicesGrid}>
                    {filteredServices.map((service, index) => (
                        <ServiceCard
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

export default Services