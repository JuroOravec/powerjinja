import { Powerjinja } from "powerjinja-core/lib/interface/powerjinja";

import { abs } from '../definitions/abs'
import { acos } from '../definitions/acos'
import { acosh } from '../definitions/acosh'
import { acot } from '../definitions/acot'
import { acoth } from '../definitions/acoth'
import { acsc } from '../definitions/acsc'
import { acsch } from '../definitions/acsch'
import { addMatrix } from '../definitions/add-matrix'
import { add } from '../definitions/add'
import { asec } from '../definitions/asec'
import { asech } from '../definitions/asech'
import { asin } from '../definitions/asin'
import { asinh } from '../definitions/asinh'
import { atan } from '../definitions/atan'
import { atan2 } from '../definitions/atan2'
import { atanh } from '../definitions/atanh'
import { cbrt } from '../definitions/cbrt'
import { ceil } from '../definitions/ceil'
import { clamp } from '../definitions/clamp'
import { cos } from '../definitions/cos'
import { cosh } from '../definitions/cosh'
import { cot } from '../definitions/cot'
import { coth } from '../definitions/coth'
import { cross } from '../definitions/cross'
import { csc } from '../definitions/csc'
import { csch } from '../definitions/csch'
import { decrement } from '../definitions/decrement'
import { degrees } from '../definitions/degrees'
import { det2 } from '../definitions/det2'
import { det3 } from '../definitions/det3'
import { det4 } from '../definitions/det4'
import { distance } from '../definitions/distance'
import { divideMatrixByScalar } from '../definitions/divide-matrix-by-scalar'
import { divide } from '../definitions/divide'
import { dot } from '../definitions/dot'
import { e } from '../definitions/e'
import { exp } from '../definitions/exp'
import { exp2 } from '../definitions/exp2'
import { expm1 } from '../definitions/expm1'
import { floor } from '../definitions/floor'
import { frac } from '../definitions/frac'
import { hypot } from '../definitions/hypot'
import { identityMatrix } from '../definitions/identity-matrix'
import { increment } from '../definitions/increment'
import { invert } from '../definitions/invert'
import { ldexp } from '../definitions/ldexp'
import { length } from '../definitions/length'
import { ln } from '../definitions/ln'
import { ln10 } from '../definitions/ln10'
import { ln2 } from '../definitions/ln2'
import { lnp1 } from '../definitions/lnp1'
import { log } from '../definitions/log'
import { log10 } from '../definitions/log10'
import { log10e } from '../definitions/log10e'
import { log2 } from '../definitions/log2'
import { log2e } from '../definitions/log2e'
import { maxBy } from '../definitions/max-by'
import { max } from '../definitions/max'
import { meanBy } from '../definitions/mean-by'
import { mean } from '../definitions/mean'
import { minBy } from '../definitions/min-by'
import { min } from '../definitions/min'
import { mod } from '../definitions/mod'
import { modf } from '../definitions/modf'
import { multiplyMatrixByMatrix } from '../definitions/multiply-matrix-by-matrix'
import { multiplyMatrixByScalar } from '../definitions/multiply-matrix-by-scalar'
import { multiply } from '../definitions/multiply'
import { nan } from '../definitions/nan'
import { negate } from '../definitions/negate'
import { negativeInf } from '../definitions/negative-inf'
import { normalizeMatrix } from '../definitions/normalize-matrix'
import { pi } from '../definitions/pi'
import { positiveInf } from '../definitions/positive-inf'
import { pow } from '../definitions/pow'
import { radians } from '../definitions/radians'
import { random100 } from '../definitions/random100'
import { random1000 } from '../definitions/random1000'
import { rcbrt } from '../definitions/rcbrt'
import { remainder } from '../definitions/remainder'
import { round } from '../definitions/round'
import { rsqrt } from '../definitions/rsqrt'
import { sec } from '../definitions/sec'
import { sech } from '../definitions/sech'
import { sign } from '../definitions/sign'
import { sin } from '../definitions/sin'
import { sincos } from '../definitions/sincos'
import { sinh } from '../definitions/sinh'
import { sqrt } from '../definitions/sqrt'
import { sqrt1_2 } from '../definitions/sqrt1_2'
import { sqrt2 } from '../definitions/sqrt2'
import { subtractMatrix } from '../definitions/subtract-matrix'
import { subtract } from '../definitions/subtract'
import { sumBy } from '../definitions/sum-by'
import { sum } from '../definitions/sum'
import { tan } from '../definitions/tan'
import { tanh } from '../definitions/tanh'
import { transposeMatrix } from '../definitions/transpose-matrix'
import { trunc } from '../definitions/trunc'
import { zeroMatrix } from '../definitions/zero-matrix'

export function loadDefinitions(powerjinja: Powerjinja) {
  powerjinja.define('powerjinja.math.abs', abs(powerjinja.config));
  powerjinja.define('powerjinja.math.acos', acos(powerjinja.config));
  powerjinja.define('powerjinja.math.acosh', acosh(powerjinja.config));
  powerjinja.define('powerjinja.math.acot', acot(powerjinja.config));
  powerjinja.define('powerjinja.math.acoth', acoth(powerjinja.config));
  powerjinja.define('powerjinja.math.acsc', acsc(powerjinja.config));
  powerjinja.define('powerjinja.math.acsch', acsch(powerjinja.config));
  powerjinja.define('powerjinja.math.add_matrix', addMatrix(powerjinja.config));
  powerjinja.define('powerjinja.math.add', add(powerjinja.config));
  powerjinja.define('powerjinja.math.asec', asec(powerjinja.config));
  powerjinja.define('powerjinja.math.asech', asech(powerjinja.config));
  powerjinja.define('powerjinja.math.asin', asin(powerjinja.config));
  powerjinja.define('powerjinja.math.asinh', asinh(powerjinja.config));
  powerjinja.define('powerjinja.math.atan', atan(powerjinja.config));
  powerjinja.define('powerjinja.math.atan2', atan2(powerjinja.config));
  powerjinja.define('powerjinja.math.atanh', atanh(powerjinja.config));
  powerjinja.define('powerjinja.math.cbrt', cbrt(powerjinja.config));
  powerjinja.define('powerjinja.math.ceil', ceil(powerjinja.config));
  powerjinja.define('powerjinja.math.clamp', clamp(powerjinja.config));
  powerjinja.define('powerjinja.math.cos', cos(powerjinja.config));
  powerjinja.define('powerjinja.math.cosh', cosh(powerjinja.config));
  powerjinja.define('powerjinja.math.cot', cot(powerjinja.config));
  powerjinja.define('powerjinja.math.coth', coth(powerjinja.config));
  powerjinja.define('powerjinja.math.cross', cross(powerjinja.config));
  powerjinja.define('powerjinja.math.csc', csc(powerjinja.config));
  powerjinja.define('powerjinja.math.csch', csch(powerjinja.config));
  powerjinja.define('powerjinja.math.decrement', decrement(powerjinja.config));
  powerjinja.define('powerjinja.math.degrees', degrees(powerjinja.config));
  powerjinja.define('powerjinja.math.det2', det2(powerjinja.config));
  powerjinja.define('powerjinja.math.det3', det3(powerjinja.config));
  powerjinja.define('powerjinja.math.det4', det4(powerjinja.config));
  powerjinja.define('powerjinja.math.distance', distance(powerjinja.config));
  powerjinja.define('powerjinja.math.divide_matrix_by_scalar', divideMatrixByScalar(powerjinja.config));
  powerjinja.define('powerjinja.math.divide', divide(powerjinja.config));
  powerjinja.define('powerjinja.math.dot', dot(powerjinja.config));
  powerjinja.define('powerjinja.math.e', e(powerjinja.config));
  powerjinja.define('powerjinja.math.exp', exp(powerjinja.config));
  powerjinja.define('powerjinja.math.exp2', exp2(powerjinja.config));
  powerjinja.define('powerjinja.math.expm1', expm1(powerjinja.config));
  powerjinja.define('powerjinja.math.floor', floor(powerjinja.config));
  powerjinja.define('powerjinja.math.frac', frac(powerjinja.config));
  powerjinja.define('powerjinja.math.hypot', hypot(powerjinja.config));
  powerjinja.define('powerjinja.math.identity_matrix', identityMatrix(powerjinja.config));
  powerjinja.define('powerjinja.math.increment', increment(powerjinja.config));
  powerjinja.define('powerjinja.math.invert', invert(powerjinja.config));
  powerjinja.define('powerjinja.math.ldexp', ldexp(powerjinja.config));
  powerjinja.define('powerjinja.math.length', length(powerjinja.config));
  powerjinja.define('powerjinja.math.ln', ln(powerjinja.config));
  powerjinja.define('powerjinja.math.ln10', ln10(powerjinja.config));
  powerjinja.define('powerjinja.math.ln2', ln2(powerjinja.config));
  powerjinja.define('powerjinja.math.lnp1', lnp1(powerjinja.config));
  powerjinja.define('powerjinja.math.log', log(powerjinja.config));
  powerjinja.define('powerjinja.math.log10', log10(powerjinja.config));
  powerjinja.define('powerjinja.math.log10e', log10e(powerjinja.config));
  powerjinja.define('powerjinja.math.log2', log2(powerjinja.config));
  powerjinja.define('powerjinja.math.log2e', log2e(powerjinja.config));
  powerjinja.define('powerjinja.math.max_by', maxBy(powerjinja.config));
  powerjinja.define('powerjinja.math.max', max(powerjinja.config));
  powerjinja.define('powerjinja.math.mean_by', meanBy(powerjinja.config));
  powerjinja.define('powerjinja.math.mean', mean(powerjinja.config));
  powerjinja.define('powerjinja.math.min_by', minBy(powerjinja.config));
  powerjinja.define('powerjinja.math.min', min(powerjinja.config));
  powerjinja.define('powerjinja.math.mod', mod(powerjinja.config));
  powerjinja.define('powerjinja.math.modf', modf(powerjinja.config));
  powerjinja.define('powerjinja.math.multiply_matrix_by_matrix', multiplyMatrixByMatrix(powerjinja.config));
  powerjinja.define('powerjinja.math.multiply_matrix_by_scalar', multiplyMatrixByScalar(powerjinja.config));
  powerjinja.define('powerjinja.math.multiply', multiply(powerjinja.config));
  powerjinja.define('powerjinja.math.nan', nan(powerjinja.config));
  powerjinja.define('powerjinja.math.negate', negate(powerjinja.config));
  powerjinja.define('powerjinja.math.negative_inf', negativeInf(powerjinja.config));
  powerjinja.define('powerjinja.math.normalize_matrix', normalizeMatrix(powerjinja.config));
  powerjinja.define('powerjinja.math.pi', pi(powerjinja.config));
  powerjinja.define('powerjinja.math.positive_inf', positiveInf(powerjinja.config));
  powerjinja.define('powerjinja.math.pow', pow(powerjinja.config));
  powerjinja.define('powerjinja.math.radians', radians(powerjinja.config));
  powerjinja.define('powerjinja.math.random100', random100(powerjinja.config));
  powerjinja.define('powerjinja.math.random1000', random1000(powerjinja.config));
  powerjinja.define('powerjinja.math.rcbrt', rcbrt(powerjinja.config));
  powerjinja.define('powerjinja.math.remainder', remainder(powerjinja.config));
  powerjinja.define('powerjinja.math.round', round(powerjinja.config));
  powerjinja.define('powerjinja.math.rsqrt', rsqrt(powerjinja.config));
  powerjinja.define('powerjinja.math.sec', sec(powerjinja.config));
  powerjinja.define('powerjinja.math.sech', sech(powerjinja.config));
  powerjinja.define('powerjinja.math.sign', sign(powerjinja.config));
  powerjinja.define('powerjinja.math.sin', sin(powerjinja.config));
  powerjinja.define('powerjinja.math.sincos', sincos(powerjinja.config));
  powerjinja.define('powerjinja.math.sinh', sinh(powerjinja.config));
  powerjinja.define('powerjinja.math.sqrt', sqrt(powerjinja.config));
  powerjinja.define('powerjinja.math.sqrt1_2', sqrt1_2(powerjinja.config));
  powerjinja.define('powerjinja.math.sqrt2', sqrt2(powerjinja.config));
  powerjinja.define('powerjinja.math.subtract_matrix', subtractMatrix(powerjinja.config));
  powerjinja.define('powerjinja.math.subtract', subtract(powerjinja.config));
  powerjinja.define('powerjinja.math.sum_by', sumBy(powerjinja.config));
  powerjinja.define('powerjinja.math.sum', sum(powerjinja.config));
  powerjinja.define('powerjinja.math.tan', tan(powerjinja.config));
  powerjinja.define('powerjinja.math.tanh', tanh(powerjinja.config));
  powerjinja.define('powerjinja.math.transpose_matrix', transposeMatrix(powerjinja.config));
  powerjinja.define('powerjinja.math.trunc', trunc(powerjinja.config));
  powerjinja.define('powerjinja.math.zero_matrix', zeroMatrix(powerjinja.config));

  return powerjinja;
}