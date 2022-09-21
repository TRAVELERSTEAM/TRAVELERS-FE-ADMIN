import React from 'react'
import { CCard, CCardBody, CCardHeader, CCol, CFormLabel, CFormRange, CRow } from '@coreui/react'
import { DocsExample } from 'src/components/CoreUi'

const Range = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Range</strong> <small></small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Create custom <code>&lt;input type=&#34;range&#34;&gt;</code> controls with{' '}
              <code>&lt;CFormRange&gt;</code>.
            </p>
            <DocsExample href="forms/range">
              <CFormLabel htmlFor="customRange1">Example range</CFormLabel>
              <CFormRange id="customRange1" />
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Range
