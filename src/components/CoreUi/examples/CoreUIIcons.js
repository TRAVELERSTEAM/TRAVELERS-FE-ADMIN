import React from 'react'
import { CCol, CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import { freeSet } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { flagSet } from '@coreui/icons'

//"CoreUI Icons. CoreUI Icons package is delivered with more than 1500 icons in multiple formats SVG, PNG, and Webfonts. CoreUI Icons are beautifully crafted symbols for common actions and items. You can use them in your digital products for web or mobile app."
const CoreUIIcons = () => {
  const getIconsView = (iconset) => {
    return Object.entries(iconset).map(([name, value]) => (
      <CCol className="mb-5" xs={6} sm={4} md={3} xl={2} key={name}>
        <CIcon icon={value} size="xxl" />
        <div>{toKebabCase(name)}</div>
      </CCol>
    ))
  }

  const toKebabCase = (str) => {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Free Icons</CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(freeSet)}</CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardHeader>Flag Icons</CCardHeader>
        <CCardBody>
          <CRow className="text-center">{getIconsView(flagSet)}</CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIIcons
