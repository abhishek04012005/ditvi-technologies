'use client'

import React, { FC, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiUsers, FiBox, FiSmile } from 'react-icons/fi'
import { services, ServiceItem } from '@/json/services'
import Button from '@/custom/buttons/Button'
import styles from './ServiceDetail.module.css'
import GetQuotePopup from '@/custom/getquotepopup/GetQuotePopup'
import { Pricing } from '@/components/pricing/Pricing'

interface ServiceDetailProps {
  params: {
    slug: string
  }
}

const ServiceDetail: FC<ServiceDetailProps> = ({ params }) => {
  const slugPath = `/services/${params.slug}`
  const [showQuotePopup, setShowQuotePopup] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('')

   const service = useMemo<ServiceItem | undefined>(
    () => services.find((s) => s.path === slugPath),
    [slugPath]
)
  //e
  if (!service) {
    return (
      <section className={styles.notFound}>
        <div className={styles.container}>
          <p className={styles.errorMsg}>
            Sorry, we couldn&apos;t find that service.
          </p>
          <Link href="/services" className={styles.backButton}>
            <FiArrowLeft /> Back to Services
          </Link>
        </div>
      </section>
    )
  }

  const statsItems = [
    { icon: <FiUsers />, value: service.stats.clients, label: 'Happy Clients' },
    { icon: <FiBox />, value: service.stats.projects, label: 'Projects Delivered' },
    { icon: <FiSmile />, value: service.stats.satisfaction, label: '% Client Satisfaction' }
  ]

  return (
    <>
      <section className={styles.serviceDetail}>
        <div className={styles.container}>
          {/* Enhanced Header */}
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className={styles.navigation}>
              <Button href='/services' variant='primary' className={styles.backButton}>
                <FiArrowLeft /> Back to Services
              </Button>
            </nav>

            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className={styles.title}>{service.title}</h1>
              <h2 className={styles.subtitle}>{service.subtitle}</h2>
              <p className={styles.description}>{service.description}</p>
            </motion.div>

            {/* Stats Section with Hero Image */}
            <motion.div className={styles.statsHeroSection}>
              <div className={styles.statsHeroContainer}>
                {/* Left - Hero Image */}
                <motion.div
                  className={styles.heroImageContainer}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className={styles.heroImg}
                      priority
                    />
                    <div className={styles.imageOverlay} />
                  </div>
                </motion.div>

                {/* Right - Content */}
                <motion.div
                  className={styles.heroContent}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className={styles.heroDescription}>{service.descriptionContent}</p>
                  <div className={styles.statsContainer}>
                    {statsItems.map((stat, index) => (
                      <motion.div
                        key={index}
                        className={styles.statItem}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.2 }}
                      >
                        <motion.span
                          className={styles.statValue}
                          initial={{ scale: 0.5 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.6 + index * 0.2,
                            type: "spring",
                            stiffness: 100
                          }}
                        >
                          {stat.value}+
                        </motion.span>
                        <span className={styles.statLabel}>{stat.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Comparison Section */}
            <motion.section className={styles.comparisonSection}>
              <div className={styles.comparisonContainer}>
                {/* Challenges Side */}
                <motion.div
                  className={styles.comparisonColumn}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={styles.columnHeader}>
                    <h2>Challenges We Solve</h2>
                    <p>Common problems faced by businesses</p>
                  </div>

                  <div className={styles.cardsList}>
                    {service.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        className={styles.comparisonCard}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                        }}
                      >
                        <div className={styles.cardIcon}>{challenge.icon}</div>
                        <div className={styles.cardContent}>
                          <h3>{challenge.title}</h3>
                          <p>{challenge.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Divider */}
                <div className={styles.comparisonDivider}>
                  <div className={styles.dividerLine} />
                  <div className={styles.dividerIcon}>
                    <FiArrowLeft className={styles.leftArrow} />
                    <FiArrowLeft className={styles.rightArrow} />
                  </div>
                  <div className={styles.dividerLine} />
                </div>

                {/* Solutions/Offerings Side */}
                <motion.div
                  className={styles.comparisonColumn}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={styles.columnHeader}>
                    <h2>Our Solutions</h2>
                    <p>How we address these challenges</p>
                  </div>

                  <div className={styles.cardsList}>
                    {service.offerings.map((offering, index) => (
                      <motion.div
                        key={index}
                        className={styles.comparisonCard}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{
                          y: -5,
                          boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                        }}
                      >
                        <div className={styles.cardIcon}>{offering.icon}</div>
                        <div className={styles.cardContent}>
                          <h3>{offering.title}</h3>
                          <p>{offering.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </motion.div>

          {/* Pricing Section */}
          <Pricing
            packages={service.pricing}
            serviceTitle={service.title}
            onGetQuote={(packageName) => {
              setSelectedPackage(packageName);
              setShowQuotePopup(true);
            }}
          />
        </div>
      </section>

      <GetQuotePopup
        isOpen={showQuotePopup}
        onClose={() => setShowQuotePopup(false)}
        selectedService={selectedPackage}
      />
    </>
  )
}

export default ServiceDetail