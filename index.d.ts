declare const compile: (html: string, data: {
    [k: string]: string;
}) => string;
export default compile;
