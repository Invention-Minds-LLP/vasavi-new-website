// Same @graph pattern used by sinus-surgery/tonsillectomy/adenoid-removal/
// hernia/gallstone schemas - MedicalProcedure (with a real, already-live
// price previously shown on the pre-rebuild page's hero banner, ₹66,999,
// now schema-only per explicit user decision for this page) plus a
// FAQPage entry built from the same 8 FAQs shown on the appendectomy
// landing page.
export const APPENDECTOMY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Appendix Removal Surgery (Appendectomy)',
      url: 'https://www.vasavihospitals.com/appendectomy-surgery-in-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'General Surgery',
      bodyLocation: 'Appendix',
      howPerformed: [
        'Robotic Surgery (Da Vinci Xi)',
        'Minimally Invasive Laparoscopic Surgery',
      ],
      followup: 'Post-operative follow-up and recovery care as advised by the surgeon',
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
        'Appendicitis',
        'Ruptured Appendix',
        'Recurrent Appendix Inflammation',
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '66999',
        availability: 'https://schema.org/InStock',
        url: 'https://www.vasavihospitals.com/appendectomy-surgery-in-bangalore',
        description: 'Appendix removal surgery package price starts from ₹66,999. Final cost may vary based on surgical approach, urgency and patient condition.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I wait a few days before getting appendicitis surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Appendicitis is a medical emergency, not a condition that improves with waiting. An inflamed appendix can rupture within 48-72 hours of symptoms starting, spilling infection into the abdomen (peritonitis) - a serious, potentially life-threatening complication requiring a much longer, more complex surgery and recovery. If a doctor suspects appendicitis, same-day or next-day surgery is the safe standard of care.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is the best hospital for appendix surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vasavi Hospitals in Kumaraswamy Layout, Bangalore offers both robotic (Da Vinci Xi) and laparoscopic appendectomy with 24/7 emergency surgical readiness. With 30+ years of experienced surgeons and a team handling appendicitis cases regularly, it is a trusted choice for appendix removal in South Bangalore.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cost of appendix removal surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The cost of appendectomy varies depending on the surgical technique (robotic vs laparoscopic), whether the case is planned or emergency, and your insurance coverage. At Vasavi Hospitals, we provide a free cost estimation so there are no surprises. Fill in the form above or call us for a transparent quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is appendix surgery covered under insurance in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Appendectomy is covered under most health insurance plans and government schemes including Ayushman Bharat, ESI, and corporate group insurance - including emergency admissions. Our dedicated insurance team handles the entire approval process for you, even for urgent cases.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does appendix surgery take? What is the recovery time?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The procedure itself takes about 45 minutes to 1 hour. With robotic or laparoscopic techniques, most patients are discharged within 1-2 days. Most people return to normal routines within 1-2 weeks, though recovery can take longer if the appendix had already ruptured before surgery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is robotic appendectomy better than laparoscopic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both are minimally invasive and far superior to open surgery. Robotic surgery offers 3D HD vision, tremor-filtered precision, and enhanced control - useful for complex or already-ruptured cases. Laparoscopic surgery is an equally effective, widely used standard for most appendicitis cases. Your surgeon will recommend the best approach based on your condition and how urgent it is.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if it’s appendicitis and not just a stomach ache?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The classic sign is pain that starts near the navel and moves to the lower right abdomen, worsening over hours rather than easing off. It’s often paired with nausea, fever, or loss of appetite, and tends to hurt more with movement, coughing, or pressing on the area. A stomach ache from indigestion usually doesn’t follow this pattern. If in doubt, an ultrasound or CT scan at Vasavi Hospitals can confirm the diagnosis quickly.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is there any long-term effect of having the appendix removed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. The appendix has no essential function in adults, and its removal does not affect digestion, immunity, or daily life in any noticeable way. Most patients return to a completely normal diet and routine within a couple of weeks of surgery.',
          },
        },
      ],
    },
  ],
};
