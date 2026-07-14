// First schema on the site to combine two types under one @graph - a
// MedicalProcedure entry (matches the pattern used by hernia/gallstone
// schema) plus a FAQPage entry built from the same 8 FAQs shown on the
// sinus-surgery landing page. Combining them keeps SeoSchema.setSchema()
// untouched (it only ever injects a single <script> tag per route).
//
// NOTE: No "offers/price" block yet, unlike HERNIA_SCHEMA/GALLSTONE_SCHEMA -
// Vasavi hasn't given us an approved starting price for Balloon Sinuplasty /
// FESS. Add an "offers" object here (same shape as hernia.schema.ts) the
// moment a real number is approved - that will also unlock the on-page
// "from ₹X" price-range display discussed separately.
export const SINUS_SURGERY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Sinus Surgery (Balloon Sinuplasty / FESS)',
      url: 'https://www.vasavihospitals.com/sinus-surgery-in-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'Otolaryngology',
      bodyLocation: 'Sinuses / Nasal Passages',
      howPerformed: [
        'Balloon Sinuplasty',
        'Functional Endoscopic Sinus Surgery (FESS)',
      ],
      followup: 'Post-surgery follow-up, saline rinses, and recovery care as advised by the surgeon',
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
        'Chronic Sinusitis',
        'Recurrent Sinus Infections',
        'Nasal Polyps',
        'Deviated Septum with Blockage',
        'Sinusitis Not Responding to Medication',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can I just keep managing my sinus symptoms with medication?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For occasional sinus issues, yes - medication is often enough. But if you are getting 4+ infections a year, or symptoms persist beyond 12 weeks despite antibiotics and nasal sprays, medication alone is unlikely to fix the underlying blockage. Chronic, untreated sinusitis can also lead to worsening polyps or spread of infection. A specialist evaluation can tell you clearly whether surgery is actually needed - many patients are surprised at how much relief a single procedure can bring after years of managing symptoms.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is the best hospital for sinus surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vasavi Hospitals in Kumaraswamy Layout, Bangalore has a dedicated ENT team led by 25+ year experienced specialists, offering both Balloon Sinuplasty and Functional Endoscopic Sinus Surgery (FESS) depending on what your case needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the cost of sinus surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Cost depends on the technique (Balloon Sinuplasty vs. FESS), the extent of the blockage, and whether nasal polyps or a deviated septum need correcting at the same time. We provide a free, personalised cost estimate before surgery so there are no surprises - fill in the form above or call us for a transparent quote.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is sinus surgery covered under insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Sinus surgery is covered under most health insurance plans when medically indicated (chronic sinusitis unresponsive to medication, nasal polyps, or recurrent infections). Our insurance team handles the entire approval process for you - documentation, pre-authorisation, and claim submission.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the difference between Balloon Sinuplasty and FESS?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Balloon Sinuplasty gently widens blocked sinus passages using a small catheter and balloon - minimally invasive, minimal tissue trauma, and typically just a 1-2 day recovery. It suits less severe, uncomplicated cases. FESS (Functional Endoscopic Sinus Surgery) removes diseased tissue or polyps for more thorough relief in complex or recurrent cases, with a longer 7-10 day recovery. Your surgeon will recommend the right option after evaluating your scans.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can chronic sinus problems really affect my sleep and energy levels?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes - this is one of the most under-recognised effects of chronic sinusitis. The majority of chronic sinusitis patients report disrupted sleep, and ongoing inflammation combined with poor sleep commonly causes persistent fatigue and brain fog that does not improve with rest. Treating the underlying blockage often improves energy and sleep quality alongside the nasal symptoms.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I know if I need sinus surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Common signs include a blocked nose lasting weeks, facial pain or pressure, frequent headaches, reduced sense of smell, thick discharge, and infections that keep coming back despite treatment. Use the quick symptom check on the page, then book a consultation for a proper evaluation with imaging if needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can sinus problems come back after surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recurrence is uncommon with a thorough procedure and proper post-op care (saline rinses, follow-up visits), though allergies or nasal polyps can occasionally cause symptoms to return over time. Your surgeon will discuss a long-term management plan specific to your case.',
          },
        },
      ],
    },
  ],
};
