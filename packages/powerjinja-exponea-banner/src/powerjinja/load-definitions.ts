import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

import { attributeWithCalc } from '../definitions/attribute-with-calc'
import { backgroundValue } from '../definitions/background-value'
import { bannerHeight } from '../definitions/banner-height'
import { bannerPosition } from '../definitions/banner-position'
import { breakpointConditions } from '../definitions/breakpoint-conditions'
import { closeButtonPosition } from '../definitions/close-button-position'
import { processBannerPosition } from '../definitions/process-banner-position'
import { processHorizontalPosition } from '../definitions/process-horizontal-position'
import { processVerticalPosition } from '../definitions/process-vertical-position'
import { sameUnitOperation } from '../definitions/same-unit-operation'
import { shadowValue } from '../definitions/shadow-value'

export function loadDefinitions(powerjinja: Powerjinja) {
  powerjinja.define('powerjinja.exponea_banner.attribute_with_calc', attributeWithCalc(powerjinja.config));
  powerjinja.define('powerjinja.exponea_banner.background_value', backgroundValue(powerjinja.config));
  powerjinja.define('powerjinja.exponea_banner.banner_height', bannerHeight(powerjinja.config));
  powerjinja.define('powerjinja.exponea_banner.banner_position', bannerPosition(powerjinja.config));
  powerjinja.define('powerjinja.exponea_banner.breakpoint_conditions', breakpointConditions(powerjinja.config));
  powerjinja.define('powerjinja.exponea_banner.close_button_position', closeButtonPosition(powerjinja.config));
  powerjinja.define('powerjinja.exponea_banner.process_banner_position', processBannerPosition(powerjinja.config));
  powerjinja.define('powerjinja.exponea_banner.process_horizontal_position', processHorizontalPosition(powerjinja.config));
  powerjinja.define('powerjinja.exponea_banner.process_vertical_position', processVerticalPosition(powerjinja.config));
  powerjinja.define('powerjinja.exponea_banner.same_unit_operation', sameUnitOperation(powerjinja.config));
  powerjinja.define('powerjinja.exponea_banner.shadow_value', shadowValue(powerjinja.config));

  return powerjinja;
}