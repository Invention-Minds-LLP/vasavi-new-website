// Same pattern as sinus-surgery.schema.ts / tonsillectomy.schema.ts - a
// MedicalProcedure entry plus a FAQPage entry (built from the same 8 FAQs
// shown on the adenoid removal landing page) combined under one @graph.
//
// NOTE: No "offers/price" block - no approved starting price for adenoid
// removal yet (the old hero banner had an unconfirmed "₹35,999*" baked into
// the image itself, not treated as an approved figure). Add an "offers"
// object here (same shape as hernia.schema.ts) the moment a real number is
// approved.
export const ADENOID_REMOVAL_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Adenoid Removal (Adenoidectomy)',
      url: 'https://www.vasavihospitals.com/adenoid-removal-in-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'Otolaryngology',
      bodyLocation: 'Adenoids / Nasopharynx',
      howPerformed: [
        'Adenoidectomy (alone)',
        'Adenotonsillectomy (combined with tonsillectomy)',
      ],
      followup: 'Post-surgery follow-up and recovery care as advised by the surgeon',
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
        'Snoring & Sleep Apnea',
        'Chronic Mouth Breathing',
        'Recurrent Ear Infections',
        'Chronic Sinus Infections',
        'Persistent Nasal Obstruction',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is adenoid removal safe for young children?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Adenoidectomy is one of the safest and most commonly performed ENT surgeries in children. It is done entirely through the mouth or nose with no external cuts or visible scars, and takes only about 15-20 minutes under general anaesthesia. At Vasavi Hospitals, our ENT team uses child-friendly anaesthesia protocols and monitors every child closely before, during, and after surgery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is the best hospital for adenoid removal in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vasavi Hospitals in Kumaraswamy Layout, Bangalore has a dedicated pediatric-friendly ENT team led by 25+ year experienced specialists, equipped to handle both adenoidectomy alone and combined adenotonsillectomy where needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cost of adenoid removal surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cost depends on whether adenoids are removed alone or combined with tonsil removal (adenotonsillectomy), along with the child’s age and any additional evaluation needed. We provide a free, personalised cost estimate before surgery so there are no surprises - fill in the form above or call us for a transparent quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is adenoidectomy covered under insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Adenoid removal is covered under most health insurance plans when medically indicated (sleep apnea, recurrent ear or sinus infections, or nasal obstruction). Our insurance team handles the entire approval process for you - documentation, pre-authorisation, and claim submission.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is recovery different from tonsillectomy? Is it easier on my child?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, noticeably. Because adenoidectomy involves no external incision and no wound in a high-movement area like the throat, recovery is typically faster and less painful than tonsillectomy - most children return to normal activity and diet within 2-3 days, versus 7-10 days for tonsil removal. If both are done together (adenotonsillectomy), recovery follows the longer tonsillectomy timeline.',
          },
        },
        {
          '@type': 'Question',
          name: 'Does my child need adenoids removed, tonsils removed, or both?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on which tissue is causing the symptoms. Some children only have enlarged adenoids (nasal blockage, snoring, ear infections) while others have both adenoids and tonsils enlarged, needing a combined adenotonsillectomy. A throat and nasal examination at Vasavi Hospitals can confirm exactly what your child needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if my child needs adenoid removal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common signs include loud snoring, breathing through the mouth most of the time, pauses in breathing during sleep, frequent ear infections or hearing difficulty, and repeated sinus infections. If you notice these signs, a consultation at Vasavi Hospitals can confirm whether surgery is the right option.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can adenoids grow back after surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Complete regrowth requiring another surgery is uncommon. A small amount of adenoid tissue can occasionally remain and cause mild symptoms again, but this is rare with a thorough procedure. Your surgeon will discuss this with you based on your child’s specific case.',
          },
        },
      ],
    },
  ],
};
