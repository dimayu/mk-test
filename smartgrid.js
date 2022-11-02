let smartgrid = require('smart-grid');

let settings = {
    outputStyle: 'scss',
    columns: 12,
    offset: '16px',
    mobileFirst: false,
    container: {
        maxWidth: '1716px',
        fields: '102px'
    },
    breakPoints: {
        lm: {
            width: '1280px',
            fields: '50px'
        },
        md: {
            width: '940px',
            fields: '20px'
        },
        sm: {
            width: '780px',
            fields: '20px'
        },
        xxs: {
            width: '440px',
            fields: '20px'
        }
    }
};

smartgrid('./src/styles', settings);


/*
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */
