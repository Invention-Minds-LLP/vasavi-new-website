// Upgraded to the same @graph pattern used by appendectomy/hernia/gallstone
// schemas - MedicalProcedure (price kept schema-only: ₹1,21,999, previously
// baked into the old hero banner and now off the visible page per the same
// user decision applied to Appendectomy) plus a FAQPage entry built from the
// same 8 FAQs shown on the rebuilt ACL reconstruction landing page.
export const ACL_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'ACL Reconstruction Surgery',
      url: 'https://www.vasavihospitals.com/acl-reconstruction-in-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'Orthopedics',
      bodyLocation: 'Knee',
      howPerformed: [
        'Arthroscopic ACL Reconstruction',
        'Minimally Invasive Ligament Reconstruction Surgery',
      ],
      followup: 'Post-operative rehabilitation and physiotherapy as advised by the orthopedic surgeon',
      provider: {
        '@type': 'Hospital',
        name: 'Vasavi Hospitals',
        url: 'https://www.vasavihospitals.com/',
      },
      performedBy: [
        // {
        //   "@type": "Physician",
        //   "name": "Dr. Rupendu T"
        // },
        {
          '@type': 'Physician',
          name: 'Dr. Venkatesh Rathod R',
        },
      ],
      indication: [
        'ACL Tear',
        'Knee Instability',
        'Sports-Related Knee Injury',
        'Ligament Damage of the Knee',
      ],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        price: '121999',
        availability: 'https://schema.org/InStock',
        url: 'https://www.vasavihospitals.com/acl-reconstruction-in-bangalore',
        description: 'ACL Reconstruction surgery package price starts from ₹1,21,999. Final cost may vary based on surgical technique and patient condition.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can an ACL tear heal on its own without surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A fully torn ACL does not grow back together on its own - it has a poor blood supply. Some partial tears and low-demand patients do well with structured physiotherapy alone. But if your knee keeps giving way, every episode risks new damage to the meniscus and cartilage, which is why active people and athletes are usually advised reconstruction. An MRI and a proper orthopaedic evaluation will tell you which group you fall into.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is the best hospital for ACL reconstruction in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vasavi Hospitals in Kumaraswamy Layout, Bangalore performs arthroscopic (keyhole) ACL reconstruction with an experienced orthopaedic and sports-injury team, advanced arthroscopy equipment, and an in-house physiotherapy and rehabilitation unit - the part of ACL recovery most patients underestimate. It is a trusted choice for knee ligament surgery in South Bangalore.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cost of ACL reconstruction surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The cost of ACL reconstruction varies with the graft type, whether additional injuries (like a meniscus tear) need repair in the same sitting, and your insurance coverage. At Vasavi Hospitals, we provide a free, personalised cost estimation so there are no surprises. Call us for a transparent quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is ACL surgery covered under health insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. ACL reconstruction is covered under most health insurance plans when it is medically indicated after an injury, including corporate group insurance and many government schemes. Our dedicated insurance team checks your eligibility upfront and handles the entire cashless approval process for you.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does ACL surgery take? How many days in hospital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The arthroscopic procedure itself usually takes about 1-2 hours under spinal or general anaesthesia. Most patients stay in hospital for 1-2 days, and physiotherapy begins almost immediately - gentle knee movement starts before you go home.',
          },
        },
        {
          '@type': 'Question',
          name: 'What graft is used to reconstruct the ACL?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The torn ligament is replaced with a graft - most commonly your own hamstring or patellar tendon (autograft), and in select cases donor tissue (allograft). Each option has trade-offs in strength, recovery and donor-site comfort. Your surgeon will recommend the right graft based on your age, activity level and sport.',
          },
        },
        {
          '@type': 'Question',
          name: 'When can I walk again after ACL surgery - and when can I return to sports?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most patients walk with support within a few days of surgery and return to desk work in 1-2 weeks. Jogging typically resumes around 3 months. Return to pivoting sports like football, basketball or badminton usually takes 6-9 months, guided by physiotherapy strength milestones rather than the calendar alone.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I delay ACL surgery for months?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An ACL tear is not an overnight emergency - but it should not be ignored either. Every "giving way" episode can tear the meniscus or damage cartilage, and long-standing instability is linked to early knee arthritis. If you are active and your knee is unstable, earlier reconstruction protects the rest of the joint and makes rehabilitation easier.',
          },
        },
      ],
    },
  ],
};
