exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    const headComponents = getHeadComponents()
    const styleHeadComponents = headComponents.filter((component) => component.type === 'style')
    const nonStyleHeadComponents = headComponents.filter((component) => component.type !== 'style')
    replaceHeadComponents([nonStyleHeadComponents, styleHeadComponents])
}
