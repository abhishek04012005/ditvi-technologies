'use client'
import { useState } from 'react'
import { Formik, Form, Field, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import styles from './Contact.module.css'
import Heading from '@/custom/heading/Heading'
import { contactDetails } from '@/json/ditviinfo'
import { supabase } from '@/lib/supabase'

const contactInfo = [
    {
        icon: <FiMail />,
        title: 'Email Us',
        content: contactDetails.email,
        link: `mailto:${contactDetails.email}`
    },
    {
        icon: <FiPhone />,
        title: 'Call Us',
        content: contactDetails.number,
        link: `tel:${contactDetails.number}`
    },
    {
        icon: <FiMapPin />,
        title: 'Visit Us',
        content: contactDetails.address,
        link: 'https://maps.google.com'
    }
]

interface ContactFormValues {
    name: string
    number: string
    subject: string
    message: string
}

const initialValues: ContactFormValues = {
    name: '',
    number: '',
    subject: '',
    message: ''
}

const validationSchema = Yup.object({
    name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Please enter alphabets only')
        .required('Name is required'),
    number: Yup.string()
        .matches(/^[6-9]\d{9}$/, 'Enter valid 10-digit number starting with 6-9')
        .required('Phone number is required'),
    subject: Yup.string()
        .required('Subject is required'),
    message: Yup.string()
        .required('Message is required')
})

const Contact = () => {
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [submitMessage, setSubmitMessage] = useState('')

    const handleSubmit = async (
        values: ContactFormValues,
        { resetForm }: FormikHelpers<ContactFormValues>
    ) => {
        try {
            const { error } = await supabase.from('contacts').insert([
                {
                    name: values.name.trim(),
                    number: values.number.trim(),
                    subject: values.subject.trim(),
                    message: values.message.trim(),
                    status: 'new',
                    created_at: new Date().toISOString()
                }
            ])

            if (error) throw error

            // Success handling
            setSubmitStatus('success')
            setSubmitMessage('Thank you for your message! We will get back to you soon.')
            resetForm()

            // Reset success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('idle')
                setSubmitMessage('')
            }, 5000)

        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitStatus('error')
            setSubmitMessage('Something went wrong. Please try again later.')
        }
    }

    return (
        <section className={styles.contact}>
            <div className={styles.container}>
                <Heading
                    title='Get in Touch'
                    subtitle='Let&apos;s Connect'
                    titleHighlight='Together'
                />

                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={styles.contactInfo}
                    >
                        {contactInfo.map((info, index) => (
                            <a
                                key={index}
                                href={info.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.infoCard}
                            >
                                <div className={styles.iconWrapper}>{info.icon}</div>
                                <div className={styles.infoContent}>
                                    <h3>{info.title}</h3>
                                    <p>{info.content}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting, errors, touched }) => (
                            <Form className={styles.form}>
                                <div className={styles.formGroup}>
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className={errors.name && touched.name ? styles.errorInput : ''}
                                    />
                                    {errors.name && touched.name && (
                                        <span className={styles.errorText}>{errors.name}</span>
                                    )}
                                </div>

                                <div className={styles.formGroup}>
                                    <Field
                                        type="tel"
                                        name="number"
                                        placeholder="Your Number"
                                        maxLength={10}
                                        className={errors.number && touched.number ? styles.errorInput : ''}
                                    />
                                    {errors.number && touched.number && (
                                        <span className={styles.errorText}>{errors.number}</span>
                                    )}
                                </div>

                                <div className={styles.formGroup}>
                                    <Field
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        className={errors.subject && touched.subject ? styles.errorInput : ''}
                                    />
                                    {errors.subject && touched.subject && (
                                        <span className={styles.errorText}>{errors.subject}</span>
                                    )}
                                </div>

                                <div className={styles.formGroup}>
                                    <Field
                                        as="textarea"
                                        name="message"
                                        placeholder="Your Message"
                                        rows={5}
                                        className={errors.message && touched.message ? styles.errorInput : ''}
                                    />
                                    {errors.message && touched.message && (
                                        <span className={styles.errorText}>{errors.message}</span>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className={styles.submitButton}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>

            {submitMessage && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${styles.statusMessage} ${styles[submitStatus]}`}
                >
                    {submitMessage}
                </motion.div>
            )}
        </section>
    )
}

export default Contact