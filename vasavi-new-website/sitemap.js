const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const hostname = 'https://www.vasavihospitals.com/';

// Optional dynamic imports (if needed)
const doctorData = require('./doctors.json');
const blogSlugs = require('./blogSlug.json');

function nameToSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

// ✅ Updated Static Routes (matching Angular routing)
const staticRoutes = [
  '/',
  '/about-vasavi-hospitals-in-bangalore',
  '/contact-vasavi-hospitals-in-bangalore',
  '/awards-and-recognition',
  '/gallery',
  '/health-packages-in-bangalore',

  // --- Specialities ---
  '/anesthesiology-hospital-in-bangalore',
  '/bariatric-surgery-in-bangalore',
  '/cardiology-hospital-in-bangalore',
  '/dental-clinic-in-bangalore',
  '/dermatology-skin-clinic-in-bangalore',
  '/diabetes-and-endocrinology-center-in-bangalore',
  '/emergency-and-critical-care-in-bangalore',
  '/ent-hospital-in-bangalore',
  '/internal-medicine-hospital-in-bangalore',
  '/liver-hpb-care-center-in-bangalore',
  '/gastroenterology-hospital-in-bangalore',
  '/medical-oncology-cancer-treatment-in-bangalore',
  '/minimally-invasive-surgery-in-bangalore',
  '/neonatology-and-nicu-care-in-bangalore',
  '/nephrology-hospital-in-bangalore',
  '/neurology-hospital-in-bangalore',
  '/neurosurgery-specialist-in-bangalore',
  '/nutrition-and-dietetics-consultation-in-bangalore',
  '/eye-hospital-in-bangalore',
  '/oral-and-maxillofacial-surgery-in-bangalore',
  '/orthopedic-hospital-in-bangalore',
  '/pediatric-hospital-in-bangalore',
  '/physiotherapy-center-in-bangalore',
  '/plastic-and-reconstructive-surgery-in-bangalore',
  '/psychiatry-and-mental-health-in-bangalore',
  '/radiology-and-imaging-services-in-bangalore',
  '/surgical-gastroenterology-in-bangalore',
  '/surgical-oncology-cancer-hospital-in-bangalore',
  '/urology-hospital-in-bangalore',
  '/vascular-surgery-in-bangalore',
  '/oncology-hospital-in-bangalore',
  '/obstetrics-and-gynaecology-hospital-in-bangalore',
  '/lung-specialist-in-bangalore',

  // --- Robotic Surgery Packages ---
  '/hernia-surgery-in-bangalore',
  '/total-knee-replacement-in-bangalore',
  '/total-hip-replacement-in-bangalore',
  '/gallbladder-removal-surgery-in-bangalore',
  '/appendectomy-surgery-in-bangalore',
  '/hysterectomy-surgery-in-bangalore',

  // --- Others ---
  '/ai-health-chatbot-in-bangalore',
  '/thank-you',
];

// ✅ Dynamic doctor and blog routes
const doctorRoutes = doctorData.map(
  (doc) => `/doctors/${nameToSlug(doc.name)}`
);
const blogRoutes = blogSlugs.map((slug) => `/blog/${slug}`);

// ✅ Combine all routes
const allRoutes = [...staticRoutes, ...doctorRoutes, ...blogRoutes];

// ✅ Generate sitemap
(async () => {
  const sitemap = new SitemapStream({ hostname });
  const sitemapPath = path.resolve(__dirname, 'src', 'sitemap.xml');
  const writeStream = fs.createWriteStream(sitemapPath);

  sitemap.pipe(writeStream);

  allRoutes.forEach((url) => {
    sitemap.write({ url, changefreq: 'monthly', priority: 0.8 });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log(`✅ Sitemap successfully generated at ${sitemapPath}`);
})();
