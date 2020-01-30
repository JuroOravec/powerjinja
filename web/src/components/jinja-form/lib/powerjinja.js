import {
    powerjinja as pj,
    initialize
} from 'powerjinja';

// Abstracted loading of 3rd party module for future-proof purposes

export const powerjinja = {
    compile: function (s, o = {}) {
        return pj.compile(s, {
            minify: o.minify,
            separator: '\n\n',
            delimeter: ''
        })
    },
    config: pj.config
}

export function initPowerjinja(config) {
    const powerjinja = initialize(config);
    return {
        compile: function (s, o = {}) {
            return powerjinja.compile(s, {
                minify: o.minify,
                separator: '\n\n',
                delimeter: ''
            })
        },
        config: powerjinja.config
    }
}