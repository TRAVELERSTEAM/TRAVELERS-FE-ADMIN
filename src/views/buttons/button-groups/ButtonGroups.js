import React from 'react'
import { CButton, CButtonGroup, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const ButtonGroups = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Button Group</strong> <span>Outlined styles</span>
          </CCardHeader>
          <CCardBody>
            <DocsExample href="components/button-group#outlined-styles">
              <CButtonGroup role="group" aria-label="Basic outlined example">
                <CButton color="primary" variant="outline">
                  Left
                </CButton>
                <CButton color="primary" variant="outline">
                  Middle
                </CButton>
                <CButton color="primary" variant="outline">
                  Right
                </CButton>
              </CButtonGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ButtonGroups
