module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy({ "src/images" : "images"});
    eleventyConfig.addPassthroughCopy({ "src/admin" : "admin"});

    return {
        dir: {
            input: "src/views",
            output: "dist",
            includes: "_includes/partials",
            layouts: "_includes/layouts"
        },
        templateFormats: ["md", "njk"],
        markdownTemplateEngine: "njk",
        passthroughFileCopy: true
    };
};