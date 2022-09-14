import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormCheck,
  CListGroup,
  CListGroupItem,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const ListGroups = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React List Group</strong> <small>Checkboxes and radios</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Place CoreUI&#39;s checkboxes and radios within list group items and customize as
              needed.
            </p>
            <DocsExample href="components/list-group/#checkboxes-and-radios">
              <CListGroup>
                <CListGroupItem>
                  <CFormCheck label="Cras justo odio" />
                </CListGroupItem>
                <CListGroupItem>
                  <CFormCheck label="Dapibus ac facilisis in" defaultChecked />
                </CListGroupItem>
                <CListGroupItem>
                  <CFormCheck label="Morbi leo risus" defaultChecked />
                </CListGroupItem>
                <CListGroupItem>
                  <CFormCheck label="orta ac consectetur ac" />
                </CListGroupItem>
                <CListGroupItem>
                  <CFormCheck label="Vestibulum at eros" />
                </CListGroupItem>
              </CListGroup>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default ListGroups
