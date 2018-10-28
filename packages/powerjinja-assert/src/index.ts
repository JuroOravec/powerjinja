import { coreDefinitions } from "powerjinja-core";

import { isFalse as isFalseBoolean } from "./definitions/boolean/is-false";
import { isTrue as isTrueBoolean } from "./definitions/boolean/is-true";
import { containsAnyItemsLessThanOrEqualTimes as containsAnyItemsLessThanOrEqualTimesList } from "./definitions/list/contains-any-items-less-than-or-equal-times";
import { containsAnyItemsLessThanTimes as containsAnyItemsLessThanTimesList } from "./definitions/list/contains-any-items-less-than-times";
import { containsAnyItemsMoreThanOrEqualTimes as containsAnyItemsMoreThanOrEqualTimesList } from "./definitions/list/contains-any-items-more-than-or-equal-times";
import { containsAnyItemsMoreThanTimes as containsAnyItemsMoreThanTimesList } from "./definitions/list/contains-any-items-more-than-times";
import { containsAnyItemsTimes as containsAnyItemsTimesList } from "./definitions/list/contains-any-items-times";
import { containsAnyItems as containsAnyItemsList } from "./definitions/list/contains-any-items";
import { containsItemLessThanOrEqualTimes as containsItemLessThanOrEqualTimesList } from "./definitions/list/contains-item-less-than-or-equal-times";
import { containsItemLessThanTimes as containsItemLessThanTimesList } from "./definitions/list/contains-item-less-than-times";
import { containsItemMoreThanOrEqualTimes as containsItemMoreThanOrEqualTimesList } from "./definitions/list/contains-item-more-than-or-equal-times";
import { containsItemMoreThanTimes as containsItemMoreThanTimesList } from "./definitions/list/contains-item-more-than-times";
import { containsItemTimes as containsItemTimesList } from "./definitions/list/contains-item-times";
import { containsItem as containsItemList } from "./definitions/list/contains-item";
import { containsItemsLessThanOrEqualTimes as containsItemsLessThanOrEqualTimesList } from "./definitions/list/contains-items-less-than-or-equal-times";
import { containsItemsLessThanTimes as containsItemsLessThanTimesList } from "./definitions/list/contains-items-less-than-times";
import { containsItemsMoreThanOrEqualTimes as containsItemsMoreThanOrEqualTimesList } from "./definitions/list/contains-items-more-than-or-equal-times";
import { containsItemsMoreThanTimes as containsItemsMoreThanTimesList } from "./definitions/list/contains-items-more-than-times";
import { containsItemsTimes as containsItemsTimesList } from "./definitions/list/contains-items-times";
import { containsItems as containsItemsList } from "./definitions/list/contains-items";
import { containsOnlyItemLessThanOrEqualTimes as containsOnlyItemLessThanOrEqualTimesList } from "./definitions/list/contains-only-item-less-than-or-equal-times";
import { containsOnlyItemLessThanTimes as containsOnlyItemLessThanTimesList } from "./definitions/list/contains-only-item-less-than-times";
import { containsOnlyItemMoreThanOrEqualTimes as containsOnlyItemMoreThanOrEqualTimesList } from "./definitions/list/contains-only-item-more-than-or-equal-times";
import { containsOnlyItemMoreThanTimes as containsOnlyItemMoreThanTimesList } from "./definitions/list/contains-only-item-more-than-times";
import { containsOnlyItemTimes as containsOnlyItemTimesList } from "./definitions/list/contains-only-item-times";
import { containsOnlyItem as containsOnlyItemList } from "./definitions/list/contains-only-item";
import { containsOnlyItemsLessThanOrEqualTimes as containsOnlyItemsLessThanOrEqualTimesList } from "./definitions/list/contains-only-items-less-than-or-equal-times";
import { containsOnlyItemsLessThanTimes as containsOnlyItemsLessThanTimesList } from "./definitions/list/contains-only-items-less-than-times";
import { containsOnlyItemsMoreThanOrEqualTimes as containsOnlyItemsMoreThanOrEqualTimesList } from "./definitions/list/contains-only-items-more-than-or-equal-times";
import { containsOnlyItemsMoreThanTimes as containsOnlyItemsMoreThanTimesList } from "./definitions/list/contains-only-items-more-than-times";
import { containsOnlyItemsTimes as containsOnlyItemsTimesList } from "./definitions/list/contains-only-items-times";
import { containsOnlyItems as containsOnlyItemsList } from "./definitions/list/contains-only-items";
import { containsOnlyOrderedItemsLessThanOrEqualTimes as containsOnlyOrderedItemsLessThanOrEqualTimesList } from "./definitions/list/contains-only-ordered-items-less-than-or-equal-times";
import { containsOnlyOrderedItemsLessThanTimes as containsOnlyOrderedItemsLessThanTimesList } from "./definitions/list/contains-only-ordered-items-less-than-times";
import { containsOnlyOrderedItemsMoreThanOrEqualTimes as containsOnlyOrderedItemsMoreThanOrEqualTimesList } from "./definitions/list/contains-only-ordered-items-more-than-or-equal-times";
import { containsOnlyOrderedItemsMoreThanTimes as containsOnlyOrderedItemsMoreThanTimesList } from "./definitions/list/contains-only-ordered-items-more-than-times";
import { containsOnlyOrderedItemsTimes as containsOnlyOrderedItemsTimesList } from "./definitions/list/contains-only-ordered-items-times";
import { containsOnlyOrderedItems as containsOnlyOrderedItemsList } from "./definitions/list/contains-only-ordered-items";
import { isEmpty as isEmptyList } from "./definitions/list/is-empty";
import { isFirstItemEqualOneOf as isFirstItemEqualOneOfList } from "./definitions/list/is-first-item-equal-one-of";
import { isFirstItemEqual as isFirstItemEqualList } from "./definitions/list/is-first-item-equal";
import { isFirstItemTypeOneOf as isFirstItemTypeOneOfList } from "./definitions/list/is-first-item-type-one-of";
import { isFirstItemType as isFirstItemTypeList } from "./definitions/list/is-first-item-type";
import { isLastItemEqualOneOf as isLastItemEqualOneOfList } from "./definitions/list/is-last-item-equal-one-of";
import { isLastItemEqual as isLastItemEqualList } from "./definitions/list/is-last-item-equal";
import { isLastItemTypeOneOf as isLastItemTypeOneOfList } from "./definitions/list/is-last-item-type-one-of";
import { isLastItemType as isLastItemTypeList } from "./definitions/list/is-last-item-type";
import { isNthItemEqualOneOf as isNthItemEqualOneOfList } from "./definitions/list/is-nth-item-equal-one-of";
import { isNthItemEqual as isNthItemEqualList } from "./definitions/list/is-nth-item-equal";
import { isNthItemTypeOneOf as isNthItemTypeOneOfList } from "./definitions/list/is-nth-item-type-one-of";
import { isNthItemType as isNthItemTypeList } from "./definitions/list/is-nth-item-type";
import { isOfLengthLessThanOrEqual as isOfLengthLessThanOrEqualList } from "./definitions/list/is-of-length-less-than-or-equal";
import { isOfLengthLessThan as isOfLengthLessThanList } from "./definitions/list/is-of-length-less-than";
import { isOfLengthMoreThanOrEqual as isOfLengthMoreThanOrEqualList } from "./definitions/list/is-of-length-more-than-or-equal";
import { isOfLengthMoreThan as isOfLengthMoreThanList } from "./definitions/list/is-of-length-more-than";
import { isOfLength as isOfLengthList } from "./definitions/list/is-of-length";
import { isAround as isAroundNumber } from "./definitions/number/is-around";
import { isBetweenExclusiveInclusive as isBetweenExclusiveInclusiveNumber } from "./definitions/number/is-between-exclusive-inclusive";
import { isBetweenInclusiveExclusive as isBetweenInclusiveExclusiveNumber } from "./definitions/number/is-between-inclusive-exclusive";
import { isBetween as isBetweenNumber } from "./definitions/number/is-between";
import { isDivisibleBy as isDivisibleByNumber } from "./definitions/number/is-divisible-by";
import { isEqual as isEqualNumber } from "./definitions/number/is-equal";
import { isEven as isEvenNumber } from "./definitions/number/is-even";
import { isFinite as isFiniteNumber } from "./definitions/number/is-finite";
import { isFloat as isFloatNumber } from "./definitions/number/is-float";
import { isInRange as isInRangeNumber } from "./definitions/number/is-in-range";
import { isInf as isInfNumber } from "./definitions/number/is-inf";
import { isInt as isIntNumber } from "./definitions/number/is-int";
import { isLessThanOrEqual as isLessThanOrEqualNumber } from "./definitions/number/is-less-than-or-equal";
import { isLessThan as isLessThanNumber } from "./definitions/number/is-less-than";
import { isMatrix as isMatrixNumber } from "./definitions/number/is-matrix";
import { isMoreThanOrEqual as isMoreThanOrEqualNumber } from "./definitions/number/is-more-than-or-equal";
import { isMoreThan as isMoreThanNumber } from "./definitions/number/is-more-than";
import { isNan as isNanNumber } from "./definitions/number/is-nan";
import { isNegativeInf as isNegativeInfNumber } from "./definitions/number/is-negative-inf";
import { isNegative as isNegativeNumber } from "./definitions/number/is-negative";
import { isNonnegative as isNonnegativeNumber } from "./definitions/number/is-nonnegative";
import { isNonpositive as isNonpositiveNumber } from "./definitions/number/is-nonpositive";
import { isOdd as isOddNumber } from "./definitions/number/is-odd";
import { isPositiveInf as isPositiveInfNumber } from "./definitions/number/is-positive-inf";
import { isPositive as isPositiveNumber } from "./definitions/number/is-positive";
import { isSquareMatrix as isSquareMatrixNumber } from "./definitions/number/is-square-matrix";
import { containsLessThanOrEqualTimes as containsLessThanOrEqualTimesString } from "./definitions/string/contains-less-than-or-equal-times";
import { containsLessThanTimes as containsLessThanTimesString } from "./definitions/string/contains-less-than-times";
import { containsMoreThanOrEqualTimes as containsMoreThanOrEqualTimesString } from "./definitions/string/contains-more-than-or-equal-times";
import { containsMoreThanTimes as containsMoreThanTimesString } from "./definitions/string/contains-more-than-times";
import { containsNewline as containsNewlineString } from "./definitions/string/contains-newline";
import { containsTimes as containsTimesString } from "./definitions/string/contains-times";
import { contains as containsString } from "./definitions/string/contains";
import { endsWith as endsWithString } from "./definitions/string/ends-with";
import { isAlpha as isAlphaString } from "./definitions/string/is-alpha";
import { isAlphanum as isAlphanumString } from "./definitions/string/is-alphanum";
import { isCapitalized as isCapitalizedString } from "./definitions/string/is-capitalized";
import { isEmpty as isEmptyString } from "./definitions/string/is-empty";
import { isLongerThanOrEqual as isLongerThanOrEqualString } from "./definitions/string/is-longer-than-or-equal";
import { isLongerThan as isLongerThanString } from "./definitions/string/is-longer-than";
import { isLowercase as isLowercaseString } from "./definitions/string/is-lowercase";
import { isNumeric as isNumericString } from "./definitions/string/is-numeric";
import { isOfLength as isOfLengthString } from "./definitions/string/is-of-length";
import { isShorterThanOrEqual as isShorterThanOrEqualString } from "./definitions/string/is-shorter-than-or-equal";
import { isShorterThan as isShorterThanString } from "./definitions/string/is-shorter-than";
import { isUppercase as isUppercaseString } from "./definitions/string/is-uppercase";
import { isWhitespace as isWhitespaceString } from "./definitions/string/is-whitespace";
import { startsWith as startsWithString } from "./definitions/string/starts-with";
import { isBoolean as isBooleanValue } from "./definitions/value/is-boolean";
import { isCallable as isCallableValue } from "./definitions/value/is-callable";
import { isDefined as isDefinedValue } from "./definitions/value/is-defined";
import { isEmpty as isEmptyValue } from "./definitions/value/is-empty";
import { isEqualOneOf as isEqualOneOfValue } from "./definitions/value/is-equal-one-of";
import { isEqual as isEqualValue } from "./definitions/value/is-equal";
import { isFalsy as isFalsyValue } from "./definitions/value/is-falsy";
import { isIterable as isIterableValue } from "./definitions/value/is-iterable";
import { isList as isListValue } from "./definitions/value/is-list";
import { isMacro as isMacroValue } from "./definitions/value/is-macro";
import { isMapping as isMappingValue } from "./definitions/value/is-mapping";
import { isNone as isNoneValue } from "./definitions/value/is-none";
import { isNumber as isNumberValue } from "./definitions/value/is-number";
import { isObject as isObjectValue } from "./definitions/value/is-object";
import { isSameas as isSameasValue } from "./definitions/value/is-sameas";
import { isString as isStringValue } from "./definitions/value/is-string";
import { isTruthy as isTruthyValue } from "./definitions/value/is-truthy";
import { isTypeOneOf as isTypeOneOfValue } from "./definitions/value/is-type-one-of";
import { isType as isTypeValue } from "./definitions/value/is-type";
import { isUndefined as isUndefinedValue } from "./definitions/value/is-undefined";

export const assertDefinitions = coreDefinitions;

assertDefinitions.define("powerjinja.assert.boolean.is_false", isFalseBoolean);
assertDefinitions.define("powerjinja.assert.boolean.is_true", isTrueBoolean);
assertDefinitions.define(
  "powerjinja.assert.list.contains_any_items_less_than_or_equal_times",
  containsAnyItemsLessThanOrEqualTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_any_items_less_than_times",
  containsAnyItemsLessThanTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_any_items_more_than_or_equal_times",
  containsAnyItemsMoreThanOrEqualTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_any_items_more_than_times",
  containsAnyItemsMoreThanTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_any_items_times",
  containsAnyItemsTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_any_items",
  containsAnyItemsList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_item_less_than_or_equal_times",
  containsItemLessThanOrEqualTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_item_less_than_times",
  containsItemLessThanTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_item_more_than_or_equal_times",
  containsItemMoreThanOrEqualTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_item_more_than_times",
  containsItemMoreThanTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_item_times",
  containsItemTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_item",
  containsItemList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_items_less_than_or_equal_times",
  containsItemsLessThanOrEqualTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_items_less_than_times",
  containsItemsLessThanTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_items_more_than_or_equal_times",
  containsItemsMoreThanOrEqualTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_items_more_than_times",
  containsItemsMoreThanTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_items_times",
  containsItemsTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_items",
  containsItemsList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_item_less_than_or_equal_times",
  containsOnlyItemLessThanOrEqualTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_item_less_than_times",
  containsOnlyItemLessThanTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_item_more_than_or_equal_times",
  containsOnlyItemMoreThanOrEqualTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_item_more_than_times",
  containsOnlyItemMoreThanTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_item_times",
  containsOnlyItemTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_item",
  containsOnlyItemList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_items_less_than_or_equal_times",
  containsOnlyItemsLessThanOrEqualTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_items_less_than_times",
  containsOnlyItemsLessThanTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_items_more_than_or_equal_times",
  containsOnlyItemsMoreThanOrEqualTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_items_more_than_times",
  containsOnlyItemsMoreThanTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_items_times",
  containsOnlyItemsTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_items",
  containsOnlyItemsList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_ordered_items_less_than_or_equal_times",
  containsOnlyOrderedItemsLessThanOrEqualTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_ordered_items_less_than_times",
  containsOnlyOrderedItemsLessThanTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_ordered_items_more_than_or_equal_times",
  containsOnlyOrderedItemsMoreThanOrEqualTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_ordered_items_more_than_times",
  containsOnlyOrderedItemsMoreThanTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_ordered_items_times",
  containsOnlyOrderedItemsTimesList
);
assertDefinitions.define(
  "powerjinja.assert.list.contains_only_ordered_items",
  containsOnlyOrderedItemsList
);
assertDefinitions.define("powerjinja.assert.list.is_empty", isEmptyList);
assertDefinitions.define(
  "powerjinja.assert.list.is_first_item_equal_one_of",
  isFirstItemEqualOneOfList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_first_item_equal",
  isFirstItemEqualList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_first_item_type_one_of",
  isFirstItemTypeOneOfList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_first_item_type",
  isFirstItemTypeList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_last_item_equal_one_of",
  isLastItemEqualOneOfList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_last_item_equal",
  isLastItemEqualList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_last_item_type_one_of",
  isLastItemTypeOneOfList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_last_item_type",
  isLastItemTypeList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_nth_item_equal_one_of",
  isNthItemEqualOneOfList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_nth_item_equal",
  isNthItemEqualList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_nth_item_type_one_of",
  isNthItemTypeOneOfList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_nth_item_type",
  isNthItemTypeList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_of_length_less_than_or_equal",
  isOfLengthLessThanOrEqualList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_of_length_less_than",
  isOfLengthLessThanList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_of_length_more_than_or_equal",
  isOfLengthMoreThanOrEqualList
);
assertDefinitions.define(
  "powerjinja.assert.list.is_of_length_more_than",
  isOfLengthMoreThanList
);
assertDefinitions.define("powerjinja.assert.list.is_of_length", isOfLengthList);
assertDefinitions.define("powerjinja.assert.number.is_around", isAroundNumber);
assertDefinitions.define(
  "powerjinja.assert.number.is_between_exclusive_inclusive",
  isBetweenExclusiveInclusiveNumber
);
assertDefinitions.define(
  "powerjinja.assert.number.is_between_inclusive_exclusive",
  isBetweenInclusiveExclusiveNumber
);
assertDefinitions.define(
  "powerjinja.assert.number.is_between",
  isBetweenNumber
);
assertDefinitions.define(
  "powerjinja.assert.number.is_divisible_by",
  isDivisibleByNumber
);
assertDefinitions.define("powerjinja.assert.number.is_equal", isEqualNumber);
assertDefinitions.define("powerjinja.assert.number.is_even", isEvenNumber);
assertDefinitions.define("powerjinja.assert.number.is_finite", isFiniteNumber);
assertDefinitions.define("powerjinja.assert.number.is_float", isFloatNumber);
assertDefinitions.define(
  "powerjinja.assert.number.is_in_range",
  isInRangeNumber
);
assertDefinitions.define("powerjinja.assert.number.is_inf", isInfNumber);
assertDefinitions.define("powerjinja.assert.number.is_int", isIntNumber);
assertDefinitions.define(
  "powerjinja.assert.number.is_less_than_or_equal",
  isLessThanOrEqualNumber
);
assertDefinitions.define(
  "powerjinja.assert.number.is_less_than",
  isLessThanNumber
);
assertDefinitions.define("powerjinja.assert.number.is_matrix", isMatrixNumber);
assertDefinitions.define(
  "powerjinja.assert.number.is_more_than_or_equal",
  isMoreThanOrEqualNumber
);
assertDefinitions.define(
  "powerjinja.assert.number.is_more_than",
  isMoreThanNumber
);
assertDefinitions.define("powerjinja.assert.number.is_nan", isNanNumber);
assertDefinitions.define(
  "powerjinja.assert.number.is_negative_inf",
  isNegativeInfNumber
);
assertDefinitions.define(
  "powerjinja.assert.number.is_negative",
  isNegativeNumber
);
assertDefinitions.define(
  "powerjinja.assert.number.is_nonnegative",
  isNonnegativeNumber
);
assertDefinitions.define(
  "powerjinja.assert.number.is_nonpositive",
  isNonpositiveNumber
);
assertDefinitions.define("powerjinja.assert.number.is_odd", isOddNumber);
assertDefinitions.define(
  "powerjinja.assert.number.is_positive_inf",
  isPositiveInfNumber
);
assertDefinitions.define(
  "powerjinja.assert.number.is_positive",
  isPositiveNumber
);
assertDefinitions.define(
  "powerjinja.assert.number.is_square_matrix",
  isSquareMatrixNumber
);
assertDefinitions.define(
  "powerjinja.assert.string.contains_less_than_or_equal_times",
  containsLessThanOrEqualTimesString
);
assertDefinitions.define(
  "powerjinja.assert.string.contains_less_than_times",
  containsLessThanTimesString
);
assertDefinitions.define(
  "powerjinja.assert.string.contains_more_than_or_equal_times",
  containsMoreThanOrEqualTimesString
);
assertDefinitions.define(
  "powerjinja.assert.string.contains_more_than_times",
  containsMoreThanTimesString
);
assertDefinitions.define(
  "powerjinja.assert.string.contains_newline",
  containsNewlineString
);
assertDefinitions.define(
  "powerjinja.assert.string.contains_times",
  containsTimesString
);
assertDefinitions.define("powerjinja.assert.string.contains", containsString);
assertDefinitions.define("powerjinja.assert.string.ends_with", endsWithString);
assertDefinitions.define("powerjinja.assert.string.is_alpha", isAlphaString);
assertDefinitions.define(
  "powerjinja.assert.string.is_alphanum",
  isAlphanumString
);
assertDefinitions.define(
  "powerjinja.assert.string.is_capitalized",
  isCapitalizedString
);
assertDefinitions.define("powerjinja.assert.string.is_empty", isEmptyString);
assertDefinitions.define(
  "powerjinja.assert.string.is_longer_than_or_equal",
  isLongerThanOrEqualString
);
assertDefinitions.define(
  "powerjinja.assert.string.is_longer_than",
  isLongerThanString
);
assertDefinitions.define(
  "powerjinja.assert.string.is_lowercase",
  isLowercaseString
);
assertDefinitions.define(
  "powerjinja.assert.string.is_numeric",
  isNumericString
);
assertDefinitions.define(
  "powerjinja.assert.string.is_of_length",
  isOfLengthString
);
assertDefinitions.define(
  "powerjinja.assert.string.is_shorter_than_or_equal",
  isShorterThanOrEqualString
);
assertDefinitions.define(
  "powerjinja.assert.string.is_shorter_than",
  isShorterThanString
);
assertDefinitions.define(
  "powerjinja.assert.string.is_uppercase",
  isUppercaseString
);
assertDefinitions.define(
  "powerjinja.assert.string.is_whitespace",
  isWhitespaceString
);
assertDefinitions.define(
  "powerjinja.assert.string.starts_with",
  startsWithString
);
assertDefinitions.define("powerjinja.assert.value.is_boolean", isBooleanValue);
assertDefinitions.define(
  "powerjinja.assert.value.is_callable",
  isCallableValue
);
assertDefinitions.define("powerjinja.assert.value.is_defined", isDefinedValue);
assertDefinitions.define("powerjinja.assert.value.is_empty", isEmptyValue);
assertDefinitions.define(
  "powerjinja.assert.value.is_equal_one_of",
  isEqualOneOfValue
);
assertDefinitions.define("powerjinja.assert.value.is_equal", isEqualValue);
assertDefinitions.define("powerjinja.assert.value.is_falsy", isFalsyValue);
assertDefinitions.define(
  "powerjinja.assert.value.is_iterable",
  isIterableValue
);
assertDefinitions.define("powerjinja.assert.value.is_list", isListValue);
assertDefinitions.define("powerjinja.assert.value.is_macro", isMacroValue);
assertDefinitions.define("powerjinja.assert.value.is_mapping", isMappingValue);
assertDefinitions.define("powerjinja.assert.value.is_none", isNoneValue);
assertDefinitions.define("powerjinja.assert.value.is_number", isNumberValue);
assertDefinitions.define("powerjinja.assert.value.is_object", isObjectValue);
assertDefinitions.define("powerjinja.assert.value.is_sameas", isSameasValue);
assertDefinitions.define("powerjinja.assert.value.is_string", isStringValue);
assertDefinitions.define("powerjinja.assert.value.is_truthy", isTruthyValue);
assertDefinitions.define(
  "powerjinja.assert.value.is_type_one_of",
  isTypeOneOfValue
);
assertDefinitions.define("powerjinja.assert.value.is_type", isTypeValue);
assertDefinitions.define(
  "powerjinja.assert.value.is_undefined",
  isUndefinedValue
);
