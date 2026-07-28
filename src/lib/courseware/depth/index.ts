import type { CoursewareDepth } from "../types";
import { ACCA_DEPTH } from "./acca";
import { CAIA_DEPTH } from "./caia";
import { CFA_DEPTH } from "./cfa";
import { CFP_DEPTH } from "./cfp";
import { SIE_DEPTH } from "./sie";
import { FRM_DEPTH } from "./frm";
import { FRM_P2_A_DEPTH } from "./frm-p2-a";
import { FRM_P2_B_DEPTH } from "./frm-p2-b";
import { FRM_P2_C_DEPTH } from "./frm-p2-c";
import { CPA_DEPTH } from "./cpa";
import { CPA_AUD_REST_DEPTH } from "./cpa-aud-rest";
import { CPA_FAR_A1_DEPTH } from "./cpa-far-a1";
import { CPA_FAR_A2_DEPTH } from "./cpa-far-a2";
import { CPA_FAR_B_DEPTH } from "./cpa-far-b";
import { CPA_REG_A_DEPTH } from "./cpa-reg-a";
import { CPA_REG_M5_DEPTH } from "./cpa-reg-m5";
import { CPA_REG_M6_DEPTH } from "./cpa-reg-m6";
import { CPA_DISCIPLINE_M2_DEPTH } from "./cpa-discipline-m2";
import { CPA_DISCIPLINE_M3_DEPTH } from "./cpa-discipline-m3";
import { CPA_DISCIPLINE_M4_DEPTH } from "./cpa-discipline-m4";
import { CPA_DISCIPLINE_A3_DEPTH } from "./cpa-discipline-a3";
import { CPA_DISCIPLINE_B_DEPTH } from "./cpa-discipline-b";

function mergeDepthMaps(
  ...maps: Array<Record<string, CoursewareDepth>>
): Record<string, CoursewareDepth> {
  const merged: Record<string, CoursewareDepth> = {};
  for (const map of maps) {
    for (const [moduleId, value] of Object.entries(map)) {
      if (merged[moduleId]) {
        throw new Error(`Duplicate courseware depth entry: ${moduleId}`);
      }
      merged[moduleId] = value;
    }
  }
  return merged;
}

/** Human-authored exam depth. Missing modules receive a validated derived layer. */
export const EXPERT_COURSEWARE_DEPTH = mergeDepthMaps(
  ACCA_DEPTH,
  CFA_DEPTH,
  FRM_DEPTH,
  FRM_P2_A_DEPTH,
  FRM_P2_B_DEPTH,
  FRM_P2_C_DEPTH,
  CPA_DEPTH,
  CPA_AUD_REST_DEPTH,
  CPA_FAR_A1_DEPTH,
  CPA_FAR_A2_DEPTH,
  CPA_FAR_B_DEPTH,
  CPA_REG_A_DEPTH,
  CPA_REG_M5_DEPTH,
  CPA_REG_M6_DEPTH,
  CPA_DISCIPLINE_M2_DEPTH,
  CPA_DISCIPLINE_M3_DEPTH,
  CPA_DISCIPLINE_M4_DEPTH,
  CPA_DISCIPLINE_A3_DEPTH,
  CPA_DISCIPLINE_B_DEPTH,
  CAIA_DEPTH,
  CFP_DEPTH,
  SIE_DEPTH
);
