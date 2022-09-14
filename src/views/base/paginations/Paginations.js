import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CPagination,
  CPaginationItem,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Paginations = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Pagination</strong> <small>Disabled and active states</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Pagination links are customizable for different circumstances. Use{' '}
              <code>disabled</code> for links that appear un-clickable and <code>.active</code> to
              indicate the current page.
            </p>
            <p className="text-medium-emphasis small">
              While the <code>disabled</code> prop uses <code>pointer-events: none</code> to{' '}
              <em>try</em> to disable the link functionality of <code>&lt;a&gt;</code>s, that CSS
              property is not yet standardized and doesn&#39;taccount for keyboard navigation. As
              such, we always add <code>tabindex=&#34;-1&#34;</code> on disabled links and use
              custom JavaScript to fully disable their functionality.
            </p>
            <DocsExample href="components/pagination#disabled-and-active-states">
              <CPagination aria-label="Page navigation example">
                <CPaginationItem aria-label="Previous" disabled>
                  <span aria-hidden="true">&laquo;</span>
                </CPaginationItem>
                <CPaginationItem active>1</CPaginationItem>
                <CPaginationItem>2</CPaginationItem>
                <CPaginationItem>3</CPaginationItem>
                <CPaginationItem aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </CPaginationItem>
              </CPagination>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Paginations
