import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CSpinner, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const Accordion = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Spinner</strong> <small>Border</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Use the border spinners for a lightweight loading indicator.
            </p>
            <DocsExample href="components/spinner">
              <CSpinner />
            </DocsExample>
            <p className="text-medium-emphasis small">
              The border spinner uses <code>currentColor</code> for its <code>border-color</code>.
              You can use any of our text color utilities on the standard spinner.
            </p>
            <DocsExample href="components/spinner#colors">
              <CSpinner color="primary" />
              <CSpinner color="secondary" />
              <CSpinner color="success" />
              <CSpinner color="danger" />
              <CSpinner color="warning" />
              <CSpinner color="info" />
              <CSpinner color="light" />
              <CSpinner color="dark" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Accordion
