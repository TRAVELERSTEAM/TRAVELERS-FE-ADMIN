import React from 'react'
import { CCard, CCardBody, CCardHeader, CCarousel, CCarouselItem, CCol, CRow } from '@coreui/react'
import { DocsExample } from 'src/components'

import AngularImg from 'src/assets/angular.jpg'
import ReactImg from 'src/assets/react.jpg'
import VueImg from 'src/assets/vue.jpg'

const Carousels = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Carousel</strong> <small>With controls</small>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              Adding in the previous and next controls by <code>controls</code> property.
            </p>
            <DocsExample href="components/carousel/#with-controls">
              <CCarousel controls>
                <CCarouselItem>
                  <img className="d-block w-100" src={ReactImg} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={AngularImg} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={VueImg} alt="slide 3" />
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Carousels
