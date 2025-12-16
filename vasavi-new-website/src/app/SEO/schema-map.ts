// src/app/seo/schema-map.ts

import { HOME_SCHEMA } from "./schema/home.schema";
import { CARDIOLOGY_SCHEMA } from "./schema/cardiology.schema";
import { ENT_SCHEMA } from "./schema/ent.schema";
import { UROLOGY_SCHEMA } from "./schema/urology.schema";
import { ORTHOPEDIC_SCHEMA } from "./schema/orthopedic.schema";
import { NEPHROLOGY_SCHEMA } from "./schema/nephrology.schema";
import { PULMONOLOGY_SCHEMA } from "./schema/pulmonology.schema";
import { GYNECOLOGY_SCHEMA } from "./schema/gynecology.schema";
import { HERNIA_SCHEMA } from "./schema/hernia.schema";
import { TKR_SCHEMA } from "./schema/tkr.schema";
import { THR_SCHEMA } from "./schema/thr.schema";
import { ACL_SCHEMA } from "./schema/acl-reconstruction";
import { GALLSTONE_SCHEMA } from "./schema/gallstone.schema";
import { DR_KUMARESH_SCHEMA } from "./schema/doctor-schema/dr-kumaresh-krishnamoorthy.schema";
import { DR_NISHA_SCHEMA } from "./schema/doctor-schema/dr-nisha-buchade";
import { DR_RAMESH_HANUMEGOWDA_SCHEMA } from "./schema/doctor-schema/dr-ramesh-hanume-gowda.schema";
import { DR_RAMESH_TS_SCHEMA } from "./schema/doctor-schema/dr-ramesh-t-s.schema";
import { DR_RUPENDU_SCHEMA } from "./schema/doctor-schema/dr-rupendu.schema";

export const SCHEMA_MAP: any = {

  // HOME
  '/': HOME_SCHEMA,

  // DEPARTMENTS
  '/cardiology-hospital-in-bangalore': CARDIOLOGY_SCHEMA,
  '/ent-hospital-in-bangalore': ENT_SCHEMA,
  '/urology-hospital-in-bangalore': UROLOGY_SCHEMA,
  '/orthopedic-hospital-in-bangalore' : ORTHOPEDIC_SCHEMA,
  '/lung-specialist-in-bangalore' : PULMONOLOGY_SCHEMA,
  'nephrology-hospital-in-bangalore' : NEPHROLOGY_SCHEMA,
  '/obstetrics-and-gynaecology-hospital-in-bangalore' : GYNECOLOGY_SCHEMA,

   // SURGERIES
  '/hernia-surgery-in-bangalore': HERNIA_SCHEMA,
  '/total-knee-replacement-in-bangalore': TKR_SCHEMA,
  '/total-hip-replacement-in-bangalore': THR_SCHEMA,
  '/acl-reconstruction-in-bangalore': ACL_SCHEMA,
  '/gallbladder-removal-surgery-in-bangalore': GALLSTONE_SCHEMA,

   // DOCTORS
  '/doctors/dr-kumaresh-krishnamoorthy': DR_KUMARESH_SCHEMA,
  '/doctors/dr-nisha-buchade': DR_NISHA_SCHEMA,
  '/doctors/dr-ramesh-t-s': DR_RAMESH_TS_SCHEMA,
  '/doctors/dr-ramesh-hanumegowda': DR_RAMESH_HANUMEGOWDA_SCHEMA,
  '/doctors/dr-rupendu-t': DR_RUPENDU_SCHEMA

};
