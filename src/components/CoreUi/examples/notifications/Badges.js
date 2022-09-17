import React from 'react'
import { CButton, CCard, CCardBody, CCardHeader, CCol, CBadge, CRow } from '@coreui/react'
import { DocsExample } from 'src/components/CoreUi'

const Badges = () => {
  return (
    <CRow>
      <CCol lg={6}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Badges</strong> <small>Dismissing</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Bootstrap badge scale to suit the size of the parent element by using relative font
              sizing and <code>em</code> units.
            </p>
            <DocsExample href="components/badge">
              <h1>
                Example heading <CBadge color="secondary">New</CBadge>
              </h1>
              <h2>
                Example heading <CBadge color="secondary">New</CBadge>
              </h2>
              <h3>
                Example heading <CBadge color="secondary">New</CBadge>
              </h3>
              <h4>
                Example heading <CBadge color="secondary">New</CBadge>
              </h4>
              <h5>
                Example heading <CBadge color="secondary">New</CBadge>
              </h5>
              <h6>
                Example heading <CBadge color="secondary">New</CBadge>
              </h6>
            </DocsExample>
            <p className="text-medium-emphasis small">
              Badges can be used as part of links or buttons to provide a counter.
            </p>
            <DocsExample href="components/badge">
              <CButton color="primary">
                Notifications <CBadge color="secondary">4</CBadge>
              </CButton>
            </DocsExample>
            <p className="text-medium-emphasis small">
              Remark that depending on how you use them, badges may be complicated for users of
              screen readers and related assistive technologies.
            </p>
            <p className="text-medium-emphasis small">
              Unless the context is clear, consider including additional context with a visually
              hidden piece of additional text.
            </p>
            <DocsExample href="components/badge">
              <CButton color="primary">
                Profile <CBadge color="secondary">9</CBadge>
                <span className="visually-hidden">unread messages</span>
              </CButton>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Badges
