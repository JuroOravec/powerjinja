import { powerjinjaCore } from "powerjinja-core";

import { abs } from './definitions/abs'
import { acos } from './definitions/acos'
import { acosh } from './definitions/acosh'
import { acot } from './definitions/acot'
import { acoth } from './definitions/acoth'
import { acsc } from './definitions/acsc'
import { acsch } from './definitions/acsch'
import { addMatrix } from './definitions/add-matrix'
import { add } from './definitions/add'
import { asec } from './definitions/asec'
import { asech } from './definitions/asech'
import { asin } from './definitions/asin'
import { asinh } from './definitions/asinh'
import { atan } from './definitions/atan'
import { atan2 } from './definitions/atan2'
import { atanh } from './definitions/atanh'
import { cbrt } from './definitions/cbrt'
import { ceil } from './definitions/ceil'
import { clamp } from './definitions/clamp'
import { cos } from './definitions/cos'
import { cosh } from './definitions/cosh'
import { cot } from './definitions/cot'
import { coth } from './definitions/coth'
import { cross } from './definitions/cross'
import { csc } from './definitions/csc'
import { csch } from './definitions/csch'
import { decrement } from './definitions/decrement'
import { degrees } from './definitions/degrees'
import { det2 } from './definitions/det2'
import { det3 } from './definitions/det3'
import { det4 } from './definitions/det4'
import { distance } from './definitions/distance'
import { divideMatrixByScalar } from './definitions/divide-matrix-by-scalar'
import { divide } from './definitions/divide'
import { dot } from './definitions/dot'
import { e } from './definitions/e'
import { exp } from './definitions/exp'
import { exp2 } from './definitions/exp2'
import { expm1 } from './definitions/expm1'
import { floor } from './definitions/floor'
import { frac } from './definitions/frac'
import { hypot } from './definitions/hypot'
import { identityMatrix } from './definitions/identity-matrix'
import { increment } from './definitions/increment'
import { invert } from './definitions/invert'
import { ldexp } from './definitions/ldexp'
import { length } from './definitions/length'
import { ln } from './definitions/ln'
import { ln10 } from './definitions/ln10'
import { ln2 } from './definitions/ln2'
import { lnp1 } from './definitions/lnp1'
import { log } from './definitions/log'
import { log10 } from './definitions/log10'
import { log10e } from './definitions/log10e'
import { log2 } from './definitions/log2'
import { log2e } from './definitions/log2e'
import { maxBy } from './definitions/max-by'
import { max } from './definitions/max'
import { meanBy } from './definitions/mean-by'
import { mean } from './definitions/mean'
import { minBy } from './definitions/min-by'
import { min } from './definitions/min'
import { mod } from './definitions/mod'
import { modf } from './definitions/modf'
import { multiplyMatrixByMatrix } from './definitions/multiply-matrix-by-matrix'
import { multiplyMatrixByScalar } from './definitions/multiply-matrix-by-scalar'
import { multiply } from './definitions/multiply'
import { nan } from './definitions/nan'
import { negate } from './definitions/negate'
import { negativeInf } from './definitions/negative-inf'
import { normalizeMatrix } from './definitions/normalize-matrix'
import { pi } from './definitions/pi'
import { positiveInf } from './definitions/positive-inf'
import { pow } from './definitions/pow'
import { radians } from './definitions/radians'
import { random100 } from './definitions/random100'
import { random1000 } from './definitions/random1000'
import { rcbrt } from './definitions/rcbrt'
import { remainder } from './definitions/remainder'
import { round } from './definitions/round'
import { rsqrt } from './definitions/rsqrt'
import { sec } from './definitions/sec'
import { sech } from './definitions/sech'
import { sign } from './definitions/sign'
import { sin } from './definitions/sin'
import { sincos } from './definitions/sincos'
import { sinh } from './definitions/sinh'
import { sqrt } from './definitions/sqrt'
import { sqrt1_2 } from './definitions/sqrt1_2'
import { sqrt2 } from './definitions/sqrt2'
import { subtractMatrix } from './definitions/subtract-matrix'
import { subtract } from './definitions/subtract'
import { sumBy } from './definitions/sum-by'
import { sum } from './definitions/sum'
import { tan } from './definitions/tan'
import { tanh } from './definitions/tanh'
import { transposeMatrix } from './definitions/transpose-matrix'
import { trunc } from './definitions/trunc'
import { zeroMatrix } from './definitions/zero-matrix'

export const powerjinjaMath = powerjinjaCore;

powerjinjaMath.define('powerjinja.math.abs', abs);
powerjinjaMath.define('powerjinja.math.acos', acos);
powerjinjaMath.define('powerjinja.math.acosh', acosh);
powerjinjaMath.define('powerjinja.math.acot', acot);
powerjinjaMath.define('powerjinja.math.acoth', acoth);
powerjinjaMath.define('powerjinja.math.acsc', acsc);
powerjinjaMath.define('powerjinja.math.acsch', acsch);
powerjinjaMath.define('powerjinja.math.add_matrix', addMatrix);
powerjinjaMath.define('powerjinja.math.add', add);
powerjinjaMath.define('powerjinja.math.asec', asec);
powerjinjaMath.define('powerjinja.math.asech', asech);
powerjinjaMath.define('powerjinja.math.asin', asin);
powerjinjaMath.define('powerjinja.math.asinh', asinh);
powerjinjaMath.define('powerjinja.math.atan', atan);
powerjinjaMath.define('powerjinja.math.atan2', atan2);
powerjinjaMath.define('powerjinja.math.atanh', atanh);
powerjinjaMath.define('powerjinja.math.cbrt', cbrt);
powerjinjaMath.define('powerjinja.math.ceil', ceil);
powerjinjaMath.define('powerjinja.math.clamp', clamp);
powerjinjaMath.define('powerjinja.math.cos', cos);
powerjinjaMath.define('powerjinja.math.cosh', cosh);
powerjinjaMath.define('powerjinja.math.cot', cot);
powerjinjaMath.define('powerjinja.math.coth', coth);
powerjinjaMath.define('powerjinja.math.cross', cross);
powerjinjaMath.define('powerjinja.math.csc', csc);
powerjinjaMath.define('powerjinja.math.csch', csch);
powerjinjaMath.define('powerjinja.math.decrement', decrement);
powerjinjaMath.define('powerjinja.math.degrees', degrees);
powerjinjaMath.define('powerjinja.math.det2', det2);
powerjinjaMath.define('powerjinja.math.det3', det3);
powerjinjaMath.define('powerjinja.math.det4', det4);
powerjinjaMath.define('powerjinja.math.distance', distance);
powerjinjaMath.define('powerjinja.math.divide_matrix_by_scalar', divideMatrixByScalar);
powerjinjaMath.define('powerjinja.math.divide', divide);
powerjinjaMath.define('powerjinja.math.dot', dot);
powerjinjaMath.define('powerjinja.math.e', e);
powerjinjaMath.define('powerjinja.math.exp', exp);
powerjinjaMath.define('powerjinja.math.exp2', exp2);
powerjinjaMath.define('powerjinja.math.expm1', expm1);
powerjinjaMath.define('powerjinja.math.floor', floor);
powerjinjaMath.define('powerjinja.math.frac', frac);
powerjinjaMath.define('powerjinja.math.hypot', hypot);
powerjinjaMath.define('powerjinja.math.identity_matrix', identityMatrix);
powerjinjaMath.define('powerjinja.math.increment', increment);
powerjinjaMath.define('powerjinja.math.invert', invert);
powerjinjaMath.define('powerjinja.math.ldexp', ldexp);
powerjinjaMath.define('powerjinja.math.length', length);
powerjinjaMath.define('powerjinja.math.ln', ln);
powerjinjaMath.define('powerjinja.math.ln10', ln10);
powerjinjaMath.define('powerjinja.math.ln2', ln2);
powerjinjaMath.define('powerjinja.math.lnp1', lnp1);
powerjinjaMath.define('powerjinja.math.log', log);
powerjinjaMath.define('powerjinja.math.log10', log10);
powerjinjaMath.define('powerjinja.math.log10e', log10e);
powerjinjaMath.define('powerjinja.math.log2', log2);
powerjinjaMath.define('powerjinja.math.log2e', log2e);
powerjinjaMath.define('powerjinja.math.max_by', maxBy);
powerjinjaMath.define('powerjinja.math.max', max);
powerjinjaMath.define('powerjinja.math.mean_by', meanBy);
powerjinjaMath.define('powerjinja.math.mean', mean);
powerjinjaMath.define('powerjinja.math.min_by', minBy);
powerjinjaMath.define('powerjinja.math.min', min);
powerjinjaMath.define('powerjinja.math.mod', mod);
powerjinjaMath.define('powerjinja.math.modf', modf);
powerjinjaMath.define('powerjinja.math.multiply_matrix_by_matrix', multiplyMatrixByMatrix);
powerjinjaMath.define('powerjinja.math.multiply_matrix_by_scalar', multiplyMatrixByScalar);
powerjinjaMath.define('powerjinja.math.multiply', multiply);
powerjinjaMath.define('powerjinja.math.nan', nan);
powerjinjaMath.define('powerjinja.math.negate', negate);
powerjinjaMath.define('powerjinja.math.negative_inf', negativeInf);
powerjinjaMath.define('powerjinja.math.normalize_matrix', normalizeMatrix);
powerjinjaMath.define('powerjinja.math.pi', pi);
powerjinjaMath.define('powerjinja.math.positive_inf', positiveInf);
powerjinjaMath.define('powerjinja.math.pow', pow);
powerjinjaMath.define('powerjinja.math.radians', radians);
powerjinjaMath.define('powerjinja.math.random100', random100);
powerjinjaMath.define('powerjinja.math.random1000', random1000);
powerjinjaMath.define('powerjinja.math.rcbrt', rcbrt);
powerjinjaMath.define('powerjinja.math.remainder', remainder);
powerjinjaMath.define('powerjinja.math.round', round);
powerjinjaMath.define('powerjinja.math.rsqrt', rsqrt);
powerjinjaMath.define('powerjinja.math.sec', sec);
powerjinjaMath.define('powerjinja.math.sech', sech);
powerjinjaMath.define('powerjinja.math.sign', sign);
powerjinjaMath.define('powerjinja.math.sin', sin);
powerjinjaMath.define('powerjinja.math.sincos', sincos);
powerjinjaMath.define('powerjinja.math.sinh', sinh);
powerjinjaMath.define('powerjinja.math.sqrt', sqrt);
powerjinjaMath.define('powerjinja.math.sqrt1_2', sqrt1_2);
powerjinjaMath.define('powerjinja.math.sqrt2', sqrt2);
powerjinjaMath.define('powerjinja.math.subtract_matrix', subtractMatrix);
powerjinjaMath.define('powerjinja.math.subtract', subtract);
powerjinjaMath.define('powerjinja.math.sum_by', sumBy);
powerjinjaMath.define('powerjinja.math.sum', sum);
powerjinjaMath.define('powerjinja.math.tan', tan);
powerjinjaMath.define('powerjinja.math.tanh', tanh);
powerjinjaMath.define('powerjinja.math.transpose_matrix', transposeMatrix);
powerjinjaMath.define('powerjinja.math.trunc', trunc);
powerjinjaMath.define('powerjinja.math.zero_matrix', zeroMatrix);