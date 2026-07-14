// Upgraded to the @graph pattern used by sinus-surgery/tonsillectomy/
// adenoid-removal/hernia schemas - MedicalProcedure (with its existing,
// real approved "offers" price block, unchanged) plus a new FAQPage entry
// built from the same 8 FAQs shown on the gallbladder stone removal
// landing page.
export const GALLSTONE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Gallbladder Removal Surgery (Cholecystectomy)',
      url: 'https://www.vasavihospitals.com/gallbladder-removal-surgery-in-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'General Surgery',
      bodyLocation: 'Gallbladder',
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
        'Gallstones',
        'Gallbladder Inflammation (Cholecystitis)',
        'Biliary Colic',
        'Gallbladder Disease',
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '81999',
        availability: 'https://schema.org/InStock',
        url: 'https://www.vasavihospitals.com/gallbladder-removal-surgery-in-bangalore',
        description: 'Gallbladder removal surgery package price starts from ₹81,999. Final cost may vary based on surgical approach and patient condition.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can gallstones be left untreated if they don’t cause pain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Silent gallstones with no symptoms are sometimes monitored, but once they start causing pain, indigestion, or inflammation, they rarely resolve on their own. Delaying treatment after symptoms appear raises the risk of acute cholecystitis, gallbladder rupture, bile duct blockage, or pancreatitis - all of which need emergency surgery. If your doctor has confirmed symptomatic gallstones, planned surgery is safer than waiting for a complication.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is the best hospital for gallbladder surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vasavi Hospitals in Kumaraswamy Layout, Bangalore is a dedicated surgical centre offering both robotic (Da Vinci Xi) and laparoscopic gallbladder removal. With 30+ years of experienced surgeons and a team handling hundreds of cholecystectomies each year, it is a trusted choice for gallbladder stone removal in South Bangalore.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cost of gallbladder stone removal surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The cost of gallbladder removal surgery varies depending on the surgical technique (robotic vs laparoscopic), your condition, and insurance coverage. At Vasavi Hospitals, we provide a free cost estimation before your surgery so there are no surprises. Fill in the form above or call us for a transparent quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is gallbladder surgery covered under insurance in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Gallbladder removal surgery is covered under most health insurance plans and government schemes including Ayushman Bharat, ESI, and corporate group insurance. Our dedicated insurance team handles the entire approval process for you - from documentation to claim submission - with zero hassle.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does gallbladder surgery take? What is the recovery time?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The procedure itself takes about 1 hour. With robotic or laparoscopic techniques, most patients are discharged within 1-2 days. You can resume light daily activities in 5-7 days and return to full work within 1-2 weeks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is robotic gallbladder surgery better than laparoscopic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Both are minimally invasive and far superior to open surgery. Robotic surgery offers 3D HD vision, tremor-filtered precision, and enhanced control - making it ideal for complex cases. Laparoscopic surgery is an equally effective and widely trusted choice for most standard gallstone cases. Your surgeon will recommend the best approach based on your condition.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if I need gallbladder surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common signs include sudden or sharp pain in the upper right abdomen, nausea or vomiting after fatty meals, indigestion or bloating, and fever or discomfort below the ribs. If pain is sudden and severe, or accompanied by high fever or jaundice - seek emergency care immediately. An ultrasound or CT scan at Vasavi Hospitals can confirm the diagnosis in one visit.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I live a normal life without a gallbladder?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. The gallbladder stores bile but is not essential for digestion - the liver continues to produce bile, which flows directly into the intestine. Most patients resume a normal diet and daily routine within a couple of weeks, with only minor initial dietary adjustments recommended by the surgical team.',
          },
        },
      ],
    },
  ],
};
