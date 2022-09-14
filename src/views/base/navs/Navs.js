import React from 'react'
import { CRow, CCol, CCard, CCardBody, CCardHeader, CNav, CNavLink } from '@coreui/react'
import { DocsExample } from 'src/components'

const Navs = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Navs</strong> <small>Working with flex utilities</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              If you need responsive nav variations, consider using a series of{' '}
              <a href="https://coreui.io/docs/utilities/flex">flexbox utilities</a>. While more
              verbose, these utilities offer greater customization across responsive breakpoints. In
              the example below, our nav will be stacked on the lowest breakpoint, then adapt to a
              horizontal layout that fills the available width starting from the small breakpoint.
            </p>
            <DocsExample href="components/nav#working-with-flex-utilities">
              <CNav component="nav" variant="pills" className="flex-column flex-sm-row">
                <CNavLink href="#" active>
                  Active
                </CNavLink>
                <CNavLink href="#">Link</CNavLink>
                <CNavLink href="#">Link</CNavLink>
                <CNavLink href="#" disabled>
                  Disabled
                </CNavLink>
              </CNav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Navs
