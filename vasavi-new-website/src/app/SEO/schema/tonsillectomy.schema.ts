// Same pattern as sinus-surgery.schema.ts - a MedicalProcedure entry plus a
// FAQPage entry (built from the same 8 FAQs shown on the tonsillectomy
// landing page) combined under one @graph, so SeoSchema.setSchema() stays
// untouched (still just one <script> tag per route).
//
// NOTE: No "offers/price" block - no approved starting price for
// tonsillectomy yet. Add an "offers" object here (same shape as
// hernia.schema.ts) the moment a real number is approved.
export const TONSILLECTOMY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Tonsillectomy (Coblation / Traditional)',
      url: 'https://www.vasavihospitals.com/tonsillectomy-surgery-in-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'Otolaryngology',
      bodyLocation: 'Tonsils / Throat',
      howPerformed: [
        'Coblation Tonsillectomy',
        'Traditional Tonsillectomy (cold dissection/bipolar)',
      ],
      followup: 'Post-surgery follow-up, pain management, and soft-diet plan as advised by the surgeon',
      provider: {
        '@type': 'Hospital',
        name: 'Vasavi Hospitals',
        url: 'https://www.vasavihospitals.com/',
      },
      performedBy: [
        { '@type': 'Physician', name: 'Dr. Yashaswi Srikakula' },
        { '@type': 'Physician', name: 'Dr. Sphoorthy G Itigi' },
      ],
      indication: [
        'Recurrent Tonsillitis',
        'Sleep Apnea & Loud Snoring',
        'Severely Enlarged Tonsils',
        'Peritonsillar Abscess',
        'Chronic Bad Breath (Tonsil Stones)',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is tonsillectomy safe for young children?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Tonsillectomy is one of the most commonly performed surgeries in children and is considered very safe, especially with modern techniques like coblation. At Vasavi Hospitals, our ENT team uses child-friendly anaesthesia protocols and closely monitors every child before, during, and after surgery. Most children go home the same day or after one night of observation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is the best hospital for tonsillectomy in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vasavi Hospitals in Kumaraswamy Layout, Bangalore has a dedicated ENT team led by 25+ year experienced specialists, using modern coblation technology for a gentler, faster-recovery procedure. We treat both children and adults, with pediatric-friendly care throughout.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cost of tonsillectomy surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cost depends on the technique used (coblation vs. traditional), the patient’s age, and any additional procedures needed (such as adenoid removal). We provide a free, personalised cost estimate before surgery so there are no surprises - fill in the form above or call us for a transparent quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is tonsillectomy covered under insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Tonsillectomy is covered under most health insurance plans when medically indicated (recurrent infections, sleep apnea, or airway obstruction). Our insurance team handles the entire approval process for you - documentation, pre-authorisation, and claim submission.',
          },
        },
        {
          '@type': 'Question',
          name: 'How painful is recovery, especially for a child?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Some throat discomfort is normal, especially while swallowing, and typically peaks around day 5-7 when the healing scabs naturally come off - this is expected, not a complication. With coblation technique, pain is significantly milder than with traditional surgery, and we provide a clear pain-management and soft-diet plan for both children and adults.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is coblation tonsillectomy, and is it better than traditional surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Coblation uses a low-temperature plasma field to remove tonsil tissue, rather than heat/cautery. Compared to traditional (cold steel/bipolar) tonsillectomy, it typically means less post-operative pain, a faster return to normal eating (often 3-5 days), and a notably lower bleeding risk (studies show roughly 0.5% with coblation versus around 3% with traditional bipolar technique).',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if my child needs a tonsillectomy?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common signs include frequent throat infections, loud snoring or pauses in breathing during sleep, mouth breathing, difficulty swallowing solid food, or recurrent tonsil abscesses. If you notice these signs, a consultation and throat examination at Vasavi Hospitals can confirm whether surgery is the right option.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can tonsils grow back after surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Complete regrowth is rare. With intracapsular/coblation techniques, a small amount of tonsil tissue may sometimes remain, but clinically significant regrowth requiring another surgery is uncommon. Your surgeon will discuss the most appropriate technique for your specific case.',
          },
        },
      ],
    },
  ],
};
