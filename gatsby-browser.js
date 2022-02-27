import React from "react"

import Layout from "./src/components/layout"

// CSS Import
import 'bootstrap/dist/css/bootstrap.min.css';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}