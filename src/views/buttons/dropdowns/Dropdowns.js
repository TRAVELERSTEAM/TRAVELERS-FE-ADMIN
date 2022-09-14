import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Dropdowns = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>React Dropdown</strong> <small>Single button</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Opt into darker dropdowns to match a dark navbar or custom style by set{' '}
              <code>dark</code> property. No changes are required to the dropdown items.
            </p>
            <DocsExample href="components/dropdown#dark-dropdowns">
              <CDropdown dark>
                <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#">Action</CDropdownItem>
                  <CDropdownItem href="#">Another action</CDropdownItem>
                  <CDropdownItem href="#">Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#">Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </DocsExample>
            <p className="text-medium-emphasis small">And putting it to use in a navbar:</p>
            <DocsExample href="components/dropdown#dark-dropdowns">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <a className="navbar-brand" href="https://coreui.io/react/">
                    Navbar
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-coreui-toggle="collapse"
                    data-coreui-target="#navbarNavDarkDropdown"
                    aria-controls="navbarNavDarkDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav">
                      <CDropdown dark component="li" variant="nav-item">
                        <CDropdownToggle>Dropdown</CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem href="#">Action</CDropdownItem>
                          <CDropdownItem href="#">Another action</CDropdownItem>
                          <CDropdownItem href="#">Something else here</CDropdownItem>
                          <CDropdownDivider />
                          <CDropdownItem href="#">Separated link</CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </ul>
                  </div>
                </div>
              </nav>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Dropdowns
