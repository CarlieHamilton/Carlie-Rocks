export interface Project {
    data: {
        markdownRemark: ProjectData
    }
}

export interface Projects {
    data: {
        allMarkdownRemark: {
            edges: Node[]
        }
    }
}

interface ProjectData {
    id: string
    html: string
    frontmatter: {
        title: string
        path: string
        date: string
    }
}

interface Node {
    node: ProjectData
}