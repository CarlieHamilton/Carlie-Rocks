const path = require('path');

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions

    const postTemplate = path.resolve('src/templates/blogPost.tsx');

    return graphql(`
        {
            allMarkdownRemark{
                edges{
                    node{
                        html
                        id
                        excerpt
                        frontmatter {
                        title
                        path
                        date
                        author
                        }
                    }
                }
            }
        }
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({node})=> {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}