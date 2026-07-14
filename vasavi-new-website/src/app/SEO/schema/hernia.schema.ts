// Upgraded to the @graph pattern used by sinus-surgery/tonsillectomy/
// adenoid-removal schemas - MedicalProcedure (with its existing, real
// approved "offers" price block, unchanged) plus a new FAQPage entry built
// from the same 8 FAQs shown on the hernia landing page.
export const HERNIA_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Hernia Surgery',
      url: 'https://www.vasavihospitals.com/hernia-surgery-in-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'General Surgery',
      bodyLocation: 'Abdomen',
      howPerformed: [
        'Robotic Surgery (Da Vinci Xi)',
        'Laparoscopic Surgery',
      ],
      followup: 'Post-surgery follow-up and recovery care as advised by the surgeon',
      provider: {
        '@type': 'Hospital',
        name: 'Vasavi Hospitals',
        url: 'https://www.vasavihospitals.com/',
      },
      performedBy: [
        { '@type': 'Physician', name: 'Dr. Ramesh T S' },
        { '@type': 'Physician', name: 'Dr. Mutharaju K. R' },
        { '@type': 'Physician', name: 'Dr. Mohan Ram. P' },
      ],
      indication: [
        'Inguinal Hernia',
        'Umbilical Hernia',
        'Femoral Hernia',
        'Ventral Hernia',
        'Incisional Hernia',
        'Hiatal Hernia',
        'Epigastric Hernia',
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '88999',
        availability: 'https://schema.org/InStock',
        url: 'https://www.vasavihospitals.com/hernia-surgery-in-bangalore',
        description: 'Hernia surgery package price starts from ₹88,999. Final cost may vary based on condition and treatment approach.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I delay hernia surgery by 3 or 6 months?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Delaying hernia surgery is risky and not advisable. A hernia does not heal on its own - it only grows larger over time. Waiting can lead to strangulation (blood supply to the trapped tissue gets cut off), which is a life-threatening emergency requiring urgent surgery. The longer you wait, the more complex and expensive the repair becomes. If your doctor has diagnosed a hernia, early surgery is always the safer and more affordable option.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is the best hospital for hernia surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vasavi Hospitals in Kumaraswamy Layout, Bangalore is a dedicated surgical centre for hernia repair. With 30+ years of experienced surgeons, advanced robotic (Da Vinci Xi) and laparoscopic facilities, and a team that handles hundreds of hernia cases each year, it is one of the most trusted choices for hernia surgery in South Bangalore.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cost of hernia surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The cost of hernia surgery in Bangalore varies depending on the type of hernia, the surgical technique (robotic vs laparoscopic), and your insurance coverage. At Vasavi Hospitals, we provide a free cost estimation before your surgery so there are no surprises. Fill in the form above or call us for a transparent quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is hernia surgery covered under insurance in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Hernia surgery is covered under most health insurance plans and government schemes including Ayushman Bharat, ESI, and corporate group insurance. Our dedicated insurance team handles the entire approval process for you - from documentation to claim submission - with zero hassle.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does hernia surgery take? What is the recovery time?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The procedure itself takes 1-2 hours. With robotic or laparoscopic techniques, most patients are discharged within 1-2 days. You can resume light daily activities in 3-5 days and return to full work within 1-2 weeks. Heavy lifting should be avoided for 4-6 weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is robotic hernia surgery better than laparoscopic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both are minimally invasive and far superior to open surgery. Robotic surgery offers 3D HD vision, tremor-filtered precision, and faster recovery - making it ideal for complex or recurrent hernias. Laparoscopic surgery is an equally effective and proven choice for most standard hernias. Your surgeon will recommend the best approach based on your hernia type and overall health.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if I need hernia surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common signs include a visible bulge in the abdomen or groin, a dull ache or burning sensation at the site, discomfort while bending or lifting, and a feeling of heaviness. If you notice sudden severe pain, nausea, or the bulge becomes hard and cannot be pushed back - seek emergency care immediately. A consultation and imaging scan at Vasavi Hospitals can confirm the diagnosis in one visit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can hernia come back after surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recurrence rates with robotic and laparoscopic mesh repair are very low - typically less than 1-2%. Following post-operative instructions, avoiding heavy lifting during recovery, and attending follow-up visits significantly reduce recurrence risk. Our surgical team also provides a long-term care plan to prevent re-herniation.',
          },
        },
      ],
    },
  ],
};
