import React from 'react';

import { Project } from "../models/project";
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';

export default function Template({data}: Project) {
    const post = data.markdownRemark

    console.log(post)
    return(
        <Layout>
            <div>
                <Link to="/projects">Go Back</Link>
                <hr />

                <h1>{post.frontmatter.title}</h1>

                <div dangerouslySetInnerHTML={{__html: post.html}} />
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query ProjectByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path }}){
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`