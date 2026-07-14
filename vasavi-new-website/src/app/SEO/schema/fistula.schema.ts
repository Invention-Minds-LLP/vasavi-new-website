// Same @graph pattern used by piles/appendectomy/gallstone/hernia schemas -
// MedicalProcedure + FAQPage built from the 8 FAQs shown on the fistula
// landing page. NOTE: this schema deliberately has NO "offers"/price block,
// same as piles.schema.ts - there is no confirmed real fistula price
// anywhere in the codebase, so pricing is omitted entirely rather than
// invented.
export const FISTULA_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'MedicalProcedure',
      name: 'Fistula Surgery - Fistulotomy / Fistulectomy',
      url: 'https://www.vasavihospitals.com/fistula-surgery-in-bangalore',
      procedureType: 'Surgical',
      medicalSpecialty: 'General Surgery',
      bodyLocation: 'Anus / Rectum',
      howPerformed: [
        'Laser / VAAFT (Video-Assisted Anal Fistula Treatment)',
        'Conventional Fistulotomy / Fistulectomy',
      ],
      followup: 'Post-operative follow-up and wound care as advised by the surgeon',
      provider: {
        '@type': 'Hospital',
        name: 'Vasavi Hospitals',
        url: 'https://www.vasavihospitals.com/',
      },
      performedBy: [
        { '@type': 'Physician', name: 'Dr. Mohan Ram. P' },
      ],
      indication: [
        'Anal Fistula',
        'Fistula-in-Ano',
        'Recurrent Anal Abscess',
        'Perianal Fistula',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can an anal fistula heal on its own without surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An established anal fistula almost never closes on its own - the tract is lined with tissue that keeps it open, and medication alone cannot resolve it. Antibiotics may control an associated infection temporarily, but surgery (Laser/VAAFT or conventional fistulotomy/fistulectomy) is generally needed to actually close the tract and prevent recurring abscesses. Your surgeon can confirm the tract\'s complexity with an examination and, if needed, an MRI fistulogram.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which is the best hospital for fistula surgery in Bangalore?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vasavi Hospitals in Kumaraswamy Layout, Bangalore offers both Laser/VAAFT and Conventional Fistulotomy/Fistulectomy, performed by experienced general surgeons with a dedicated day-care and short-stay recovery setup. It is a trusted choice for fistula treatment in South Bangalore.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is fistula surgery covered under health insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Anal fistula surgery is covered under most health insurance plans and government schemes, including corporate group insurance, when it is medically indicated. Our dedicated insurance team checks your eligibility upfront and handles the entire cashless approval process for you.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does fistula surgery take? How many days in hospital?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most fistula procedures take 30-60 minutes depending on the tract\'s complexity. Simple fistulas are often treated as day-care or single overnight-stay procedures, while complex or recurrent fistulas may need a slightly longer stay. Your surgeon will confirm what to expect after examining your specific case.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Laser/VAAFT treatment better than conventional fistula surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Laser and VAAFT (Video-Assisted Anal Fistula Treatment) are minimally invasive, sphincter-sparing techniques that generally cause less pain and allow a faster return to normal activity, especially useful for complex tracts. Conventional Fistulotomy/Fistulectomy remains a proven, effective, time-tested option, particularly for simple, low-lying fistulas. Your surgeon will recommend the best approach based on the tract\'s location and complexity.',
          },
        },
        {
          '@type': 'Question',
          name: 'When can I return to normal activities after fistula surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most patients resume light daily activities within a few days and desk work within a week to 10 days. Because the surgical wound often heals gradually from the inside out over several weeks, your surgeon will guide you on wound care, sitz baths and dressing changes to support complete healing.',
          },
        },
        {
          '@type': 'Question',
          name: 'What happens if I keep ignoring fistula symptoms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'An anal fistula is not usually an overnight emergency - but it is progressive. Ignoring ongoing discharge or discomfort can lead to repeat abscess formation, a more complex, branching tract that is harder to treat, and chronic skin irritation. Getting evaluated while the tract is still simple generally means an easier procedure and smoother recovery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can a fistula come back after surgery?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Recurrence is possible, especially with complex or branching tracts, which is why an accurate pre-surgical assessment (often including an MRI fistulogram) matters. Choosing the right technique for your specific tract - and following your surgeon\'s wound care and follow-up advice closely - significantly reduces the chance of the fistula returning.',
          },
        },
      ],
    },
  ],
};
