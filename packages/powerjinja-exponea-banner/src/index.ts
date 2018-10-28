import { coreDefinitions } from "powerjinja-core";

import { attributeWithCalc } from "./definitions/attribute-with-calc";
import { backgroundValue } from "./definitions/background-value";
import { bannerHeight } from "./definitions/banner-height";
import { bannerPosition } from "./definitions/banner-position";
import { breakpointConditions } from "./definitions/breakpoint-conditions";
import { closeButtonPosition } from "./definitions/close-button-position";
import { processBannerPosition } from "./definitions/process-banner-position";
import { processHorizontalPosition } from "./definitions/process-horizontal-position";
import { processVerticalPosition } from "./definitions/process-vertical-position";
import { sameUnitOperation } from "./definitions/same-unit-operation";
import { shadowValue } from "./definitions/shadow-value";

export const exponeaBannerDefinitions = coreDefinitions;

exponeaBannerDefinitions.define(
  "powerjinja.exponea_banner.attribute_with_calc",
  attributeWithCalc
);
exponeaBannerDefinitions.define(
  "powerjinja.exponea_banner.background_value",
  backgroundValue
);
exponeaBannerDefinitions.define(
  "powerjinja.exponea_banner.banner_height",
  bannerHeight
);
exponeaBannerDefinitions.define(
  "powerjinja.exponea_banner.banner_position",
  bannerPosition
);
exponeaBannerDefinitions.define(
  "powerjinja.exponea_banner.breakpoint_conditions",
  breakpointConditions
);
exponeaBannerDefinitions.define(
  "powerjinja.exponea_banner.close_button_position",
  closeButtonPosition
);
exponeaBannerDefinitions.define(
  "powerjinja.exponea_banner.process_banner_position",
  processBannerPosition
);
exponeaBannerDefinitions.define(
  "powerjinja.exponea_banner.process_horizontal_position",
  processHorizontalPosition
);
exponeaBannerDefinitions.define(
  "powerjinja.exponea_banner.process_vertical_position",
  processVerticalPosition
);
exponeaBannerDefinitions.define(
  "powerjinja.exponea_banner.same_unit_operation",
  sameUnitOperation
);
exponeaBannerDefinitions.define(
  "powerjinja.exponea_banner.shadow_value",
  shadowValue
);
