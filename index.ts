const compile = (html: string, data: { [k: string]: string }): string => {
    for (const key in data) {
        html = html.replace(`{{${key}}}`, data[key]);
    }
    return html
}
export default compile;
