import React from "react"
import { PageProps, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = (props: PageProps) => (
  <Layout>
    <SEO title="About Carlie Hamilton" />
    <h1>About Carlie.Rocks</h1>
    <p>This is a fun personal site of <a href="http://carliehamilton.com">Carlie Hamilton</a></p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutMe
