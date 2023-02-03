let config = {}, error = false, pe = process.env;

function getConfig(name, defValue, help, regex) {

    let value = pe[name];

    if (!value && defValue !== undefined) {
        console.warn(`The environment variable: [${name}] is not defined in .env, default value is: ${defValue}`);
        value = defValue;
    }
    if (value) {
        if (!!regex && !regex.test(value)) {
            console.error(`The envronment variable: [${name}] does not match with regular expression
            Value: ${value}
            Regex: ${regex}`);
            error = true
        }
    } else {
        console.error(`The envronment variable: [${name}] must be defined in .env!`);
        if (help) console.log(`Help for [${name}]\n\t * ${help}`);
        error = true;
    }

    return value;
}

function loadConfig(varDoc) {
    if (config[varDoc.key] !== undefined) {
        console.error(`Duplicated variable definition ${varDoc.key} in .env.`);
        throw new Error(`Duplicated variable definition ${varDoc.key} in .env.`);
    }
    config[varDoc.key] = getConfig(varDoc.key, varDoc.value, varDoc.help, varDoc.regex);
}
function initEnv(config = [], dotenvOpts) {
    require('dotenv').config(dotenvOpts);

    config.forEach(loadConfig)
    if (error) process.exit(1);
}

module.exports.default = initEnv;
module.exports.initEnv = initEnv;
module.exports.Config = config;